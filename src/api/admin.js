

//upload image

import { axiosSecure } from "../hook/useAxios"

//get all products
export const getAllProducts = async () => {
    const { data } = await axiosSecure('/products');
    return data;
}

//get single product data;
export const getProduct = async (id) => {
    const { data } = await axiosSecure(`/products/${id}`);
    return data
}