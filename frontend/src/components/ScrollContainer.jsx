export default function ScrollContainer({ currentSection, children }) {
    return (
        <div
            className="relative z-10 transition-transform duration-800 ease-in-out"
            style={{ transform: `translateY(-${currentSection * 100}vh)` }}
        >
            {children}
        </div>
    );
}
