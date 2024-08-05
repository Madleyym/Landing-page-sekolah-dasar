import React from 'react';

const GaleriSekolah = () => {
    return (
        <div className="mt-10 text-black text-center container mx-auto p-8 min-h-screen" style={{ backgroundColor: '#E8F5FC' }}>
            <h1 className="text-4xl font-bold  mb-4">GALERI SEKOLAH</h1>
            <p className="text-lg mb-2">Selamat datang di galeri foto SD Negeri Margasari!</p>
            <p className="text-lg mb-8">
                Di sini, Anda dapat melihat berbagai momen berharga dan aktivitas yang terjadi di sekolah kami.
                Kami berharap galeri ini dapat memberikan gambaran yang lebih baik tentang kehidupan sehari-hari di SD Negeri Margasari.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <img src="https://via.placeholder.com/400x300?text=Gambar+1" alt="Aktivitas Siswa" className="w-full h-auto object-cover" />
                    <p className="text-center mt-2">Aktivitas Siswa di Kelas</p>
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <img src="https://via.placeholder.com/400x300?text=Gambar+2" alt="Kegiatan Ekstrakurikuler" className="w-full h-auto object-cover" />
                    <p className="text-center mt-2">Kegiatan Ekstrakurikuler</p>
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <img src="https://via.placeholder.com/400x300?text=Gambar+3" alt="Kegiatan Olahraga" className="w-full h-auto object-cover" />
                    <p className="text-center mt-2">Kegiatan Olahraga</p>
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <img src="https://via.placeholder.com/400x300?text=Gambar+4" alt="Upacara Bendera" className="w-full h-auto object-cover" />
                    <p className="text-center mt-2">Upacara Bendera</p>
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <img src="https://via.placeholder.com/400x300?text=Gambar+5" alt="Fasilitas Sekolah" className="w-full h-auto object-cover" />
                    <p className="text-center mt-2">Fasilitas Sekolah</p>
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <img src="https://via.placeholder.com/400x300?text=Gambar+6" alt="Kegiatan Kelas" className="w-full h-auto object-cover" />
                    <p className="text-center mt-2">Kegiatan Kelas</p>
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <img src="https://via.placeholder.com/400x300?text=Gambar+7" alt="Peringatan Hari Besar" className="w-full h-auto object-cover" />
                    <p className="text-center mt-2">Peringatan Hari Besar</p>
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <img src="https://via.placeholder.com/400x300?text=Gambar+8" alt="Kegiatan Seni" className="w-full h-auto object-cover" />
                    <p className="text-center mt-2">Kegiatan Seni</p>
                </div>
            </div>

            <p className="text-lg mt-8">
                Terima kasih telah mengunjungi galeri foto SD Negeri Margasari. Kami senang bisa berbagi momen-momen spesial dengan Anda!
            </p>
        </div>
    );
};

export default GaleriSekolah;
