
import React, { useState } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://via.placeholder.com/600x400?text=Image+1",
        "https://via.placeholder.com/600x400?text=Image+2",
        "https://via.placeholder.com/600x400?text=Image+3",
        "https://via.placeholder.com/600x400?text=Image+4",
    ];

    const showSlide = (index) => {
        if (index >= images.length) {
            setCurrentIndex(0);
        } else if (index < 0) {
            setCurrentIndex(images.length - 1);
        } else {
            setCurrentIndex(index);
        }
    };

    return (
        <div className="slider">
            <div className="slides" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <img key={index} src={image} className="slide" alt={`Image ${index + 1}`} />
                ))}
            </div>
            <button onClick={() => showSlide(currentIndex - 1)} className="prev">Prev</button>
            <button onClick={() => showSlide(currentIndex + 1)} className="next">Next</button>
        </div>
    );
};

export default ImageSlider;



// .slider {
//     position: relative;
//     overflow: hidden;
//     width: 100%;
//     max-width: 600px;
//     margin: auto;
// }
// .slides {
//     display: flex;
//     transition: transform 0.5s ease;
// }
// .slide {
//     min-width: 100%;
//     box-sizing: border-box;
// }
// .prev, .next {
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     background-color: rgba(0, 0, 0, 0.5);
//     color: white;
//     border: none;
//     padding: 10px;
//     cursor: pointer;
// }
// .prev {
//     left: 10px;
// }
// .next {
//     right: 10px;
// }
