import logoText from '../../assets/logo-text.png'
import hamburger from '../../assets/hamburger.png'
import { useState } from 'react'

function Navbar() {
    const [activeMenu, setActiveMenu] = useState("Home")
    return (
        <nav className="sticky top-0 z-50 border-b border-[#F1F5F9] bg-white">

            <div className="container mx-auto grid grid-cols-3 items-center px-6 py-4">

                {/* Hamburger */}
                <img
                    src={hamburger}
                    alt="Menu"
                    className="w-6 md:hidden justify-self-start"
                />

                {/* Logo */}
                <img
                    src={logoText}
                    alt="Dev Stack"
                    className="w-28 sm:w-32 h-auto justify-self-center md:justify-self-start"
                />

                {/* Menu */}
                <ul className="hidden md:flex gap-4 lg:gap-6 items-center justify-self-center text-sm lg:text-base">
                    <li>
                        <a href="#"
                            onClick={() => setActiveMenu("Home")}
                            className={activeMenu === "Home" ? "text-pink-500" : "hover:text-pink-500"}
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#"
                            onClick={() => setActiveMenu("Technologies")}
                            className={activeMenu === "Technologies" ? "text-pink-500" : "hover:text-pink-500"}
                        >
                            Technologies
                        </a>
                    </li>

                    <li>
                        <a href="#"
                            onClick={() => setActiveMenu("Projects")}
                            className={activeMenu === "Projects" ? "text-pink-500" : "hover:text-pink-500"}
                        >
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#"
                            onClick={() => setActiveMenu("About")}
                            className={activeMenu === "About" ? "text-pink-500" : "hover:text-pink-500"}>
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#"
                            onClick={() => setActiveMenu("Contact")}
                            className={activeMenu === "Contact" ? "text-pink-500" : "hover:text-pink-500"}>
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Buttons */}
                <div className="flex gap-2 sm:gap-3 items-center justify-self-end">
                    <button className="text-xs sm:text-sm px-3 py-1.5 border border-gray-300 sm:border-0 rounded-md sm:rounded-none hover:text-pink-500 hover:border-pink-300">
                        Sign In
                    </button>

                    <button className="hidden sm:block rounded-full bg-pink-500 text-white px-4 py-2 text-sm hover:bg-pink-600">
                        Sign Up
                    </button>
                </div>

            </div>

        </nav >
    )
}

export default Navbar