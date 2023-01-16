import React from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
    return (
        <div>
            <section>
                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                    <header>
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                            Product Collection
                        </h2>
                        <p className="max-w-md mt-4 text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                            praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
                            natus?
                        </p>
                    </header>
                    <div className="mt-8">
                        <p className="text-sm text-right text-gray-500">
                            Showing <span> 4 </span> of 40
                        </p>
                    </div>




                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-wrap -m-4 ease-in-out">
                                <Link to='/product' className="lg:w-1/4 sm:w-1/2 p-4 w-full hover:shadow-customShadow ease-in-out">
                                    <div className="block relative h-48 rounded overflow-hidden" >
                                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                        <p className="mt-1">$16.00</p>
                                    </div>
                                </Link>
                                <Link to='/product' className="lg:w-1/4 sm:w-1/2 p-4 w-full hover:shadow-customShadow ease-in-out">
                                    <div className="block relative h-48 rounded overflow-hidden" >
                                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                        <p className="mt-1">$16.00</p>
                                    </div>
                                </Link>
                                <Link to='/product' className="lg:w-1/4 sm:w-1/2 p-4 w-full hover:shadow-customShadow ease-in-out">
                                    <div className="block relative h-48 rounded overflow-hidden" >
                                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                        <p className="mt-1">$16.00</p>
                                    </div>
                                </Link>
                                <Link to='/product' className="lg:w-1/4 sm:w-1/2 p-4 w-full hover:shadow-customShadow ease-in-out">
                                    <div className="block relative h-48 rounded overflow-hidden" >
                                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                        <p className="mt-1">$16.00</p>
                                    </div>
                                </Link>
                                <Link to='/product' className="lg:w-1/4 sm:w-1/2 p-4 w-full hover:shadow-customShadow ease-in-out">
                                    <div className="block relative h-48 rounded overflow-hidden" >
                                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                        <p className="mt-1">$16.00</p>
                                    </div>
                                </Link>
                                <Link to='/product' className="lg:w-1/4 sm:w-1/2 p-4 w-full hover:shadow-customShadow ease-in-out">
                                    <div className="block relative h-48 rounded overflow-hidden" >
                                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                        <p className="mt-1">$16.00</p>
                                    </div>
                                </Link>






                            </div>
                        </div>
                    </section>
                    <ol className="flex justify-center gap-1 mt-8 text-xs font-medium">
                        <li>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded"
                            >
                                <span className="sr-only">Prev Page</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-3 h-3"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="block w-8 h-8 leading-8 text-center border border-gray-100 rounded"
                            >
                                1
                            </a>
                        </li>

                        <li
                            className="block w-8 h-8 leading-8 text-center text-white bg-gray-900 border-gray-900 rounded"
                        >
                            2
                        </li>

                        <li>
                            <a
                                href="#"
                                className="block w-8 h-8 leading-8 text-center border border-gray-100 rounded"
                            >
                                3
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="block w-8 h-8 leading-8 text-center border border-gray-100 rounded"
                            >
                                4
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded"
                            >
                                <span className="sr-only">Next Page</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-3 h-3"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ol>
                </div>
            </section>


        </div>
    )
}

export default Search