import React from 'react';
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import AnimatedTitle from "./AnimatedTitle";

function Newsletter() {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted!"); // Debugging

        try {
            await addDoc(collection(db, "subscribe"), {
                email,
                timestamp: new Date(),
            });
            alert("Your message has been submitted 👍");
            setEmail("");
        } catch (error) {
            console.error("Error submitting form:", error);
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div className="flex justify-center items-center py-4 mb-6">
            <div className="lg:w-1/2 md:w-2/3 w-full flex flex-col items-center text-center">
                <div className="p-2">
                <AnimatedTitle
                title="Newsletter"
                containerClass="mt-5 !text-black text-center p-2"
              />
                    <h1 className="text-[18px] font-medium">
                    Salon Growth Secrets Delivered: Join Our Newsletter!
                    </h1>
                </div>
                <form 
                    className="flex flex-col items-center space-y-4 w-full max-w-md" 
                    onSubmit={handleSubmit}
                >
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full bg-white rounded-full focus:border-indigo-500 text-base outline-none text-black py-2 px-4 leading-8 transition-colors duration-200 ease-in-out text-center"
                    />
                    <button 
                        type="submit" 
                        className="cursor-pointer bg-yellow-100 text-black rounded-full py-2 px-6 font-general text-xs uppercase"
                    >
                       Join Us
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Newsletter;
