export default function Overlay({ color = "black" }) {
    return (
        <>
            {/* Main overlay frame */}
            <div
                className="fixed inset-0 pointer-events-none z-40"
                style={{
                    boxShadow: `inset 0 0 0 10px ${color}`,
                    borderRadius: "0",
                }}
            >
                {/* Inner rounded border */}
                <div
                    className="absolute inset-[10px] rounded-[30px]"
                    style={{
                        boxShadow: `0 0 0 100vmax ${color}`,
                    }}
                ></div>

                {/* Name tag in top-left corner */}
                <div
                    className="absolute top-[10px] left-[10px] pointer-events-auto inline-block"
                    style={{
                        backgroundColor: color,
                        borderBottomRightRadius: "30px",
                        padding: "5px 32px",
                        position: "relative",
                    }}
                >
                    {/* Bottom-left inverted curve */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: "-30px",
                            left: "0",
                            width: "30px",
                            height: "30px",
                            background: `radial-gradient(circle at bottom right, transparent 30px, ${color} 30px)`,
                        }}
                    />

                    {/* Top-right inverted curve */}
                    <div
                        style={{
                            position: "absolute",
                            top: "0",
                            right: "-28px",
                            width: "33px",
                            height: "27px",
                            background: `radial-gradient(circle at bottom left, transparent 30px, ${color} 30px)`,
                            transform: "rotate(-90deg)",
                            transformOrigin: "center",
                        }}
                    />

                    {/* Name text */}
                    <span className="text-white text-lg font-medium tracking-wide whitespace-nowrap">
                        ABBADESSA Dorian
                    </span>
                </div>
            </div>
        </>
    );
}
