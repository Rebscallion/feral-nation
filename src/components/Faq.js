import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const FAQ = () => {
    return (
        <div id="faq">
            <h2>F.A.Q</h2>
            <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            How do I apply to adopt/book an appointmet?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            It's first in first served for appointment time slots, but not for the kitties - it will always be the kittens/cats who choose who adopts them. Each appointment is for 30mins and is exclusively for one person/family/group at a time. During this time you hang out with the kittens and see who bonds with you. If any kitty makes it clear they love you then your adoption will be approved.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What’s included in the adoption fee?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            All kitties have been desexed, microchipped, vaccinated, health checked, and are up to date with flea and worm treatments.
                            There’s an adoption fee of $200 (one vaccination) or $250 (two vaccinations) which goes toward covering their costs. The adoption fee can be paid by bank transfer (06-0574-0888213-00 Feral Nation) or cash.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What happens if I miss my initial appointment?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            If you don't arrive for your appointment, or if you cancel at the last minute, you don't get a second chance!  Sorry but these days almost everyone has a mobile phone so there's no good reason for not saying you're delayed or have had a change of plan.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            When do I take my kitty home?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Only adoptable kittens are available to meet, so if it’s a match you will take the kitty/s away with you. It’s not possible to hold them for a later date.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default FAQ