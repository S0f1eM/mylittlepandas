import React from "react";
import { Jumbotron } from "reactstrap";

const Header = () => {
  return (
    <>
      <Jumbotron
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#00c975",
          color: "#fff",
          padding: "3em 4.5em",
        }}
      >
        <h1>My Little Pandas</h1>
      </Jumbotron>
    </>
  );
};

export default Header;
