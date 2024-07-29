import React from 'react';

const VisiMisi = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold text-center mb-8">Visi & Misi SD Negeri Margasari</h1>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-4">Visi SD Negeri Margasari</h2>
                <p className="text-lg mb-4">
                    Visi SD Negeri Margasari, Kecamatan Ciawi, Kabupaten Tasikmalaya di rumuskan sebagai berikut:
                </p>
                <blockquote className="text-xl italic text-center text-blue-700 mb-8">
                    “Terwujudnya Sekolah JUARA, Unggul dalam proses Akademik, Unggul dalam Pembangunan Karakter, dan Seni Budaya dengan PRESTASI yang dilandasi Iman dan Takwa”
                </blockquote>
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">A. JUARA (Jujur, Unggul, Aktif, Rasional, Antusias)</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Jujur dalam semua tindakan demi terwujudnya peserta didik yang berakhlak mulia.</li>
                        <li>Unggul dalam semua prestasi terutama proses akademik, pembangunan karakter dan seni budaya.</li>
                        <li>Aktif dalam peningkatan mutu pembelajaran.</li>
                        <li>Rasional artinya selalu berpikir secara logis dan maju.</li>
                        <li>Antusias artinya selalu bersemangat dalam menggapai gagasan baru sesuai dengan kebutuhan dan kemampuan.</li>
                    </ul>
                </div>
                <div className="space-y-4 mt-8">
                    <h3 className="text-2xl font-semibold">B. Berprestasi</h3>
                    <p>Mampu menunjukkan keunggulan dalam bidang akademik dan non-akademik.</p>
                </div>
                <div className="space-y-4 mt-8">
                    <h3 className="text-2xl font-semibold">C. Pengetahuan</h3>
                    <p>Pengetahuan dimaksud adalah pengetahuan exact (nyata) dan ilmu pengetahuan abstrak (tanpa wujud).</p>
                </div>
                <div className="space-y-4 mt-8">
                    <h3 className="text-2xl font-semibold">D. Keimanan</h3>
                    <p>Mengandung pengertian bahwa siswa memiliki Kecerdasan Spiritual, Religius, Berakhlak Mulia, Santun dan memiliki Tindakan Normatif.</p>
                </div>
                <div className="space-y-4 mt-8">
                    <h3 className="text-2xl font-semibold">E. Kepribadian</h3>
                    <p>Mampu menerapkan Nilai-nilai kepribadian sesuai dengan Adat dan Budaya Lingkungan sekitar dalam kehidupan sehari-hari.</p>
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-semibold mb-4">Misi SD Negeri Margasari</h2>
                <p className="text-lg mb-4">
                    Dalam rangka mewujudkan visi di atas, misi yang akan diemban oleh SD Negeri Margasari sebagai berikut:
                </p>
                <ul className="list-decimal list-inside space-y-2">
                    <li>Membentuk siswa dan Warga Sekolah yang Beriman dan Bertaqwa terhadap Tuhan Yang Maha Esa.</li>
                    <li>Meningkatkan kinerja Tenaga Kependidikan dan Bertanggung jawab terhadap tugas.</li>
                    <li>Meningkatkan Pola Pembelajaran yang berorientasi kepada Peningkatan Pengetahuan, Keterampilan dan Sikap.</li>
                    <li>Menciptakan Situasi Lingkungan yang lebih indah mendukung tercapainya Pembelajaran yang Optimal.</li>
                </ul>
            </section>
        </div>
    );
};

export default VisiMisi;
