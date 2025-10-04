export default function ProjectSection({ title, children }) {
  return (
    <section className="h-screen flex items-center justify-center px-[30px] bg-black">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-white text-6xl">{title}</h1>
        {children}
      </div>
    </section>
  );
}