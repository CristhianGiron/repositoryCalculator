import React from 'react';

const ConversionResult = ({ conversions }) => {
  return (
    <div>
      <div className="mb-2">
        <span className="font-bold">Decimal: </span>{conversions.decimal}
      </div>
      <div className="mb-2">
        <span className="font-bold">Binario: </span>{conversions.binary}
      </div>
      <div className="mb-2">
        <span className="font-bold">Octal: </span>{conversions.octal}
      </div>
      <div className="mb-2">
        <span className="font-bold">Hexadecimal: </span>{conversions.hexadecimal}
      </div>
    </div>
  );
};

export default ConversionResult;

