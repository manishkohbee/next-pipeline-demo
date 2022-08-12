/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import * as fbq from '../lib/fbpixel'

export default function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [hasSubmitted, sethasSubmitted] = useState(null)
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
                    sethasSubmitted(true)
                    setIsSubmitting(false)
                }).catch((e) => {
                    sethasSubmitted(false)
                })
        }
    }

    const emailRegex = /\S+@\S+\.\S+/;

    const validateEmail = (event) => {
        if (emailRegex.test(email)) {
            setIsValid(true);
        } else {
            setIsValid(false);
            setMessage('Please enter a valid email!');
        }
    };

    if (hasSubmitted === null)
        return (
            <section className="">
                <div className="flex items-center justify-center h-screen mx-auto max-w-xl">
                    <div className="">
                        <form onSubmit={handleSubmit} className="border-2 mx-2 px-2 py-4">
                            <h3 className="mb-6 text-2xl text-center font-bold">You are just one step away from growing your revenue online</h3>
                            <h4 className="mb-6 text-xl text-center">Hurry! Only 100 FREE seats available</h4>
                            <div className="mb-6">
                                <input className="h-16 w-full border-2 p-4 text-l font-semibold leading-none rounded outline-none" type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mb-6">
                                <input className="h-16 w-full border-2 p-4 text-l font-semibold leading-none rounded outline-none" type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-6">
                                <input className="h-16 w-full border-2 p-4 text-l font-semibold leading-none rounded outline-none" type="number" placeholder="Phone (without 0 or +91)" required maxLength={10} minLength={10} value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="flex justify-center">
                                <button disabled={isSubmitting} className="mt-4 py-2 px-6 rounded bg-primary text-white font-bold leading-loose transition duration-200">REGISTER NOW</button>
                            </div>
                        </form>
                        <img className="w-32 h-full object-cover rounded-lg mx-auto pt-6" src="assets/safe_and_secure.svg" alt="" />
                    </div>
                </div>
            </section>
        )
    else if (hasSubmitted === true)
        return (
            <section>
                <div className="flex items-center justify-center h-screen mx-auto max-w-xl">
                    <div className="grid grid-cols-1 gap-4">
                        <h2 className="text-4xl text-center font-bold my-2">Congratulations!!!</h2>
                        <div className="flex items-center justify-center mx-auto max-w-xl my-2">
                            <img className="w-64 h-64 object-cover rounded-lg" src="assets/gifs/success.gif" alt="" />
                        </div>
                        <span className="text-l text-center font-bold my-2">You&apos;ve successfully registered for the event.<br></br> Look out for an email & whatsapp from us</span>
                        <a target="_blank" href="https://bit.ly/3AhX7D6" type="button" className="my-2 py-2 px-6 rounded bg-primary text-white font-medium leading-loose transition duration-200 inline-flex items-center" rel="noreferrer">
                            <svg className="mr-4 w-4 h-4" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" /> </svg>
                            Add to Calendar
                        </a>
                        <a target="_blank" href="https://bit.ly/3SMgpaL" type="button" className="mb-2 py-2 px-6 rounded bg-primary text-white font-medium leading-loose transition duration-200 inline-flex items-center" rel="noreferrer">
                            <svg className="mr-4 w-4 h-4" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /> </svg>
                            Join Exclusive Whatsapp Group
                        </a>

                    </div>
                </div>
            </section>
        )
}