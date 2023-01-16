import React from 'react'

const CheckOut = () => {
    return (
        <div>
            <section>
                <h1 className="sr-only">Checkout</h1>

                <div className="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2">
                    <div className="py-12 bg-gray-50 md:py-24">
                        <div className="max-w-lg px-4 mx-auto space-y-8 lg:px-8">
                            <div className="flex items-center">
                                <span className="w-10 h-10 bg-blue-700 rounded-full"></span>

                                <h2 className="ml-4 font-medium text-gray-900">BambooYou</h2>
                            </div>

                            <div>
                                <p className="text-2xl font-medium tracking-tight text-gray-900">
                                    $99.99
                                </p>

                                <p className="mt-1 text-sm text-gray-600">For the purchase of</p>
                            </div>

                            <div className="block overflow-hidden group">
                                <img
                                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                />

                                <div className="relative pt-3 bg-white">
                                    <h3
                                        className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                    >
                                        Basic Tee
                                    </h3>

                                    <p className="mt-2">
                                        <span className="sr-only"> Regular Price </span>

                                        <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="py-12 bg-white md:py-24">
                        <div className="max-w-lg px-4 mx-auto lg:px-8">
                            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-50 text-gray-800">
                                <h2 className="mb-3 text-3xl font-semibold text-center">Rohan Malo</h2>
                                <div className="flex items-center w-full my-4">
                                    <hr className="w-full text-gray-600"/>
                                        <hr className="w-full text-gray-600"/>
                                        </div>
                                        <form action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                                            <div className="space-y-4">
                                                <div className="space-y-2">
                                                    <label htmlFor="Address" className="block text-sm"> Address</label>
                                                    <input type="Address" name="Address" id="Address" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="phone" className="block text-sm"> Phone</label>
                                                    <input type="phone" name="phone" id="Address" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600" />
                                                </div>
                                                
                                            </div>
                                            <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-gray-50">Pay</button>
                                            <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-[#FF9F00] text-gray-50">Order</button>
                                        </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

        </div>
    )
}

export default CheckOut