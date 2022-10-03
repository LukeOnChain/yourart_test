import "./Artwork.css";
import { AiFillEye } from "react-icons/ai";
import { MdViewInAr } from "react-icons/md";
import React from "react";
import ImageModal from "../common/ImageModal";

export default function ArView(props) {
  const [imageModalOpen, setImageModalOpen] = React.useState(false);
  return (
    <div className="arview">
      <div
        className="yourart__centerdiv"
        style={{ justifyContent: "center", cursor: "pointer" }}
        onClick={() => {
          setImageModalOpen(true);
        }}
      >
        <img src={props.imageUrl} style={{ maxHeight: 350 }} />
      </div>
      <div
        className="yourart__centerdiv"
        style={{ justifyContent: "space-around", marginTop: 10 }}
      >
        <div className="yourart__centerdiv">
          <div
            className="yourart__centerdiv"
            style={{ marginRight: 20, cursor: "pointer" }}
          >
            <AiFillEye size={20} />
            <h5>VIEW IN A ROOM</h5>
          </div>
          <div className="yourart__centerdiv" style={{ cursor: "pointer" }}>
            <MdViewInAr size={20} />
            <h5>AR VIEW</h5>
          </div>
        </div>
      </div>
      <ImageModal
        modalIsOpen={imageModalOpen}
        setImageModalOpen={setImageModalOpen}
        image={props.imageUrl}
      />
    </div>
  );
}
