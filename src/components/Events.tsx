import React from "react";

const Events = () => {
    return (
        <div className="flex-center flex-col gap-y-16 mb-32 pt-6" id="events">
            <h2 className="text-6xl font-bold text-center">Events</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 my-auto gap-y-8 md:gap-y-16 lg:gap-x-16 lg:gap-y-24">
                <div className="gap-y-2 flex flex-col text-left">
                    <div className="w-[75%] mx-auto lg:ml-auto">
                        <h2 className="text-2xl md:text-3xl font-semibold">
                            Blindfolded Coding
                        </h2>
                        <p className="text-sm md:text-base">
                            This pair programming competition is an ultimate
                            test of your teamwork skills! One team member will
                            be designated as the <b>typer and blindfolded</b>.
                            Only the typer can touch the keyboard, so everyone
                            else will need to verbally guide the programmer to
                            solve some quick programming challenges.
                        </p>
                    </div>
                </div>

                <div className="gap-y-2 flex flex-col text-left">
                    <div className="w-[75%] mx-auto">
                        <h2 className="text-2xl md:text-3xl font-semibold">
                            Estimathon
                        </h2>
                        <p className="text-sm md:text-base">
                            In this test of your {"team's"} estimation skills,
                            {"you'll"} work together to guess the answer to{" "}
                            <b>fermi questions</b>, such as the number of taxis
                            in NYC (for example, you could guess 10k-100k). You
                            provide your <b>answer as a range</b>, and, if{" "}
                            {"you're"} correct, the smaller your range the more
                            points you get!
                        </p>
                    </div>
                </div>

                <div className="gap-y-2 flex flex-col text-left">
                    <div className="w-[75%] mx-auto lg:ml-auto">
                        <h2 className="text-2xl md:text-3xl font-semibold">
                            Bridge Building
                        </h2>
                        <p className="text-sm md:text-base">
                            Test your <b>physical engineering prowess</b> in
                            this crafty event; Create a small bridge from basic
                            materials to try to <b>withstand the most weight</b>
                            !
                        </p>
                    </div>
                </div>

                <div className="gap-y-2 flex flex-col text-left">
                    <div className="w-[75%] mx-auto">
                        <h2 className="text-2xl md:text-3xl font-semibold">
                            Code Blocks
                        </h2>
                        <p className="text-sm md:text-base">
                            Code blocks is a fun <b>scavenger hunt</b> where you
                            and your team will follow clues and solve small
                            puzzles to earn small “blocks” of code. Piece them
                            together to be the first to find all the components
                            of a particular line of code that does something!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
