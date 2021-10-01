import React from "react";

export const Showcase = () => {
  return (
    <section id="showcase" class="d-flex justify-content-center">
      <div class="overlay">
        <div id="header" class="container text-white text-center">
          <h3 class="display-5 mb-0 mt-5">Rick and Morty Carousel</h3>
          <h1 class="display-1">Made with Reactjs</h1>
          <p class="lead d-none d-md-block">¡See the code here!.</p>
          <button
            id="book"
            class="btn btn-lg btn-success px-5"
            data-toggle="modal"
            data-target="#bookingModal"
          >
            ¡GITHUB REPOSITORY!
          </button>
        </div>
      </div>
    </section>
  );
};
