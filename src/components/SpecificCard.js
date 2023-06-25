import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
const SpecificCard = () => {
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
  }, []);
  return (
    <>
      <h1>SpecificCard</h1>
    </>
  );
};

export default SpecificCard;
