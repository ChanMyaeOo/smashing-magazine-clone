import React from "react";
import Header from "./Header";

interface Props {
    children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="mx-auto max-w-7xl">
            <Header />
            {children}
        </div>
    );
};

export default Layout;
