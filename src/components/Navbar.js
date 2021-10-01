import React from "react";

export const Navbar = ({ brand }) => {
  return (
    <nav class="navbar navbar-success bg-success ">
      <div class="container-fluid ">
        <a class="navbar-brand text-dark text-uppercase" href="/">
          <img
            src={
              "https://i.pinimg.com/originals/7e/fe/c2/7efec23661e049e412f92d131ed1d7e2.png"
            }
            alt=""
            width="100"
            height="80"
            class="d-inline-block"
          ></img>
          {brand}
        </a>
      </div>
    </nav>
  );
};
