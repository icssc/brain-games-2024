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
        title: "When and where is Brain Games?",
        content:
            "Brain Games will be from 11am-4:30pm on Saturday, February 10, 2024, in the Student Center (Emerald Bay).",
    },
    {
        title: "How big are the teams? What if I don't have a team?",
        content:
            "Brain Games events are designed for teams of 2-4 people (we recommend 4), but don't worry! If you don't have a team yet, just mark that when you sign up and we'll match you with one :).",
    },
    {
        title: "Do I have to sign up ahead of time?",
        content:
            "Due to capacity limitations, all teams must register ahead of time. Our capacity is limited to 30 teams, and teams will be given spots on a first-come, first-serve basis. Any teams that register after that will be put on a waitlist and we’ll contact your team by email if a spot opens up.",
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
