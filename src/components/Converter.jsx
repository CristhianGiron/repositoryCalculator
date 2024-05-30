import React, { useState } from 'react';
import ConversionResult from './ConversionResult';
import ConversionSteps from './ConversionSteps';
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import ConversionTable from './ConversionTable';

const Converter = () => {
  const [inputValue, setInputValue] = useState('');
  const [base, setBase] = useState('decimal');
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  const convert = (value, base) => {
    let decimalValue;

    // Convertir a decimal
    if (base === 'decimal') {
      decimalValue = parseInt(value, 10);
    } else if (base === 'binary') {
      decimalValue = parseInt(value, 2);
    } else if (base === 'octal') {
      decimalValue = parseInt(value, 8);
    } else if (base === 'hexadecimal') {
      decimalValue = parseInt(value, 16);
    }

    if (isNaN(decimalValue)) return '';

    return {
      decimal: decimalValue.toString(10),
      binary: decimalValue.toString(2),
      octal: decimalValue.toString(8),
      hexadecimal: decimalValue.toString(16).toUpperCase(),
    };
  };

  const getSteps = (value, base) => {
    let steps = [];
    let decimalValue;

    if (base === 'binary') {
      decimalValue = parseInt(value, 2);
      let tempDecimal = decimalValue;
      steps.push(`Convertir ${value} de binario a decimal:`);
      for (let i = 0; i < value.length; i++) {
        let bit = parseInt(value[value.length - 1 - i], 10);
        steps.push(`(${bit} * 2^${i})`);
      }
      steps.push(`= ${decimalValue}`);
    } else if (base === 'octal') {
      decimalValue = parseInt(value, 8);
      let tempDecimal = decimalValue;
      steps.push(`Convertir ${value} de octal a decimal:`);
      for (let i = 0; i < value.length; i++) {
        let digit = parseInt(value[value.length - 1 - i], 10);
        steps.push(`(${digit} * 8^${i})`);
      }
      steps.push(`= ${decimalValue}`);
    } else if (base === 'hexadecimal') {
      decimalValue = parseInt(value, 16);
      let tempDecimal = decimalValue;
      steps.push(`Convertir ${value} de hexadecimal a decimal:`);
      for (let i = 0; i < value.length; i++) {
        let digit = parseInt(value[value.length - 1 - i], 16);
        steps.push(`(${digit} * 16^${i})`);
      }
      steps.push(`= ${decimalValue}`);
    } else if (base === 'decimal') {
      decimalValue = parseInt(value, 10);
    }

    if (!isNaN(decimalValue)) {
      // Convertir de decimal a binario
      steps.push(`Convertir ${decimalValue} de decimal a binario:`);
      let binarySteps = [];
      let tempDecimal = decimalValue;
      let binary = "";
      while (tempDecimal > 0) {
        let remainder = tempDecimal % 2;
        binary = remainder + binary;
        binarySteps.push(`${tempDecimal} / 2 = ${Math.floor(tempDecimal / 2)} (R: ${remainder})`);
        tempDecimal = Math.floor(tempDecimal / 2);
      }
      binarySteps.push(`= ${binary}`);
      steps = steps.concat(binarySteps, [""]);

      // Convertir de decimal a octal
      steps.push(`Convertir ${decimalValue} de decimal a octal:`);
      let octalSteps = [];
      tempDecimal = decimalValue;
      let octal = "";
      while (tempDecimal > 0) {
        let remainder = tempDecimal % 8;
        octal = remainder + octal;
        octalSteps.push(`${tempDecimal} / 8 = ${Math.floor(tempDecimal / 8)} (R: ${remainder})`);
        tempDecimal = Math.floor(tempDecimal / 8);
      }
      octalSteps.push(`= ${octal}`);
      steps = steps.concat(octalSteps, [""]);

      // Convertir de decimal a hexadecimal
      steps.push(`Convertir ${decimalValue} de decimal a hexadecimal:`);
      let hexSteps = [];
      tempDecimal = decimalValue;
      let hex = "";
      while (tempDecimal > 0) {
        let remainder = tempDecimal % 16;
        hex = remainder.toString(16).toUpperCase() + hex;
        hexSteps.push(`${tempDecimal} / 16 = ${Math.floor(tempDecimal / 16)} (R: ${remainder.toString(16).toUpperCase()})`);
        tempDecimal = Math.floor(tempDecimal / 16);
      }
      hexSteps.push(`= ${hex}`);
      steps = steps.concat(hexSteps);
    }

    return steps;
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleBaseChange = (e) => {
    setBase(e.target.value);
  };

  const conversions = convert(inputValue, base);
  const steps = getSteps(inputValue, base);

  return (
    <div className='grid lg:grid-cols-2 grid-cols-1'>
      <div className="bg-white p-6 lg:pl-6 pl-0 pr-0 lg:pr-6 rounded shadow-md lg:w-[45vw] w-full">
        <div >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Valor</label>
            <div className='flex mb-10'>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md rounded-r-none shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <select
                value={base}
                onChange={handleBaseChange}
                className="mt-1 block w-48 p-2 bg-gray-900 text-white border border-gray-300 rounded-md rounded-l-none shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              > <option value="decimal">Decimal</option>
                <option value="binary">Binario</option>
                <option value="octal">Octal</option>
                <option value="hexadecimal">Hexadecimal</option>
              </select>
            </div>


          </div>

          {conversions && <ConversionResult conversions={conversions} />}

          {

            conversions && <div>
              <Button className={`capitalize mt-10 transition-all duration-700 absolute -z-50 ${open ? 'w-full' : ''}`} onClick={toggleOpen}>Pasos de conversion</Button>
              <Collapse open={open}>
                <Card className="my-4 mx-auto w-full">
                  <CardBody>
                    {steps && <ConversionSteps steps={steps} />}
                  </CardBody>
                </Card>
              </Collapse>
            </div>}
          <div className='text-2xl text-black'>Video</div>
          <iframe className='w-full h-auto' src="https://www.youtube.com/embed/G3o2Yv7M4pM" title="Conversiones entre sistemas de numeración (Binario, octal y hexadecimal a decimal)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>

      </div>

      <ConversionTable rows={10} />


    </div>
  );
};

export default Converter;

