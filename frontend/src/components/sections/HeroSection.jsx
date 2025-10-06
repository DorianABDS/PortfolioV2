export default function HeroSection() {
    return (
        <section className="h-screen flex items-center justify-center p-[10px]">
            <div className="w-full h-full p-[100px] relative rounded-[30px] overflow-hidden">
                <img
                    src="/img/bg-pf.webp"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    alt="Background"
                />

                <div className="relative z-10 w-full h-full flex flex-col justify-end pb-32">
                    {/* Title */}
                    <h1 className="uppercase font-orbitron leading-[1] text-white font-normal text-[85px]">
                        developpeur
                        <br />
                        fullstack
                    </h1>
                    {/* Description */}
                    <p className="text-white font-light max-w-[600px]">
                        Développeur web polyvalent, je mets ma créativité et mes
                        compétences techniques au service de projets innovants
                        et durables
                    </p>
                </div>

                {/* Rectangle en bas à gauche */}
                <div className="absolute bottom-0 left-0 z-10 m-10 bg-[#585858]/20 backdrop-blur-xs rounded-[30px] h-40 w-72"></div>
            </div>
        </section>
    );
}
