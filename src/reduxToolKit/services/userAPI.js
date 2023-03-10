import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userAPI = createApi({

    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
    endpoints: (builder) => ({

        signUp: builder.mutation({
            query: (bodyData) => {
                console.log(bodyData)
                return {
                    url: "auth/signup",
                    method: "POST",
                    body: bodyData,
                    headers: { "Content-Type": "application/json" }
                }
            }
        }),
        signIn: builder.mutation({
            query: (bodyData) => {
                console.log(bodyData)
                return {
                    url: "auth/signin",
                    method: "POST",
                    body: bodyData,
                    headers: { "Content-Type": "application/json" },
                    credentials: "include"
                }
            }
        }),
        logout: builder.mutation({
            query: () => {
                return {
                    url: "auth/logout",
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include"
                }
            }
        }),
        addProduct: builder.mutation({
            query: (formData) => {
                // console.log(Array.from(formData));
                // console.log(formData);
                return {
                    url: "admin/addproduct",
                    method: "POST",
                    body: formData,
                    // headers: { "Content-Type": "application/json"},
                    // headers: { "Content-Type": 'multipart/form-data; boundary=----WebKitFormBoundaryLfa65tIqD1Ya5NFF'},
                    // headers: { 'content-type': 'multipart/form-data; boundary=--------------------------497755607558509593530804'},
                    credentials: "include",
                    redirect: 'follow'
                }
            }
        }),
        getProduct: builder.query({
            query: (productId) => {
                console.log(productId);
                return {
                    url: `product/${productId}`,
                    method: "get",
                }
            }
        }),
        getAllProduct: builder.query({
            query: () => {
                return {
                    url: "products/getallproducts",
                    method: "get",
                }
            }
        }),
        getProductByCatagory: builder.query({
            query: (catagoryName) => {
                console.log(catagoryName);
                return {
                    url: `products/${catagoryName}`,
                    method: "get",
                }
            }
        }),
        getProfile: builder.query({
            query: () => {
                return {
                    url: "auth/profile",
                    method: "get",
                    headers: { "Content-Type": "application/json" },
                    credentials: 'include',
                }
            }
        }),

    })
})

export const { useSignUpMutation, useSignInMutation, useLogoutMutation, useAddProductMutation, useGetAllProductQuery, useGetProfileQuery, useGetProductByCatagoryQuery, useGetProductQuery } = userAPI;