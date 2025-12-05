import { Link } from "react-router";
import Logo from "../ui/Logo";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {

    const FooterLinks = [
        {
            title: "Company",
            links: [
                { text: "About", url: "#" },
                { text: "Contact", url: "#" },
                { text: "Privacy", url: "#" },
            ],
        },
        {
            title: "Resources",
            links: [
                { text: "Help", url: "#" },
                { text: "Sales", url: "#" },
                { text: "Advertise", url: "#" },
            ],
        },
        {
            title: "Social",
            links: [
                { text: "Twitter", url: "#" },
                { text: "Instagram", url: "#" },
                { text: "LinkedIn", url: "#" },
            ],
        },
    ]

    return (
        <div className="bg-gray-800 py-10">
            <div className="container mx-auto flex flex-col md:flex-row gap-1">
                <div className="w-full md:w-1/2">
                    <Logo />
                    <div className="mt-5">
                        <p className="text-gray-300">Your daily schedule, monthly goals, and life plans perfectly organized.Smart task management, calendar planning, habit tracking, and reminders — built for you.</p>

                        <div className="flex mt-3 items-center gap-3">
                            <Link to={'/'}>
                                <FaFacebookSquare className="text-3xl text-gray-300"/>
                            </Link>
                            <Link to={'/'}>
                                <FaSquareInstagram className="text-3xl text-gray-300"/>
                            </Link>
                            <Link to={'/'}>
                                <FaSquareXTwitter className="text-3xl text-gray-300"/>
                            </Link>
                            <Link to={'/'}>
                                <IoLogoLinkedin className="text-3xl text-gray-300"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex gap-3 justify-around">
                    {FooterLinks.map((section, sectionIdx) => (
                        <div key={sectionIdx}>
                            <h3 className="mb-4 text-white font-bold">{section.title}</h3>

                            <ul className="text-gray-400 space-y-4">
                            {section.links.map((link, linkIdx) => (
                                <li key={linkIdx} className="hover:text-primary font-medium">
                                    <Link to={link.url}>
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>
            <hr className="my-3 border-gray-600"/>
            <p className="text-center text-gray-300">© 2025 progressing-plan.com. All rights reserved.</p>
        </div>
    );
};

export default Footer;