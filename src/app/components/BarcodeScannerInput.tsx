'use client'; // for Next.js App Router

import { useRef, useEffect, useState } from 'react';

export default function BarcodeScannerInput({ onScan }) {
  const inputRef = useRef(null);
  const [barcode, setBarcode] = useState('');

  useEffect(() => {
    // Auto-focus on input when component mounts
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onScan(barcode);
      setBarcode(''); // reset for next scan
    }
  };
  const handleSubmit = () => {
    onScan(barcode);
    setBarcode('');
  };
  return (
<div className="flex flex-col items-center space-y-4">
      <input
        ref={inputRef}
        value={barcode}
        onChange={(e) => setBarcode(e.target.value)}
        onKeyDown={handleKeyDown}
        className="barcode-input w-full max-w-xs p-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        autoFocus
        placeholder="Scan Barcode"
        type="text"
      />
      <button
        onClick={handleSubmit}
        className="w-full max-w-xs py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
      >
        Submit
      </button>
    </div>
  );
}
