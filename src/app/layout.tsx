/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Brain Games 2024",
    description:
        "ICSSC's fun and social competition consisting of a variety of interesting puzzles and games — free lunch, prizes, and exciting events included!",
    metadataBase: new URL("https://braingames.icssc.club"),
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={inter.className}
                style={{
                    backgroundImage: 'url("background.svg")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="lightnings">
                    {[...Array(9).keys()].map((index) => (
                        <img
                            className="lightning"
                            src="lightning.svg"
                            alt="lightning bolt"
                            key={index}
                        />
                    ))}
                </div>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
