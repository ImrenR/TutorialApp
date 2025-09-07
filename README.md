# React Tutorial Manager

A simple and interactive web app to manage tutorials using React, Vite, Axios, and Bootstrap. Users can add, view, edit, and delete tutorials in a clean, responsive interface.

## Features

Add Tutorials – Users can create new tutorials with title and description.

View Tutorials – All tutorials are displayed in a table with ID, title, and description.

Edit Tutorials – Update existing tutorials through a modal interface.

Delete Tutorials – Remove tutorials with a single click.

Responsive Design – Built with Bootstrap for mobile-friendly UI.

REST API Integration – Interacts with a backend API using Axios.

## Tech Stack

Frontend: React, Vite, Axios, Bootstrap

Icons: react-icons

Backend: REST API (any backend you connect to)

##  Getting Started
1. Clone the repository
git clone https://github.com/your-username/react-tutorial-manager.git
cd react-tutorial-manager

2. Install dependencies
npm install

3. Set up environment variables

Create a .env file in the project root:

VITE_APP_URL=https://your-api-endpoint.com/tutorials/

4. Run the development server
npm run dev


Open http://localhost:5173
 in your browser.

##  Project Structure
```
my-project/
│── public/
│── src/
│   ├── components/
│   │   ├── AddTutorial.jsx
│   │   ├── TutorialList.jsx
│   │   └── EditTutorial.jsx
│   ├── App.jsx
│   └── main.jsx
│── .env
│── index.html
│── package.json
│── vite.config.js
```
## Screenshots

Optional: Add screenshots or GIFs showing the app in action.

## How It Works

Add a Tutorial – Fill the form in AddTutorial and submit.

View Tutorials – All tutorials fetched from API are displayed in TutorialList.

Edit a Tutorial – Click the edit icon, modify the fields in the modal, and save.

Delete a Tutorial – Click the delete icon to remove a tutorial.

