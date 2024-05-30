import React, { useState } from 'react';
import { Card, CardBody, Input, Button, Typography } from '@material-tailwind/react';

const BinaryCalculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleCalculation = (operation) => {
        const bin1 = parseInt(num1, 2);
        const bin2 = parseInt(num2, 2);
        let res;

        switch (operation) {
            case 'add':
                res = bin1 + bin2;
                break;
            case 'subtract':
                res = bin1 - bin2;
                break;
            case 'multiply':
                res = bin1 * bin2;
                break;
            case 'divide':
                res = Math.floor(bin1 / bin2);
                break;
            default:
                return;
        }

        setResult(res.toString(2));
    };

    // Convierte un número binario a decimal
    const binaryToDecimal = (binary) => {
        return parseInt(binary, 2);
    };

    // Convierte un número binario a hexadecimal
    const binaryToHexadecimal = (binary) => {
        const decimal = binaryToDecimal(binary);
        return decimal.toString(16).toUpperCase();
    };

    // Convierte un número binario a octal
    const binaryToOctal = (binary) => {
        const decimal = binaryToDecimal(binary);
        return decimal.toString(8);
    };


    return (
        <div>
            <Card className="w-full max-w-md mx-auto mt-10">
                <CardBody>
                    <Typography variant="h4" className="text-center mb-4">Binary Calculator</Typography>
                    <div className="mb-4">
                        <Input
                            type="text"
                            placeholder="Enter first binary number"
                            value={num1}
                            onChange={(e) => setNum1(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <Input
                            type="text"
                            placeholder="Enter second binary number"
                            value={num2}
                            onChange={(e) => setNum2(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-between mb-4">
                        <Button onClick={() => handleCalculation('add')}>Add</Button>
                        <Button onClick={() => handleCalculation('subtract')}>Subtract</Button>
                        <Button onClick={() => handleCalculation('multiply')}>Multiply</Button>
                        <Button onClick={() => handleCalculation('divide')}>Divide</Button>
                    </div>
                    {result && (
                        <div>
                            <div className="mb-2">
                                <span className="font-bold">Binario: </span>{result}
                            </div>
                            <div className="mb-2">
                                <span className="font-bold">Decimal: </span>{binaryToDecimal(result)}
                            </div>
                            <div className="mb-2">
                                <span className="font-bold">Octal: </span>{binaryToOctal(result)}
                            </div>
                            <div className="mb-2">
                                <span className="font-bold">Hexadecimal: </span>{binaryToHexadecimal(result)}
                            </div>
                        </div>
                    )}
                </CardBody>
            </Card>
        </div>

    );
};

export default BinaryCalculator;

