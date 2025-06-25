# HobbyHub Client

### Live Site: https://hobby-hub-client.web.app

## Overview

HobbyHub is a platform designed to bring together people with shared
interests and passions. Whether you love painting, gaming, cooking, or
hiking, our community helps you connect with like-minded individuals,
form hobby groups, and engage in exciting activities. Our mission is to make it easy for hobby enthusiasts to meet,
collaborate, and grow their skills while forming meaningful
connections. With HobbyHub, you can explore existing groups, create
your own, and participate in meetups—all in one place!

## Tech Stack

- React
- Firebase Authentication
- dotenv for environment variables
- React Awesome Reveal
- React Fast Marquee (Featured Groups Section)
- React Icons
- React Router
- React Simple Typewriter
- React Toastify
- SweetAlert2
- swiper

## Features

- Secure authentication with Firebase.
- Dynamic homepage with an animated slider and featured hobby groups.
- Private routes for logged-in users (Create Group, My Groups).
- Interactive UI with smooth transitions and dynamic animations.
- Custom error handling with toast notifications instead of default alerts.
- Fully responsive design for mobile, tablet, and desktop.

## Tricky Implimentations

- **Dark/Light Theme Implementation:** Finding an intuitive and efficient way to toggle between themes without affecting overall user experience.
- **Authentication Handling:** Ensuring users remain logged in when refreshing private routes without being redirected to the login page.
- **Animated UI Components:** Integrating animations from libraries like React Awesome Reveal and React Simple Typewriter while maintaining performance.
- **Environment Variables:** Configuring Firebase authentication keys securely without exposing sensitive data.
- **Form Validation:** Implementing custom validation for registration passwords without using default browser alerts.
- **Page Reload Handling:** Ensuring the application does not throw errors when reloading from any route.
- **Handling Expired Groups:** Implementing logic to prevent users from joining groups where the start date has already passed.

### Installation & Setup

To run this project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/hobbyhub-client.git
   cd hobbyhub-client
   
2. **Install dependencies**
 ```bash
npm install

3. **Set up environment variables Create a .env.local file and add:**

 ```VITE_apiKey=your_api_key
 ```VITE_authDomain=your_auth_domain
 ```VITE_projectId=your_project_id
 ```VITE_storageBucket=your_storage_bucket
 ```VITE_messagingSenderId=your_messaging_sender_id
 ```VITE_appId=your_app_id
        
4. **Start the development server**

 ```bash
npm run dev

View the app Open http://localhost:5173


