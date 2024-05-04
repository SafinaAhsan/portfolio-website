"use client"
import { useState } from "react";
import Icons from "../../app/components/icons";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import Footer from "./footer";

export default function Contact() {
  const [result, setResult] = useState("Send Message");

  const onSubmit = async (event:any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "86a19034-5e36-43d8-9632-4017a20028dd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
    <section className="relative mt-8 sm:mt-20 px-10 py-4 sm:grid sm:grid-cols-2">
      <div className="hidden sm:block absolute bottom-0 -left-4 transform -translate-x-1/2 bg-gradient-to-br from-teal-600 to-transparent rounded-full h-80 w-80 blur-lg z-0 top-3/4"></div>
<div>
        <h1 className="font-bold text-lg mb-2">Let&apos;s connect</h1>
        <p className="text-gray-700 dark:text-gray-300 leading-8 tracking-tight max-w-md">
          Connect with me for unparalleled expertise and personalized solutions tailored to your unique needs. Let&apos;s collaborate to turn your vision into reality and achieve success together!
        </p>
        <Icons />
      </div>

      <form
      onSubmit={onSubmit} className="flex flex-col gap-4 mt-6 sm:mt-0 ">
      <label htmlFor="Full Name" className="block text-sm font-medium">Full Name</label>
        <Input
          type="text" 
          id="fullname"
          required
          placeholder="Safina Ahsan"
          className="bg-gray-200 dark:bg-gray-900 border border-gray-700 rounded placeholder:text-gray-700 dark:placeholder:text-gray-300 text-sm block w-full sm:w-10/12 p-2.5"
        />
        <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
        <Input
          type="email" 
          id="email"
          required
          placeholder="abc@example.com"
          className="bg-gray-200 dark:bg-gray-900 border border-gray-700 rounded placeholder:text-gray-700 dark:placeholder:text-gray-300 text-sm block w-full sm:w-10/12 p-2.5"
        />
  
        <label htmlFor="message" className="block text-sm font-medium">Your Message</label>
        <Input
          type="text" 
          id="message"
          required
          placeholder="Let's talk about"
          className="bg-gray-200 dark:bg-gray-900 border border-gray-700 rounded placeholder:text-gray-700 dark:placeholder:text-gray-300 text-sm block w-full  sm:w-10/12 p-2.5"
        />
        <Button
          className="w-full sm:w-10/12 mt-2 text-center text-white bg-gradient-to-r from-blue-900 to-teal-600 rounded"
       type="submit" >
        {result}
        </Button>
      </form>
</section>
    
    <Footer/>

    </div>
  );
}

