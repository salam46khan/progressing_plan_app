import type { ReactNode } from "react";
import Navbar from "./Navbar";

interface IProps {
    children: ReactNode
}
const Layout = ({children}: IProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <div>
                <Navbar />
            </div>
            <div className="flex-1 border">
                {children}
            </div>
            footer 
        </div>
    );
};

export default Layout;