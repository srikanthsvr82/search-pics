import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

const Header = ({ history, handleSubmit }) => {
  return (
    <div>
      <h1>Snapshot</h1>
      <Form history={history} handleSubmit={handleSubmit}></Form>
      <Navigation />
    </div>
  );
};

export default Header;
