# 🍋 Little Lemon Restaurant

## 🚀 Live Demo

[little-lemon-jet-six.vercel.app](https://little-lemon-jet-six.vercel.app/)

---

## 📖 About the Project

Little Lemon Restaurant is a responsive restaurant web application built with **Create React App (CRA)** and styled using **CSS**.  
The purpose of this project is to simulate a real restaurant website experience, including menu browsing, table reservations, and user flow navigation.

The application focuses on component-based architecture, state management, routing, and form handling in React.

---

## ✨ Features

- 🏠 Home page with hero section and restaurant introduction
- 🍽️ Weekly specials menu display
- ⭐ Customer testimonials section
- 🧭 Fully responsive navigation bar
- 📄 Multi-page routing using React Router
- 🚧 “Under Construction” page for unsupported sections
- ❌ Custom 404 page for invalid routes
- 📅 Table reservation system with dynamic time slots
- 🔁 useReducer-based availability logic for booking times
- 🧾 Multi-step reservation form with validation
- 👤 Controlled form inputs (name, email, phone, etc.)
- 📬 Confirmation page with reservation summary
- ⏱️ Auto-redirect to home after successful booking
- 🌙 Dark / Light theme using Context API
- 📱 Fully responsive design (mobile, tablet, desktop)

---

## 🧠 Key Functionalities

### 📅 Reservation System

- Users can select date, time, number of guests, and occasion
- Available time slots change dynamically based on selected date
- Booked times are removed from availability list
- Form validation ensures correct input (e.g., minimum 1 person)

### 🧾 Multi-Step Booking Flow

1. Select reservation details
2. Review reservation summary
3. Enter personal information
4. Confirm booking
5. Success page with auto redirect to Home

---

## 🛠️ Tech Stack

- React (Create React App)
- JavaScript (ES6+)
- CSS3
- React Router DOM
- Context API (theme management)
- useReducer & useState hooks

---

## 🎨 UI / UX Features

- Responsive layout for all screen sizes
- Light and dark theme support
- Clean component-based structure
- Interactive navigation system
- Smooth user flow for reservations

---

## ⚙️ Installation & Setup

- git clone https://github.com/ArtursLiepa/Little-Lemon.git
- cd little-lemon
- npm install
- npm start

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

### 📁 Project Structure

src/
├── components/
├── pages/
├── context/
├── assets/
├── App.js
└── index.js

## 🚧 Future Improvements

- Persist reservations using backend/database
- Add real email sending functionality
- Improve availability logic persistence (currently resets on refresh)
- Add authentication system (login functionality)
- Enhance accessibility (ARIA support)

## 🧠 What I Learned

- React Router and navigation structure
- Complex form handling with validation
- useReducer for state logic management
- Context API for theme switching
- Component-based UI architecture
- Responsive web design principles

## 👨‍💻 Author

- GitHub: https://github.com/
- Live: https://little-lemon-jet-six.vercel.app/
