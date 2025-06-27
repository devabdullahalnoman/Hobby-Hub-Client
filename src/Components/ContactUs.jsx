import React from "react";
import { FaHome } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import Swal from "sweetalert2";

const ContactUs = () => {
  const handleSendMessage = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Message sent",
      icon: "info",
    });
  };

  return (
    <div>
      <div className="w-11/12 mx-auto my-12 px-4 md:px-8 lg:px-10">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-base-200 p-8 rounded-2xl">
          <div className="space-y-5">
            <p className="text-xl font-semibold">We’d love to hear from you!</p>
            <p className="text-lg">
              Whether you have a question, feedback, or just want to say hello,
              drop us a message.
            </p>
            <div className="space-y-2">
              <h1 className="text-xl font-bold flex items-center gap-2">
                <FaHome />
                Address:
              </h1>
              <p className="text-lg">
                123 Artifact Street, Historyville, HT 45678
              </p>
              <h1 className="text-xl font-bold flex items-center gap-2">
                <FaPhoneSquareAlt />
                Phone:
              </h1>
              <p className="text-lg">+1-555-123-4567</p>
              <h1 className="text-xl font-bold flex items-center gap-2">
                <MdAttachEmail />
                Email:
              </h1>
              <p className="text-lg">support@historicalartifactstracker.com</p>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                rows="5"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>

            <button
              onClick={handleSendMessage}
              className="btn btn-primary w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
