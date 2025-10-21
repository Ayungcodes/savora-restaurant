import HomePage from "./pages/HomePage"
import { useEffect, useState } from "react";
import { unsplash } from "../src/api/unsplash";


const App = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await unsplash.get("/search/photos", {
          params: { query: "restaurant food", per_page: 12 },
        });
        setPhotos(res.data.results);
      } catch (error) {
        console.error("Unsplash error:", error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <>
      <HomePage photos={photos}/>
    </>
  )
}

export default App
