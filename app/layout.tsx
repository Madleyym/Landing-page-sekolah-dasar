"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <html lang="id">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Selamat datang di profil SDN Margasari, sekolah dasar unggulan di Desa Margasari." />
            <title>SDN Margasari</title>
        </head>
        <body className={`${inter.className} bg-[#E8F5FC]`}>
        {/* Header with navigation and logo */}
        <header
            className="w-full max-w-5xl flex flex-col items-center justify-between font-mono text-sm p-4 mx-auto shadow-md">
            {/* Header Content */}
            <div className="flex items-center justify-between w-full mb-4">
                {/* Left Logo */}
                <div className="flex-shrink-0">
                    <Image
                        src="/ciawi.png"
                        alt="Logo Ciawi"
                        width={100}
                        height={50}
                        priority
                    />
                </div>

                {/* Center Text */}
                <div className="flex-grow text-center">
                    <p className="text-2xl font-bold mb-2 text-black">
                        <code className="font-mono text-black">SEKOLAH DASAR NEGERI MARGASARI</code>
                    </p>
                </div>

                {/* Right Logo */}
                <div className="flex-shrink-0">
                    <Image
                        src="/logo_sd.png"
                        alt="Logo SD"
                        width={120}
                        height={120}
                        priority
                    />
                </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="block lg:hidden mb-4">
                <button
                    onClick={() => setMenuOpen(!isMenuOpen)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center"
                >
                    <FontAwesomeIcon icon={faBars}/>
                </button>
            </div>

            {/* Navigation */}
            <nav
                className={`flex flex-col lg:flex-row items-center ${isMenuOpen ? 'flex' : 'hidden'} lg:flex lg:space-x-4 lg:space-y-0 space-y-4 lg:space-y-0`}>
                <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Home</a>
                <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Kesiswaan</a>
                <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Guru</a>
                <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Informasi</a>
                <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Siswa</a>
                <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Berita</a>
                <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Galeri</a>
            </nav>
        </header>

        {/* Main Content */}
        <main className="flex min-h-screen flex-col items-center justify-between py-24 px-6 relative">
            <div className="w-full max-w-4xl mx-auto mb-6">
                <div className="bg-white shadow-lg rounded-lg p-1 mt-1">
                    {/*<h2 className="text-2xl font-semibold text-black text-center">Galeri Sekolah</h2>*/}
                    <div className="relative">
                        <Carousel
                            showThumbs={false}
                            infiniteLoop
                            useKeyboardArrows
                            autoPlay
                            showIndicators={false}
                            showStatus={false}
                            className="w-full"
                        >
                            <div className="flex justify-center items-center">
                                <div className="rounded-lg overflow-hidden">
                                    <Image
                                        className="object-cover w-full h-full"
                                        src="/example.jpeg"
                                        alt="example Sekolah 1"
                                        width={800}
                                        height={500}
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="rounded-lg overflow-hidden">
                                    <Image
                                        className="object-cover w-full h-full"
                                        src="/example.jpeg"
                                        alt="example Sekolah 2"
                                        width={800}
                                        height={500}
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="rounded-lg overflow-hidden">
                                    <Image
                                        className="object-cover w-full h-full"
                                        src="/example.jpeg"
                                        alt="example Sekolah 3"
                                        width={800}
                                        height={500}
                                        priority
                                    />
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>

            {children}
        </main>

        {/* Footer common for all pages */}
        <footer
            className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
        </footer>
        </body>
        </html>
    );
}
