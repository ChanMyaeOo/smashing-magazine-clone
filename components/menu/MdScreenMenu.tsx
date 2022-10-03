import React from "react";

interface Props {
    isClicked: boolean;
}

const MdScreenMenu: React.FC<Props> = ({ isClicked }) => {
    return (
        <div
            className={`bg-orange hidden ${
                isClicked ? "md:flex" : "hidden"
            } justify-center py-5 lg:hidden`}
        >
            <ul className="w-1/2">
                <li className="mb-2">
                    <a href="#" className="text-white">
                        Articles
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="text-white">
                        Books
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="text-white">
                        Workshops
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="text-white">
                        Conferences
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="text-white">
                        Membership
                    </a>
                </li>
            </ul>

            <ul className="">
                <li className="mb-2">
                    <a href="#" className="text-white">
                        Articles
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="text-white">
                        Books
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="text-white">
                        Workshops
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="text-white">
                        Conferences
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="text-white">
                        Membership
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default MdScreenMenu;
