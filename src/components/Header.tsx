import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <nav className="wrapper flex-between inset-x-0 z-30 h-24">
                <div className="flex items-center text-3xl font-bold text-primary gap-x-4">
                    <Image
                        src="https://studentcouncil.ics.uci.edu/assets/img/logo.svg"
                        alt="logo"
                        width={64}
                        height={64}
                    />
                    <Link href="/">
                        <h1>Brain Games</h1>
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Header;
