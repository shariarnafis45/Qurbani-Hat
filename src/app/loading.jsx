import React from "react";
import { PropagateLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="min-h-[90vh] flex justify-center items-center">
      <PropagateLoader color="#2A3D2D" />
    </div>
  );
};

export default loading;
