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
    <div className="container-fluid">
      <div className=" text-white flex-column" style={{ height: "100vh" }}>
        <section className="d-flex justify-content-center align-items-center flex-column h-75">
          <h1 className="mb-5">Bin2Dec Calculator</h1>
          <input
            className="form-control w-50 mb-2 fw-bold"
            onChange={handleChangeBinaryNumber}
            value={binaryNumber}
          />
          <p className="fs-3 fw-bold">{decimalNumber}</p>
        </section>
        <footer className="text-center">
          <p>Realizado por Diego</p>
        </footer>
      </div>
    </div>
  );
};
