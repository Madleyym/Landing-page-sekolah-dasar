import Image from "next/image";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <header className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Selamat datang di&nbsp;
            <code className="font-mono font-bold">SD Kemenangan</code>
          </p>
        </header>

        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
          <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/school-logo.svg" // Replace with your school's logo
              alt="Logo Sekolah"
              width={180}
              height={180}
              priority
          />
        </div>

        <section className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left">
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-2xl font-semibold">
              Visi dan Misi
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Menjadi sekolah unggulan dengan pendidikan yang berkualitas dan karakter yang kuat untuk masa depan yang lebih baik.
            </p>
          </div>

          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-2xl font-semibold">
              Kontak Kami
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Alamat: Jl. Pendidikan No. 1, Jakarta<br />
              Telepon: (021) 123-4567<br />
              Email: info@sdkemenangan.sch.id
            </p>
          </div>

          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-2xl font-semibold">
              Kegiatan Sekolah
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Ikuti berbagai kegiatan menarik seperti olahraga, seni, dan sains di SD Kemenangan. Kegiatan ini mendukung perkembangan kreativitas dan keterampilan siswa.
            </p>
          </div>

          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-2xl font-semibold">
              Galeri
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Lihat foto-foto kegiatan dan acara terbaru kami di galeri sekolah. Kami memiliki banyak momen berharga yang ingin kami bagikan.
            </p>
          </div>
        </section>

        <footer className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
          >
            By{" "}
            <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
            />
          </a>
        </footer>
      </main>
  );
}
