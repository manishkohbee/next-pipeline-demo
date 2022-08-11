/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

export default function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`${name} ${email} ${phone}`)
        setIsSubmitted(true)
    }


    if (isSubmitted === null)
        return (
            <section className="bg-gray-100">
                <div className="flex items-center justify-center h-screen mx-auto max-w-xl">
                    <div className="container mx-2 border-2 p-2">
                        <h3 className="mb-6 text-2xl text-center font-bold">You are just one step away from growing your revenue online</h3>
                        <h4 className="mb-6 text-xl text-center">Hurry! Only 100 FREE seats available</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <input className="h-16 w-full border-2 p-4 text-l font-semibold leading-none bg-white rounded outline-none" type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mb-6">
                                <input className="h-16 w-full border-2 p-4 text-l font-semibold leading-none bg-white rounded outline-none" type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-6">
                                <input className="h-16 w-full border-2 p-4 text-l font-semibold leading-none bg-white rounded outline-none" type="phone" placeholder="Phone" required maxLength={10} minLength={10} value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="flex justify-center">
                                <button className="mt-4 py-2 px-6 rounded bg-primary text-white font-bold leading-loose transition duration-200">Get Started</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    else if (isSubmitted === true)
        return (
            <section className="bg-gray-50">
                <div className="flex items-center justify-center h-screen mx-auto max-w-xl">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="flex items-center justify-center mx-auto max-w-xl">
                            <img className="w-64 h-64 object-cover rounded-lg" src="atis-assets/gifs/success.gif" alt="" />
                        </div>
                        <span className="text-2-xl text-center font-bold">You&apos;ve successfully registered for the event.<br></br> Look out for an email & whatsapp from us</span>
                    </div>
                </div>
            </section>
        )
}