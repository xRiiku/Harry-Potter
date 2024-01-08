import React from 'react'
import { AppContext } from "@/context/context"
import { useContext } from "react"

function NavMobile() {
    const { isMenuOpen, toggleMenu } = useContext(AppContext);
    return (
        <nav className="flex flex-col bg-black h-screen fixed top-0 left-0 right-0 bottom-0 ">
            <button onClick={() => toggleMenu(isMenuOpen)} className=" w-screen flex justify-end p-5">
                <img className="text-black h-6 " src="/close-icon.svg" alt="close image"/>
            </button>
                <ul
                className="flex flex-col mt-4 [&>li]:m-3 [&>li>a]:flex [&>li>a]:text-2xl [&>li>a]:justify-between [&>li>a]:text-yellow-500 [&>li>a]:px-6 [&>li>a]:py-3 [&>li>a]:rounded-md [&>li>a]:w-full"
                >
                    <li onClick={() => toggleMenu(isMenuOpen)}><a className="hover:bg-slate-100" href="#casas"> Casas <img className="h-5" alt="arrow icon" src="/arrow-icon.svg"/></a> </li>
                    <li onClick={() => toggleMenu(isMenuOpen)}><a className="hover:bg-slate-100" href="#">Lugares<img className="h-5" alt="arrow icon" src="/arrow-icon.svg"/></a></li>
                    <li onClick={() => toggleMenu(isMenuOpen)}><a className="hover:bg-slate-100" href="/Characters">Personajes<img className="h-5" alt="arrow icon" src="/arrow-icon.svg"/></a></li>
                    <li onClick={() => toggleMenu(isMenuOpen)}><a className="hover:bg-slate-100" href="#">Hechizos<img className="h-5" alt="arrow icon" src="/arrow-icon.svg"/></a></li>
                    <li onClick={() => toggleMenu(isMenuOpen)}><a className="hover:bg-slate-100" href="#">Varitas<img className="h-5" alt="arrow icon" src="/arrow-icon.svg"/></a></li>
                    <li onClick={() => toggleMenu(isMenuOpen)}><a className="hover:bg-slate-100" href="#">Quiz<img className="h-5" alt="arrow icon" src="/arrow-icon.svg"/></a></li>
                </ul>
        </nav>
    )
}

export default NavMobile