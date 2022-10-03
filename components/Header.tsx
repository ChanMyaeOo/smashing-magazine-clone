import React, { useState } from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import SmashLogo from "../assets/thunder.svg";
import MdScreenMenu from "./menu/MdScreenMenu";
import SmScreenMenu from "./menu/SmScreenMenu";
import LgScreenMenu from "./menu/LgScreenMenu";

const Header = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleMoreButton = () => {
        setIsClicked(!isClicked);
    };
    return (
        <div>
            <div className="bg-orange px-5 py-4 md:flex md:justify-between md:items-center ">
                <div className="flex justify-between items-center lg:w-9/12">
                    <div className="flex justify-between items-center">
                        <Image src={SmashLogo} width="55" height="45" />
                    </div>

                    <div className="text-white font-bold mx-7 hidden md:block lg:hidden">
                        Articles
                    </div>

                    <ul className="hidden lg:flex ">
                        <li className="mr-5 ml-0">
                            <a href="" className="nav-menu">
                                Articles
                            </a>
                        </li>
                        <li className="mx-5">
                            <a href="" className="nav-menu">
                                Books
                            </a>
                        </li>
                        <li className="mx-5">
                            <a href="" className="nav-menu">
                                Workshops
                            </a>
                        </li>
                        <li className="mx-5">
                            <a href="" className="nav-menu">
                                Conferences
                            </a>
                        </li>
                        <li className="ml-5 mr-0">
                            <a
                                href=""
                                className="text-white font-semibold hover:bg-[#bf2213] p-2 rounded-lg"
                            >
                                Membership
                            </a>
                        </li>
                    </ul>

                    <div
                        className="bg-[#bf2213] px-3 py-2 text-white font-bold rounded-lg cursor-pointer lg:mr-24 lg:min-w-[80px] text-center hover:bg-[#ab200a] relative select-none"
                        onClick={handleMoreButton}
                    >
                        {isClicked ? "Less" : "More"}

                        {/* more menu items for large screen */}
                        <LgScreenMenu isClicked={isClicked} />
                    </div>
                </div>

                {/* more menu items for small screen */}
                <SmScreenMenu isClicked={isClicked} />

                <div className="flex items-center relative mt-5 md:mt-0 md:w-1/2 lg:w-3/12">
                    <MagnifyingGlassIcon className="h-5 font-bold absolute left-2 text-orange" />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        className="h-12 outline-none rounded-lg w-full pl-10 shadow-lg"
                    />
                </div>
            </div>

            {/* more menu items for medium screen */}
            <MdScreenMenu isClicked={isClicked} />
        </div>
    );
};

export default Header;
