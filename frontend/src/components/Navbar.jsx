import { Home, User, Briefcase, Mail } from 'lucide-react';

export default function Navbar() {
    // Base styles for desktop (vertical)
    const navBaseDesktop = "fixed top-1/2 -translate-y-1/2 z-50 bg-[#585858]/20 backdrop-blur-xs rounded-full hidden md:block";
    const navListBaseDesktop = "flex flex-col text-white";

    // Base styles for mobile (horizontal)
    const navBaseMobile = "fixed bottom-0 left-0 right-0 z-50 bg-[#141414] backdrop-blur-md md:hidden rounded-t-[30px]";
    const navListBaseMobile = "flex flex-row text-white justify-around items-center";

    const navItemBase = "transition-all duration-300 hover:bg-white cursor-pointer flex items-center justify-center rounded-full group";
    const iconBase = "text-white group-hover:text-black transition-colors duration-300";

    // Responsive classes for desktop nav
    const navSizesDesktop = {
        md: "md:right-[20px] md:px-1 md:py-4",
        lg: "lg:right-[20px] lg:px-1 lg:py-5",
        xl: "xl:right-[20px] xl:px-1 xl:py-6",
        "2xl": "2xl:right-[20px] 2xl:px-1 2xl:py-7",
    };

    // Responsive classes for mobile nav
    const navSizesMobile = {
        sm: "py-4",
    };

    // Responsive classes for desktop nav list
    const navListSizesDesktop = {
        md: "md:gap-10",
        lg: "lg:gap-12",
        xl: "xl:gap-14",
        "2xl": "2xl:gap-14",
    };

    // Responsive classes for nav item
    const navItemSizes = {
        sm: "w-10 h-10",
        md: "md:w-11 md:h-11",
        lg: "lg:w-12 lg:h-12",
        xl: "xl:w-12 xl:h-12",
        "2xl": "2xl:w-16 2xl:h-16",
    };

    // Responsive classes for icon
    const iconSizes = {
        sm: "w-6 h-6",
        md: "md:w-7 md:h-7",
        lg: "lg:w-8 lg:h-8",
        xl: "xl:w-8 xl:h-8",
        "2xl": "2xl:w-10 2xl:h-10",
    };

    // Assembling responsive classes for desktop
    const navClassDesktop = `${navBaseDesktop} ${navSizesDesktop.md} ${navSizesDesktop.lg} ${navSizesDesktop.xl} ${navSizesDesktop["2xl"]}`;
    const navListClassDesktop = `${navListBaseDesktop} ${navListSizesDesktop.md} ${navListSizesDesktop.lg} ${navListSizesDesktop.xl} ${navListSizesDesktop["2xl"]}`;

    // Assembling responsive classes for mobile
    const navClassMobile = `${navBaseMobile} ${navSizesMobile.sm}`;
    const navListClassMobile = navListBaseMobile;

    const navItemClass = `${navItemBase} ${navItemSizes.sm} ${navItemSizes.md} ${navItemSizes.lg} ${navItemSizes.xl} ${navItemSizes["2xl"]}`;
    const iconClass = `${iconBase} ${iconSizes.sm} ${iconSizes.md} ${iconSizes.lg} ${iconSizes.xl} ${iconSizes["2xl"]}`;

    const menuItems = [
        { icon: Home, label: "Accueil" },
        { icon: User, label: "À propos" },
        { icon: Briefcase, label: "Projets" },
        { icon: Mail, label: "Contact" },
    ];

    return (
        <>
            {/* Mobile Navigation - Bottom horizontal full width */}
            <nav className={navClassMobile}>
                <ul className={navListClassMobile}>
                    {menuItems.map((item, index) => (
                        <li key={index} className={navItemClass} title={item.label}>
                            <item.icon className={iconClass} />
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Desktop Navigation - Right vertical */}
            <nav className={navClassDesktop}>
                <ul className={navListClassDesktop}>
                    {menuItems.map((item, index) => (
                        <li key={index} className={navItemClass} title={item.label}>
                            <item.icon className={iconClass} />
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}