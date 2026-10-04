# 🏥 Prescripto — Doctor Appointment & Healthcare Platform

<p align="center">
  <img src="https://raw.githubusercontent.com/halfrost/halfrost/master/icons/header_1.png" alt="banner" width="100%">
</p>

<h1 align="center">Prescripto</h1>

<p align="center">
  A full-stack healthcare appointment booking platform built with the MERN stack.
</p>

<p align="center">
  <a href="https://github.com/YashSaini213/Prescripto">
    <img src="https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github" alt="GitHub">
  </a>
</p>

---

## 📌 About The Project

*Prescripto* is a full-stack doctor appointment and healthcare management platform designed to make the process of finding doctors and booking appointments simple and convenient.

The application provides separate interfaces for *patients, doctors, and administrators*, allowing users to manage appointments and healthcare-related information through an intuitive web interface.

---

## ✨ Features

### 👨‍⚕️ Patient Features

- 🔐 User registration and authentication
- 👨‍⚕️ Browse available doctors
- 🔎 Search and filter doctors
- 📅 Book doctor appointments
- 📋 View appointment details
- ❌ Cancel appointments
- 👤 Manage user profile
- 📱 Responsive user interface

### 🩺 Doctor Features

- 🔐 Doctor authentication
- 📅 Manage appointments
- 👀 View patient appointments
- 📊 Manage availability
- 👤 Update doctor profile
- 💰 Manage consultation-related information

### 🛠️ Admin Features

- 🔐 Admin authentication
- 👨‍⚕️ Add and manage doctors
- 📋 View appointments
- 👥 Manage users
- 📊 Dashboard with platform information
- 🗂️ Manage healthcare platform data

---

## 🛠️ Tech Stack

### Frontend

<p>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" width="50" height="50" alt="React">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="50" height="50" alt="JavaScript">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" width="50" height="50" alt="HTML5">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" width="50" height="50" alt="CSS3">
</p>

- React.js
- JavaScript
- HTML5
- CSS3
- Axios
- React Router

### Backend

<p>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" width="50" height="50" alt="Node.js">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" width="50" height="50" alt="Express">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" width="50" height="50" alt="MongoDB">
</p>

- Node.js
- Express.js
- MongoDB
- Mongoose
- REST APIs
- JWT Authentication

### Tools

- Git & GitHub
- VS Code
- Postman
- MongoDB Atlas

---

## 📂 Project Structure

text
Prescripto/
│
├── admin/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md


---

## ⚙️ Installation & Setup

### 1. Clone the repository

bash
git clone https://github.com/YashSaini213/Prescripto.git


### 2. Navigate into the project

bash
cd Prescripto


### 3. Install frontend dependencies

bash
cd frontend
npm install


### 4. Install backend dependencies

bash
cd ../backend
npm install


### 5. Install admin dependencies

bash
cd ../admin
npm install


---

## 🔐 Environment Variables

Create a .env file inside the backend directory.

Example:

env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


> ⚠️ Never commit your .env file to GitHub. Add it to .gitignore.

Example .gitignore:

gitignore
node_modules/
.env
.env.*
!.env.example


---

## ▶️ Running the Application

### Start Backend

bash
cd backend
npm run server


### Start Frontend

Open another terminal:

bash
cd frontend
npm run dev


### Start Admin Panel

Open another terminal:

bash
cd admin
npm run dev


The application can then be accessed through the URLs shown in your terminal.

---

## 🔑 Authentication

Prescripto uses authentication to provide secure access to different parts of the application.

- JWT-based authentication
- Protected routes
- Role-based access
- Secure password handling
- Separate patient, doctor, and admin functionality

---

## 📸 Screenshots

### 🏠 Home Page

Add your screenshot here.

markdown
![Home Page](./screenshots/home.png)


### 👨‍⚕️ Doctors

Add your screenshot here.

markdown
![Doctors](./screenshots/doctors.png)


### 📅 Appointment Booking

Add your screenshot here.

markdown
![Appointment Booking](./screenshots/appointment.png)


### 🛠️ Admin Dashboard

Add your screenshot here.

markdown
![Admin Dashboard](./screenshots/admin.png)


---

## 🚀 Future Improvements

- 💳 Online payment integration
- 📧 Email appointment notifications
- 📱 Mobile application
- 💬 Doctor-patient chat
- ⭐ Doctor reviews and ratings
- 📄 Digital prescriptions
- 🔔 Real-time appointment notifications
- 📊 Advanced analytics dashboard

---

## 👨‍💻 Developer

*Rimjhim Gotharwal*

Full-Stack Developer | MERN Stack

- 💼 LinkedIn: [Rimjhim Gotharwal](https://www.linkedin.com/in/rimjhim-gotharwal0109/)
- 💻 GitHub: [rimjhim0107](https://github.com/rimjhim0107)
- 📧 Email: rimjhimjai01@gmail.com

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

Thanks for checking out *Prescripto!* 🚀
