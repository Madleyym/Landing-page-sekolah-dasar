import React from 'react';

const PrestasiSekolah = () => {
    return (
        <div className="mt-10 text-black container mx-auto p-8 min-h-screen" style={{ backgroundColor: '#E8F5FC' }}>
            <h1 className="text-4xl font-bold text-left mb-8">PRESTASI SEKOLAH</h1>
            <p className="text-lg mb-4">Selamat datang di halaman prestasi SD Negeri Margasari!</p>
            <p className="text-lg mb-8">
                Di SD Negeri Margasari, kami bangga dengan berbagai prestasi yang telah diraih oleh siswa, guru, dan sekolah.
                Kami percaya bahwa prestasi ini mencerminkan dedikasi dan kerja keras dari seluruh komunitas sekolah.
            </p>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-4">Prestasi Siswa</h2>
                <ul className="list-decimal list-inside space-y-2 text-lg">
                    <li>Juara 1 dalam Kompetisi Matematika Tingkat Kota</li>
                    <li>Juara 2 dalam Lomba Cerdas Cermat Bahasa Inggris Nasional</li>
                    <li>Penghargaan Terbaik dalam Kompetisi Seni Lukis Anak-Anak</li>
                </ul>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-4">Penghargaan Guru</h2>
                <ul className="list-decimal list-inside space-y-2 text-lg">
                    <li>Guru Terbaik Tahun Ini dalam Kompetisi Pengajaran Kreatif</li>
                    <li>Penghargaan atas Dedikasi dalam Pembimbingan Ekstrakurikuler</li>
                    <li>Penghargaan Inovasi Pembelajaran dari Dinas Pendidikan</li>
                </ul>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-4">Prestasi Sekolah</h2>
                <ul className="list-decimal list-inside space-y-2 text-lg">
                    <li>Predikat Sekolah Terbaik dalam Penilaian Akreditasi Nasional</li>
                    <li>Penghargaan Sekolah Ramah Lingkungan dari Pemerintah Kota</li>
                    <li>Juara Umum dalam Festival Pendidikan Daerah</li>
                </ul>
            </section>

            <p className="text-lg mt-8">
                Terima kasih atas dukungan semua pihak yang telah membantu kami meraih berbagai prestasi ini.
                Kami berkomitmen untuk terus meningkatkan kualitas pendidikan dan mencetak lebih banyak prestasi di masa depan.
            </p>

            {/*<p className="text-center text-lg mt-8">Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut atau kerjasama!</p>*/}
        </div>
    );
};

export default PrestasiSekolah;
