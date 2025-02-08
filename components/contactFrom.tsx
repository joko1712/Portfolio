"use client";

import React, { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;

        try {
            const response = await fetch("https://formspree.io/f/myzkppjz", {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" },
            });

            if (response.ok) {
                setStatus("SUCCESS");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("ERROR");
            }
        } catch (error) {
            setStatus("ERROR");
        }
    };

    return (
        <form
            className='my-contact flex flex-col w-full p-6 rounded-xl space-y-4'
            onSubmit={handleSubmit}>
            <input
                name='_subject'
                type='hidden'
                value='New Message from Portfolio'
            />
            <input name='_replyto' type='hidden' value={formData.email} />
            <input
                aria-hidden='true'
                className='hidden' // Hides the honeypot field
                name='_gotcha'
                tabIndex={-1}
                type='text'
            />

            <div>
                <label className='my-contacttext block mb-1' htmlFor='name'>
                    Name
                </label>
                <input
                    required
                    className=' w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    id='name'
                    name='name'
                    type='text'
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label className='my-contacttext block mb-1' htmlFor='email'>
                    Email
                </label>
                <input
                    required
                    className='w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    id='email'
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label className='my-contacttext block mb-1' htmlFor='message'>
                    Message
                </label>
                <textarea
                    required
                    className='w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    id='message'
                    name='message'
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>

            <button
                className='skills-Button w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-purple-500 transition-colors'
                type='submit'>
                Send Message
            </button>

            {status === "SUCCESS" && (
                <div
                    aria-live='polite'
                    className='mt-4 p-3 bg-green-500 text-white text-center rounded'>
                    Thank you for reaching out! I&apos;ll get back to you soon.
                </div>
            )}

            {status === "ERROR" && (
                <div
                    aria-live='polite'
                    className='mt-4 p-3 bg-red-500 text-white text-center rounded'>
                    Oops! Something went wrong. Please try again.
                </div>
            )}
        </form>
    );
}
