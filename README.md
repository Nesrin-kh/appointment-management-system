# Appointment Management System 

📌 Project Overview

The Appointment Management System allows users (patients, doctors, and admins) to efficiently manage appointments.
It includes features such as user registration, login, appointment booking, and an admin dashboard for managing users and appointments.

🛠 Tech Stack

🔹 Frontend

React.js
React Router
Axios

🔹 Backend

Node.js
Express.js
SQLite

🔹 Styling

CSS
Google Fonts

🔹 Authentication

JSON Web Tokens (JWT)

🔹 Version Control

Git & GitHub

#Project Setup

###Prerequisites

Node.js and npm installed on your machine.

SQLite installed and running locally or a connection string for a remote SQLite instance.

Steps to Run the Project

1-Clone the Repository

  git clone https://github.com/your-username/appointment-management-system.git
  
  cd appointment-management-system
  
2-Install Dependencies

  -For the backend:
  
    cd backend
    
    npm install
  -For the frontend:
  
   cd ../frontend
   
   npm install
   
3-Set Up Environment Variables

 Create a .env file in the backend folder and add the following:
 
   PORT=3000
   
   JWT_SECRET=JWT_SECRET
   
4-Start the Backend Server

  cd backend
  
  npm start
  
5-Start the Frontend Development Server

  cd ../frontend
  
  npm start
  
6-Access the Application

   Open your browser and go to http://localhost:3000
   

# Project Approach

I enjoyed working on this project, especially implementing CAPTCHA as it was my first time using it. It was a great learning experience and a valuable new skill. However, one challenge I faced was that CAPTCHA made it harder to validate the registration page quickly, as it required additional steps for user verification.

I also,
Used React for dynamic UI with react-router-dom for navigation.

Used Context API for authentication management.

Integrated JWT-based authentication in the backend.

Used SQLite as a lightweight database.

Followed RESTful API principles.


# Pending Features

Email notifications for appointments.

Role-based access control for better security.

Improved UI with better styling and animations.

Advanced Analytics: Implement charts and graphs for admin dashboard analytics.

Deployment: Deploy the application to a cloud platform (e.g., Heroku, Vercel, or AWS).






  
