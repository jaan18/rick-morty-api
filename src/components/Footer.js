import React from "react";

export const Footer = () => {
  return (
    <section id="footer" class="p-3 bg-success">
      <ul class="nav text-center justify-content-center flex-column flex-sm-row">
        <li class="nav-item">
          <a
            href="https://github.com/jaan18/rick-morty-api"
            class="nav-link text-white"
          >
            Github Code
          </a>
        </li>
      </ul>
      <div class="row">
        <div class="col-md-12 copy">
          <p class="text-center text-white">
            Made by Jovani Almaraz{" "}
            <a href="https://rickandmortyapi.com/">- Rick and Morty API.</a>
          </p>
        </div>
      </div>
    </section>
  );
};
