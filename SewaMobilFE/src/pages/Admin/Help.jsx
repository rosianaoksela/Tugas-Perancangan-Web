import React from 'react';

const HelpPage = () => {
  const tips = [
    {
      title: 'Periksa Kondisi Mobil',
      description: 'Pastikan mobil dalam kondisi baik, periksa ban, rem, lampu, dan indikator lainnya sebelum disewa.'
    },
    {
      title: 'Tinjau Syarat dan Ketentuan',
      description: 'Baca dengan teliti syarat dan ketentuan yang diberikan oleh penyedia jasa rental mobil.'
    },
    {
      
      title: 'Cek Dokumen Kendaraan',
      description: 'Pastikan dokumen seperti STNK, asuransi, dan izin lainnya lengkap dan masih berlaku.'
    },
    {
      title: 'Ketahui Kebijakan Bahan Bakar',
      description: 'Tanyakan apakah mobil harus dikembalikan dengan tangki penuh atau sesuai kondisi saat diterima.'
    },
    {
      title: 'Pahami Biaya Tambahan',
      description: 'Periksa apakah ada biaya tambahan seperti biaya keterlambatan, pengemudi tambahan, atau perlengkapan tambahan.'
    }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Halaman Bantuan: Tips Sebelum Menyewa Mobil</h1>
      <p>Berikut adalah beberapa hal yang perlu Anda perhatikan sebelum menyewa mobil:</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tips.map((tip, index) => (
          <li key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
            <h2 style={{ fontSize: '1.2em', color: '#333' }}>{tip.title}</h2>
            <p style={{ marginTop: '5px', color: '#555' }}>{tip.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HelpPage;
