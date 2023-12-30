import { axiosSecure } from "../hook/useAxios"

//get all products
export const getAllProducts = async (currentPage, itemPerPage) => {
    if (currentPage || itemPerPage) {
        const { data } = await axiosSecure(`/products?page=${currentPage}&size=${itemPerPage}`);
        return data;
    } else {
        const { data } = await axiosSecure(`/products`);
        return data;
    }
}

//get single product data;
export const getProduct = async (id) => {
    const { data } = await axiosSecure(`/products/${id}`);
    return data
}

//update product details
export const updateProduct = async (id, info) => {
    const { data } = await axiosSecure.put(`/products/${id}`, info);
    return data
}

//delete single product 
export const deleteProduct = async (id) => {
    const { data } = await axiosSecure.delete(`/product/delete/${id}`)
    return data;
}

