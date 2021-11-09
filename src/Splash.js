import React, { useState, useEffect } from "react";
import App from "./App";
import logoSplash from "./assets/logoSplash.svg";
import styled from "styled-components";

const Override = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 1000;
  align-items: center;
  background: #e86e5a;
`;

const Splash = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return isLoading ? (
    <Override>
      <img
        src={logoSplash}
        alt={"Logo da Rappi4"}
      />
    </Override>
  ) : (
    <App />
  );
};

export default Splash;
