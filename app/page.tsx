import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
                {/* Bagian Kepala Sekolah */}
                <div className="text-center">
                    <h2 className="mb-3 text-2xl font-semibold text-black">
                        Kepala Sekolah
                    </h2>
                    <div className="flex flex-col items-center">
                        <img
                            src="/guru1.jpg" // Gantilah dengan path gambar kepala sekolah Anda
                            alt="Kepala Sekolah"
                            className="w-48 h-48 rounded-full object-cover mb-2" // Gaya gambar dengan ukuran lebih besar
                        />
                        <p className="text-lg font-semibold text-black">
                            Nama Kepala Sekolah
                        </p>
                    </div>
                </div>

                {/* Bagian Guru */}
                <div className="text-center">
                    <h2 className="mb-3 text-2xl font-semibold whitespace-nowrap text-black">
                        Guru
                    </h2>
                    <div className="py-4">
                        {/* Baris Atas - 5 Guru */}
                        <div className="flex flex-wrap justify-center gap-4 mb-4">
                            <div className="flex-none w-32">
                                <img
                                    src="/guru1.jpg"
                                    alt="Guru 1"
                                    className="w-32 h-32 rounded-full object-cover mb-2"
                                />
                                <p className="text-center mt-2 text-sm font-semibold text-black">Nama Guru 1</p>
                                <p className="text-center text-xs text-gray-600">Matematika</p>
                            </div>
                            <div className="flex-none w-32">
                                <img
                                    src="/guru1.jpg"
                                    alt="Guru 2"
                                    className="w-32 h-32 rounded-full object-cover mb-2"
                                />
                                <p className="text-center mt-2 text-sm font-semibold text-black">Nama Guru 2</p>
                                <p className="text-center text-xs text-gray-600">Bahasa Inggris</p>
                            </div>
                            <div className="flex-none w-32">
                                <img
                                    src="/guru1.jpg"
                                    alt="Guru 3"
                                    className="w-32 h-32 rounded-full object-cover mb-2"
                                />
                                <p className="text-center mt-2 text-sm font-semibold text-black">Nama Guru 3</p>
                                <p className="text-center text-xs text-gray-600">IPA</p>
                            </div>
                            <div className="flex-none w-32">
                                <img
                                    src="/guru1.jpg"
                                    alt="Guru 4"
                                    className="w-32 h-32 rounded-full object-cover mb-2"
                                />
                                <p className="text-center mt-2 text-sm font-semibold text-black">Nama Guru 4</p>
                                <p className="text-center text-xs text-gray-600">Sejarah</p>
                            </div>
                            <div className="flex-none w-32">
                                <img
                                    src="/guru1.jpg"
                                    alt="Guru 5"
                                    className="w-32 h-32 rounded-full object-cover mb-2"
                                />
                                <p className="text-center mt-2 text-sm font-semibold text-black">Nama Guru 5</p>
                                <p className="text-center text-xs text-gray-600">Biologi</p>
                            </div>
                        </div>

                        {/* Baris Bawah - 6 Guru */}
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="flex-none w-32">
                                <img
                                    src="/guru1.jpg"
                                    alt="Guru 6"
                                    className="w-32 h-32 rounded-full object-cover mb-2"
                                />
                                <p className="text-center mt-2 text-sm font-semibold text-black">Nama Guru 6</p>
                                <p className="text-center text-xs text-gray-600">Fisika</p>
                            </div>
                            <div className="flex-none w-32">
                                <img
                                    src="/guru1.jpg"
                                    alt="Guru 7"
                                    className="w-32 h-32 rounded-full object-cover mb-2"
                                />
                                <p className="text-center mt-2 text-sm font-semibold text-black">Nama Guru 7</p>
                                <p className="text-center text-xs text-gray-600">Kimia</p>
                            </div>
                            <div className="flex-none w-32">
                                <img
                                    src="/guru1.jpg"
                                    alt="Guru 8"
                                    className="w-32 h-32 rounded-full object-cover mb-2"
                                />
                                <p className="text-center mt-2 text-sm font-semibold text-black">Nama Guru 8</p>
                                <p className="text-center text-xs text-gray-600">Ekonomi</p>
                            </div>
                            <div className="flex-none w-32">
                                <img
                                    src="/guru1.jpg"
                                    alt="Guru 9"
                                    className="w-32 h-32 rounded-full object-cover mb-2"
                                />
                                <p className="text-center mt-2 text-sm font-semibold text-black">Nama Guru 9</p>
                                <p className="text-center text-xs text-gray-600">Geografi</p>
                            </div>
                            <div className="flex-none w-32">
                                <img
                                    src="/guru1.jpg"
                                    alt="Guru 10"
                                    className="w-32 h-32 rounded-full object-cover mb-2"
                                />
                                <p className="text-center mt-2 text-sm font-semibold text-black">Nama Guru 10</p>
                                <p className="text-center text-xs text-gray-600">PPKN</p>
                            </div>
                            <div className="flex-none w-32">
                                <img
                                    src="/guru1.jpg"
                                    alt="Guru 11"
                                    className="w-32 h-32 rounded-full object-cover mb-2"
                                />
                                <p className="text-center mt-2 text-sm font-semibold text-black">Nama Guru 11</p>
                                <p className="text-center text-xs text-gray-600">Seni Budaya</p>
                            </div>
                        </div>
                    </div>

                    {/* Bagian Struktur Organisasi Sekolah */}
                    <div className="text-center mt-12">
                        <h2 className="mb-3 text-2xl font-semibold whitespace-nowrap text-black">
                            Struktur Organisasi Sekolah
                        </h2>


                    </div>
                </div>

                <section id="informasi-sekolah" className="py-16" style={{backgroundColor: '#E8F5FC'}}>
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-black">Informasi Sekolah</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold mb-4 text-black">Visi dan Misi</h3>
                                <p className="text-black">Menjadi sekolah unggulan dengan pendidikan yang berkualitas
                                    dan karakter yang kuat untuk masa depan yang lebih baik.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold mb-4 text-black">Sejarah Sekolah</h3>
                                <p className="text-black">Didirikan pada tahun XXXX, SDN Margasari telah berkomitmen
                                    untuk memberikan pendidikan yang berkualitas dan membentuk karakter siswa.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="berita" className="py-2" style={{backgroundColor: '#E8F5FC'}}>
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold mb-6 text-black">Berita dan Pengumuman</h2>
                        </div>
                        <div className="space-y-4">
                            <article className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold mb-2 text-black">Pengumuman Kegiatan Sekolah</h3>
                                <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Vivamus lacinia odio vitae vestibulum.</p>
                            </article>
                            <article className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold mb-2 text-black">Acara Mendatang</h3>
                                <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Vivamus lacinia odio vitae vestibulum.</p>
                            </article>
                        </div>
                    </div>
                </section>

                <div className="w-full max-w-7xl mx-auto p-5">
                    <div
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                        <h2 className="mb-3 text-2xl font-semibold whitespace-nowrap text-black">
                            Lokasi SDN Margasari
                        </h2>
                        <p className="m-0 max-w-[30ch] text-sm opacity-80 text-black">
                            JL. Margasari No. 20 Desa Margasari, KEC. Ciawi, Tasikmalaya, Jawa Barat
                        </p>
                        <div className="mt-4">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.3509402568993!2d108.13242657407346!3d-7.168129944885859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f4c1a63ec0b75%3A0xdaa6969977ef7ff4!2sSD%20Negeri%20Margasari!5e0!3m2!1sid!2sid!4v1692024897123!5m2!1sid!2sid"
                                width="100%"
                                height="600"
                                loading="lazy"
                                title="Google Maps"
                                className="rounded-lg border border-gray-300"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto p-5">
                <div
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <h2 className="mb-3 text-2xl font-semibold text-black text-center">
                        Kontak Kami
                    </h2>
                    <div className="flex justify-center">
                        <p className="m-0 max-w-[30ch] text-sm opacity-80 text-black text-center mb-6">
                            (021) 123-4567<br/>
                            info@sdkemenangan.sch.id
                        </p>
                    </div>

                    <div className="flex space-x-4 justify-center mb-2"> {/* Tambahkan mb-2 di sini */}
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className="text-blue-600 hover:text-blue-800 fa-2x"/>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="text-pink-600 hover:text-pink-800 fa-2x"/>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} className="text-red-600 hover:text-red-800 fa-2x"/>
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTiktok} className="text-black hover:text-gray-400 fa-2x"/>
                        </a>
                    </div>
                </div>
            </div>

            <footer className="text-black py-4 text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} SDN Margasari. Semua Hak Cipta Dilindungi.
                </p>
            </footer>
        </>
    );
}
