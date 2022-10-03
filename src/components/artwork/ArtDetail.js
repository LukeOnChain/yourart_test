import { AiOutlineStar } from "react-icons/ai";
import { FaHourglassHalf } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTruck } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import "./Artwork.css";

export default function ArtDetail(props) {
  return (
    <div>
      {props.artwork ? (
        <div className="artdetail">
          <div className="artdetail__title">
            <h3>{props.artwork.fullname}</h3>
            <AiOutlineStar />
          </div>
          <h4 className="artdetail__artistname">
            {props.artwork.artistShort.fullname}{" "}
            <span className="artdetail__artistcountry">
              {props.artwork.artistShort.country}
            </span>
          </h4>
          <p>
            {props.artwork.category}, {props.artwork.creationYear}
          </p>
          <p>
            {props.artwork.dimensions.width} W x{" "}
            {props.artwork.dimensions.height} H x{" "}
            {props.artwork.dimensions.depth} D in
          </p>
          <h2>{props.artwork.price} €</h2>
          <button className="yourart__button">Acquire</button>
          <button className="yourart__button">Make an offer</button>
          <div className="yourart__centerdiv">
            <FaHourglassHalf /> <h5>PRE-RESERVE FOR 24 HOURS</h5>
          </div>
          <div className="yourart__centerdiv" style={{ marginTop: 5 }}>
            <AiOutlineCheck />
            <p style={{ fontWeight: "bold" }}>
              131€ estimated delivery fee{" "}
              <span style={{ fontWeight: "100" }}>for France</span>
            </p>
          </div>
          <h5>
            In order to obtain an accurate delivery fee, please enter your
            country of residence and zip code
          </h5>
          <div
            className="yourart__centerdiv"
            style={{ justifyContent: "space-between", marginTop: 10 }}
          >
            <input
              type="text"
              style={{ maxWidth: "45%" }}
              placeholder="Country"
            ></input>
            <input
              type="number"
              style={{ maxWidth: "45%" }}
              placeholder="Zip Code"
            ></input>
          </div>
          <div className="yourart__centerdiv" style={{ marginTop: 10 }}>
            <FaTruck />
            <p style={{ marginLeft: 5 }}>Delivery fee is 129 €</p>
          </div>
          <div className="yourart__centerdiv" style={{ marginTop: 5 }}>
            <MdLocationOn />
            <p style={{ marginLeft: 5 }}>
              Free pickup in{" "}
              <span style={{ fontWeight: "bold" }}>Brusselles, Belgium</span>
            </p>
          </div>
          <div className="yourart__centerdiv" style={{ marginTop: 5 }}>
            <AiOutlineCheck />
            <p>Try 14 days at home for free</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
