import React, { useEffect, useState } from "react";
import isBinaryString from "validate.io-binary-string";

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
    if (isBinaryString(target.value)) {
      setBinaryNumber(target.value);
    }

    if (!target.value) {
      setBinaryNumber("");
    }
  };

  return (
    <div>
      <input onChange={handleChangeBinaryNumber} value={binaryNumber} />
      <p>{decimalNumber}</p>
    </div>
  );
};
