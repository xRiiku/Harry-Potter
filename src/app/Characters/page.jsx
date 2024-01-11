"use client"
import Image from "next/image";
import harry from "@/images/Characters-Selection/harry.webp"
import dumbledore from "@/images/Characters-Selection/dumbledore.webp"
import voldemort from "@/images/Characters-Selection/voldemort.webp"
import { AppContext } from "@/context/context"
import { useContext } from "react"

function Characters() {

    const { isSelectorOpen, selectorFunction } = useContext(AppContext);

    return (
        <div className="w-screen h-screen p-10 mt-28 flex justify-start items-center flex-col">
            <div className="flex gap-3 md:gap-10 p-6">
                {/* Profesores */}
                <div>
                    <div className="w-[100px] h-[100px]flex flex-col cursor-pointer" onClick={() => selectorFunction(isSelectorOpen)}>
                        <Image src={dumbledore} alt="Dumbledore"/>
                    </div>
                        <div className="mt-4 text-center">
                            <p className="text-xl text-yellow-500">Profesores</p>
                        </div>
                </div>
                {/* Alumnos */}
                <div>
                    <div className="w-[100px] h-[100px]flex flex-col">
                        <Image src={harry} alt="Harry"/>
                    </div>
                        <div className="mt-4 text-center">
                            <p className="text-xl text-yellow-500">Alumnos</p>
                        </div>
                </div>
                {/* Villanos */}
                <div>
                    <div className="w-[100px] h-[100px] flex flex-col">
                        <Image src={voldemort} alt="Voldemort"/>
                    </div>
                        <div className="mt-4 text-center">
                            <p className="text-xl text-yellow-500">Villanos</p>
                        </div>
                </div>

            </div>
            {isSelectorOpen && (
                <div>HOLAAAAAA</div>
                )}
        </div>

        
    );
}

export default Characters;
