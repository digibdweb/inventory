'use client';

import { useState } from 'react';
import BarcodeScannerInput from '@/app/components/BarcodeScannerInput';

export default function Page() {
  const [scanned, setScanned] = useState('');

  return (
    <div>
      <h1><b>Scan Hardware Barcode</b></h1>
      <BarcodeScannerInput onScan={setScanned} />
      {<p>Scanned: {scanned}</p>}
      
    </div>
  );
}
