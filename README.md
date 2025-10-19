# React Tutorial Manager

A simple and interactive web app to manage tutorials using React, Vite, Axios, and Bootstrap. Users can add, view, edit, and delete tutorials in a clean, responsive interface.

---

## Features

- Add Tutorials – Users can create new tutorials with title and description.

- View Tutorials – All tutorials are displayed in a table with ID, title, and description.

- Edit Tutorials – Update existing tutorials through a modal interface.

- Delete Tutorials – Remove tutorials with a single click.

- Responsive Design – Built with Bootstrap for mobile-friendly UI.

- REST API Integration – Interacts with a backend API using Axios.


---

## Preview

[View](https://github.com/user-attachments/assets/d56b90f6-9ab6-4de8-8abc-50c74603934d)

---

## Tech Stack

- Frontend: React, Vite, Axios, Bootstrap

- Icons: react-icons

- Backend: REST API (any backend you connect to)

---

## Project Structure
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

---

## How It Works

- Add a Tutorial – Fill the form in AddTutorial and submit.

- View Tutorials – All tutorials fetched from API are displayed in TutorialList.

- Edit a Tutorial – Click the edit icon, modify the fields in the modal, and save.

- Delete a Tutorial – Click the delete icon to remove a tutorial.
