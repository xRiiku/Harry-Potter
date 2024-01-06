import Image from "next/image";

function Card({ imageUrl, text, imageName, textContainerClasses }) {
    return (
        <div className="container">
        <div className="flex flex-col justify-center items-center">
            {/* Image */}
            <div>
                <Image width={350} height={400} src={imageUrl} alt={imageName}></Image>  
            </div>
    
            {/* Card Content */}
            <div className={`text-container ${textContainerClasses}`}>
                <p>{text}</p>
            </div>
        </div>
        </div>
        );
    }
    export default Card;
    