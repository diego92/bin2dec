import React, { useState } from "react";

export const Bin2DecApp = () => {
  const [binaryNumber, setBinaryNumber] = useState("");

  const handleChangeBinaryNumber = ({ target }) => {
    setBinaryNumber(target.value);
  };

  console.log(binaryNumber);

  return (
    <div>
      <input onChange={handleChangeBinaryNumber} value={binaryNumber} />
    </div>
  );
};
