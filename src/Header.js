import React from "react";
import "./header.css";
import { ReactComponent as Logo } from "./img/logo.svg";

export default function Header() {
  return (
    <div className="title">
      <span>
        <Logo width="90px" /> Weather
      </span>
    </div>
  );
}
