// RootLayout.tsx
"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
    const backgroundImages = [
        '/bg-1.jpg',
        '/bg-2.jpg',
        '/bg-3.jpg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <html lang="id">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Selamat datang di profil SDN Margasari, sekolah dasar unggulan di Desa Margasari." />
            <title>SD Negeri Margasari</title>
            <link rel="icon" href="/logo_sd.png" type="image/png" />
        </head>
        <body className={`${inter.className} bg-solid`}>

        <div
            className="background-carousel"
            style={{
                backgroundImage: `url(${backgroundImages[backgroundImageIndex]})`,
                height: '100vh',
                width: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        />

        <main className="flex min-h-screen flex-col items-center justify-between py-0 px-6 relative bg-solid">
            <h2 className="text-black text-center text-2xl font-bold mb-2 mt-6">Foto Sekolah</h2>
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
                    <div className="video-card">
                        <video controls>
                            <source src="/contoh.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>

            {children}
        </main>
        </body>
        </html>
    );
}
