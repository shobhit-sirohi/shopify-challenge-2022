import React, { useState, useEffect } from "react";
import ENV from "../../env";
import Card from "../components/Card";
import loading from "../images/giphy.gif";

const Today = () => {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?&api_key=${ENV.apodKey}`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  // Loading screen
  if (!photoData)
    return (
      <div className="flex flex-col items-center justify-center ">
        <img src={loading} alt="loading gif" />
        <h2 className="text-2xl">
          Loading Data from Space...
        </h2>
      </div>
    );

  return (
    <div className="p-4 pb-10 space-y-10 xl:space-y-20">
      <Card
        date={photoData.date}
        exp={photoData.explanation}
        url={photoData.url}
        title={photoData.title}
        copy={photoData.copyright}
        hdurl={photoData.hdurl}
        media={photoData.media_type}
      />
    </div>
  );
};

export default Today;
