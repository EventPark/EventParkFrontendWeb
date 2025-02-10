import Image from "next/image";
import { useState } from "react";

export default function VideoBackground() {
  const [videoError, setVideoError] = useState(false);

  return (
    <div>
      {!videoError ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setVideoError(true)}
        >
          <source src="/videos/home_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src="/images/home_image.png"
          alt="Fallback"
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
