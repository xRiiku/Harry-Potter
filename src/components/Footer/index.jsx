import React from "react";
import Logo from "../Header/assets/Logo";

function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="rounded-lg m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="flex items-center justify-between flex-col sm:flex-row">
            <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <Logo/>
            </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-yellow-500 sm:mb-0">
                <li>
                <a href="https://www.linkedin.com/in/danielramoncampos/" target="_blank" className="hover:text-white me-4 md:me-6">
                    Linkedin
                </a>
                </li>
                <li>
                <a href="https://discord.com/users/247104185370148875" target="_blank" className="hover:text-white me-4 md:me-6">
                    Discord
                </a>
                </li>
                <li>
                <a href="https://github.com/xRiiku" target="_blank" className="hover:text-white me-4 md:me-6">
                    Github
                </a>
                </li>
            </ul>
            </div>
            <hr className="my-6 border-yellow-200 sm:mx-auto lg:my-8" />
            <span className="block text-sm text-yellow-500 text-center">
            © {currentYear}{" "}
            <span>
                Hecho por Rikudev™
            </span>
            </span>
        </div>
        </footer>
    );
}

export default Footer;
