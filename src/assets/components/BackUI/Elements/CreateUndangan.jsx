import React from "react";

const Package = [
  {
    id: 1,
    name: "Bronze",
    prize: 300000,
    discount: 60,
    feature: [
      {
        item: "Unlimited Acara",
      },
      {
        item: "Amplop Digital",
      },
      {
        item: "Unlimited Ucapan",
      },
      {
        item: "Share Whatsapp",
      },
      {
        item: "Add To Calender",
      },
      {
        item: "Pilihan Template",
      },
    ],
  },
  {
    id: 2,
    name: "Bronze",
    prize: 300000,
    discount: 60,
    feature: [
      {
        item: "Unlimited Acara",
      },
      {
        item: "Amplop Digital",
      },
      {
        item: "Unlimited Ucapan",
      },
      {
        item: "Share Whatsapp",
      },
      {
        item: "Add To Calender",
      },
      {
        item: "Pilihan Template",
      },
    ],
  },
  {
    id: 2,
    name: "Bronze",
    prize: 300000,
    discount: 60,
    feature: [
      {
        item: "Unlimited Acara",
      },
      {
        item: "Amplop Digital",
      },
      {
        item: "Unlimited Ucapan",
      },
      {
        item: "Share Whatsapp",
      },
      {
        item: "Add To Calender",
      },
      {
        item: "Pilihan Template",
      },
    ],
  },
];

function CreateUndangan() {
  return (
    <div className="create">
      <div className="create-contain">
        <form>
          <h1>1. pilih paket undangan</h1>
          <h5>silahkan pilih paket sesuai fitur yang ada</h5>
          <div className="create-contain-card">
            {Package.map((pack, i) => (
              <div className="create-contain-card-option" key={i}>
                <input
                  className="radio-button"
                  type="radio"
                  name="package"
                  value={pack.id}
                />
                <div className="radio-value">
                  <h2>{pack.name}</h2>
                  <div className="disc">
                    <p>Rp {pack.prize}</p>
                    <h4>Diskon {pack.discount}%</h4>
                  </div>
                  <h3>Rp. {pack.prize - pack.prize / pack.discount}</h3>
                  <div className="fitur">
                    {pack.feature.map((fitur) => (
                      <li>{fitur.item}</li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h1>2. Url Undangan</h1>
          <h5>Silahkan Isi Url Undangan Sesuai Keinginan Anda</h5>
          <div className="create-contain-url">
            <h4>Url Domain Undangan</h4>
            <input
              type="text"
              className="inputan"
              placeholder="www.kartunikah.com/hanan-ataki"
            />
          </div>
          <h1>3. Data Mempelai</h1>
          <h5>Silahkan Isi Data Undangan Sesuai Keinginan Anda</h5>
          <div className="create-contain-mempelai">
            <div className="data-undangan">
              <h4>Mempelai Pria</h4>
              <input type="text" className="inputan" placeholder="Hanan" />
            </div>
            <div className="data-undangan">
              <h4>Mempelai Wanita</h4>
              <input type="text" className="inputan" placeholder="Hanan" />
            </div>
            <div className="data-undangan">
              <h4>Tanggal Akad Nikah</h4>
              <input type="date" className="inputan" placeholder="Hanan" />
            </div>
            <div className="data-undangan">
              <h4>No. Telpon</h4>
              <input type="text" className="inputan" placeholder="Hanan" />
            </div>
          </div>
        </form>
      </div>
      <div className="create-payment">
        <div className="create-payment-timeline">
          <div className="create-payment-timeline-dot">
            <p>Tambah Paket</p>
            <div className="create-payment-timeline-dot-btn">
              <span></span>
            </div>
          </div>
          <div className="create-payment-timeline-dot">
            <p>Pembayaran</p>
            <div className="create-payment-timeline-dot-btn">
              <span></span>
            </div>
          </div>
          <div className="create-payment-timeline-dot">
            <p>Selesai</p>
            <div className="create-payment-timeline-dot-btn">
              <span></span>
            </div>
          </div>
          <span className="line"></span>
        </div>
        <div className="create-payment-pay">
          <p>Paket Bronze</p>
          <p>Rp 200000</p>
        </div>
        <div className="create-payment-pay">
          <p>Paket Bronze</p>
          <p>Rp 200000</p>
        </div>
        <span className="create-payment-line"></span>
        <div className="create-payment-total">
          <p>Total</p>
          <h2>Rp 123039</h2>
        </div>
        <div className="create-payment-kode">
          <p>Kode Referral</p>
          <input type="text" className="inputan" placeholder="913813029" />
        </div>
        <button className="create-payment-button">Lanjutkan</button>
      </div>
    </div>
  );
}

export default CreateUndangan;
