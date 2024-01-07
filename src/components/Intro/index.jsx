function Video() {
    return (
        <div className="relative h-[80vh] w-full max-w-[100vw] md:aspect-video md:h-full">
            <video
                className="h-full w-full animate-fade object-cover object-center animate-duration-1000 animate-ease-in-out"
                src="/IntroVideo.mp4"
                autoPlay
                loop
                muted
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)" }}
            >
            </video>
            <video className="absolute -bottom-48 -z-40 blur-3xl w-full" src="/IntroVideo.mp4" autoPlay loop muted></video>
        </div>
    );
}

export default Video;
