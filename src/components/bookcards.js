import React, { useRef, useEffect } from "react";

import {
  PreviousButton,
  NextButton,
  BorrowListButton,
  BooksList,
  Title,
  Card,
  CardBody,
  CardContainer,
  CardImage,
  CardName,
  CardDescription,
} from "./Styles";

import leftArrowImage from "../images/left-arrow.png";
import rightArrowImage from "../images/right-arrow.png";
import book1 from "../images/age-of-vice-book.png";
import book2 from "../images/city-under-one-roof-book.png";
import book3 from "../images/the-world-and-all-that-it-holds-book.png";
import book4 from "../images/maame-book.png";
import book5 from "../images/essex-dogs-book.png";
import book6 from "../images/what-happened-to-ruthy-ramirez-book.png";
import book7 from "../images/a-death-at-the-party-book.png";
import book8 from "../images/the-god-of-endings-book.png";
import book9 from "../images/now-you-see-us-book.png";
import book10 from "../images/dust-child-book.png";
import book11 from "../images/the-mostly-true-story-of-tanner-and-louise-book.png";
import book12 from "../images/homecoming-book.png";
import book13 from "../images/symphony-of-secrets-book.png";
import book14 from "../images/silver-alert-book.png";
import book15 from "../images/only-love-can-hurt-like-this-book.png";
import book16 from "../images/paper-names-book.png";
import book17 from "../images/the-collected-regrets-of-clover-book.png";
import book18 from "../images/yellowface-book.png";
import book19 from "../images/the-second-ending-book.png";
import book20 from "../images/the-wishing-game-book.png";
import book21 from "../images/same-time-next-summer-book.png";
import book22 from "../images/banyan-moon-book.png";
import { bookData } from "./Books";
import { Link } from "react-router-dom";

const BookCards = () => {
  useEffect(() => {
    const handleResize = () => {
      cardContainerRef1.scrollLeft = 0;
      cardContainerRef2.scrollLeft = 0;
      cardContainerRef3.scrollLeft = 0;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardContainerRef1 = useRef(null);
  const cardContainerRef2 = useRef(null);
  const cardContainerRef3 = useRef(null);

  const handleNextClick = (ref) => {
    const containerWidth = ref.current.offsetWidth;
    ref.current.scrollLeft += containerWidth + 20;
  };

  const handlePreviousClick = (ref) => {
    const containerWidth = ref.current.offsetWidth;
    ref.current.scrollLeft -= containerWidth + 20;
  };

  return (
    <div>
      <BooksList>
        <Title style={{ marginLeft: "80px", marginTop: "40px" }}>
          Top Trending Books of 2023
        </Title>
        <PreviousButton onClick={() => handlePreviousClick(cardContainerRef1)}>
          <img src={leftArrowImage} alt="Left arrow" />
        </PreviousButton>
        <NextButton onClick={() => handleNextClick(cardContainerRef1)}>
          <img src={rightArrowImage} alt="Right arrow" />
        </NextButton>
        <CardContainer ref={cardContainerRef1}>
          {bookData.map((book) => (
            <Card>
              <CardImage src={book.image} alt={book.title} />
              <CardBody>
                <CardName>{book.title}</CardName>
                <CardDescription>{book.subject}</CardDescription>
                <BorrowListButton>Borrow Book</BorrowListButton>
              </CardBody>
            </Card>
          ))}
        </CardContainer>
      </BooksList>

      <BooksList>
        <Title style={{ marginLeft: "80px", marginTop: "40px" }}>
          Famous Books
        </Title>
        <PreviousButton onClick={() => handlePreviousClick(cardContainerRef1)}>
          <img src={leftArrowImage} alt="Left arrow" />
        </PreviousButton>
        <NextButton onClick={() => handleNextClick(cardContainerRef1)}>
          <img src={rightArrowImage} alt="Right arrow" />
        </NextButton>
        <CardContainer ref={cardContainerRef1}>
          {bookData.map((book) => (
            <Card>
              <CardImage src={book.image} alt={book.title} />
              <CardBody>
                <CardName>{book.title}</CardName>
                <CardDescription>{book.subject}</CardDescription>
                <BorrowListButton>Borrow Book</BorrowListButton>
              </CardBody>
            </Card>
          ))}
        </CardContainer>
      </BooksList>

      <BooksList>
        <Title style={{ marginLeft: "80px", marginTop: "40px" }}>
          Top moving
        </Title>
        <PreviousButton onClick={() => handlePreviousClick(cardContainerRef1)}>
          <img src={leftArrowImage} alt="Left arrow" />
        </PreviousButton>
        <NextButton onClick={() => handleNextClick(cardContainerRef1)}>
          <img src={rightArrowImage} alt="Right arrow" />
        </NextButton>
        <CardContainer ref={cardContainerRef1}>
          {bookData.map((book) => (
            <Card>
              <CardImage src={book.image} alt={book.title} />
              <CardBody>
                <CardName>{book.title}</CardName>
                <CardDescription>{book.subject}</CardDescription>
                <BorrowListButton>Borrow Book</BorrowListButton>
              </CardBody>
            </Card>
          ))}
        </CardContainer>
      </BooksList>

      <BooksList>
        <Title style={{ marginLeft: "80px", marginTop: "40px" }}>
          Best Selling
        </Title>
        <PreviousButton onClick={() => handlePreviousClick(cardContainerRef1)}>
          <img src={leftArrowImage} alt="Left arrow" />
        </PreviousButton>
        <NextButton onClick={() => handleNextClick(cardContainerRef1)}>
          <img src={rightArrowImage} alt="Right arrow" />
        </NextButton>
        <CardContainer ref={cardContainerRef1}>
          {bookData.map((book) => (
            <Card>
              <CardImage src={book.image} alt={book.title} />
              <CardBody>
                <CardName>{book.title}</CardName>
                <CardDescription>{book.subject}</CardDescription>
                <BorrowListButton>Borrow Book</BorrowListButton>
              </CardBody>
            </Card>
          ))}
        </CardContainer>
      </BooksList>
    </div>
  );
};

export default BookCards;
