import React from "react";
import "./source.css";

export default function Source() {
  return (
    <small className="source">
      <a
        href="https://github.com/Malkadventurer/weather-react"
        className="nav-link"
        target="_blank"
        id="github"
        rel="noreferrer"
      >
        <i className="fab fa-github" aria-hidden="true"></i> Source code
      </a>
      by Hajnalka Kovacs
    </small>
  );
}
