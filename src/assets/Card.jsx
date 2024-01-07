import Image from "next/image";

function Card({ imageUrl, text, imageName }) {
    return (
        <div className="container">
            <div className="card">
                <div className="flex flex-col justify-center items-center p-6">
                    {/* Image */}
                    <div>
                        <Image width={200} height={250} src={imageUrl} alt={imageName}></Image>
                    </div>
                    {/* Card Content */}
                    <div className="text-start text-xl">
                        <p className="card-text">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;
    