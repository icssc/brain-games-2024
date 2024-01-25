"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Header = () => {
    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        let prevScrollPos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const scrollingUp = prevScrollPos > currentScrollPos;

            setShowNav(scrollingUp);
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav
                className={cn(
                    "wrapper fixed top-0 flex items-center gap-x-4 md:gap-x-8 flex-row inset-x-0 z-30 h-24",
                    showNav ? "opacity-100" : "opacity-0",
                    "transition-all duration-500",
                )}
            >
                <Link href={"/"}>
                    <Image
                        src="/Logo_Without_BG.png"
                        alt="logo"
                        width={64}
                        height={64}
                    />
                </Link>

                <ul className="flex flex-row gap-x-4 text-xl md:text-2xl font-semibold">
                    <li>
                        <a href="#events">Events</a>
                    </li>
                    <li>
                        <a href="#faq">FAQ</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Header;
