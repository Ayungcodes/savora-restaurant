import { useEffect, useState } from "react";
import { unsplash } from "../api/unsplash";

const Gallery = () => {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await unsplash.get("/search/photos", {
          params: { query: "restaurant food", per_page: 12 },
        });
        setPhoto(res.data.results);
      } catch (error) {
        console.error("Unsplash error:", error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {photo .map((photo) => (
        <img
          key={photo.id}
          src={photo.urls.small}
          alt={photo.alt_description}
          className="rounded-lg shadow-md hover:scale-105 duration-300"
        />
      ))}
    </div>
  );
};

export default Gallery;
