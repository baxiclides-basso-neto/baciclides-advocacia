import React from "react";
import backgroundImage from "../../assets/images/bgimg.avif";

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => {
  const styles = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return <div style={styles}>{children}</div>;
};

export default Wrapper;
