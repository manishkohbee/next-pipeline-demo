/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import * as fbq from "../lib/fbpixel"

export default function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isSubmitting) {
            setIsSubmitting(true)

            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "id": "5",
                    "eventId": "I6yE0d6LWutN4FBuMzAb",
                    "userName": name,
                    "email": email,
                    "whatsappNumber": phone,
                    "notificationEnabled": true
                })
            };
            fetch("https://asia-east2-kohbeeweb.cloudfunctions.net/kohbeeController/saveRegistration", requestOptions)
                .then(response => response.json())
                .then(() => fbq.event("Lead"))
                .then(() => {
                    setIsSubmitting(false)
                }).catch((e) => {
                })
        }
    }

    return (
        <section className="pb-20">
            <div className="rounded-xl mx-4 px-4 py-4">
                <form onSubmit={handleSubmit} >
                    <h3 className="mb-6 text-2xl text-center font-bold">You are just one step away from growing your revenue online</h3>
                    <h4 className="mb-6 text-xl text-center">Hurry! Only 100 FREE seats available</h4>
                    <div className="mb-6">
                        <input className="h-16 w-full p-4 text-l font-semibold leading-none rounded outline-none border-2" type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-6">
                        <input className="h-16 w-full p-4 text-l font-semibold leading-none rounded outline-none border-2" type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-6">
                        <input className="h-16 w-full p-4 text-l font-semibold leading-none rounded outline-none border-2" type="number" placeholder="Phone (without 0 or +91)" required maxLength={10} minLength={10} value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="flex justify-center">
                        <button className="mt-4 py-2 px-6 rounded bg-primary text-white font-bold leading-loose transition duration-200">Go Premium</button>
                    </div>
                </form>
            </div>
        </section>
    )
}