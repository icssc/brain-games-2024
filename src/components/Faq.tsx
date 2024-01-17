import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

type Faq_Data = {
    title: string;
    content: string;
};

const FAQ_DATA: Faq_Data[] = [
    {
        title: "Where is WebJam being held?",
        content:
            "WebJam is being held in-person at Donald Bren Hall, consisting of events/workshops and ceremonies. Each day takes place in a different room, be sure to look at the schedule!",
    },
    {
        title: "How many people can be on a team?",
        content: "Up to 4 people can be part of a single team.",
    },
    {
        title: "Do I have to have a team to participate?",
        content:
            "No. We will have team matching during the event itself, or you can come with a team or solo. Whatever works for you!",
    },
    {
        title: "What if I lack web dev experience?",
        content:
            "Many ICS clubs will be hosting workshops throughout the week to assist participants get started with web development.",
    },
];

const Faq = () => {
    return (
        <>
            <div className="flex flex-col w-[75%] gap-y-4">
                <h2 className="text-6xl font-bold text-center">FAQ</h2>

                <Accordion
                    type="single"
                    collapsible
                    className="w-[75%] mx-auto"
                >
                    {FAQ_DATA.map((data, index) => (
                        <AccordionItem
                            value={`item-${index + 1}`}
                            key={index}
                            className="text-xl"
                        >
                            <AccordionTrigger>{data.title}</AccordionTrigger>
                            <AccordionContent className="text-lg">
                                {data.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </>
    );
};

export default Faq;
