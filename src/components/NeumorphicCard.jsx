import React from "react";

const NeumorphicCard = ({ title, author, publishedDate, tags, summary }) => {
  return (
    <div className="p-6 w-full md:w-[45%] xl:w-[30%] md:min-h-[20vh] rounded-lg bg-soft-gray shadow-neumorphic transition-transform transform hover:scale-105">
      <h2 className="text-2xl font-bold mb-3 text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-semibold">Author:</span> {author}
      </p>
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-semibold">Published Date:</span> {publishedDate}
      </p>
      <div className="text-sm text-gray-500 mb-4">
        <span className="font-semibold">Tags:</span> {tags}
      </div>
      <p className="text-gray-700">{summary}</p>
    </div>
  );
};

export default NeumorphicCard;
