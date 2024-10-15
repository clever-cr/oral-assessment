import React, { useState } from 'react';

export const TemperatureConverter: React.FC = () => {
    const [celsius, setCelsius] = useState<number>(0);
    const [fahrenheit, setFahrenheit] = useState<number>(32);


    const convertToFahrenheit = (celsius: number): number => (celsius * 9) / 5 + 32;


    const convertToCelsius = (fahrenheit: number): number => ((fahrenheit - 32) * 5) / 9;


    const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCelsius = parseFloat(e.target.value) || 0;
        setCelsius(newCelsius);
        setFahrenheit(convertToFahrenheit(newCelsius));
    };

  
    const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFahrenheit = parseFloat(e.target.value) || 0;
        setFahrenheit(newFahrenheit);
        setCelsius(convertToCelsius(newFahrenheit));
    };

    return (
        <div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h1 className="text-xl font-semibold text-center mb-6">Temperature Converter</h1>

            <div className="mb-4">
                <label className="block mb-2 text-gray-700 font-medium">Celsius</label>
                <input
                    type="number"
                    value={celsius}
                    onChange={handleCelsiusChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2 text-gray-700 font-medium">Fahrenheit</label>
                <input
                    type="number"
                    value={fahrenheit}
                    onChange={handleFahrenheitChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    );
};
