export default function BodyBackground() {
    return (
        <div
            className="fixed inset-0 bg-[rgb(35,35,35)]"
            style={{
                backgroundImage: `
                    repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 47px,
                        rgb(50,50,50) 47px,
                        rgb(50,50,50) 48px
                    ),
                    repeating-linear-gradient(
                        90deg,
                        transparent,
                        transparent 47px,
                        rgb(50,50,50) 47px,
                        rgb(50,50,50) 48px
                    )
                    `,
                zIndex: -30,
            }}
        />
    );
}
