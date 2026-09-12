import logoText from '../../assets/logo-text.png'

function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-15">

            <div className="max-w-7xl mx-auto px-6 py-10">

                <div className="flex flex-col md:flex-row justify-between gap-10">

                    <div>
                        <div className="flex justify-center md:justify-start">
                            <img
                                src={logoText}
                                alt="Dev Stack"
                                className="w-32 h-auto"
                            />
                        </div>

                        <p className="text-sm text-gray-500 max-w-sm text-center md:text-left mt-3 mx-auto md:mx-0">
                            Curated tools, technologies, and resources for developers building
                            modern software.
                        </p>

                        <div className="flex items-center justify-center md:justify-start gap-3 mt-7 text-sm">
                            <a className="link link-hover">GitHub</a>
                            <span className="md:hidden">•</span>
                            <a className="link link-hover">Twitter</a>
                            <span className="md:hidden">•</span>
                            <a className="link link-hover">LinkedIn</a>
                        </div>
                    </div>

                    <div className="hidden sm:grid grid-cols-3 gap-50">

                        <nav>
                            <h6 className="font-semibold mb-3">Product</h6>

                            <a className="block text-sm text-gray-500 hover:text-gray-800 mb-2">
                                Home
                            </a>

                            <a className="block text-sm text-gray-500 hover:text-gray-800 mb-2">
                                Technologies
                            </a>

                            <a className="block text-sm text-gray-500 hover:text-gray-800">
                                Projects
                            </a>
                        </nav>

                        <nav>
                            <h6 className="font-semibold mb-3">Company</h6>

                            <a className="block text-sm text-gray-500 hover:text-gray-800 mb-2">
                                About
                            </a>

                            <a className="block text-sm text-gray-500 hover:text-gray-800 mb-2">
                                Contact
                            </a>

                            <a className="block text-sm text-gray-500 hover:text-gray-800">
                                Careers
                            </a>
                        </nav>

                        <nav>
                            <h6 className="font-semibold mb-3">Legal</h6>

                            <a className="block text-sm text-gray-500 hover:text-gray-800 mb-2">
                                Privacy Policy
                            </a>

                            <a className="block text-sm text-gray-500 hover:text-gray-800">
                                Terms of Service
                            </a>
                        </nav>

                    </div>

                </div>

            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="border-t border-gray-200 py-5 flex items-center justify-between gap-3">

                    <p className="text-sm text-gray-400">
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-4 text-sm text-gray-400">
                        <a className="hover:text-gray-800">Privacy</a>
                        <a className="hover:text-gray-800">Terms</a>
                    </div>

                </div>
            </div>

        </footer>
    )
}

export default Footer