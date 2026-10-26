import React, { useEffect, useState } from "react";
import "./App.css";

function App() {

  // ================= IMAGE SLIDER =================
  const sliderImages = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === sliderImages.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };


  // ================= IMAGE ROTATOR =================
  const rotatorImages = [
    "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
  ];

  const [currentRotation, setCurrentRotation] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentRotation((prev) =>
        prev === rotatorImages.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);

  }, []);


  // ================= COUNTER =================
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };


  // ================= UI =================
  return (
    <div className="container">

      <h1>Day 9 - React Mini Projects</h1>


      {/* IMAGE SLIDER */}
      <section className="card">

        <h2>🖼️ Image Slider</h2>

        <img
          src={sliderImages[currentSlide]}
          alt="slider"
          className="slider-image"
        />

        <div className="buttons">
          <button onClick={previousSlide}>
            Previous
          </button>

          <button onClick={nextSlide}>
            Next
          </button>
        </div>

        <p>
          Image {currentSlide + 1} of {sliderImages.length}
        </p>

      </section>


      {/* IMAGE ROTATOR */}
      <section className="card">

        <h2>🔄 Automatic Image Rotator</h2>

        <img
          src={rotatorImages[currentRotation]}
          alt="rotator"
          className="rotator-image"
        />

        <p>Image changes automatically every 2 seconds</p>

      </section>


      {/* COUNTER */}
      <section className="card">

        <h2>🔢 Counter</h2>

        <div className="counter">
          {count}
        </div>

        <div className="buttons">

          <button onClick={decrease}>
            −
          </button>

          <button onClick={reset}>
            Reset
          </button>

          <button onClick={increase}>
            +
          </button>

        </div>

      </section>

    </div>
  );
}

export default App;