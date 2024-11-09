"use client";
import NavBar from "@/components/navbar";
import scarf from "../assets/scarf.png";
import blouse from "../assets/blouse.png";
import pin from "../assets/pin.png";
import short from "../assets/short.png";
import Image from 'next/image';



export default function Home() {

    return (
        <div>
            <NavBar />
            <section id="about">
                <div className="d-block text-center">
                    <h1 className="title">GIRLS SCOUTS OF THE PHILIPPINES - LEYTE</h1>
                    <p className="descript">The GSP Program provides space for a girl to maximize her fullest potential to become a responsible and productive member of society.</p>
                    <a href="#membership">
                        <button type="button" className="buttons-white">Be a Member</button>
                    </a>

                </div>
            </section>
            <section id="uniforms">
                <div className="text-center">
                    <h1 className="title text-green-600 pt-20">UNIFORMS AND ITEMS</h1>
                </div>
                <div className="uni_holder">
                    <div className="grid grid-cols-4 gap-4 p-10">
                        <div class="item-card m-5 w-80 max-w-sm bg-white rounded-2xl dark:bg-gray-300">
                            <a href="#">
                                <Image class="w-full  rounded-2xl bg-gray-200" src={scarf} alt="product image" />
                            </a>
                            <div class="px-5 pb-5 pt-5">
                                <a href="#">
                                    <h5 class="text-xs pb-1 tracking-tight text-gray-900 dark:text-black">Available Colors:</h5>
                                    <div className="pb-3">
                                        <span class="bg-yellow-100 me-2 px-3 rounded-full dark:bg-yellow-500"></span>
                                        <span class="bg-red-100 me-2 px-3 rounded-full dark:bg-red-400"></span>
                                        <span class="bg-red-100 me-2 px-3 rounded-full dark:bg-red-500"></span>
                                        <span class="bg-yellow-100 me-2 px-3 rounded-full dark:bg-yellow-400"></span>
                                        <span class="bg-green-100 me-2 px-3 rounded-full dark:bg-green-900"></span>
                                    </div>
                                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">Girl Scouts Scarfs</h5>
                                    <h5 class="text-sm tracking-tight text-gray-900 dark:text-black">Price: Php 75.00</h5>
                                </a>
                            </div>
                        </div>
                        <div class="item-card m-5 w-80 max-w-sm bg-white rounded-2xl  dark:bg-gray-300 ">
                            <a href="#">
                                <Image class="w-full rounded-2xl bg-gray-200" src={pin} alt="product image" />
                            </a>
                            <div class="px-5 pb-5 pt-5">
                                <a href="#">
                                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">Girl World Pin</h5>
                                    <h5 class="text-sm tracking-tight text-gray-900 dark:text-black">Price: Php 40.00</h5>
                                </a>
                            </div>
                        </div>
                        <div class="item-card m-5 w-80 max-w-sm bg-white rounded-2xl  dark:bg-gray-300 ">
                            <a href="#">
                                <Image class="w-full rounded-2xl bg-gray-200" src={short} alt="product image" />
                            </a>
                            <div class="px-5 pb-5  pt-5">
                                <a href="#">
                                <h5 class="text-xs pb-1 tracking-tight text-gray-900 dark:text-black">Available Colors:</h5>
                                    <div className="pb-3">
                                        <span class="bg-yellow-100 me-2 px-3 rounded-full dark:bg-yellow-500"></span>
                                        <span class="bg-red-100 me-2 px-3 rounded-full dark:bg-red-400"></span>
                                        <span class="bg-red-100 me-2 px-3 rounded-full dark:bg-red-500"></span>
                                        <span class="bg-yellow-100 me-2 px-3 rounded-full dark:bg-yellow-400"></span>
                                        <span class="bg-green-100 me-2 px-3 rounded-full dark:bg-green-900"></span>
                                    </div>
                                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">Girl Scouts Shorts</h5>
                                    <h5 class="text-sm tracking-tight text-gray-900 dark:text-black">Price: Php 75.00</h5>
                                </a>
                            </div>
                        </div>
                        <div class="item-card m-5 w-80 max-w-sm bg-white rounded-2xl  dark:bg-gray-300 ">
                            <a href="#">
                                <Image class="w-full rounded-2xl bg-gray-200" src={blouse} alt="product image" />
                            </a>
                            <div class="px-5 pb-5 pt-5">
                                <a href="#">
                                <h5 class="text-xs pb-1 tracking-tight text-gray-900 dark:text-black">Available Colors:</h5>
                                    <div className="pb-3">
                                        <span class="bg-yellow-100 me-2 px-3 rounded-full dark:bg-yellow-500"></span>
                                        <span class="bg-red-100 me-2 px-3 rounded-full dark:bg-red-400"></span>
                                        <span class="bg-red-100 me-2 px-3 rounded-full dark:bg-red-500"></span>
                                        <span class="bg-yellow-100 me-2 px-3 rounded-full dark:bg-yellow-400"></span>
                                        <span class="bg-green-100 me-2 px-3 rounded-full dark:bg-green-900"></span>
                                    </div>
                                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">Girl Scouts Blouse</h5>
                                    <h5 class="text-sm tracking-tight text-gray-900 dark:text-black">Price: Php 75.00</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id="membership">
                <div class="grid pt-15 grid-cols-2">
                    <div className="p-20">
                        <h1 className="text-white text-center pt-2 text-2xl font-bold pb-5">
                            GSP MEMBERSHIP OVERVIEW
                        </h1>
                        <p className="text-start pb-5">
                            Membership in the Girl Scouts of the Philippines (GSP) is open to Filipinos and non-Filipinos who support the principles of Girl Scouting. It provides numerous opportunities for personal growth, including membership in the World Association of Girl Guides and Girl Scouts (WAGGGS) and participation in the 8-Point Challenge Program.
                        </p>
                        <p className="text-start">
                            Members, ranging from girls aged 4-21 to adults, are required to adhere to the Girl Scout Promise and Law and pay an annual registration fee, which varies based on membership type.
                        </p>
                        <h1 className="text-white text-center pt-10 text-2xl font-bold pb-5">
                            MEMBERSHIP BENEFITS AND CLASSIFICATION
                        </h1>
                        <p className="text-start pb-5">
                            GSP membership offers various benefits, such as leadership training, community involvement, and opportunities for both girls and adults to grow personally and professionally. Members can engage in local and international activities, enjoy the privilege of wearing the GSP uniform, and access financial assistance in emergencies. Membership is categorized into active members (like Girl Scouts and troop leaders) and auxiliary members (including honorary and sustaining members), each with distinct roles and responsibilities in the organization.
                        </p>
                    </div>
                    <div className="p-20">
                        <h1 className="title text-white">MEMBERSHIP</h1>
                        <form>
                            <div class="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                </div>
                                <div>
                                    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                                </div>
                                <div>
                                    <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                                    <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
                                </div>
                                <div>
                                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                    <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                </div>
                            </div>
                            <div class="mb-6">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                            </div>
                            <div class="mb-6">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                            </div>
                            <div class="mb-6">
                                <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                            </div>
                            <div class="flex items-start mb-6">
                                <div class="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-white dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                </div>
                                <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                            </div>
                            <button type="submit" class="buttons-white">Submit</button>
                        </form>

                    </div>
                </div>
            </section>
        </div>
    );
}

