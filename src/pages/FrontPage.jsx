import React from "react";
import frontPhoto from "../assets/images/frontpage.webp";
import "./FrontPage.css";
const FrontPage = () => {
  return (
    <section className="frontScreen">
      <div className="slogan">
        <h2>Unleash</h2>
        <h2>Your</h2>
        <h2>Urban</h2>
        <h2>Style</h2>
      </div>
      <button>View Collection</button>
    </section>
  );
};

export default FrontPage;
