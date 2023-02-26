
import React from 'react';
import { Link } from 'react-router-dom';



const Product = () => {




    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-16 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">APPLE</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Iphone 14 pro max</h1>
                            <div className="flex mb-4">


                            </div>
                            <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>

                            <div className="flex mt-12">
                                <span className="mr-4 title-font font-medium text-2xl text-gray-900">$58.00</span>
                                <div className='flex items-center justify-center'>
                                    <Link to='/checkout'><button className="flex  ml-auto mx-2 text-white bg-[#FF9F00] border-0 py-2 px-6 focus:outline-none hover:bg-[#ffac27] rounded font-bold">BUY</button></Link>
                                    <button className="flex  ml-auto mx-2 text-white bg-[#FF9F00] border-0 py-2 px-6 focus:outline-none hover:bg-[#ffac27] rounded font-bold">ADD TO CART</button>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default Product