# Flixxit

## Live Link

[Flixxit](https://capstone-hjpm.vercel.app/) (Responsive for mobile and tablet)

## Description

Flixxit is an advanced web application designed to offer users an immersive and feature-rich streaming experience, similar to popular OTT (Over-The-Top) platforms like Netflix, Prime Video, and AppleTV+.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone "https://github.com/ankitjsr1211/capstone_june.git"
   ```

2. Navigate to the backend directory:

   ```bash
   cd BACKEND
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Create a `.env` file and add the following environment variables:

   - `JWT_SECRET_KEY`: Used for JWT token generation and validation.
   - `JWT_REFRESH_SECRET`: Used for refreshing JWT tokens.
   - `RAZORPAY_API_KEY`: The API key for Razorpay payment integration.
   - `RAZORPAY_API_SECRET`: The API secret for Razorpay payment integration.

6. Navigate back to the root directory, then install frontend dependencies:

   ```bash
   cd ..
   cd FRONTEND/append
   npm install
   ```

7. Start the frontend development server:
   ```bash
   npm start
   ```

## Payment

- Test card details:
  - **Mastercard**: `5267 3181 8797 5449`, Random CVV, Any future date
  - **Visa**: `4111 1111 1111 1111`, Random CVV, Any future date
- Test UPI ID: `success@razorpay`

**Note:** Free instances of web services may spin down due to inactivity, which might cause some delay when connecting.

## Features & Usage

- **User Authentication:** Login or register as a user.
- **Search:** Search for movies by title.
- **Navigation:** Use the navigation bar to access different sections:
  - **Home**
  - **Movies**
  - **Shows:** View content based on different categories and genres.
- **Watchlist:** Hover over any content and add it to the watchlist to play later.
- **Content Details:** Click on the title of any content to view its synopsis, rating, and other details.
- **Interactions:** Add likes and comments to any content on the title view.
- **Subscription:** Users can watch any content once they subscribe. Complete your subscription to watch content.
- **Profile Page:** View profile details like name, email address, and subscription details. Set your favorite genre.
- **History:** Go to the history section to see viewed contents.
- **Watchlist:** Go to the watchlist section to view your watchlist.
- **Watch Video:** Play the selected content on the platform with a “Skip Intro” feature of 10 seconds.

## Technologies Used

- **MERN Stack (MongoDB, Express.js, React, Node.js):** The core technology stack for building the web application.
- **JWT (JSON Web Tokens):** Used for secure user authentication and authorization.
- **Razorpay:** Integrated payment gateway for handling online payments securely.
- **Range-parser:** A library for parsing HTTP Range headers, useful for handling partial content requests in streaming media.
- **React:** JavaScript library for building user interfaces.
- **Redux:** State management library for managing the application's global state.
- **CSS:** For styling the web application, ensuring a visually appealing and consistent design.
- **React Router:** Client-side routing in a React application.
- **React Player:** A React component for playing video and audio files.
- **Axios:** For making HTTP requests from the client-side.
- **Font Awesome Icons:** A library of icons for enhancing the user interface.
- **Material-React-Table:** For creating interactive and responsive data tables with Material Design styles.
- **Server-Side Rendering (SSR) using Pug templates:** For generating dynamic HTML on the server side for admin signup.

**Disclaimer:** All rights of images belong to Flixxit. This project is created for educational purposes only and is not intended for commercial use.
