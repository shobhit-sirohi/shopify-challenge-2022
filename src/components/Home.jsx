import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import loading from "../images/giphy.gif";
import ENV from "../../env";

const Home = () => {
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?count=5&api_key=${ENV.apodKey}`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  //Loading screen
  if (photoData.length === 0)
    return (
      <div className="flex flex-col items-center justify-center ">
        <img src={loading} alt="loading gif" />
        <h2 className="text-2xl">
          Loading Data from Space...
        </h2>
      </div>
    );

  return (
    <div className="pb-10 space-y-10 xl:space-y-20">
      {photoData
        .map((item) => (
          <Card
            date={item.date}
            exp={item.explanation}
            url={item.url}
            title={item.title}
            copy={item.copyright}
            hdurl={item.hdurl}
            media={item.media_type}
          />
        ))
        .reverse()}
    </div>
  );
};

export default Home;
