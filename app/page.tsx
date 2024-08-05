import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
// import Carsoul from "@/app/componens/carsoul";

export default function Home() {
    return (
        <>

            {/*<Carsoul>*/}

            {/*</Carsoul>*/}

            {/*<CarsoulFoto>*/}

            {/*</CarsoulFoto>*/}

            <div className="flex flex-col items-center justify-center min-h-screen mt-16">
                {/* Bagian Kepala Sekolah */}
                <div className="text-center">
                    <h2 className="mb-4 text-2xl font-semibold text-black">
                        Kepala Sekolah
                    </h2>
                    <div className="flex flex-col items-center">
                        <img
                            src="/avatar/Maman,S.pd.jpg"
                            alt="Kepala Sekolah"
                            className="w-48 h-48 rounded-full object-cover mb-2"
                        />
                        <p className="text-lg font-semibold text-black">
                            Maman, S.Pd
                        </p>
                    </div>
                </div>

                {/* Bagian Guru */}
                <div className="text-center mt-16">
                    <h2 className="mb-2 text-2xl font-semibold text-black">
                        Guru
                    </h2>
                    <div className="py-4">
                        {/* Baris Atas - 5 Guru */}
                        <div className="flex flex-wrap justify-center gap-4 mb-4">
                            <div className="flex-none w-32 text-center">
                                <img
                                    src="/avatar/Tuti Alawiyah.jpg"
                                    alt="Tuti Alawiyah"
                                    className="w-32 h-32 rounded-full object-cover mb-2"
                                />
                                <p className="text-sm font-semibold text-black">Tuti Alawiyah, S.Pd</p>
                                <p className="text-xs text-gray-600">Guru 1</p>
                            </div>
                            <div className="flex-none w-32 text-center">
                                <img
                                    src="/avatar/Fitri Sarifatun Nisa, S.Pd.jpg"
                                    alt="Fitri Sarifatun Nisa"
                                    className="w-32 h-32 rounded-full object-cover mb-2"
                                />
                                <p className="text-sm font-semibold text-black">Fitri Sarifatun Nisa, S.Pd</p>
                                <p className="text-xs text-gray-600">Guru 2</p>
                            </div>
                            <div className="flex-none w-32 text-center">
                                <img
                                    src="/avatar/Shelly Asmaryani, S.Pd.I.jpg"
                                    alt="Shelly Asmaryani"
                                    className="w-32 h-32 rounded-full object-cover mb-2"
                                />
                                <p className="text-sm font-semibold text-black">Shelly Asmaryani, S.Pd.I</p>
                                <p className="text-xs text-gray-600">Guru 3</p>
                            </div>
                            <div className="flex-none w-32 text-center">
                                <img
                                    src="/avatar/Firmansyah Suwandi, S.Pd.jpg"
                                    alt="Firmansyah Suwandi"
                                    className="w-32 h-32 rounded-full object-cover mb-2"
                                />
                                <p className="text-sm font-semibold text-black">Firmansyah Suwandi, S.Pd</p>
                                <p className="text-xs text-gray-600">Guru 4</p>
                            </div>
                            <div className="flex-none w-32 text-center">
                                <img
                                    src="/avatar/Ayu Wahyuni, S.Pd.jpg"
                                    alt="Ayu Wahyuni"
                                    className="w-32 h-32 rounded-full object-cover mb-2"
                                />
                                <p className="text-sm font-semibold text-black">Ayu Wahyuni, S.Pd</p>
                                <p className="text-xs text-gray-600">Guru 5</p>
                            </div>
                        </div>

                        {/* Baris Bawah - 3 Guru */}
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="flex-none w-32 text-center">
                                <img
                                    src="/avatar/Indra Triyana, S.Pd.I.jpg"
                                    alt="Indra Triyana"
                                    className="w-32 h-32 rounded-full object-cover mb-2"
                                />
                                <p className="text-sm font-semibold text-black">Indra Triyana, S.Pd.I</p>
                                <p className="text-xs text-gray-600">Guru 6</p>
                            </div>
                            <div className="flex-none w-32 text-center">
                                <img
                                    src="/avatar/Yuyun Yundiroh, S.Pd.I.jpg"
                                    alt="Yuyun Yundiroh"
                                    className="w-32 h-32 rounded-full object-cover mb-2"
                                />
                                <p className="text-sm font-semibold text-black">Yuyun Yundiroh, S.Pd.I</p>
                                <p className="text-xs text-gray-600">Guru 7</p>
                            </div>
                            <div className="flex-none w-32 text-center">
                                <img
                                    src="/avatar/Teguh Gumilar, S.Pd.jpg"
                                    alt="Teguh Gumilar"
                                    className="w-32 h-32 rounded-full object-cover mb-2"
                                />
                                <p className="text-sm font-semibold text-black">Teguh Gumilar, S.Pd</p>
                                <p className="text-xs text-gray-600">Guru 8</p>
                            </div>
                        </div>
                    </div>

                    {/* Struktur Organisasi Sekolah */}
                    <div id="profil-sekolah" className="text-center mt-16">
                        <h2 className="mb-3 text-2xl font-bold text-black">
                            Struktur Organisasi Sekolah
                        </h2>
                        {/* Tambahkan konten struktur organisasi di sini */}
                    </div>
                </div>

                <section id="informasi-sekolah" className="py-16" style={{backgroundColor: '#E8F5FC'}}>
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-black">Informasi Sekolah</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold mb-4 text-black text-center">Visi dan Misi</h3>
                                <p className="text-black text-justify">Visi SD Negeri Margasari, Kecamatan Ciawi,
                                    Kabupaten Tasikmalaya di rumuskan sebagai berikut :
                                    “Terwujudnya generasi muda yang berkarakter, cerdas, dan berakhlak mulia melalui
                                    pendidikan yang berkualitas dan berkelanjutan.”</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold mb-4 text-black text-center">Sejarah Sekolah</h3>
                                <p className="text-black text-justify">Setelah 4 tahun Indonesia merdeka pada tahun
                                    1945, pemerintah Indonesia mulai membangun sistem pendidikan nasional yang lebih
                                    inklusif dan menyeluruh. SD Negeri Margasari Kecamatan Ciawi Kabupaten Tasikmalaya
                                    adalah salah satu hasil dari program pemerintah untuk meningkatkan akses pendidikan
                                    dasar di daerah.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="visi-misi" className="py-16 bg-0-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold text-center text-black mb-8">Visi & Misi</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold mb-4 text-center text-black">Visi</h3>
                                <p className="text-black text-justify">“Terwujudnya generasi muda yang berkarakter,
                                    cerdas, dan berakhlak mulia melalui pendidikan yang berkualitas dan
                                    berkelanjutan.”</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold mb-4 text-center text-black">Misi</h3>
                                <p className="text-black text-justify">1. Menyediakan pendidikan yang berkualitas dan
                                    berkarakter untuk siswa.</p>
                                <p className="text-black text-justify">2. Meningkatkan keterampilan dan pengetahuan
                                    siswa melalui pembelajaran yang inovatif.</p>
                                <p className="text-black text-justify">3. Mengembangkan nilai-nilai akhlak mulia dalam
                                    kehidupan sehari-hari siswa.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="kontak-kami" className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-black">Kontak Kami</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold mb-4 text-black text-center">Kontak Kami</h3>
                                <p className="text-black text-justify">Alamat: Jl. Raya Margasari No. 123, Kec. Ciawi,
                                    Kab. Tasikmalaya</p>
                                <p className="text-black text-justify">Telepon: (0265) 123456</p>
                                <p className="text-black text-justify">Email: sd.margasari@domain.com</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold mb-4 text-black text-center">Ikuti Kami</h3>
                                <div className="flex justify-center space-x-4 mb-4">
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                                       className="text-blue-600 hover:text-blue-800">
                                        <FontAwesomeIcon icon={faFacebook} size="2x"/>
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                                       className="text-pink-600 hover:text-pink-800">
                                        <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                    </a>
                                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                                       className="text-red-600 hover:text-red-800">
                                        <FontAwesomeIcon icon={faYoutube} size="2x"/>
                                    </a>
                                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                                       className="text-black hover:text-gray-800">
                                        <FontAwesomeIcon icon={faTiktok} size="2x"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-auto">
                            <p className="mb-6 text-center text-black">&copy; 2024 SD Negeri Margasari. Semua hak cipta
                                dilindungi.</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
