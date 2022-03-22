import React from "react";

function CopyRight() {
  return (
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      © 2022 Copyright:{" "}
      <a className="text-white" href="https://github.com/yigittopm">
        github.com/yigittopm
      </a>
    </div>
  );
}

export default CopyRight;
