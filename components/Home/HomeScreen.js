import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from "@react-navigation/native";
import { styles } from './HomeScreenStyle';
import { Add_To_Cart, Remove_From_Cart } from '../Redux/AddToCartSlice';
import Pagination from '../../styleComponent/Pagination';

const products = [
  {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 2,
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 899,
    "discountPercentage": 17.94,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 3,
    "title": "Samsung Universe 9",
    "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
    "price": 1249,
    "discountPercentage": 15.46,
    "rating": 4.09,
    "stock": 36,
    "brand": "Samsung",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 4,
    "title": "OPPOF19",
    "description": "OPPO F19 is officially announced on April 2021.",
    "price": 280,
    "discountPercentage": 17.91,
    "rating": 4.3,
    "stock": 123,
    "brand": "OPPO",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 5,
    "title": "Huawei P30",
    "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    "price": 499,
    "discountPercentage": 10.58,
    "rating": 4.09,
    "stock": 32,
    "brand": "Huawei",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 6,
    "title": "MacBook Pro",
    "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
    "price": 1749,
    "discountPercentage": 11.02,
    "rating": 4.57,
    "stock": 83,
    "brand": "Apple",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
    "images": [
      null
    ]
  },
  {
    "id": 7,
    "title": "Samsung Galaxy Book",
    "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    "price": 1499,
    "discountPercentage": 4.15,
    "rating": 4.25,
    "stock": 50,
    "brand": "Samsung",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 8,
    "title": "Microsoft Surface Laptop 4",
    "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    "price": 1499,
    "discountPercentage": 10.23,
    "rating": 4.43,
    "stock": 68,
    "brand": "Microsoft Surface",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 9,
    "title": "Infinix INBOOK",
    "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    "price": 1099,
    "discountPercentage": 11.83,
    "rating": 4.54,
    "stock": 96,
    "brand": "Infinix",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 10,
    "title": "HP Pavilion 15-DK1056WM",
    "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    "price": 1099,
    "discountPercentage": 6.18,
    "rating": 4.43,
    "stock": 89,
    "brand": "HP Pavilion",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
    "images": [
      null
    ]
  },
  {
    "id": 11,
    "title": "perfume Oil",
    "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
    "price": 13,
    "discountPercentage": 8.4,
    "rating": 4.26,
    "stock": 65,
    "brand": "Impression of Acqua Di Gio",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 12,
    "title": "Brown Perfume",
    "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
    "price": 40,
    "discountPercentage": 15.66,
    "rating": 4,
    "stock": 52,
    "brand": "Royal_Mirage",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 13,
    "title": "Fog Scent Xpressio Perfume",
    "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
    "price": 13,
    "discountPercentage": 8.14,
    "rating": 4.59,
    "stock": 61,
    "brand": "Fog Scent Xpressio",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/13/thumbnail.webp",
    "images": [
      null
    ]
  },
  {
    "id": 14,
    "title": "Non-Alcoholic Concentrated Perfume Oil",
    "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
    "price": 120,
    "discountPercentage": 15.6,
    "rating": 4.21,
    "stock": 114,
    "brand": "Al Munakh",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 15,
    "title": "Eau De Perfume Spray",
    "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
    "price": 30,
    "discountPercentage": 10.99,
    "rating": 4.7,
    "stock": 105,
    "brand": "Lord - Al-Rehab",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 16,
    "title": "Hyaluronic Acid Serum",
    "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
    "price": 19,
    "discountPercentage": 13.31,
    "rating": 4.83,
    "stock": 110,
    "brand": "L'Oreal Paris",
    "category": "skincare",
    "thumbnail": "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 17,
    "title": "Tree Oil 30ml",
    "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
    "price": 12,
    "discountPercentage": 4.09,
    "rating": 4.52,
    "stock": 78,
    "brand": "Hemani Tea",
    "category": "skincare",
    "thumbnail": "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 18,
    "title": "Oil Free Moisturizer 100ml",
    "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
    "price": 40,
    "discountPercentage": 13.1,
    "rating": 4.56,
    "stock": 88,
    "brand": "Dermive",
    "category": "skincare",
    "thumbnail": "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 19,
    "title": "Skin Beauty Serum.",
    "description": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
    "price": 46,
    "discountPercentage": 10.68,
    "rating": 4.42,
    "stock": 54,
    "brand": "ROREC White Rice",
    "category": "skincare",
    "thumbnail": "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 20,
    "title": "Freckle Treatment Cream- 15gm",
    "description": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
    "price": 70,
    "discountPercentage": 16.99,
    "rating": 4.06,
    "stock": 140,
    "brand": "Fair & Clear",
    "category": "skincare",
    "thumbnail": "https://i.dummyjson.com/data/products/20/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 21,
    "title": "- Daal Masoor 500 grams",
    "description": "Fine quality Branded Product Keep in a cool and dry place",
    "price": 20,
    "discountPercentage": 4.81,
    "rating": 4.44,
    "stock": 133,
    "brand": "Saaf & Khaas",
    "category": "groceries",
    "thumbnail": "https://i.dummyjson.com/data/products/21/thumbnail.png",
    "images": [
      null
    ]
  },
  {
    "id": 22,
    "title": "Elbow Macaroni - 400 gm",
    "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
    "price": 14,
    "discountPercentage": 15.58,
    "rating": 4.57,
    "stock": 146,
    "brand": "Bake Parlor Big",
    "category": "groceries",
    "thumbnail": "https://i.dummyjson.com/data/products/22/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 23,
    "title": "Orange Essence Food Flavou",
    "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
    "price": 14,
    "discountPercentage": 8.04,
    "rating": 4.85,
    "stock": 26,
    "brand": "Baking Food Items",
    "category": "groceries",
    "thumbnail": "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 24,
    "title": "cereals muesli fruit nuts",
    "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
    "price": 46,
    "discountPercentage": 16.8,
    "rating": 4.94,
    "stock": 113,
    "brand": "fauji",
    "category": "groceries",
    "thumbnail": "https://i.dummyjson.com/data/products/24/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 25,
    "title": "Gulab Powder 50 Gram",
    "description": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
    "price": 70,
    "discountPercentage": 13.58,
    "rating": 4.87,
    "stock": 47,
    "brand": "Dry Rose",
    "category": "groceries",
    "thumbnail": "https://i.dummyjson.com/data/products/25/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 26,
    "title": "Plant Hanger For Home",
    "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
    "price": 41,
    "discountPercentage": 17.86,
    "rating": 4.08,
    "stock": 131,
    "brand": "Boho Decor",
    "category": "home-decoration",
    "thumbnail": "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 27,
    "title": "Flying Wooden Bird",
    "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
    "price": 51,
    "discountPercentage": 15.58,
    "rating": 4.41,
    "stock": 17,
    "brand": "Flying Wooden",
    "category": "home-decoration",
    "thumbnail": "https://i.dummyjson.com/data/products/27/thumbnail.webp",
    "images": [
      null
    ]
  },
  {
    "id": 28,
    "title": "3D Embellishment Art Lamp",
    "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
    "price": 20,
    "discountPercentage": 16.49,
    "rating": 4.82,
    "stock": 54,
    "brand": "LED Lights",
    "category": "home-decoration",
    "thumbnail": "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 29,
    "title": "Handcraft Chinese style",
    "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
    "price": 60,
    "discountPercentage": 15.34,
    "rating": 4.44,
    "stock": 7,
    "brand": "luxury palace",
    "category": "home-decoration",
    "thumbnail": "https://i.dummyjson.com/data/products/29/thumbnail.webp",
    "images": [
      null
    ]
  },
  {
    "id": 30,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 31,
    "title": "Mornadi Velvet Bed",
    "description": "Mornadi Velvet Bed Base with Headboard Slats Support Classic StyleBedroom Furniture Bed Set",
    "price": 40,
    "discountPercentage": 17,
    "rating": 4.16,
    "stock": 140,
    "brand": "Furniture Bed Set",
    "category": "furniture",
    "thumbnail": "https://i.dummyjson.com/data/products/31/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 32,
    "title": "Sofa for Coffe Cafe",
    "description": "Ratttan Outdoor furniture Set Waterproof  Rattan Sofa for Coffe Cafe",
    "price": 50,
    "discountPercentage": 15.59,
    "rating": 4.74,
    "stock": 30,
    "brand": "Ratttan Outdoor",
    "category": "furniture",
    "thumbnail": "https://i.dummyjson.com/data/products/32/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 33,
    "title": "3 Tier Corner Shelves",
    "description": "3 Tier Corner Shelves | 3 PCs Wall Mount Kitchen Shelf | Floating Bedroom Shelf",
    "price": 700,
    "discountPercentage": 17,
    "rating": 4.31,
    "stock": 106,
    "brand": "Kitchen Shelf",
    "category": "furniture",
    "thumbnail": "https://i.dummyjson.com/data/products/33/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 34,
    "title": "Plastic Table",
    "description": "V﻿ery good quality plastic table for multi purpose now in reasonable price",
    "price": 50,
    "discountPercentage": 4,
    "rating": 4.01,
    "stock": 136,
    "brand": "Multi Purpose",
    "category": "furniture",
    "thumbnail": "https://i.dummyjson.com/data/products/34/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 35,
    "title": "3 DOOR PORTABLE",
    "description": "Material: Stainless Steel and Fabric  Item Size: 110 cm x 45 cm x 175 cm Package Contents: 1 Storage Wardrobe",
    "price": 41,
    "discountPercentage": 7.98,
    "rating": 4.06,
    "stock": 68,
    "brand": "AmnaMart",
    "category": "furniture",
    "thumbnail": "https://i.dummyjson.com/data/products/35/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 36,
    "title": "Sleeve Shirt Womens",
    "description": "Cotton Solid Color Professional Wear Sleeve Shirt Womens Work Blouses Wholesale Clothing Casual Plain Custom Top OEM Customized",
    "price": 90,
    "discountPercentage": 10.89,
    "rating": 4.26,
    "stock": 39,
    "brand": "Professional Wear",
    "category": "tops",
    "thumbnail": "https://i.dummyjson.com/data/products/36/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 37,
    "title": "ank Tops for Womens/Girls",
    "description": "PACK OF 3 CAMISOLES ,VERY COMFORTABLE SOFT COTTON STUFF, COMFORTABLE IN ALL FOUR SEASONS",
    "price": 50,
    "discountPercentage": 12.05,
    "rating": 4.52,
    "stock": 107,
    "brand": "Soft Cotton",
    "category": "tops",
    "thumbnail": "https://i.dummyjson.com/data/products/37/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 38,
    "title": "sublimation plain kids tank",
    "description": "sublimation plain kids tank tops wholesale",
    "price": 100,
    "discountPercentage": 11.12,
    "rating": 4.8,
    "stock": 20,
    "brand": "Soft Cotton",
    "category": "tops",
    "thumbnail": "https://i.dummyjson.com/data/products/38/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 39,
    "title": "Women Sweaters Wool",
    "description": "2021 Custom Winter Fall Zebra Knit Crop Top Women Sweaters Wool Mohair Cos Customize Crew Neck Women' S Crop Top Sweater",
    "price": 600,
    "discountPercentage": 17.2,
    "rating": 4.55,
    "stock": 55,
    "brand": "Top Sweater",
    "category": "tops",
    "thumbnail": "https://i.dummyjson.com/data/products/39/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 40,
    "title": "women winter clothes",
    "description": "women winter clothes thick fleece hoodie top with sweat pantjogger women sweatsuit set joggers pants two piece pants set",
    "price": 57,
    "discountPercentage": 13.39,
    "rating": 4.91,
    "stock": 84,
    "brand": "Top Sweater",
    "category": "tops",
    "thumbnail": "https://i.dummyjson.com/data/products/40/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 41,
    "title": "NIGHT SUIT",
    "description": "NIGHT SUIT RED MICKY MOUSE..  For Girls. Fantastic Suits.",
    "price": 55,
    "discountPercentage": 15.05,
    "rating": 4.65,
    "stock": 21,
    "brand": "RED MICKY MOUSE..",
    "category": "womens-dresses",
    "thumbnail": "https://i.dummyjson.com/data/products/41/thumbnail.webp",
    "images": [
      null
    ]
  },
  {
    "id": 42,
    "title": "Stiched Kurta plus trouser",
    "description": "FABRIC: LILEIN CHEST: 21 LENGHT: 37 TROUSER: (38) :ARABIC LILEIN",
    "price": 80,
    "discountPercentage": 15.37,
    "rating": 4.05,
    "stock": 148,
    "brand": "Digital Printed",
    "category": "womens-dresses",
    "thumbnail": "https://i.dummyjson.com/data/products/42/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 43,
    "title": "frock gold printed",
    "description": "Ghazi fabric long frock gold printed ready to wear stitched collection (G992)",
    "price": 600,
    "discountPercentage": 15.55,
    "rating": 4.31,
    "stock": 150,
    "brand": "Ghazi Fabric",
    "category": "womens-dresses",
    "thumbnail": "https://i.dummyjson.com/data/products/43/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 44,
    "title": "Ladies Multicolored Dress",
    "description": "This classy shirt for women gives you a gorgeous look on everyday wear and specially for semi-casual wears.",
    "price": 79,
    "discountPercentage": 16.88,
    "rating": 4.03,
    "stock": 2,
    "brand": "Ghazi Fabric",
    "category": "womens-dresses",
    "thumbnail": "https://i.dummyjson.com/data/products/44/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 45,
    "title": "Malai Maxi Dress",
    "description": "Ready to wear, Unique design according to modern standard fashion, Best fitting ,Imported stuff",
    "price": 50,
    "discountPercentage": 5.07,
    "rating": 4.67,
    "stock": 96,
    "brand": "IELGY",
    "category": "womens-dresses",
    "thumbnail": "https://i.dummyjson.com/data/products/45/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 46,
    "title": "women's shoes",
    "description": "Close: Lace, Style with bottom: Increased inside, Sole Material: Rubber",
    "price": 40,
    "discountPercentage": 16.96,
    "rating": 4.14,
    "stock": 72,
    "brand": "IELGY fashion",
    "category": "womens-shoes",
    "thumbnail": "https://i.dummyjson.com/data/products/46/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 47,
    "title": "Sneaker shoes",
    "description": "Synthetic Leather Casual Sneaker shoes for Women/girls Sneakers For Women",
    "price": 120,
    "discountPercentage": 10.37,
    "rating": 4.19,
    "stock": 50,
    "brand": "Synthetic Leather",
    "category": "womens-shoes",
    "thumbnail": "https://i.dummyjson.com/data/products/47/thumbnail.jpeg",
    "images": [
      null
    ]
  },
  {
    "id": 48,
    "title": "Women Strip Heel",
    "description": "Features: Flip-flops, Mid Heel, Comfortable, Striped Heel, Antiskid, Striped",
    "price": 40,
    "discountPercentage": 10.83,
    "rating": 4.02,
    "stock": 25,
    "brand": "Sandals Flip Flops",
    "category": "womens-shoes",
    "thumbnail": "https://i.dummyjson.com/data/products/48/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 49,
    "title": "Chappals & Shoe Ladies Metallic",
    "description": "Womens Chappals & Shoe Ladies Metallic Tong Thong Sandal Flat Summer 2020 Maasai Sandals",
    "price": 23,
    "discountPercentage": 2.62,
    "rating": 4.72,
    "stock": 107,
    "brand": "Maasai Sandals",
    "category": "womens-shoes",
    "thumbnail": "https://i.dummyjson.com/data/products/49/thumbnail.jpg",
    "images": [
      null
    ]
  },
  {
    "id": 50,
    "title": "Women Shoes",
    "description": "2020 New Arrivals Genuine Leather Fashion Trend Platform Summer Women Shoes",
    "price": 36,
    "discountPercentage": 16.87,
    "rating": 4.33,
    "stock": 46,
    "brand": "Arrivals Genuine",
    "category": "womens-shoes",
    "thumbnail": "https://i.dummyjson.com/data/products/50/thumbnail.jpg",
    "images": [
      null
    ]
  }
];

export default function HomeScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(10);
  const [cartNotification, setCartNotification] = useState(null);
  const [quantities, setQuantities] = useState({});
  const onPageChange = (selected) => {
    setPageNumber(selected);
  };

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / pageSize);
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentProducts = products.slice(startIndex, endIndex);

  const handleAddToCart = (item) => {
    const newQuantity = (quantities[item.id] || 0) + 1;
    setQuantities((prev) => ({ ...prev, [item.id]: newQuantity }));
    dispatch(Add_To_Cart(item));
    const totalCount = Object.values(quantities).reduce((sum, qty) => sum + qty, 0) + 1;
    setCartNotification({ count: totalCount });
  };

  const handleRemoveFromCart = (item) => {
    const newQuantity = (quantities[item.id] || 0) - 1;
    const updatedQuantities = { ...quantities };
    if (newQuantity <= 0) {
      delete updatedQuantities[item.id];
      dispatch(Remove_From_Cart(item.id));
    } else {
      updatedQuantities[item.id] = newQuantity;
      dispatch(Remove_From_Cart(item.id));
    }
    setQuantities(updatedQuantities);
    const totalCount = Object.values(updatedQuantities).reduce((sum, qty) => sum + qty, 0);
    setCartNotification({ title: item.title, count: totalCount });
  };

  const renderProduct = ({ item }) => {
    const currentQuantity = quantities[item.id] || 0;
    return (
      <View style={styles.productContainer}>
        <Image source={{ uri: item.thumbnail }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>Price: &#8377;{item.price.toFixed(2)}</Text>
        <Text style={styles.brand}>Brand: {item.brand}</Text>
        <Text style={styles.category}>Category: {item.category}</Text>
        <View style={styles.row}>
          <Text style={styles.rating}>Rating: {item.rating}</Text>
          <Text style={styles.stock}>Stock: {item.stock}</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.quantityContainer}>
          {currentQuantity > 0 ? (
            <>
              <View style={styles.row}>
                <TouchableOpacity onPress={() => handleRemoveFromCart(item)} style={styles.quantityButton}>
                  <Text style={styles.quantityText}>Remove from Cart</Text>
                </TouchableOpacity>
                <Text style={styles.quantityCount}>{currentQuantity}</Text>
                <TouchableOpacity onPress={() => handleAddToCart(item)} style={styles.addButton}>
                  <Text style={styles.addButtonText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <TouchableOpacity onPress={() => handleAddToCart(item)} style={styles.addButton}>
              <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Productstitle}>Products</Text>
      <Pagination
        totalItems={totalProducts}
        pageSize={pageSize}
        currentPage={pageNumber}
        onPageChange={onPageChange}
      />
      <FlatList
        data={currentProducts}
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      {cartNotification && cartNotification.count > 0 && (
        <TouchableOpacity onPress={() => navigation.navigate('Checkout')} style={styles.notification}>
          <Text>added to cart! Total items: {cartNotification.count}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
