# Blog Search App

A **Blog Search App** built with **Vite React** and **Tailwind CSS** that allows users to search, filter, and explore blogs with a modern Neumorphic design. This app offers a seamless, responsive experience optimized for both desktop and mobile users.

## Features

### 1. **Search Blogs**
- A dynamic search box allows users to search blogs by:
  - Title
  - Author
  - Tags
  - Summary

### 2. **Filter Blogs**
- Users can refine their search using the following filters:
  - **Author**: Select blogs written by a specific author.
  - **Category**: Filter blogs based on categories such as sports, facts, etc.
  - **Published Date**: View blogs published on a specific date.

### 3. **Responsive Design**
- Mobile-friendly and fully responsive layout.
- Neumorphic design for a modern and visually appealing interface.

### 4. **Debounced Search**
- Implements a debounced search mechanism to optimize performance and minimize unnecessary API or state updates during typing.

### 5. **Dynamic Dropdowns**
- Dropdown menus for filters are dynamically populated based on blog data.
- Dropdowns have a scrollable feature to handle large data sets without overflowing the screen.

### 6. **Neumorphic Components**
- Custom reusable components with Neumorphic design:
  - `NeumorphicInput` for the search bar.
  - `NeumorphicButton` for actionable buttons.
  - `NeumorphicCard` to display blog entries.


## Technologies Used
- **Frontend Framework**: Vite React
- **Styling**: Tailwind CSS
- **State Management**: React's `useState` hook


## Installation

### Prerequisites
- Node.js and npm/yarn installed on your system.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/blog-search-app.git
   cd blog-search-app
    ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Open the app in your browser at http://localhost:5173.


## Project Structure

```bash
├── src
│   ├── components
│   │   ├── NeumorphicInput.jsx
│   │   ├── NeumorphicButton.jsx
│   │   └── NeumorphicCard.jsx
│   ├── assets
│   │   └── allBlogs.js
│   ├── pages
│   │   └── SearchPage.jsx
│   └── App.jsx
├── public
│   └── index.html
└── package.json
```


## Usage

1. Open the application in your browser after starting the development server.
2. Use the search bar to look for blogs by title, author, tags, or summary.
3. Apply filters for **Author**, **Category**, or **Published Date** to refine your search.
4. Explore the responsive and user-friendly Neumorphic design across devices.


## Future Enhancements

- **Backend Integration**: Connect the app to a backend API for dynamic data fetching.
- **Pagination**: Implement pagination for better handling of large datasets.
- **Sorting**: Add sorting options for published date, title, or popularity.
- **Improved Filtering**: Support multiple filters simultaneously with enhanced UX.
- **Tag Cloud**: Display popular tags for quick filtering.
- **Bookmark Feature**: Enable users to bookmark blogs for later reference.


## Author

Developed by **Akshay Anand**, a front-end developer with a keen interest in creating responsive and visually appealing web applications. I am currently a student of BTech CSE and aspiring to excel as a full-stack developer. For any questions or feedback, feel free to reach out! akshayanand9162@gmail.com
