export default function HeroSection({ bgImage }) {
  return (
    <section className="h-screen flex items-center justify-center p-[10px]">
      <div className="w-full h-full relative rounded-[30px] overflow-hidden">
        <img
          src="/img/bg-pf.webp"
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="Background"
        />
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <h1 className="text-white text-6xl">Section 1</h1>
        </div>
      </div>
    </section>
  );
}