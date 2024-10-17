export const LoginValidation = (LoginEmail, LoginPassword, Email, Password) => {
    let errors = {};

    if (!LoginEmail) {
        errors.LoginEmail = "Email is Required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(LoginEmail)) {
        errors.LoginEmail = "Invalid email format.";
    }
    if (!LoginPassword) {
        errors.LoginPassword = "Password is Required.";
    } else if (LoginPassword.length < 8) {
        errors.LoginPassword = "Password must be at least 8 characters long.";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/.test(LoginPassword)) {
        errors.LoginPassword = "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    }
    if (LoginEmail && LoginPassword && (LoginEmail !== Email || LoginPassword !== Password)) {
        console.log("object");
        errors.Emailerror = "Invalid UserName or Password.";
    }

    return errors;
};