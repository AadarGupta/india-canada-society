"use client";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import { GALLERY_FILES } from "@/constants";

export default function Gallery() {
  const onInit = () => {
    console.log("Gallery showing");
  };

  return (
    <div
      className=""
      style={{
        width: "calc(100vw - 48px)",
        height: "100%",
      }}
    >
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail]}
        download={false}
      >
        {GALLERY_FILES.map((image) => (
          <a href={image.src}>
            <img
              alt={image.alt}
              src={image.src}
              className="gallery-img transition-all"
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}
