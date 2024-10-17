export const SignupValidation = (name, email, password, address, mobile, selectedValue) => {
    let errors = {};

    if (!name) errors.name = "Name is Required.";
    if (!email) {
        errors.email = "Email is Required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = "Invalid email format.";
    }
    if (!password) {
        errors.password = "Password is Required.";
    } else if (password.length < 8) {
        errors.password = "Password must be at least 8 characters long.";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/.test(password)) {
        errors.password = "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    }
    if (!address) errors.address = "Address is Required.";
    if (!selectedValue) errors.selectedValue = "Gender is Required.";
    if (!mobile) {
        errors.mobile = "Mobile number is Required.";
    } else if (!/^\d{10}$/.test(mobile)) {
        errors.mobile = "Mobile number must be 10 digits.";
    }
    return errors;
};