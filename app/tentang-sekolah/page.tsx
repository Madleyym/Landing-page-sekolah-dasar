import React from 'react';

const TentangSekolah = () => {
    return (
        <div className="mt-10 text-black container mx-auto p-8 min-h-screen" style={{ backgroundColor: '#E8F5FC' }}>
            <h1 className="text-4xl font-bold text-left mb-8">TENTANG SEKOLAH</h1>
            <p className="text-lg mb-4">Selamat datang di Sistem Informasi Akademik Universitas ABC!</p>
            <p className="text-lg mb-8">
                Sistem Informasi Akademik Universitas ABC adalah proyek yang bertujuan untuk memberikan solusi terintegrasi bagi pengelolaan data akademik di lingkungan universitas kami.
                Proyek ini didedikasikan untuk memberikan pengalaman akademik yang lebih baik bagi mahasiswa, dosen, dan staf administrasi.
            </p>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-4">Visi</h2>
                <p className="text-lg mb-4">
                    Menjadi pemimpin dalam penyediaan solusi teknologi informasi untuk mendukung keunggulan akademik dan administratif di lingkungan universitas.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-4">Misi</h2>
                <ul className="list-decimal list-inside space-y-2 text-lg">
                    <li>Mengembangkan sistem informasi yang inovatif dan efisien untuk mendukung proses akademik dan administratif di universitas.</li>
                    <li>Memberikan akses mudah dan cepat terhadap informasi akademik kepada mahasiswa, dosen, dan staf universitas.</li>
                    <li>Menyediakan layanan berkualitas tinggi dalam pengelolaan data akademik, mulai dari pendaftaran hingga penilaian.</li>
                </ul>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-4">Nilai Nilai Kami</h2>
                <ul className="list-decimal list-inside space-y-2 text-lg">
                    <li>Inovasi: Kami berkomitmen untuk terus mengembangkan solusi baru dan inovatif dalam teknologi informasi untuk memenuhi kebutuhan universitas.</li>
                    <li>Integritas: Kami menjunjung tinggi kejujuran, transparansi, dan konsistensi dalam setiap aspek layanan yang kami sediakan.</li>
                    <li>Kualitas: Kami berusaha untuk memberikan layanan dan produk berkualitas tinggi yang memenuhi standar keunggulan akademik.</li>
                    <li>Kolaborasi: Kami percaya bahwa kerjasama tim yang solid dan kolaborasi antara berbagai pemangku kepentingan merupakan kunci kesuksesan proyek ini.</li>
                    <li>Pelayanan Pelanggan: Kami berkomitmen untuk memberikan pelayanan pelanggan yang ramah, responsif, dan efisien kepada semua pengguna sistem.</li>
                </ul>
            </section>

            <p className="text-lg mt-8">
                Terima kasih telah menggunakan Sistem Informasi Akademik Universitas ABC. Kami berharap dapat terus meningkatkan layanan kami demi kemajuan akademik dan administratif universitas.
            </p>

            <p className="text-center text-lg mt-8">Don't forget to contact us</p>
        </div>
    );
};

export default TentangSekolah;
