import { useUserType } from "@/app/context/UserTypeContext";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function VideoBackground() {
  const { userType } = useUserType();
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [userType]);

  return (
    <div>
      {!videoError ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setVideoError(true)}
        >
          <source
            src={
              userType == "user"
                ? "/videos/home_video.mp4"
                : "/videos/vendor_video.mp4"
            }
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src={
            userType == "user"
              ? "/images/home_image.png"
              : "/images/vendor/home_image.png"
          }
          alt="Fallback"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0,0,0,0.2)",
          background: `
                        linear-gradient(181.86deg, rgba(0, 0, 0, 0) 31.04%, rgba(0, 0, 0, 0.175) 54.75%, #000000 94.58%),
                        linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))
                    `,
        }}
      ></div>
    </div>
  );
}
