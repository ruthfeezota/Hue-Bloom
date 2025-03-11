import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import AnimatedTitle from "../components/AnimatedTitle";
import Button from "../components/Button";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    service: "",
    phoneNumber: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contactus"), {
        ...formData,
        timestamp: new Date()
      });
      alert("Thanks for reaching out! We’ll be in touch soon.");
      setFormData({ name: "", email: "", companyName: "", service: "", phoneNumber: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <main>
      <section className="text-black body-font relative py-24">
        <div className="container px-2 mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
          <h1 className="mt-5 text-black text-center text-6xl font-zentry">Let's Work Together</h1>
           
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-4">
              Tell us about your project! Select the service you need, and we’ll be in touch to kickstart your growth.
            </p>
          </div>

          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form className="flex flex-wrap -m-2" onSubmit={handleSubmit}>
              <div className="p-2 w-1/2">
                <label className="leading-7 text-sm text-black">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="w-full bg-white rounded-full text-black py-1 px-3 leading-8" />
              </div>
              
              <div className="p-2 w-1/2">
                <label className="leading-7 text-sm text-black">Business Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" className="w-full bg-white rounded-full text-black py-1 px-3 leading-8" />
              </div>
              
              <div className="p-2 w-full">
                <label className="leading-7 text-sm text-black">What service do you need?</label>
                <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-white rounded-full text-black py-1 px-3 leading-8">
                  <option value="">Select a service</option>
                  <option value="Web Design">Web Design</option>
                  <option value="SEO">SEO</option>
                  <option value="Content Design">Content Design</option>
                </select>
              </div>
              
              <div className="p-2 w-1/2">
                <label className="leading-7 text-sm text-black">Phone Number</label>
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Your phone number" className="w-full bg-white rounded-full text-black py-1 px-3 leading-8" />
              </div>
              
              <div className="p-2 w-full">
                <label className="leading-7 text-sm text-black">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." className="w-full bg-white rounded-3xl text-black py-1 px-3 h-32 resize-none" />
              </div>
              
              <div className="p-2 w-full">
                <button type="submit" className="mt-2 bg-purple-200 text-black rounded-full py-2 px-6">Let's Get Started</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactUs;




// function ContactUs() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [companyName, setCompanyName] = useState("");
//   const [interest, setInterest] = useState("");
//   const [state, setState] = useState("");
//   const [typeBusiness, setTypeBusiness] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [message, setMessage] = useState("");
//   const [budget, setBudget] = useState("");