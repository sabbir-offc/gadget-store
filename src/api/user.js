import { axiosSecure } from "../hook/useAxios"

//add product into user cart
export const addToCart = async (cartProduct) => {
    const { data } = await axiosSecure.post(`/user-cart`, cartProduct)
    return data
}
export const deleteProductFromCart = async (id) => {
    const { data } = await axiosSecure.delete(`/user-cart/${id}`)
    return data;
}
