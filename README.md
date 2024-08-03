# MernEats Frontend

Welcome to the **MernEats Frontend** repository. This project is the frontend part of the MernEats food delivery web application, built with React and Tailwind CSS. This README provides an overview of the frontend project, how to set it up, and the key features of the application.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

**MernEats Frontend** is designed to provide a user-friendly interface for browsing restaurants, viewing menus, managing the cart, and placing orders. It also includes a dashboard for restaurant owners to manage their menu items and orders.

## Features

- User authentication and authorization
- Browse restaurants by city or cuisine
- View restaurant details and menus
- Add items to the cart and manage the cart
- Place orders and track order status
- Restaurant owner dashboard to manage menu items and orders
- Responsive design for desktop and mobile devices

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS
- **State Management**: React Context API
- **Routing**: React Router
- **Form Handling**: React Hook Form, Zod
- **API Requests**: Axios

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Clone the Repository

```bash
git clone https://github.com/yourusername/merneats-frontend.git
cd merneats-frontend
```

### Install Dependencies

```bash
npm install
```

## Configuration

Create a `.env` file in the root directory of the project and add the following environment variables:

```env
REACT_APP_API_BASE_URL=http://localhost:10000/api
```

## Running the Application

### Start the Client

```bash
npm start
```

Open your browser and navigate to `http://localhost:3000` to see the application running.

## Project Structure

```plaintext
src/
├── api/                  # API request functions
├── assets/               # Images and other assets
├── components/           # Reusable components
├── forms/                # Form components and schemas
├── pages/                # Page components
├── router/               # React Router configuration
├── types/                # TypeScript types and interfaces
├── utils/                # Utility functions
├── App.tsx               # Main app component
├── index.tsx             # Entry point
├── styles/               # Tailwind CSS configuration and global styles
└── ...
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code adheres to the project's coding standards.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using MernEats Frontend! We hope you enjoy using our application. If you have any questions or feedback, feel free to open an issue or contact us.
