import React from "react";
import ReactLoading from "react-loading";

const Loader = () => {
  return (
    <div id="loader">
      <ReactLoading id="spinner"
        type="spinningBubbles"
        height={100}
        width={100}
      />
    </div>
  );
};

export default Loader;
