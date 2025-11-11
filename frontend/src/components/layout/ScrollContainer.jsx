export default function ScrollContainer({ currentSection, children }) {
  return (
    <div
      className="h-screen w-full transition-transform duration-700 ease-in-out"
      style={{ transform: `translateY(-${currentSection * 100}vh)` }}
    >
      {children}
    </div>
  );
}
