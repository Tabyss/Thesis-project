import React from 'react';
import QRCode from 'qrcode.react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const QRCodeGenerator = () => {
  const { id } = useParams();
  const [guest, setGuest] = useState(null);

  const fetchGuest = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/tamu/${id}`);
        setGuest(response.data);
    } catch (error) {
        console.log(error);
    }
};

  useEffect(() => {
    fetchGuest();
  }, [id]);

  if (!guest) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <div id={`qrcode-${id}`}>
          <QRCode value={id} />
        </div>
    </div>
  );
};

export default QRCodeGenerator;