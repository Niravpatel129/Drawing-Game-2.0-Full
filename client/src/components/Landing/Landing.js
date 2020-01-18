import React from "react";
import "./Landing.scss";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <section className="Landing">
      <h1>Landing</h1>
      <button>
        <Link to="/canvas">Go to Canvas</Link>
      </button>
    </section>
  );
}

export default Landing;