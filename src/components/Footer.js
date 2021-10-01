import React from "react";

export const Footer = () => {
  return (
    <section id="footer" class="p-3 bg-success">
      <ul class="nav text-center justify-content-center flex-column flex-sm-row">
        <li class="nav-item">
          <a href="/index.html" class="nav-link text-white">
            Github Code
          </a>
        </li>
      </ul>
      <div class="row">
        <div class="col-md-12 copy">
          <p class="text-center text-white">
            Made by Jovani Almaraz - Rick and Morty API.
          </p>
        </div>
      </div>
    </section>
  );
};
