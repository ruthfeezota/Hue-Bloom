import Button from "../components/Button";
import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from "../firebase"; // Ensure this is correct
import { TiLocationArrow } from "react-icons/ti";

const EmailSubmitComponent = () => {
    const onButtonClick = () => {
        const pdfUrl = "MarketingGuide.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "MarketingGuide.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (email.trim()) {
            try {
                await addDoc(collection(db, "emailsubscription"), { email });
                setIsSubmitted(true);
                alert('Email submitted successfully!');
            } catch (error) {
                console.error("Error adding document: ", error);
                alert(`Error submitting your email: ${error.message}`);
            }
        } else {
            alert('Please enter a valid email.');
        }
    };

    const handleButtonClick = () => {
        alert('Button clicked!');
    };

    return (
        <div className="flex flex-col justify-center">
            {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="p-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />

                    <button
                        type="submit"
                        className="rounded-full bg-[#a5d6] px-7 py-3 font-general text-xs uppercase shadow-md hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-300"
                        
                    >
                    
                        Submit
                    </button>
                </form>
            ) : (

               
                <button onClick={onButtonClick} className="rounded-full bg-[#a5d6] px-7 py-3 text-black  shadow-md hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-300  font-circular-web">
                Download Marketing Plan
                </button>
            

            


        
            )}
        </div>
    );
};



{/* <button
onClick={handleButtonClick}
className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
>
Button
</button> */}

export default EmailSubmitComponent;
