import React, { useEffect } from "react";
import {} from "../components/Styles";
import NavbarHead from "../components/NavbarHead";
import FooterBottom from "../components/FooterBottom";
import { useLocation } from "react-router-dom";
import ViewSearchResults from "../components/ViewSearchResults";

import { PageContainer, ContentContainer } from "../components/Styles";

const SearchPage = () => {
  const location = useLocation();
  const searchResults = location.state.searchResults;
  const searchValue = location.state.searchValue;

  useEffect(() => {
    console.log(searchResults, searchValue, location.state);
  }, []);

  return (
    <div>
      <div>
        <NavbarHead />
        <PageContainer>
          <ContentContainer>
            {searchResults && (
              <ViewSearchResults
                searchResults={searchResults}
                searchValue={searchValue}
              />
            )}
          </ContentContainer>
          <FooterBottom />
        </PageContainer>
      </div>
    </div>
  );
};

export default SearchPage;
