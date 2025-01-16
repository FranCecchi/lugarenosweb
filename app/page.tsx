export default function Page() {
  return (
    <div className="flex justify-end max-w-screen overflow-x-hidden bg-hero-pattern bg-cover">
      <div className="px-24 relative h-screen w-[40%] bg-transparent text-start flex flex-col items-start justify-center">
      <h1 className="font-noto font-extralight text-2xl">Cuero, Jean & Gabardina</h1>
      <h1 className="my-3 font-nobile font-normal text-6xl text-black" style={{ fontFamily: 'Nobile' }}>
        Uniformes <span className="font-bold">profesionales</span> para <span className="font-bold" style={{ color: '#DA2829' }}>profesionales</span> de la cocina.
      </h1>
      <h1 className="font-noto font-extralight text-3xl">Indumentaria gastronomica de diseñador</h1>
      </div>
      <div
      className="relative h-screen w-[60%] bg-blue-500 skew-x-[-6deg] shadow-[-10px_0_20px_rgba(0,0,0,0.6)] clip-path"
      style={{
        backgroundImage: 'url(/images/hero-photo.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom 20%',
        right: '-4%',
      }}
      >
      </div>
    </div>
  );
}
