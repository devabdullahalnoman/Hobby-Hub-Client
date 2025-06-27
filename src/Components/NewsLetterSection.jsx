import React from "react";
import Swal from "sweetalert2";

const NewsletterSection = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Signed up for Daily News!",
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ok",
    });
  };

  return (
    <div className=" mb-15 py-15">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
        <p className="text-lg mb-6">
          Subscribe to our newsletter to get updates about new hobby groups,
          upcoming events, and inspiring stories from our community.
        </p>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-xl mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
            required
          />
          <button type="submit" className="btn btn-primary w-full md:w-auto">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSection;
