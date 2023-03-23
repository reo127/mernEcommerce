import React from 'react';
import { useGetOrdersQuery } from '../reduxToolKit/services/userAPI';

const AdminOrders = () => {
    const { data} = useGetOrdersQuery()
    console.log(data);
    return (
        <div>
            <div>
                <div className="">
                    <fieldset className="w-full space-y-1 text-gray-800 flex justify-center">
                        <label htmlFor="Search" className="hidden">Search</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                                    <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-gray-800">
                                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                    </svg>
                                </button>
                            </span>
                            <input type="search" name="Search" placeholder="Search..." className="w-32 min-w-[20rem] py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50 focus:border-blue-600" />
                        </div>
                    </fieldset>

                    <section className="text-gray-600 body-font">
                        <div className="container px-5 lg:px-16 py-24 lg:py-16 mx-auto  ">
                            <div className="flex flex-wrap -m-4 ease-in-out cursor-pointer ">

                                {data ? data.orders.map((orders, i) => {
                                    return (
                                        <div className="lg:w-1/4 sm:w-1/2 p-4 w-full hover:shadow-customShadow ease-in-out rounded-lg" key={i}>
                                            <div className="mt-4">
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"> {orders.catagory}</h3>
                                                <h2 className="text-gray-900 title-font text-lg font-medium"> {orders.productName} </h2>
                                                <p className="mt-1"> {orders.userName}</p>
                                                <p className="mt-1">{orders.amount}</p>
                                                <p className="mt-1">+91 {orders.phoneNumber}</p>
                                                <p className="mt-1"> 54rohanmalo@gmail.com </p>
                                                <p className="mt-1">{orders.address} - {orders.state} - {orders.zip}</p>
                                                <span className="rounded bg-red-400 py-1 px-3 text-xs font-bold uppercase">{orders.status}</span>
                                                <p className="mt-1"> {orders.createdAt} </p>
                                            </div>
                                        </div>
                                    )
                                }) : "no data"}

                            </div>
                        </div>
                    </section>
                </div>

                <div className="flex justify-center space-x-1 text-gray-800 mb-12">
                    <button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-50 border-gray-100">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <button type="button" title="Page 1" className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md bg-gray-50 text-blue-600 border-blue-600">1</button>
                    <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-gray-50 border-gray-100" title="Page 2">2</button>
                    <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-gray-50 border-gray-100" title="Page 3">3</button>
                    <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-gray-50 border-gray-100" title="Page 4">4</button>
                    <button title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-50 border-gray-100">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdminOrders