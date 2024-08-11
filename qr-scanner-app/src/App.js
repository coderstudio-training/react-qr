import React, { useState } from 'react';
import QRScanner from './QrScanner';

function App() {
  const [scannedData, setScannedData] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setScannedData(data);
    }
  };

  return (
    <div className="App">
      <h1>QR Code Scanner</h1>
      <QRScanner onScan={handleScan} />
      {scannedData && (
        <div>
          <h2>Scanned Data:</h2>
          <p>{scannedData}</p>
        </div>
      )}
    </div>
  );
}

export default App;