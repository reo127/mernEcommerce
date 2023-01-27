import React from 'react';
import profileImage from "../assets/images/user.png";
import { useGetProfileQuery } from '../reduxToolKit/services/userAPI';

const Profile = () => {
    const {data, isSuccess} = useGetProfileQuery()
    console.log(data);
    return (
        <div>
            <section className="p-6 bg-gray-100 text-gray-900 lg:h-[73vh] flex items-center">
                <form action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-[#9ebbff]">
                        <div className="space-y-2 col-span-full lg:col-span-1 flex items-center justify-center flex-col">
                            <img src={profileImage} alt="user" className='w-20' />
                            <p className='font-bold font-mono'>Rohan Malo</p>
                            <p className='font-bold font-mono'>64rohanmalo@gmail.com</p>
                            <p className='font-bold font-mono'>+91 6289038527</p>
                            <p className='font-bold font-mono text-center'> Majhacher kalyani nadia nare shottopriyo high school</p>
                            <p className='font-bold font-mono text-center'> Kalyani</p>
                            <p className='font-bold font-mono text-center'> West Bengal</p>
                            <p className='font-bold font-mono text-center'> ZIP : 123456</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">First name</label>
                                <input id="firstname" type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-600 outline-none p-2 border-gray-300 text-gray-900"/>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm">Last name</label>
                                <input id="lastname" type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-600 border-gray-300 outline-none p-2 text-gray-900"/>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-600 border-gray-300 outline-none p-2 text-gray-900"/>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">phone</label>
                                <input id="firstname" type="number" placeholder="Phone Number" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-600 outline-none p-2 border-gray-300 text-gray-900"/>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm">Address</label>
                                <input id="address" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-600 border-gray-300 outline-none p-2 text-gray-900"/>
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-sm">City</label>
                                <input id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-600 border-gray-300 outline-none p-2 text-gray-900"/>
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="state" className="text-sm">State / Province</label>
                                <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-600 border-gray-300 outline-none p-2 text-gray-900"/>
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                                <input id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 outline-none p-2 focus:ring-blue-600 border-gray-300 text-gray-900"/>
                            </div>
                        <button className="min-w-[8rem]  items-center bg-[#FF9F00] font-bold  border-0  py-1 px-3 focus:outline-none hover:bg-[#f39600] rounded text-base mt-4 md:mt-0 text-center"> Eadit Address </button>
                        </div>
                    </fieldset>

                </form>
            </section>
        </div>
    )
}

export default Profile