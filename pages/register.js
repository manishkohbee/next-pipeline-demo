/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import * as fbq from '../lib/fbpixel'
export default function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isSubmitting) {
            setIsSubmitting(true)
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "id": "5",
                    "eventId": "I6yE0d6LWutN4FBuMzAb",
                    "userName": name,
                    "email": email,
                    "whatsappNumber": phone,
                    "notificationEnabled": true
                })
            };
            fetch('https://asia-east2-kohbeeweb.cloudfunctions.net/kohbeeController/saveRegistration', requestOptions)
                .then(response => response.json())
                .then(() => fbq.event('Lead'))
                .then(() => {
                    setIsSubmitted(true)
                    setIsSubmitting(false)
                })
        }

    }


    if (isSubmitted === null)
        return (
            <section className="bg-gray-100">
                <div className="flex items-center justify-center h-screen mx-auto max-w-xl">
                    <div className="container mx-2 border-2 px-2 py-4">
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
                                <button disabled={isSubmitting} className="mt-4 py-2 px-6 rounded bg-primary text-white font-bold leading-loose transition duration-200">Register Now</button>

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
                        <h2 className="text-4xl text-center font-bold">Congratulations!!!</h2>
                        <div className="flex items-center justify-center mx-auto max-w-xl">
                            <img className="w-64 h-64 object-cover rounded-lg" src="assets/gifs/success.gif" alt="" />
                        </div>
                        <span className="text-l text-center font-bold pb-4">You&apos;ve successfully registered for the event.<br></br> Look out for an email & whatsapp from us</span>
                    </div>
                </div>
            </section>
        )
}