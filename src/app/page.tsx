import Faq from "@/components/Faq";
import Hero from "@/components/Hero";

export default function Home() {
    return (
        <main className="wrapper flex flex-col flex-center">
            <Hero />
            <Faq />
        </main>
    );
}
