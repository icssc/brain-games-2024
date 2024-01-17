import { Button } from "@/components/ui/button";
import { Calendar, Navigation } from "lucide-react";

export default function Home() {
    return (
        <main className="wrapper flex-center flex-col gap-y-16 min-h-[calc(100vh-6rem)] pb-16">
            <div className="flex flex-col gap-y-8">
                <div className="flex justify-center items-center flex-col gap-y-2">
                    <h1 className="text-8xl font-bold">Brain Games 2024</h1>
                    <h2 className="text-4xl font-semibold max-w-[75%] text-center">
                        ♪ {"There's"} a zombie on your lawn {"There's"} a zombie
                        on your lawn ♪
                    </h2>
                </div>
                <div className="flex-center gap-x-8">
                    <div className="flex-center flex-row gap-x-2 text-2xl font-bold">
                        <Calendar />
                        <p>March 14</p>
                    </div>
                    <div className="flex-center flex-row gap-x-2 text-2xl font-bold">
                        <Navigation />
                        <p>DBH 1234</p>
                    </div>
                </div>
            </div>

            <div>
                <Button className="text-3xl p-8 rounded-xl">Sign up!</Button>
            </div>
        </main>
    );
}
