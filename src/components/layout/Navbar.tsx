import { Link } from "react-router";
import Logo from "../ui/Logo";

const Navbar = () => {
    return (
        <div className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to={'/'}><Logo /></Link>
                <ol className="flex gap-3 items-center text-green-400">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/add'}>Add Plan</Link>
                </ol>
            </div>
        </div>
    );
};

export default Navbar;