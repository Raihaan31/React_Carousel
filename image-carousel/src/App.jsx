import { useState } from "react";
import "./App.css";

function App() {
  const images = [
  "https://picsum.photos/id/1015/800/500",
  "https://picsum.photos/id/1022/800/500",
  "https://picsum.photos/id/1003/800/500"
];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex(
      (currentIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="container">
      <h1>Image Carousel</h1>

      <div className="carousel">
        <button className="btn left" onClick={previousImage}>
          ❮
        </button>

        <img
          src={images[currentIndex]}
          alt="Carousel"
          className="carousel-image"
        />

        <button className="btn right" onClick={nextImage}>
          ❯
        </button>
      </div>

      <p>
        Image {currentIndex + 1} of {images.length}
      </p>
    </div>
  );
}

export default App;