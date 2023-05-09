import customFetch from '../../utils/axios';
export const getAllProductsThunk = async (_, thunkAPI) => {
  let url = `/products?sort=a-z`;
  try {
    const {
      data: { allProducts, count, numOfPages },
    } = await customFetch.get(url);
    const featuredProducts = allProducts.filter(val => val.featured);
    const prices = allProducts.map(product => product.price);
    const maxPrice = Math.max(...prices);
    const minPrice = Math.min(...prices);

    return {
      allProducts,
      featuredProducts,
      count,
      numOfPages,
      minPrice,
      maxPrice,
    };
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
