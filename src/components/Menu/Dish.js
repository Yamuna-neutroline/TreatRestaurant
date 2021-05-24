import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logos/logo.png";

const DishContainer = styled.div`
  display: inline-block;
  font-family: "Rhodium Libre", serif;
  width: 90%;
  height: 100%;

  .dish-img img {
    width: 80px;
    height: auto;
    border-radius: 50%;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      transform: translate(0, -4px);
      box-shadow: 3px 4px 10px -5px #fafafa;
      -moz-box-shadow: 3px 4px 10px -5px #505050;
      -webkit-box-shadow: 3px 4px 10px -5px #505050;
      -o-box-shadow: 3px 4px 10px -5px #505050;
      -ms-box-shadow: 3px 4px 10px -5px #505050;
    }
  }
  .nameprice-container {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    padding-bottom: 1rem;
    align-items: baseline;
    margin-left: 1rem;

    @media (max-width: 768px) {
      padding-bottom: 1px;
    }
    .dish-name {
      letter-spacing: 0.1em;
    }
    .dish-line {
      height: 1px;
      background-color: #000;
      width: 45%;
      margin-right: 10%;

      @media (max-width: 1130px) {
        width: 27%;
      }
      @media (max-width: 1130px) {
        width: 16%;
      }
      @media (max-width: 696px) {
        width: 35%;
      }
    }
  }
  .dish-disc {
    padding: 0 1rem;
    @media (max-width: 480px) {
      display: none;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
  }

  @keyframes lineRun {
    0% {
      visibility: hidden;
    }
    29% {
      visibility: hidden;
    }
    30% {
      visibility: visible;
      width: 0%;
    }
    45% {
      width: 5%;
    }
    60% {
      width: 25%;
    }
    100% {
      width: 45%;
    }
  }
  @keyframes nameRun {
    0% {
      color: #333333;
    }
    15% {
      color: #e52233;
    }
    100% {
      color: #e52233;
    }
  }
  @keyframes priceRun {
    0% {
      color: #333333;
    }
    60% {
      color: #333333;
    }
    80% {
      color: #e52233;
    }
    100% {
      color: #e52233;
    }
  }

  .line-run {
    height: 2px;
    background-color: #e52233;
    animation: lineRun 1s linear 1;
  }
  .name-run {
    animation: nameRun 1s linear 1;
  }
  .price-run {
    animation: priceRun 1s linear 1;
  }

  @media (max-width: 768px) {
    .dish-container {
      margin-left: 1.5em;
    }
    .dish-desc {
      line-height: 1.2em;
    }
  }
`;

const Dish = (props) => {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 100 });
  }, []);
  const [hover, setHover] = useState({ hover: false });

  const handleMouseEnter = () => {
    setHover({ hover: true });
  };
  const handleMouseLeave = () => {
    setHover({ hover: false });
  };
  const dishNameClass = hover.hover ? `dish-name name-run` : `dish-name`;
  const dishLineClass = hover.hover ? `dish-line line-run` : `dish-line`;
  const dishPriceClass = hover.hover ? `dish-price price-run` : `dish-price`;

  return (
    <DishContainer data-aos="fade-left">
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <div className="dish-img">
            <img
              src={logo}
              alt="dish-1"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </Grid>
        <Grid item xs={10}>
          <div className="dish-container">
            <div className="nameprice-container">
              <h5 className={dishNameClass}>{props.name}</h5>
              <div className={dishLineClass}></div>
              <h5 className={dishPriceClass}>{props.price}</h5>
            </div>
            <div className="dish-dishcontainer">
              <p className="dish-disc">
                {t(`Menu.${props.reference}.${props.id}`)}
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </DishContainer>
  );
};

export default Dish;
