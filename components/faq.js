import { useState } from 'react';

export default function FaqSection() {

    let faqs = [
        {
            question: "Que passa",
            answer: "mi amour",
            isOpen: false,
        },
        {
            question: "Que passa",
            answer: "mi amour",
            isOpen: false
        },
        {
            question: "Que passa",
            answer: "mi amour",
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
            <div className="py-20 bg-gray-50 radius-for-skewed">
                <div className="container mx-auto px-4">
                    <div className="mb-16 max-w-xl mx-auto text-center text-5xl font-bold font-heading">
                        <h2 className="">Frequently Asked Questions</h2>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <ul className="space-y-4 lg:space-y-6">

                            {faqList.map((value, index) => (
                                <li key={index} className="p-6 bg-gray-50 rounded shadow">
                                    <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600" onClick={() => updateFaqList(index)}>
                                        <span className="text-xl">{value.question}</span>
                                        <ExpandedIcon isOpen={value.isOpen} />
                                    </button>
                                    <p className={`${value.isOpen ? "" : "hidden"} mt-4 text-gray-400 font-normal leading-loose`}> {value.answer} </p>
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
            <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
        );
    } else {
        return (
            <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        )
    }
}