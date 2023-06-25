import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  HeadTitle,
  Title,
  HeadDescription,
  SearchContainer,
  ButtonGrps,
} from "./Styles";

const ViewSearchResults = ({ searchResults, searchValue }) => {
  const [page, setPage] = useState(0);

  const [refinedBooks, setRefinedBooks] = useState(searchResults);

  const loadNextPage = async () => {
    setPage(page + 1);
    console.log(page);
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params: {
            q: searchValue,
            startIndex: Math.abs((page - 1) * 10),
            maxResults: 5,
          },
        }
      );
      console.log(response.data);
      setRefinedBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const previousPage = async () => {
    setPage(page - 1);
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params: {
            q: searchValue,
            startIndex: (page - 1) * 6,
            maxResults: 6,
          },
        }
      );
      console.log(response.data);
      setRefinedBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!refinedBooks.items) {
    return (
      <div>
        <HeadTitle style={{ marginTop: "130px" }}>Search Results</HeadTitle>
        <Title style={{ marginLeft: "50px", marginTop: "40px" }}>
          No results found.
        </Title>
      </div>
    );
  }

  return (
    <div>
      <HeadTitle style={{ marginTop: "130px" }}>Search Results</HeadTitle>
      {refinedBooks.items.map((item) => (
        <SearchContainer key={item.id}>
          <div>
            <Link to={`/book/${searchValue}`}>
              <img
                src={item.volumeInfo?.imageLinks?.smallThumbnail}
                alt="not available"
              />
            </Link>
          </div>
          <div>
            <Title style={{ marginLeft: "50px" }}>
              {item.volumeInfo.title}
            </Title>
            <HeadDescription>
              Author(s):{" "}
              {item.volumeInfo.authors
                ? item.volumeInfo.authors.join(", ")
                : "Unknown"}
            </HeadDescription>
            <HeadDescription>
              Published Date: {item.volumeInfo.publishedDate}
            </HeadDescription>
            {item.volumeInfo.description && (
              <HeadDescription>
                Description: {item.volumeInfo.description}
              </HeadDescription>
            )}
          </div>
        </SearchContainer>
      ))}
      <ButtonGrps>
        <button
          style={{
            marginLeft: "50px",
            marginTop: "40px",
            padding: "0.8rem 0.8rem",
            cursor: "pointer",
            backgroundColor: "black",
          }}
          disabled={page === 0 ? true : false}
          onClick={previousPage}
        >
          Previous Page
        </button>
        <button
          style={{
            marginLeft: "50px",
            marginTop: "40px",
            padding: "0.8rem 0.8rem",
            cursor: "pointer",
            backgroundColor: "black",
          }}
          onClick={loadNextPage}
        >
          Next Page
        </button>
      </ButtonGrps>
    </div>
  );
};

export default ViewSearchResults;
