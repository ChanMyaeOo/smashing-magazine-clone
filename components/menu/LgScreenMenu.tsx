import React from "react";
import Image from "next/image";
import Triangle from "../../assets/triangle.svg";

interface Props {
    isClicked: boolean;
}

const LgScreenMenu: React.FC<Props> = ({ isClicked }) => {
    return (
        <ul
            className={`absolute w-56 text-left -left-20 bg-white shadow-lg rounded-lg mt-6 ${
                isClicked ? "lg:block" : "hidden"
            } hidden`}
        >
            <li className="-mt-4 flex justify-center">
                <Image src={Triangle} width="30" height="30" />
            </li>
            <li className="ml-5 mb-2">
                <a href="" className="text-orange">
                    Job Board
                </a>
            </li>
            <li className="ml-5 mb-2">
                <a href="" className="text-orange">
                    Newsletter
                </a>
            </li>
            <li className="ml-5 mb-2">
                <a href="" className="text-orange">
                    Podcasts
                </a>
            </li>
            <li className="ml-5 mb-2">
                <a href="" className="text-orange">
                    Write for us
                </a>
            </li>
            <li className="ml-5 mb-4">
                <a href="" className="text-orange">
                    Advertise with us
                </a>
            </li>
        </ul>
    );
};

export default LgScreenMenu;
