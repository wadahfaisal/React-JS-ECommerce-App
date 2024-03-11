import React from "react";
// import styled from "styled-components";
const Footer = () => {
  return (
    <footer className="main-footer">
      <h5>
        &copy; {new Date().getFullYear()}
        <span style={{ color: "#fff" }}> Fashe </span>
      </h5>
      <h5>All rights reserved</h5>
    </footer>
  );
};

// const Wrapper = styled.footer`
// `

export default Footer;
