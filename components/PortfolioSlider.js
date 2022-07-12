import React, { useRef } from "react";
import Image from "next/image";

export default function PortfolioSlider() {
  const portfolioRef = useRef(null);

  const handleScrollLeft=()=>{
      if(portfolioRef.current){
          portfolioRef.current.scrollBy({
              left:-200,
              top:0,
              behaviour:'smooth'
          })
      }
  }

  const handleScrollRight=()=>{
      if(portfolioRef.current){
          portfolioRef.current.scrollBy({
              left:200,
              top:0,
              behaviour:'smooth'
          })
      }
  }
  const portfolioImageOne = "/images/kolomoni.png";
  const portfolioImageTwo = "/capital sage.png";
  const portfolioImageThree = "/fit-min.png";
  const portfolioImageFour = "/dict-min.png";
  const porftfolioImageFive = "/nb-min.png";
  const porftfolioImageSix ='/sage.png';
  const PortfolioData = [
    {
      id: 1,
      portfolioHeader: "Kolomoni",
      portfolioImage: portfolioImageOne,
      portfolioDescription:<a href="https://omokiti.github.io/kolomoni-web/" className="description">Fin-tech website</a>,
    },
    {
      id: 2,
      portfolioHeader: "Capital Sage",
      portfolioImage: portfolioImageTwo,
      portfolioDescription: <a href="https://omokiti.github.io/capital-sage/" className="description">Fin-tech website</a>,
    },
    {
      id: 3,
      portfolioHeader: "Fitz",
      portfolioImage: portfolioImageThree,
      portfolioDescription: <a href="https://fitzapp.netlify.app/" className="description">Fitness app</a>,
    },
    {
      id: 4,
      portfolioHeader: "Dictz",
      portfolioImage: portfolioImageFour,
      portfolioDescription:  <a href="https://dictz.netlify.app/" className="description">Dictionary app</a>,
    },
    {
      id: 5,
      portfolioHeader: "Nba-stat",
      portfolioImage: porftfolioImageFive,
      portfolioDescription: <a href="https://nbastat.netlify.app/" className="description">Nba app</a>,
    },
    {
     id:6,
     portfolioHeader:"Sage",
     portfolioImage:porftfolioImageSix,
     portfolioDescription: <a href="https://sagecloud.ng/" className="description">Sage website</a>,
    }
  ];
  return (
      <>
      <div className="slider">
    <div ref={portfolioRef} className="carousels">
      {
      PortfolioData.map((data, index) => {
       
        return (
            
            <div className="carousel_container" key={index}>
            <div className="carousel_box">
                <h3 className="carousel_header">{data.portfolioHeader}</h3>
                <div className="image_container">
                <img src={data.portfolioImage} alt="portfolio_image" className="image"/>
                   </div>
                <p>{data.portfolioDescription}</p>
            </div>
        </div>
         );
      })}
    </div>
    <div className="controlcontainer">
    <button className="carousel_btn left_button" onClick={handleScrollLeft}>
     
    </button>
    <button className="carousel_btn right_button" onClick={handleScrollRight}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" fill="yellow"/></svg>
    </button>
</div>
</div>
</>
  );
}
