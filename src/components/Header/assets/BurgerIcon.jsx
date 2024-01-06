import React from "react";
import { AppContext } from "@/context/context";
import { useContext } from "react";

function BurgerIcon() {
    const { isMenuOpen, toggleMenu } = useContext(AppContext);

    return (
        <div className="group block lg:hidden">
        <button
            onClick={(e) => {
            e.preventDefault();
            toggleMenu(isMenuOpen);
            }}
        >
            <svg
            className="text-yellow-500 group-hover:text-white cursor-pointer"
            width={32}
            height={32}
            viewBox="0 0 24 24"
            id="meteor-icon-kit__regular-bars-circle"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H8ZM8 9C7.44772 9 7 8.55229 7 8C7 7.44772 7.44772 7 8 7H16C16.5523 7 17 7.44772 17 8C17 8.55229 16.5523 9 16 9H8ZM8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15H16C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17H8Z"
                fill="currentColor"
                ></path>
            </g>
            </svg>
        </button>
        </div>
    );
}

export default BurgerIcon;
