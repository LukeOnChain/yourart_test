import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import ArView from "../../components/artwork/ArView";
import ArtDetail from "../../components/artwork/ArtDetail";
import "./ArtworkPage.css";
import Accordion from "../../components/common/Accordion";
import Carousel from "../../components/common/Carousel";
import { useNavigate } from "react-router-dom";

export default function ArtworkPage() {
  let { artworkId } = useParams();
  const [artwork, setArtwork] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    axios
      .get("https://hetaverse.io:8448/artworks", {
        params: { id: artworkId },
      })
      .then((response) => {
        if (response.data && !response.data.code) {
          setArtwork(response.data);
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        navigate("/");
      });
  }, []);

  const getDescription = (artwork) => {
    return (
      <h5 style={{ marginBottom: 10, fontWeight: 500 }}>
        {artwork.description}
      </h5>
    );
  };

  const getElements = (elements) => {
    return (
      <h5 style={{ textTransform: "capitalize", margin: 0 }}>
        {elements.map((element, index) => {
          if (index < elements.length - 1) {
            return element + ",";
          } else {
            return element;
          }
        })}
      </h5>
    );
  };

  const getSubjectMedium = (artwork) => {
    return (
      <div style={{ marginBottom: 10 }}>
        <div className="yourart__baselinediv">
          <h4 style={{ textTransform: "uppercase", margin: 0, width: 100 }}>
            {" "}
            Subject
          </h4>
          {getElements(artwork.subjects)}
        </div>
        <div className="yourart__baselinediv">
          <h4 style={{ textTransform: "uppercase", margin: 0, width: 100 }}>
            {" "}
            Style
          </h4>
          {getElements(artwork.styles)}
        </div>
        <div className="yourart__baselinediv">
          <h4 style={{ textTransform: "uppercase", margin: 0, width: 100 }}>
            {" "}
            Medium
          </h4>
          {getElements(artwork.mediums)}
        </div>
        <div className="yourart__baselinediv">
          <h4 style={{ textTransform: "uppercase", margin: 0, width: 100 }}>
            {" "}
            Materials
          </h4>
          {getElements(artwork.materials)}
        </div>
      </div>
    );
  };

  return (
    <div>
      {artwork ? (
        <div className="artwork__main">
          <Helmet>
            {" "}
            <title>{artwork.fullname}</title>
          </Helmet>

          <div className="yourart__div artwork__page">
            <div style={{ minWidth: "40%" }}>
              <ArView imageUrl={artwork.imageUrl} />
              <Accordion title="Description" child={getDescription(artwork)} />
              <Accordion
                title="Subject, Medium, Style, Materials"
                child={getSubjectMedium(artwork)}
              />
            </div>
            <ArtDetail artwork={artwork} />
          </div>
          <Carousel images={artwork.otherArtworkImages} />
        </div>
      ) : null}
    </div>
  );
}
