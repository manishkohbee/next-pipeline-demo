import { useState } from "react"

/* eslint-disable @next/next/no-img-element */
export default function Carousel() {
    const images = [
        "https://firebasestorage.googleapis.com/v0/b/kohbeeweb.appspot.com/o/dummy%2Ftestimonial-1.jpg?alt=media&token=6c3897f5-0c54-464d-993d-2adecbe5aa76",
        "https://firebasestorage.googleapis.com/v0/b/kohbeeweb.appspot.com/o/dummy%2Ftestimonial-2.png?alt=media&token=a8553ccc-076f-4c9b-920b-446f6378431b",
        "https://firebasestorage.googleapis.com/v0/b/kohbeeweb.appspot.com/o/dummy%2Ftestimonila-3.jpg?alt=media&token=67b15735-8dcd-49c3-8177-84850001ddf9",
    ]

    const [index, setIndex] = useState(0)

    const incrementIndex = () => {
        setIndex((index + 1) % 3)
    }

    const decrementIndex = () => {
        if (index == 0)
            setIndex(2)
        else
            setIndex((index - 1) % 3)
        console.log(index)
    }

    return (
        <section className="relative py-20">
            <div className="container px-4 mx-auto">
                <div className="flex items-center justify-around">
                    <div className="px-4">
                        <button className="flex-shrink-0 mr-2 hidden md:block w-14 h-14 rounded-full border hover:bg-gray-50" onClick={() => decrementIndex()}>
                            <svg className="mx-auto" width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.30018 6.25128L18.2502 6.25128" stroke="#838EA4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.30017 1.25031L1.36317 6.25131L9.30017 11.2523L9.30017 1.25031Z" stroke="#838EA4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-wrap items-center">
                            <div className="relative w-full px-4">
                                <div className="relative mb-10">
                                    <img className="h-112 w-full object-cover object-top rounded-xl transition" src={images[index]} alt="" />
                                </div>
                                <div className="block w-full text-center">
                                    {images.map((value, currIndex) => (
                                        <button key={currIndex} className={`${currIndex === index ? "bg-primary" : "bg-secondary"} ${currIndex === images.length - 1 ? "" : "mr-6"} w-2 h-2 rounded-full`} onClick={() => setIndex(currIndex)}></button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4">
                        <button className="flex-shrink-0 ml-2 hidden md:block w-14 h-14 rounded-full border hover:bg-gray-50" onClick={() => incrementIndex()}>
                            <svg className="mx-auto" width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.69976 6.74872L0.749756 6.74872" stroke="#838EA4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.69971 11.7497L17.6367 6.74869L9.69971 1.74769V11.7497Z" stroke="#838EA4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}