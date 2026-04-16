import { useEffect, useRef } from "react";

type DecorativeVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  videoClassName?: string;
};

const DecorativeVideo = ({ src, poster, className = "", videoClassName = "" }: DecorativeVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = async () => {
      try {
        video.muted = true;
        video.defaultMuted = true;
        video.autoplay = true;
        video.loop = true;
        video.playsInline = true;
        video.setAttribute("muted", "");
        video.setAttribute("autoplay", "");
        video.setAttribute("playsinline", "");
        video.setAttribute("webkit-playsinline", "true");
        await video.play();
      } catch {
        // Safari/iPhone may require the first user interaction
      }
    };

    const handleInteraction = () => {
      void attemptPlay();
    };

    video.addEventListener("playing", handleInteraction, { once: true });
    document.addEventListener("touchstart", handleInteraction, { passive: true });
    document.addEventListener("click", handleInteraction);
    document.addEventListener("scroll", handleInteraction, { passive: true });

    void attemptPlay();

    return () => {
      video.removeEventListener("playing", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("scroll", handleInteraction);
    };
  }, [src]);

  return (
    <div
      aria-hidden="true"
      className={["decorative-video relative overflow-hidden", className].filter(Boolean).join(" ")}
      style={poster ? { backgroundImage: `url(${poster})`, backgroundPosition: "center", backgroundSize: "cover" } : undefined}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        controls={false}
        controlsList="nofullscreen nodownload noplaybackrate noremoteplayback"
        tabIndex={-1}
        aria-hidden="true"
        className={["h-full w-full object-cover pointer-events-none", videoClassName].filter(Boolean).join(" ")}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default DecorativeVideo;
