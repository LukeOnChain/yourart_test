import "./Common.css";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import React from "react";
import ImageModal from "./ImageModal";

export default function Carousel(props) {
  const carouselRef = React.useRef(null);
  const [isLeftArrow, setIsLeftArrow] = React.useState(false);
  const [imageModalOpen, setImageModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const scroll = (scrollOffset) => {
    if (carouselRef) {
      carouselRef.current.scrollLeft += scrollOffset;
      if (carouselRef.current.scrollLeft > 0) {
        setIsLeftArrow(true);
      } else {
        setIsLeftArrow(false);
      }
    }
  };

  return (
    <div className="carousel">
      {isLeftArrow ? (
        <div
          className="carousel_centerarrow"
          onClick={() => {
            scroll(-20);
          }}
        >
          <BsArrowLeftCircleFill size={50} />
        </div>
      ) : null}
      <div ref={carouselRef} className="carousel__container">
        {props.images.map((image, index) => {
          return (
            <img
              index={"carousel__container" + index}
              src={image}
              height={120}
              width={120}
              className="carousel__image"
              onClick={() => {
                setSelectedImage(image);
                setImageModalOpen(true);
              }}
            />
          );
        })}
      </div>
      <div
        className="carousel_centerarrow"
        onClick={(event) => {
          event.preventDefault();
          scroll(30);
        }}
      >
        <BsArrowRightCircleFill size={50} />
      </div>
      <ImageModal
        modalIsOpen={imageModalOpen}
        setImageModalOpen={setImageModalOpen}
        image={selectedImage}
      />
    </div>
  );
}
