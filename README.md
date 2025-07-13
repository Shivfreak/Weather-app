# Movie Search Application

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: SHIVAM PANDEY

*INTERN ID*: CT06DF1951

*DOMAIN*: REACT JS

*DURATION*: 6 WEEKS

*MENTOR*: NEELA SANTOSH

This file provides a comprehensive overview of the Movie Search App, a feature-rich web application built using modern web technologies. The primary goal of this project is to offer a seamless and intuitive user experience for discovering and managing movies. The application is developed with React, a powerful JavaScript library for building user interfaces, and styled with Tailwind CSS, a utility-first CSS framework that enables rapid UI development. The entire project is set up and managed with Vite, a next-generation front-end tooling that provides a faster and leaner development experience.

## Application Overview

The Movie Search App is designed to be a one-stop solution for movie enthusiasts. It allows users to search for any movie by its title through the extensive Open Movie Database (OMDB) API. The search results are displayed in a clean, organized, and visually appealing manner, with each movie presented as a card containing its poster, title, and release year. This design ensures that users can quickly scan through the search results and identify the movies they are interested in.

A key feature of this application is the ability for users to create and manage a personal list of favorite movies. With a single click, a user can add any movie from the search results to their "Favorites" list. This list is persistent, meaning it is saved in the user's browser using local storage. This ensures that their curated list of movies is not lost when they close the browser or revisit the application later. The user can view their favorites list at any time and can easily remove movies from it. This functionality provides a personalized experience, allowing users to keep track of movies they love or want to watch later.

The application's user interface is designed to be highly intuitive and user-friendly. A toggle button allows users to seamlessly switch between the movie search view and their favorites list. The application also includes robust error handling to manage scenarios where the OMDB API might not return any results for a search query or if there is a network issue. A loading indicator is displayed during API calls to inform the user that data is being fetched, which enhances the user experience by providing feedback on the application's status.

## Core Technologies

The selection of technologies for this project was driven by the need for a fast, modern, and maintainable codebase.

-   **React**: The core of the application is built with React. Its component-based architecture allows for the creation of reusable UI elements, which makes the code more modular and easier to manage. React's state management capabilities are used to handle the application's data, such as the list of movies and the user's favorites.

-   **Vite**: The project is built and served using Vite. Vite's lightning-fast Hot Module Replacement (HMR) and its efficient build process significantly speed up the development workflow.

-   **Tailwind CSS**: For styling, the application uses Tailwind CSS. This utility-first CSS framework allows for the creation of custom designs without writing custom CSS. It provides a set of utility classes that can be composed to build any design directly in the markup.

-   **OMDB API**: The movie data is sourced from the OMDB API. This API provides a vast collection of movie information, including posters, titles, and release years.

## Getting Started

To run this project locally, you will need to have Node.js and npm (or yarn) installed on your machine.

1.  **Clone the repository** to your local machine.
2.  **Navigate to the project directory** in your terminal.
3.  **Install the required dependencies** by running `npm install`.
4.  **Obtain an API key** from the [OMDB API website](http://www.omdbapi.com/apikey.aspx).
5.  **Add your API key** to the `src/App.jsx` file by replacing `'YOUR_API_KEY'` with your actual key.
6.  **Start the development server** by running `npm run dev`. The application will be available at `http://localhost:5173`.

## Future Enhancements

While the current version of the application is fully functional, there are several potential improvements that could be implemented in the future:

-   **Detailed Movie Information**: A feature to view more details about a movie, such as the plot, director, actors, and ratings, could be added. This could be implemented as a modal or a separate page.
-   **User Authentication**: Implementing user accounts would allow users to save their favorites to a database, making their lists accessible across different devices.
-   **Advanced Search and Filtering**: Adding options to filter search results by year, genre, or other criteria would provide a more powerful search experience.
-   **Pagination**: For search queries that return a large number of results, implementing pagination would improve performance and usability.

# OUTPUT

