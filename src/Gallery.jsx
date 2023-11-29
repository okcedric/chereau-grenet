import { useState } from "react";

function Gallery({ gallery }) {
  const [slideVisible, setSlideVisible] = useState(0);
  const slideNumber = gallery.images.length + 1;

  const handleClick = () => {
    setSlideVisible((slideVisible + 1) % slideNumber);
  };

  return (
    <>
      <div onClick={handleClick} className="gallery">
        {slideVisible != gallery.images.length && (
          <img className="image" src={gallery.images[slideVisible]} alt="" />
        )}
        {slideVisible == gallery.images.length && (
          <div className="image">
            <h3>{gallery.title}</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default Gallery;
