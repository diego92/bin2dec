import { useEffect, useState } from "react";
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
    <div className="bg-primary bg-gradient" style={{ height: "100vh" }}>
      <header className="d-flex justify-content-center pt-4">
        <h1 className="fst-italic text-white">Bin2Dec Calculator</h1>
      </header>
      <div className="container h-75 d-flex justify-content-center align-items-center">
        <section className="text-center">
          <input
            className="form-control fw-bold"
            onChange={handleChangeBinaryNumber}
            value={binaryNumber}
          />
          <h3 className="fw-bold mt-4 text-white">{decimalNumber}</h3>
        </section>
      </div>
      {/* <footer className="bg-secondary bg-gradient text-center fixed-bottom text-white">
        <p>Realizado por Diego</p>
      </footer> */}
      {/* <div className=" text-white flex-column" style={{ height: "100vh" }}>
        
        
      </div> */}
    </div>
  );
};
