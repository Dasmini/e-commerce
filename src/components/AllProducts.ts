export type Item = {
    id: number;
    image: string;
    category: string;
    productName: string;
    price: number;
    isWishlisted: boolean;
  };

export let productData: Item[] = [
    { id: 1, image: "/product.jpg", category: "Wall Decor", productName: "Frame Decor", price: 250, isWishlisted: false },
    { id: 2, image: "/product2.jpg", category: "Wall Decor", productName: "Round Frame Decor ", price: 300, isWishlisted: false },
    { id: 3, image: "/product3.jpg", category: "Table Decor", productName: "Life in light", price: 600, isWishlisted: false },
    { id: 4, image: "/product4.jpg", category: "Christmas Decor", productName: "Cresent Deer", price: 650, isWishlisted: false },
    { id: 5, image: "/product5.jpg", category: "Christmas Decor", productName: "Thread snow globe ", price: 500, isWishlisted: false },
    { id: 6, image: "/product6.jpg", category: "Door Decor", productName: "Wreath", price: 400, isWishlisted: false },
];

// export const updateProductData = (updatedData : Item[]) => {
//     productData = updatedData;
// }

export const updateProductData = (updatedDetails: Item[]) => {
    productData = updatedDetails;
    // Trigger a re-render or update component state if needed
  };