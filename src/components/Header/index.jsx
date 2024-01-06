'use client'
import LoginIcon from "./LoginIcon"
import Logo from "./Logo"
import Menu from "./Menu"

function Header() {

    return (
        <header className="py-3 px-10 flex items-center fixed top-0 w-screen justify-between">
            <div className="flex flex-grow basis-0">
                <Logo/>
            </div>
            <div className="flex [&>ul>li]:inline-block [&>ul>li]:px-4 [&>ul>li]:py-2 text-balance text-xl">
                <Menu/>
            </div>
            <div className="flex flex-grow justify-end basis-0">
                <LoginIcon/>
            </div>
        </header>
    )
}

export default Header