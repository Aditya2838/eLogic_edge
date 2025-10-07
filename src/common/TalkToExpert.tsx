"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { motion } from "framer-motion";

function TalkToExpert() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://gaysgxqov0.execute-api.ap-south-1.amazonaws.com/formData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            selectionType: "enquiry",
          }),
        }
      );

      if (response.ok) {
        setMessage("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "" });
      } else {
        setMessage("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="bg-[#EEF1F5] 2xl:py-[100px] xl:py-[75px] lg:py-[66px] md:py-[30px] py-[50px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex 2xl:rounded-[26px] xl:rounded-[19.5px] md:rounded-[17.33px] rounded-[16.21px] overflow-hidden 2xl:shadow-[0_0_50px_rgba(0,0,0,0.1)] xl:shadow-[0_0_18px_rgba(146,146,146,0.25)] md:shadow-[0_0_16px_rgba(146,146,146,0.25)] shadow-[0_0_14px_rgba(0,0,0,0.25)] md:flex-nowrap flex-wrap"
        >
          <div className="2xl:w-[741px] xl:w-[555px] lg:w-[495px] md:w-[395px] w-full bg-white 2xl:px-[50px] xl:px-[37.5px] md:px-[33.33px] px-[31.17px] 2xl:py-[53px] xl:py-[37.5px] md:py-[32.5px] py-[29.97px]">
            <h3 className="text-[#262626] font-bold 2xl:text-[36px] xl:text-[27px] md:text-[24px] text-[22.45px]">
              Talk to Expert
            </h3>
            <div className="2xl:mt-[40px] xl:mt-[30px] md:mt-[26px] mt-[24.5px]">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 2xl:gap-y-[30px] xl:gap-y-[22.5px] md:gap-y-[20px] gap-y-[18.75px]">
                  <div>
                    <label htmlFor="name" className="text-[#262626] flex mb-1.5">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] rounded-md p-3 text-black border-0"
                      type="text"
                      placeholder="Enter your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-[#262626] flex mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] rounded-md p-3 text-black border-0"
                      type="email"
                      placeholder="Enter your Email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-[#262626] flex mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] rounded-md p-3 text-black border-0"
                      type="tel"
                      placeholder="Enter your Phone Number"
                      required
                    />
                  </div>
                  <div className="xl:mt-2">
                    <Button
                      type="submit"
                      className="bg-[#3563E9] h-auto gap-1 text-white font-semibold px-6 py-3 rounded-md transition-all duration-500 hover:bg-[#172747]"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit Now"}{" "}
                      <GrFormNextLink className="w-5 h-5" />
                    </Button>
                  </div>
                  {message && (
                    <p className="text-center mt-3 text-sm text-[#3563E9]">{message}</p>
                  )}
                </div>
              </form>
            </div>
          </div>
          <div className="2xl:w-[calc(100%_-_741px)] xl:w-[calc(100%_-_555px)] lg:w-[calc(100%_-_495px)] md:w-[calc(100%_-_395px)]">
            <iframe
              className="h-full w-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30453.907124137066!2d78.423904!3d17.424338!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb970d18993739%3A0x90c151e6974d10e8!2seLogicTech%20Edge!5e0!3m2!1sen!2sin!4v1738235240338!5m2!1sen!2sin"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TalkToExpert;
