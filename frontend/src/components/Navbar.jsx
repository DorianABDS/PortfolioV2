import { Home, User, Briefcase, Mail } from 'lucide-react';

export default function Navbar() {
    // Base styles
    const navBase = "fixed top-1/2 -translate-y-1/2 z-50 bg-[#585858]/20 backdrop-blur-xs rounded-full";
    const navListBase = "flex flex-col text-white";
    const navItemBase = "transition-all duration-300 hover:bg-white cursor-pointer flex items-center justify-center rounded-full group";
    const iconBase = "text-white group-hover:text-black transition-colors duration-300";

    // Responsive classes for nav
    const navSizes = {
        sm: "right-[20px] px-0.5 py-3",
        md: "md:right-[20px] md:px-1 md:py-4",
        lg: "lg:right-[20px] lg:px-1 lg:py-5",
        xl: "xl:right-[20px] xl:px-1 xl:py-6",
        "2xl": "2xl:right-[20px] 2xl:px-1 2xl:py-7",
    };

    // Responsive classes for nav list
    const navListSizes = {
        sm: "gap-4",
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

    // Assembling responsive classes
    const navClass = `${navBase} ${navSizes.sm} ${navSizes.md} ${navSizes.lg} ${navSizes.xl} ${navSizes["2xl"]}`;
    const navListClass = `${navListBase} ${navListSizes.sm} ${navListSizes.md} ${navListSizes.lg} ${navListSizes.xl} ${navListSizes["2xl"]}`;
    const navItemClass = `${navItemBase} ${navItemSizes.sm} ${navItemSizes.md} ${navItemSizes.lg} ${navItemSizes.xl} ${navItemSizes["2xl"]}`;
    const iconClass = `${iconBase} ${iconSizes.sm} ${iconSizes.md} ${iconSizes.lg} ${iconSizes.xl} ${iconSizes["2xl"]}`;

    const menuItems = [
        { icon: Home, label: "Accueil" },
        { icon: User, label: "À propos" },
        { icon: Briefcase, label: "Projets" },
        { icon: Mail, label: "Contact" },
    ];

    return (
        <nav className={navClass}>
            <ul className={navListClass}>
                {menuItems.map((item, index) => (
                    <li key={index} className={navItemClass} title={item.label}>
                        <item.icon className={iconClass} />
                    </li>
                ))}
            </ul>
        </nav>
    );
}