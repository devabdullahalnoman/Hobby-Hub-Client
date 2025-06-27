import React from "react";

const BlogSection = () => {
  const blogEntries = [
    {
      title: "Bringing People Together Through Code",
      date: "June 15, 2025",
      snippet:
        "A look at the logic behind HobbyHub’s group discovery and what went into designing smooth sign-up flows, custom filters, and responsive layouts for real humans.",
    },
    {
      title: "Designing for Joy: Crafting Emotion-Driven UIs",
      date: "June 5, 2025",
      snippet:
        "From soft shadows to animated hover states—this entry explains how small design choices reflect the spirit of each hobby and create deeper emotional resonance.",
    },
    {
      title: "Lessons from Building for Hobbyists",
      date: "May 28, 2025",
      snippet:
        "Three real-world challenges I encountered building HobbyHub—and how I solved them using clean React patterns, scalable architecture, and purposeful UX thinking.",
    },
  ];

  return (
    <div className="bg-base-200 my-15 py-12 shadow-lg">
      <div className="w-10/12 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Insights from the HobbyHub Journey
        </h2>
        <div className="space-y-10">
          {blogEntries.map((entry, index) => (
            <div
              key={index}
              className="bg-base-100 p-12 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <p className="text-sm text-gray-500">{entry.date}</p>
              <h3 className="text-2xl font-semibold mt-2 mb-3">
                {entry.title}
              </h3>
              <p className="text-base text-gray-700">{entry.snippet}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
