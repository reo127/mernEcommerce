import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userAPI = createApi({
    
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({baseUrl : 'https://lucky-pike-tux.cyclic.app/api/'}),
    endpoints: (builder ) => ({
        signUp: builder.mutation({
            query: (bodyData) => {
                console.log(bodyData)
                return{
                    url: "auth/signup",
                    method: "POST",
                    body: bodyData,
                    headers: { "Content-Type": "application/json" }
                }
            }
        }),
        getAllProduct: builder.query({
            query: () => {
                return{
                    url: "products/getallproducts",
                    method: "get"
                }
            }
        })
        
    })
})

export const {useSignUpMutation, useGetAllProductQuery} = userAPI;