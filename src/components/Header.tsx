import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <nav className="wrapper sticky flex items-center gap-x-8 flex-row inset-x-0 z-30 h-24">
                <div className="flex items-center text-3xl font-bold text-primary gap-x-4">
                    <Link href={"/"}>
                        <Image
                            src="/Logo_Without_BG.png"
                            alt="logo"
                            width={64}
                            height={64}
                        />
                    </Link>
                </div>

                <ul className="flex flex-row gap-x-4 text-2xl font-semibold">
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
