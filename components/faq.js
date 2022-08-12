import { useState } from 'react';

export default function FaqSection() {

    let faqs = [
        {
            question: "What is the language of the workshop?",
            answer: "The workshop is in English",
            isOpen: false,
        },
        {
            question: "When does the workshop start?",
            answer: "15th August, 4 PM",
            isOpen: false
        },
        {
            question: "Will the recording of the workshop be shared?",
            answer: "No, it’s a live workshop. The recording will not be shared for this workshop.",
            isOpen: false,
        },
        {
            question: "How long is the workshop?",
            answer: "The workshop will be of 1 hours, it can extend for an additional 20 mins, in case of Q&As",
            isOpen: false,
        },
        {
            question: "Who is this workshop for?",
            answer: "This workshop is for creators (youtubers, instagrammers or any other social media handles), trainers, coaches, educators, or any person who wants to make money from content.",
            isOpen: false,
        },
        {
            question: "Is there any kind of payment needed for this workshop?",
            answer: "This workshop is absolutely FREE for the first 100 people who register for it!",
            isOpen: false,
        },
        {
            question: "Will I be able to make a lot of money after this workshop?",
            answer: "This is NOT a get rich quick scheme. Your money making depends on the ACTIONS you take post this workshop. The workshop is designed to open doors for you to monetize your audience.",
            isOpen: false,
        },
    ];

    const [faqList, setFaqList] = useState(faqs)

    const updateFaqList = (index) => {
        const faq = faqList[index];

        faq.isOpen = !faq.isOpen;
        setFaqList([
            ...faqList.slice(0, index),
            faq,
            ...faqList.slice(index + 1, faqList.length)
        ]);
    }

    return (
        <section>
            <div className="pb-20 radius-for-skewed">
                <div className="container mx-auto px-4">
                    <div className="mb-16 max-w-xl mx-auto text-center text-4xl font-bold font-heading">
                        <h2 className="">Frequently Asked Questions</h2>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <ul className="space-y-4 lg:space-y-6">

                            {faqList.map((value, index) => (
                                <li key={index} className="p-6 bg-overlaay rounded shadow">
                                    <button className="w-full flex justify-between items-center text-left font-bold font-heading " onClick={() => updateFaqList(index)}>
                                        <span className="text-xl">{value.question}</span>
                                        <ExpandedIcon isOpen={value.isOpen} />
                                    </button>
                                    <p className={`${value.isOpen ? "" : "hidden"} mt-4 font-normal leading-loose`}> {value.answer} </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function ExpandedIcon({ isOpen }) {
    if (isOpen) {
        return (
            <svg className="w-4 h-4 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
        );
    } else {
        return (
            <svg className="w-4 h-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        )
    }
}