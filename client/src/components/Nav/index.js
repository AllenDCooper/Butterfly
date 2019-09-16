import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <strong>Butterfly</strong>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Streams
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Assignments
            </a>
          </li>
        </ul>
        <span class="navbar-text">learning made easy</span>
      </div>
    </nav>
  );
}

export default Nav;
