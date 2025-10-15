# 🔐 Authentication Full-Stack MERN Project

A complete authentication system built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring comprehensive user authentication and email verification functionalities.

## ✨ Features

- **User Registration (SignUp)** - Create new user accounts with validation
- **User Login** - Secure login with JWT authentication
- **Email Verification** - Verify user email addresses via verification links
- **OTP Verification** - Two-factor authentication using One-Time Passwords
- **Forget Password** - Request password reset via email
- **Reset Password** - Securely reset user passwords
- **Welcome Email** - Automated welcome emails for new users
- **Protected Routes** - Secure routes accessible only to authenticated users
- **JWT Token Management** - Secure token-based authentication
- **Password Hashing** - bcrypt implementation for secure password storage

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcrypt
- Nodemailer

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/RakeshManchewar/Authentication-FullStack-MERN-Project.git
cd Authentication-FullStack-MERN-Project
```

### 2. Install Dependencies

#### Backend Setup
```bash
cd backend
npm install
```

#### Frontend Setup
```bash
cd frontend
npm install
```

### 3. Environment Variables Setup

**⚠️ IMPORTANT:** Update the `.env` file with necessary values otherwise the project will not work.

Create a `.env` file in the backend directory and add the following variables:

```env
# MongoDB Configuration
MONGO_URI=your_mongodb_connection_string

# JWT Secret
JWT_SECRET=your_jwt_secret_key

# Email Configuration (for NodeMailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_specific_password

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:5173

# Server Port
PORT=5000
```

#### Email Setup Notes:
- For Gmail, you need to create an **App Password** in your Google Account settings
- Enable 2-Factor Authentication on your Google account first
- Go to Google Account → Security → App Passwords → Generate new app password
- Use this app password in the `EMAIL_PASSWORD` field

### 4. Running the Application

#### Start Backend Server

```bash
cd backend
node server.js
# OR for development with auto-restart
nodemon server.js
```

The backend server will start on `http://localhost:5000`

#### Start Frontend Development Server

```bash
cd frontend
npm run dev
```

The frontend will start on `http://localhost:5173`

## 📁 Project Structure

```
Authentication-FullStack-MERN-Project/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── authController.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── middleware/
│   │   └── auth.js
│   ├── utils/
│   │   └── emailService.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── utils/
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

## 🔑 API Endpoints

### Authentication Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/verify-email` | Verify email address |
| POST | `/api/auth/verify-otp` | Verify OTP code |
| POST | `/api/auth/forgot-password` | Request password reset |
| POST | `/api/auth/reset-password` | Reset user password |
| GET | `/api/auth/profile` | Get user profile (Protected) |

## 🔒 Security Features

- Password hashing using bcrypt
- JWT token authentication
- HTTP-only cookies for token storage
- CORS protection
- Input validation and sanitization
- Protected routes and middleware
- Secure password reset flow

## 🎨 Features in Detail

### Email Verification Flow
1. User signs up with email and password
2. System sends verification email with unique token
3. User clicks verification link
4. Account is activated upon successful verification

### Password Reset Flow
1. User requests password reset
2. System sends reset link to registered email
3. User clicks link and enters new password
4. Password is securely updated in database

### OTP Verification
- Time-limited OTP codes
- Secure generation and validation
- Resend OTP functionality

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Rakesh Manchewar**

- GitHub: [@RakeshManchewar](https://github.com/RakeshManchewar)

## 🙏 Acknowledgments

- Thanks to all contributors who helped build this project
- MERN stack community for excellent documentation
- All open-source packages used in this project

## 📧 Support

If you have any questions or need help getting started, please open an issue in the GitHub repository.

---

⭐ If you found this project helpful, please give it a star on GitHub!
