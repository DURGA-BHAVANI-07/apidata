async function getFilteredProducts() {
  try {
    
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const products = await response.json();

    const filteredProducts = products.filter(
      (product) => product.rating?.rate > 3.5 && product.price > 200
    );

    console.log("Filtered Products:", filteredProducts);
    return filteredProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

getFilteredProducts();
