"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
    const backgroundImages = [
        '/SDN_MARGASARI.jpeg',
        '/SDN.jpeg',
        '/SDN_MARGASARI.jpeg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    return (
        <html lang="id">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Selamat datang di profil SDN Margasari, sekolah dasar unggulan di Desa Margasari." />
            <title>SD Negeri Margasari</title>
            <link rel="icon" href="/logo_sd.png" type="image/png" />
        </head>
        <body className={`${inter.className} bg-solid`} style={{ backgroundColor: '#E8F5FC' }}>
        <div
            className="background-carousel"
            style={{
                backgroundImage: `url(${backgroundImages[backgroundImageIndex]})`,
                height: '100vh',
                width: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative', // Ensure the background is positioned relative to the viewport
                zIndex: -1 // Place the background image behind other content
            }}
        />

        <main className="flex min-h-screen flex-col items-center justify-between py-16 px-6 relative"
              style={{backgroundColor: '#E8F5FC'}}>
            <h2 className="text-black text-center text-2xl font-bold mb-2">Foto Sekolah</h2>
            <div className="w-full max-w-4xl mx-auto mb-10">
                <div className="bg-white rounded-lg p-1 mt-1 mb-2">
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
                            <div className="flex justify-center items-center fade-in">
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
                            <div className="flex justify-center items-center fade-in">
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
                            <div className="flex justify-center items-center fade-in">
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

            <div className="w-full max-w-4xl mx-auto mb-10">
                <h2 className="text-black text-center text-2xl font-bold mb-6">Video Sekolah</h2>
                <div className="bg-black p-1 mt-1">
                    <div className="video-card text-center">
                        <video controls className="mx-auto">
                            <source src="/contoh.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
            <header className="fixed top-0 right-0 w-full p-4 shadow-md" style={{backgroundColor: '#E8F5FC'}}>
                <nav className="container mx-auto">
                    <ul className="flex justify-center space-x-4">
                        <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
                        </li>
                        <li><Link href="/prestasi" className="text-blue-600 hover:text-blue-800">Prestasi</Link>
                        </li>
                        <li><Link href="/tentang-sekolah" className="text-blue-600 hover:text-blue-800">Tentang
                            Sekolah</Link></li>
                        <li><Link href="/galeri-sekolah" className="text-blue-600 hover:text-blue-800">Galeri Sekolah</Link></li>
                        {/*<li><Link href="/berita" className="text-blue-600 hover:text-blue-800">Berita</Link></li>*/}
                    </ul>
                </nav>
            </header>
            {children}
        </main>
        </body>
        </html>
    );
}
