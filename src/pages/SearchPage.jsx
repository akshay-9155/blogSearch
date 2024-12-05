import React, { useState } from "react";
import NeumorphicInput from "../components/NeumorphicInput";
import NeumorphicButton from "../components/NeumorphicButton";
import NeumorphicCard from "../components/NeumorphicCard";
import { allBlogs } from "../assets/allBlogs";

const SearchPage = () => {
  const blogs = allBlogs;

  // States for search query and filter values
  const [query, setQuery] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [results, setResults] = useState(blogs);

  // Handling search and filter logic
  const handleSearch = () => {
    if (
      query.trim() === "" &&
      !selectedAuthor &&
      !selectedCategory &&
      !selectedDate
    ) {
      setResults(blogs); // Show all blogs if nothing is selected
      return;
    }

    const filteredBlogs = blogs.filter((blog) => {
      const matchesQuery =
        blog.title.toLowerCase().includes(query.toLowerCase()) ||
        blog.author.toLowerCase().includes(query.toLowerCase()) ||
        blog.tags.includes(query.toLowerCase()) ||
        blog.summary.toLowerCase().includes(query.toLowerCase());

      const matchesAuthor = selectedAuthor
        ? blog.author === selectedAuthor
        : true;
      const matchesCategory = selectedCategory
        ? blog.category === selectedCategory
        : true;
      const matchesDate = selectedDate
        ? blog.publishedDate === selectedDate
        : true;

      return matchesQuery && matchesAuthor && matchesCategory && matchesDate;
    });

    setResults(filteredBlogs);
  };

  // Debounce function for performance improvement
  const debounceSearch = (func, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const debouncedSearch = debounceSearch(handleSearch, 500);

  return (
    <div className="min-h-screen bg-soft-gray p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Blog Search</h1>
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6">
        {/* Search Box */}
        <div className="flex items-center space-x-4">
          <NeumorphicInput
            placeholder="Search blogs..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              debouncedSearch(); // Calling the debounced search on input change
            }}
          />
          <NeumorphicButton onClick={handleSearch}>Search</NeumorphicButton>
        </div>

        {/* Filter Options */}
        <div className="flex justify-between lg:justify-start md:space-x-4">
          {/* Author Filter */}
          <select
            value={selectedAuthor}
            onChange={(e) => setSelectedAuthor(e.target.value)}
            className="p-1 text-xs md:text-base rounded-lg bg-soft-gray shadow-neumorphic"
          >
            <option className="" value="">
              Select Author
            </option>
            {/* Adding author options dynamically */}
            {[...new Set(blogs.map((blog) => blog.author))].map((author) => (
              <option className="" key={author} value={author}>
                {author}
              </option>
            ))}
          </select>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-1 text-xs md:text-base rounded-lg bg-soft-gray shadow-neumorphic"
          >
            <option value="">Select Category</option>
            {/* Adding category options dynamically */}
            {[...new Set(blogs.map((blog) => blog.category))].map(
              (category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              )
            )}
          </select>

          {/* Date Filter */}
          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="p-1 text-xs md:text-base rounded-lg bg-soft-gray shadow-neumorphic"
          >
            <option value="">Select Date</option>
            {/* Adding date options dynamically */}
            {[...new Set(blogs.map((blog) => blog.publishedDate))].map(
              (date) => (
                <option key={date} value={date}>
                  {date}
                </option>
              )
            )}
          </select>
        </div>
      </div>

      {/* Display Filtered Blogs */}
      <div className="mt-10 gap-y-6 md:gap-y-8 xl:gap-y-4 flex flex-wrap justify-around">
        {results.length === 0 ? (
          <div className="text-2xl font-bold">No blog found</div>
        ) : (
          results.map((blog) => (
            <NeumorphicCard
              key={blog.id}
              title={blog.title}
              author={blog.author}
              publishedDate={blog.publishedDate}
              tags={blog.tags}
              summary={blog.summary}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;
