import logoText from '../../assets/logo-text.png'
import hamburger from '../../assets/hamburger.png'

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 border-b border-[#F1F5F9]">

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
                    className="w-32 h-auto justify-self-center md:justify-self-start"
                />

                {/* Menu */}
                <ul className="hidden md:flex gap-6 items-center justify-self-center">
                    <li>
                        <a href="#" className="text-pink-500">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-pink-500">
                            Technologies
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-pink-500">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-pink-500">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-pink-500">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Buttons */}
                <div className="flex gap-4 items-center justify-self-end">
                    <button className="hover:text-pink-500">
                        Sign In
                    </button>

                    <button className="rounded-full bg-pink-500 text-white px-5 py-2 hover:bg-pink-600">
                        Sign Up
                    </button>
                </div>

            </div>

        </nav>
    )
}

export default Navbar