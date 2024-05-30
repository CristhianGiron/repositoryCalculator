import React, { useState } from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import {
    Checkbox,
    List,
    ListItem,
    ListItemPrefix,
} from '@material-tailwind/react';

const ConversionTable = ({ rows }) => {
    const [numRows, setNumRows] = useState(rows);

    const conversions = Array.from({ length: numRows }, (_, index) => {
        const decimal = index + 1;
        return {
            decimal,
            binary: decimal.toString(2),
            octal: decimal.toString(8),
            hexadecimal: decimal.toString(16).toUpperCase(),
        };
    });

    const [checkedItems, setCheckedItems] = useState({
        binary: true,
        octal: true,
        hexadecimal: true,
    });

    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target;

        // Solo actualizar el estado si al menos un checkbox está activo
        const activeItems = Object.values(checkedItems).filter(item => item).length;
        if (!checked && activeItems <= 1) {
            return;
        }

        setCheckedItems((prevState) => ({
            ...prevState,
            [id]: checked,
        }));
    };

    const columns = [
        { key: 'binary', label: 'Binary' },
        { key: 'octal', label: 'Octal' },
        { key: 'hexadecimal', label: 'Hex' },
    ];

    return (
        <div className="p-6 pl-0 lg:pl-6">
            <div className="grid lg:grid-cols-3 grid-cols-1">
                <div className='w-52'>
                    <label className="block text-sm font-medium text-gray-700">Numero de filas</label>
                    <input
                        type="text"
                        value={numRows}
                        onChange={(e) => setNumRows(parseInt(e.target.value) || 0)}
                        className="mt-1 block w-52 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <List className="lg:pl-16 pl-0 flex-row mt-[15px] h-full w-full lg:col-span-2">
                    {columns.map((column) => (
                        <ListItem className="p-0 w-auto max-h-10" key={column.key}>
                            <label
                                htmlFor={column.key}
                                className="flex w-full cursor-pointer items-center px-3 py-2"
                            >
                                <ListItemPrefix className="mr-3">
                                    <Checkbox
                                        id={column.key}
                                        ripple={false}
                                        checked={checkedItems[column.key]}
                                        onChange={handleCheckboxChange}
                                        className="hover:before:opacity-0"
                                        containerProps={{
                                            className: 'p-0',
                                        }}
                                    />
                                </ListItemPrefix>
                                <Typography color="blue-gray" className="font-medium">
                                    {column.label}
                                </Typography>
                            </label>
                        </ListItem>
                    ))}
                </List>
            </div>

            <Card>
                <CardBody className='p-0 m-0'>
                    <table className="min-w-[42vw] p-0">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Decimal</th>
                                {columns.map((column) => (
                                    checkedItems[column.key] && (
                                        <th key={column.key} className="py-2 px-4 border-b">{column.label}</th>
                                    )
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {conversions.map((conv, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 border-b">{conv.decimal}</td>
                                    {columns.map((column) => (
                                        checkedItems[column.key] && (
                                            <td key={column.key} className="py-2 px-4 border-b">{conv[column.key]}</td>
                                        )
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </div>
    );
};

export default ConversionTable;
