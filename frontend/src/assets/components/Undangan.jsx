import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import QRCodeGenerator from "./QRGenerator";
import * as htmlToImage from 'html-to-image';
import "../../App.scss";
import pria1 from '../../assets/images/couple-pria.png';
import wanita1 from '../../assets/images/couple-wanita.png';

const Undangan = () => {
    const { id, id_tamu } = useParams();
    const [guest, setGuest] = useState(null);
    const [invite, setInvite] = useState(null);
    const [qrCodeImage, setQRCodeImage] = useState(null);

    // const fetchGuest = async () => {
    //     try {
    //         const response = await axios.get(`http://localhost:5000/invite/${id}`);
    //         setGuest(response.data);

    //         const qrCodeNode = document.getElementById(`qrcode-${response.data.id}`);
    //         const dataUrl = await htmlToImage.toPng(qrCodeNode);
    //         setQRCodeImage(dataUrl);

    //         await saveQRCode(response.data.id, dataUrl);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // ERROR
    // Memperbarui nilai id_tamu saat menerima data dari database
    // const fetchGuest = async () => {
    //   try {
    //     // Mendapatkan data undangan
    //     const response = await axios.get('http://localhost:5000/invite');
    //     const tamu = response.data;

    //     // Mencari objek tamu berdasarkan id_tamu
    //     const selectedTamu = tamu.find((item) => item.id_tamu === id_tamu);

    //     if (selectedTamu) {
    //       // Mendapatkan nilai id dari kolom tamu (id_tamu)
    //       const id = selectedTamu.id_tamu;

    //       // Melakukan permintaan GET dengan menggunakan nilai id dari kolom tamu
    //       const guestResponse = await axios.get(`http://localhost:5000/invite/${id}`);
    //       const guestData = guestResponse.data;

    //       // Menampilkan hasil
    //       console.log(guestData);
    //     } else {
    //       console.log('Tamu tidak ditemukan');
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // fetchGuest(); // Panggil fetchGuest tanpa argumen

        const fetchGuest = async (id, id_tamu) => {
            try {
                const response = await axios.get(`http://localhost:5000/guest/${id}/${id_tamu}`);
                setGuest(response.data);

                const qrCodeNode = document.getElementById(`qrcode-${response.data.id_tamu}`);
                const dataUrl = await htmlToImage.toPng(qrCodeNode);
                setQRCodeImage(dataUrl);
                await saveQRCode(response.data.id_tamu, dataUrl);

            } catch (error) {
                console.log(error);
            }
        };

        const fetchInvite = async (id) => {
            try {
                const response = await axios.get(`http://localhost:5000/invite/${id}/`);
                setInvite(response.data);

            } catch (error) {
                console.log(error);
            }
        };

        useEffect(() => {
            fetchGuest(id, id_tamu); // Ganti "1" dengan id_tamu yang ingin Anda panggil
            fetchInvite(id);
        }, []);

    const saveQRCode = async () => {
        const qrCodeNode = document.getElementById(`qrcode-${id}`);

        // Cek apakah elemen QR Code sudah tersedia di dalam dokumen
        if (qrCodeNode && qrCodeNode.ownerDocument) {
            // Convert QR code to image
            const dataUrl = await htmlToImage.toPng(qrCodeNode);
            setQRCodeImage(dataUrl);
            const formData = new FormData();
            formData.append('qrcode', dataUrl);

            // Save image to database
            try {
                await axios.patch(`http://localhost:5000/tamu/${id}`, { qrcode: dataUrl });
                console.log('QR code saved to database!');
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log('QR code element is not available in the document yet.');
        }
    };


    const handleDownloadQRCode = (qrcode) => {
        if (qrCodeImage) {
            const downloadLink = document.createElement('a');
            downloadLink.href = qrCodeImage;
            downloadLink.download = `${guest.qrcode}.png`;
            downloadLink.click();
            downloadLink.remove();
        } else {
            console.log('QR code image belum tersedia, silakan klik tombol "Save QR Code" terlebih dahulu.');
        };
    };

    // useEffect(() => {
    //     fetchGuest();
    // }, [id]);

    return (
        <>
            {guest && (
                <React.Fragment>
                    <div className="wrap">
                        <div className="modal">
                            <div className="container">
                                <div className="row">
                                    <h3>Undangan Pernikahan</h3>
                                    <div className="couple-name">
                                        <h1>{invite.name_pria}</h1>
                                        <h2>{invite.tgl_nikah}</h2>
                                        <h1>{invite.name_wanita}</h1>
                                    </div>
                                    <div className="footer">
                                        <h4>Kepada Yth.</h4>
                                        <h4>Bapak/Ibu/Saudara/Saudari</h4>
                                        <h4>{guest.name}</h4>
                                    </div>
                                    <button>Buka undangan</button>
                                </div>
                            </div>
                        </div>

                        <div className="hero">
                            <div className="bg-linear"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="hero-content">
                                        <div className="title">Undangan Pernikahan</div>
                                        <div className="couple-name">
                                        <h1>{invite.name_pria}</h1>
                                        <h4>{invite.tgl_nikah}</h4>
                                        <h1>{invite.name_wanita}</h1>
                                        </div>
                                        <div className="btnLive">
                                            <button>Live Instagram</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="couple">
                            <div className="container">
                                <div className="row">
                                    <div className="title">Mempelai</div>
                                    <div className="couple-pria">
                                        <img src={pria1} alt="" />
                                        <div className="name">
                                            <h2>{invite.name_pria}</h2>
                                            <h4>Putra dari</h4>
                                            <h4>Bapak Hamka Hamzah, S.Pd</h4>
                                            <h4>& Ibu Paramitha Julaiha, S.Pd</h4>
                                        </div>
                                    </div>
                                    <div className="couple-wanita">
                                        <img src={wanita1} alt="" />
                                        <div className="name">
                                            <h2>{invite.name_wanita}</h2>
                                            <h4>Putri dari</h4>
                                            <h4>Bapak Hamka Hamzah, S.Pd</h4>
                                            <h4>& Ibu Paramitha Julaiha, S.Pd</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="video">
                            <div className="container">
                                <div className="row">
                                    <iframe src="" frameBorder={0}></iframe>
                                    <div className="qrcode">
                                        <h1>Kehadiran</h1>
                                        <h4>(scan QR Code ini untuk absen kehadiran)</h4>
                                        <button onClick={() => handleDownloadQRCode(guest.qrcode)} className='qrcode-content' id={`qrcode-${guest.id_tamu}`}>
                                            <QRCodeGenerator />
                                        </button>
                                        <h4>(click QR Code untuk mendownload)</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )}
        </>
    );
}

export default Undangan;