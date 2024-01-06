import Image from "next/image";

function Card({ imageUrl, text, imageName}) {
    return (
        <div className="container">
            <div className="flex justify-center items-center mt-10 p-8 h-full">
                <div className="text-2xl w-[350px] md:w-[550px] h-full border-2 border-yellow-500 p-6">
                    <div className="flex flex-col justify-center items-center">
                        {/* Image */}
                        <div>
                            <Image width={350} height={400} src={imageUrl} alt={imageName}></Image>  
                        </div>
                        {/* Card Content */}
                        <div className="text-center text-lg md:text-xl overflow-hidden pt-4">
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        );
    }
    export default Card;
    