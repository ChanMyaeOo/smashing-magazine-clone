import React from "react";

interface Props {
    isClicked: boolean;
}

const SmScreenMenu: React.FC<Props> = ({ isClicked }) => {
    return (
        <div
            className={`flex mt-5 justify-around ${
                isClicked ? "flex" : "hidden"
            } md:hidden`}
        >
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

export default SmScreenMenu;
