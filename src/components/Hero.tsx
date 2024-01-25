import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Navigation } from "lucide-react";

const Hero = () => {
    return (
        <div className="flex-center flex-col gap-y-16 min-h-[calc(100vh-6rem)]">
            <div className="flex flex-col gap-y-8">
                <div className="flex justify-center items-center flex-col gap-y-2">
                    <h1 className="text-6xl md:text-8xl font-bold text-center">Brain Games 2024</h1>
                    <h4 className="text-xl md:text-2xl font-semibold max-w-[75%] text-center">
                        ICS Student {"Council's"} fun and social competition
                        consisting of a variety of interesting puzzles and games
                        — free lunch, prizes, and exciting events included!
                    </h4>
                </div>
                <div className="flex-center gap-x-8">
                    <div className="flex-center flex-row gap-x-2 text-xl md:text-2xl font-bold">
                        <Calendar />
                        <p>February 10</p>
                    </div>
                    <div className="flex-center flex-row gap-x-2 text-xl md:text-2xl font-bold">
                        <Navigation />
                        <p>Student Center</p>
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
                    <Button className="text-3xl p-8 rounded-xl">
                        Sign up!
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
