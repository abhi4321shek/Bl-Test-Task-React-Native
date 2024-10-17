import { StyleSheet, StatusBar, Dimensions } from "react-native";
import { horizontalScale, verticalScale, moderateScale } from "../../styleComponent/Metrices";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  Productstitle: {
    fontSize: 35,
    color: 'black',
    textAlign: 'center',
    padding: 8,
    fontWeight: 'bold',
    marginTop: 15
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rating: {
    fontSize: 16,
    marginBottom: 10,
  },
  stock: {
    fontSize: 16,
    marginBottom: 10,
  },
  brand: {
    fontSize: 16,
    marginBottom: 10,
  },
  category: {
    fontSize: 16,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 5,
  },
  productContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    marginVertical: 15,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  productPrice: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    backgroundColor: '#ff4d4d',
    padding: 10,
    borderRadius: 5,
  },
  quantityText: {
    color: '#fff',
  },
  quantityCount: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  notification: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    padding: 15,
    backgroundColor: '#87CEEB',
    alignItems: 'center',
    borderRadius: 5,
  },
  removeButton: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 5,
  },
});