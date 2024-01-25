import Link from "next/link";
import {
    FaDiscord,
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaInstagram,
} from "react-icons/fa";

const MEDIA_LINKS = [
    {
        id: 1,
        link: "https://www.facebook.com/ICSStudentCouncil/",
        icon: <FaFacebook />,
    },
    {
        id: 2,
        link: "https://www.instagram.com/icssc.uci/",
        icon: <FaInstagram />,
    },
    {
        id: 3,
        link: "https://discord.gg/c4t5dGcM9S",
        icon: <FaDiscord />,
    },
    {
        id: 4,
        link: "https://github.com/icssc",
        icon: <FaGithub />,
    },
    {
        id: 5,
        link: "mailto:icssc@uci.edu",
        icon: <FaEnvelope />,
    },
];

const Footer = () => {
    return (
        <footer className="flex-center px-2 py-2 mt-16 mb-8 flex-col gap-y-4">
            <div className="flex justify-center gap-5 text-3xl sm:gap-12 sm:text-4xl">
                {MEDIA_LINKS.map((link) => (
                    <Link
                        href={link.link}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        key={link.id}
                    >
                        {link.icon}
                    </Link>
                ))}
            </div>

            <p className="text-lg sm:text-xl font-medium">
                Made with 💖 by the ICSSC team
            </p>
        </footer>
    );
};

export default Footer;
