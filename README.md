# Weather Dashboard

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: SHIVAM PANDEY

*INTERN ID*: CT06DF1951

*DOMAIN*: REACT JS

*DURATION*: 6 WEEKS

*MENTOR*: NEELA SANTOSH

This is a simple and elegant weather dashboard that provides real-time weather information for any city in the world. Built with modern web technologies, it offers a seamless and responsive user experience, allowing you to quickly check the current weather conditions with just a few clicks.

## Features

- **City-Based Weather Search**: Easily search for any city to get its latest weather updates.
- **Real-Time Weather Data**: Get current temperature, humidity, wind speed, and a description of the weather conditions.
- **User-Friendly Interface**: A clean, minimalist design that is easy to navigate and understand.
- **Responsive Design**: The application is fully responsive and works on all devices, including desktops, tablets, and mobile phones.
- **Error Handling**: Provides clear feedback if the city is not found or if there is an issue with fetching the data.
- **Loading State**: Displays a loading indicator while fetching data to keep the user informed.

## Technologies Used

- **React**: A popular JavaScript library for building user interfaces.
- **Vite**: A fast and modern build tool that provides a lightning-fast development experience.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs with ease.
- **Open-Meteo API**: A free and open-source weather API for fetching geocoding and forecast data.

## How It Works

The application is built around a single-page architecture using React. Here’s a step-by-step breakdown of its functionality:

1.  **User Input**: The user enters a city name into the search bar and clicks the "Get Weather" button.

2.  **Geocoding API Call**: The application takes the city name and makes a request to the **Open-Meteo Geocoding API**. This API returns the geographical coordinates (latitude and longitude) for the specified city.

3.  **Weather API Call**: Once the coordinates are retrieved, the application makes a second API call to the **Open-Meteo Forecast API**. This request includes the latitude and longitude to fetch the current weather data for that location.

4.  **State Management**: The application uses React's `useState` hook to manage its state, including the city name, weather data, loading status, and any potential errors.

5.  **Data Display**: The fetched weather data is then displayed in a well-designed card, showing the following information:
    -   City and Country
    -   Weather Description (e.g., "Clear sky," "Partly cloudy")
    -   Temperature
    -   Humidity (in percentage)
    -   Wind Speed (in m/s)

6.  **Weather Codes**: The Open-Meteo API provides weather conditions as numerical codes. The application includes a helper function that maps these codes to human-readable descriptions, making the information easy to understand.

## Code Structure

The main logic of the application is encapsulated within the `App.jsx` component. Here’s a brief overview of the key functions:

-   `fetchCoordinates(cityName)`: An asynchronous function that takes a city name and returns its coordinates.
-   `fetchWeather(cityName)`: The primary function that orchestrates the process of fetching weather data. It calls `fetchCoordinates` and then uses the result to get the weather forecast.
-   `getWeatherDescription(code)`: A utility function that converts weather codes into descriptive strings.
-   `handleSubmit(e)`: A handler function that is triggered when the user submits the form. It prevents the default form submission and initiates the weather data fetch.

The UI is styled using **Tailwind CSS**, which allows for rapid and consistent styling directly within the JSX code. The layout is centered and responsive, ensuring a great user experience across all screen sizes.

## How to Run Locally

To run this project locally, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/weather-application.git
    ```

2.  **Navigate to the project directory**:
    ```bash
    cd weather-application
    ```

3.  **Install dependencies**:
    ```bash
    npm install
    ```

4.  **Start the development server**:
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173`.

This weather dashboard is a great example of how to build a functional and visually appealing application using modern front-end technologies. Its clean code and straightforward architecture make it an excellent project for learning and experimentation.

#OUTPUT
<img width="1790" height="780" alt="Image" src="https://github.com/user-attachments/assets/4e1aee45-e5d0-41c1-be3f-037ffd9435ad" />
<img width="1476" height="746" alt="Image" src="https://github.com/user-attachments/assets/fa7d447a-2d5a-4c07-ac45-04de27539ebf" />
