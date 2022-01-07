import React, { useState, useEffect } from "react";

const Home = () => {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=3wygIiXKejuahRqAgG6WRHMfA999DW3XmSIiYTgK`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  if (!photoData)
    return (
      <div>
        <h1>No data fetched</h1>
      </div>
    );
  return (
    <div>
      <div className="nasa-photo">
        <img
          src={photoData.url}
          alt={photoData.title}
          className="photo"
        />
        <div>
          <h1>{photoData.title}</h1>
          <p className="">{photoData.date}</p>
          <p className="">{photoData.explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
