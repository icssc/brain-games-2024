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
            "Brain Games will be from 11am-4:30pm on Saturday, February 10, 2024, in the Student Center (Emerald Bay room).",
    },
    {
        title: "Who can participate?",
        content:
            "All UCI students! Brain Games is open to individuals of all skill levels, including beginners. Brain Games is designed to be inclusive, with games that will be fun for all skill levels and backgrounds (for blindfolded coding, some experience with python by at least one of your team members will be helpful).",
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
    {
        title: "Is there food?",
        content:
            "Yes! There will be a lunch break in the middle of the event. We will have pizza, sprite, snacks, and Capri Suns.",
    },
    {
        title: "How much does it cost? Are there prizes?",
        content: "Brain games is completely free to attend, with food and snacks provided at no cost to any participants! We'll also prizes for each member of the first, second, and third place teams.",
    },
    {
        title: "What should teams bring?",
        content:
            "Please make sure that your team brings at least 1 charged laptop for blindfolded coding (we recommend each team bring a second backup laptop just in case), as well as some writing materials to take notes with!",
    },
    {
        title: "What if I have other questions?",
        content: "Email us at icssc@uci.edu and we'll be happy to answer them!",
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
