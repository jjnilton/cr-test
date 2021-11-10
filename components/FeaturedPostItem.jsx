import styled from "styled-components";
import DOMPurify from "dompurify";
import React from "react";
import ReadMoreIcon from "../public/Vector.svg";
import Image from "next/image";

const StyledFeaturedPostItem = styled.article`
  min-height: 640px;
  grid-column: 1 / -1;
  max-width: 1280px;
  background-color: white;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1280px) {
    min-height: unset;
  }

  @media (max-width: 960px) {
    min-height: 320px;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }

  img {
    width: 100%;
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  &:nth-child(odd) {
    @media (min-width: 1900px) {
      margin-left: 640px;
    }
  }

  & > div:last-child {
    position: relative;
    @media (max-width: 1280px) {
      display: grid;
      justify-content: center;
      align-items: center;
    }
    & > div {
      position: absolute;
      width: 480px;
      height: 315px;
      left: 80px;
      top: 163px;
      @media (max-width: 1280px) {
        position: static;
        height: unset;
        width: unset;
        width: 360px;
      }

      @media (max-width: 760px) {
        width: unset;
        margin: 10px;
      }
    }
  }

  h3 {
    position: absolute;
    width: 214px;
    height: 35px;
    left: 0px;
    top: 24px;

    /* Default Text */
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 34px;

    /* identical to box height */

    /* Text Color */
    color: #2d2d2d;

    white-space: nowrap;

    @media (max-width: 1280px) {
      position: static;
      height: unset;
    }
  }

  h2 {
    position: absolute;
    height: calc(103px - 10px);
    left: 0%;
    right: 0%;
    top: 83px;

    /* Card Title */
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 43px;

    /* Text Gradient */
    color: #f1a10a;
    overflow: hidden;
    text-overflow: clip;
    @media (max-width: 1280px) {
      position: static;
    }
  }

  h4 {
    position: absolute;
    height: 109px;
    left: 0%;
    right: 0%;
    top: 196px;

    /* Default Text */
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 34px;

    /* Text Color */
    color: #2d2d2d;

    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 1280px) {
      position: static;
    }
  }
  overflow: hidden;
  text-overflow: ellipsis;

  button {
    position: absolute;
    width: 24px;
    height: 24px;
    left: 576px;
    top: 576px;
    background-color: unset;
    border: none;
    cursor: pointer;
    @media (max-width: 960px) {
      display: none;
    }
  }
`;

const FeaturedPostItem = (props) => {
  const handleClick = () => {
    if (props.featured) {
      props.homeRef.current.style.transform = "translateX(-100%)";
      props.homeRef.current.style.transition = "transform 1s";
      props.handleFeaturedPostVisibility(true);
      props.handlePostVisibility(false, props.item);
      setTimeout(() => {
        props.handleHomeVisibility(false);
        props.handlePostVisibility(true, props.item);
      }, 1000);
    } else {
      props.handlePostVisibility(true, props.item);
    }
  };

  return (
    <StyledFeaturedPostItem featured={props.featured} onClick={handleClick}>
      <div>
        <img src={props.item.imageUrl} alt={props.item.title} />
      </div>
      <div>
        <div>
          <h3>{props.item.author}</h3>
          <h2
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(props.item.title),
            }}
          ></h2>
          <h4
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(props.item.article),
            }}
          ></h4>
        </div>
        <button onClick={handleClick}>
          <Image
            src={ReadMoreIcon}
            alt="Read more"
            layout="fill"
            quality={100}
          />
        </button>
      </div>
    </StyledFeaturedPostItem>
  );
};

export default FeaturedPostItem;