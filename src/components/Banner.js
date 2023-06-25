import React from "react";
import {
  BannerContainer,
  BannerDescp,
  BannerHeading,
  BannerInnerText,
} from "./Styles";
import bbImage from "../assets/bb.jpg";

const Banner = () => {
  return (
    <>
      <BannerContainer
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url(${bbImage})`,
        }}
      >
        <BannerInnerText>
          <BannerHeading>Atomic Habit</BannerHeading>

          <BannerDescp>
            Over many missions and against impossible odds, Dom Toretto and his
            family have outsmarted, out-nerved and outdriven every foe in their
            path. Now, they confront the most lethal opponent they've ever
            faced: A terrifying threat emerging from the shadows of the past
          </BannerDescp>
        </BannerInnerText>
      </BannerContainer>
    </>
  );
};

export default Banner;
