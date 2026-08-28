# Ex05 Image Carousel
## Date: 28/08/2026

## AIM
To create a Image Carousel using React 

## ALGORITHM
### STEP 1 Initial Setup:
Input: A list of images to display in the carousel.

Output: A component displaying the images with navigation controls (e.g., next/previous buttons).

### Step 2 State Management:
Use a state variable (currentIndex) to track the index of the current image displayed.

The carousel starts with the first image, so initialize currentIndex to 0.

### Step 3 Navigation Controls:
Next Image: When the "Next" button is clicked, increment currentIndex.

If currentIndex is at the end of the image list (last image), loop back to the first image using modulo:
currentIndex = (currentIndex + 1) % images.length;

Previous Image: When the "Previous" button is clicked, decrement currentIndex.

If currentIndex is at the beginning (first image), loop back to the last image:
currentIndex = (currentIndex - 1 + images.length) % images.length;

### Step 4 Displaying the Image:
The currentIndex determines which image is displayed.

Using the currentIndex, display the corresponding image from the images list.

### Step 5 Auto-Rotation:
Set an interval to automatically change the image after a set amount of time (e.g., 3 seconds).

Use setInterval to call the nextImage() function at regular intervals.

Clean up the interval when the component unmounts using clearInterval to prevent memory leaks.

## PROGRAM
```
app.jsx

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


```

```
app.css

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  text-align: center;
  margin-top: 50px;
}

.carousel {
  position: relative;
  width: 700px;
  height: 400px;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  padding: 15px 20px;
  font-size: 30px;
  cursor: pointer;
  border-radius: 50%;
  z-index: 1;
}

.left {
  left: 15px;
}

.right {
  right: 15px;
}

```

## OUTPUT
<img width="1919" height="1155" alt="image" src="https://github.com/user-attachments/assets/83fbd954-1976-46c1-a28f-a9cdf328398a" />

<img width="1919" height="1154" alt="image" src="https://github.com/user-attachments/assets/673de092-2c00-45c6-80ce-73d5fa8e2dbf" />

<img width="1919" height="1146" alt="image" src="https://github.com/user-attachments/assets/e5b38596-82ca-436b-821f-9790a3ae61bf" />

## RESULT
The program for creating Image Carousel using React is executed successfully.
