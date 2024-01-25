import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <nav className="wrapper sticky flex-between inset-x-0 z-30 h-24">
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
            </nav>
        </>
    );
};

export default Header;
