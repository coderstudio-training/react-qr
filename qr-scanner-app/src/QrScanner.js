import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';

const QRScanner = ({ onScan }) => {
  const [error, setError] = useState(null);

  const handleScan = (data) => {
    if (data) {
      onScan(data.text);
    }
  };

  const handleError = (err) => {
    console.error(err);
    setError('Error scanning QR code');
  };

  return (
    <div>
      <QrScanner
            delay={ 300 }
            style={ {width: '100%'} }
            constraints={{aspectRatio: 1,  facingMode: { ideal: "environment" } }}
            onDecode={(result) => setQrByScan(result)}
            onError={(error) => console.log(error?.message)}
        />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default QRScanner;