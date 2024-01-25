import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Navigation } from "lucide-react";

const Hero = () => {
    return (
        <div className="flex-center flex-col gap-y-6 md:gap-y-12 min-h-[calc(100vh)]">
            <div className="flex flex-col gap-y-8">
                <div className="flex justify-center items-center flex-col gap-y-4">
                    <h1 className="text-7xl md:text-8xl font-bold text-center">
                        Brain Games 2024
                    </h1>
                    <h4 className="text-base sm:text-xl md:text-2xl font-semibold max-w-[75%] text-center">
                        ICS Student {"Council's"} fun and social competition
                        consisting of a variety of interesting puzzles and games
                        — free lunch, prizes, and exciting events included!
                    </h4>
                </div>
                <div className="flex-center flex-col gap-y-2 md:flex-row gap-x-2 md:gap-x-8">
                    <div className="flex-center md:flex-row gap-x-2 text-xl md:text-2xl font-bold">
                        <Calendar />
                        <p className="text-lg md:text-2xl">February 10</p>
                    </div>
                    <div className="flex-center flex-row gap-x-2 text-xl md:text-2xl font-bold">
                        <Navigation />
                        <p className="text-lg md:text-2xl">Student Center</p>
                    </div>
                </div>
            </div>

            <div>
                <Link
                    href={
                        "https://docs.google.com/forms/d/e/1FAIpQLSdnl2rxGx1YpwcGtqxGZ3XVX_25H18lkBEqug0p1fvdnsd_tA/viewform"
                    }
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    <Button className="text-xl md:text-3xl p-6 md:p-8 rounded-xl">
                        Sign up!
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
