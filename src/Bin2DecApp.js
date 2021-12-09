import React, { useEffect, useState } from "react";

export const Bin2DecApp = () => {
  const [binaryNumber, setBinaryNumber] = useState("");
  const [decimalNumber, setDecimalNumber] = useState("");

  useEffect(() => {
    if (binaryNumber) {
      setDecimalNumber(parseInt(binaryNumber, 2));
    } else {
      setDecimalNumber("");
    }
  }, [binaryNumber]);

  const handleChangeBinaryNumber = ({ target }) => {
    setBinaryNumber(target.value);
  };

  return (
    <div>
      <input onChange={handleChangeBinaryNumber} value={binaryNumber} />
      <p>{decimalNumber}</p>
    </div>
  );
};
