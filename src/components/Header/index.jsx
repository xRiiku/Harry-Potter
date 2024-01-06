'use client'
import BurgerIcon from "./assets/BurgerIcon"
import LoginIcon from "./assets/LoginIcon"
import Logo from "./assets/Logo"
import Menu from "./Menu"
import { AppContext } from "@/context/context"
import { useContext } from "react"
import NavMobile from "./NavMobile"

function Header() {

    const { isMenuOpen } = useContext(AppContext);

    return (
        <header className="py-3 px-10 xl:px-20 flex items-center fixed top-0 w-screen justify-between z-40 backdrop-blur-sm">
            <div className="flex flex-grow basis-0">
                <Logo/>
            </div>
            <div className="hidden lg:flex [&>ul>li]:inline-block [&>ul>li]:px-4 [&>ul>li]:py-2 text-balance text-xl">
                <Menu/>
            </div>
            <div className="flex flex-grow justify-end basis-0 gap-3">
                <BurgerIcon/>
                <LoginIcon/>
            </div>

            {/* NAV MOBILE */}
        {isMenuOpen && (
            <NavMobile/>
        )}
        </header>
    )
}

export default Header