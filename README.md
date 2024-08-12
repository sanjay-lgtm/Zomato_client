# MernEats Frontend

Welcome to the **MernEats Frontend** repository. This project is the frontend part of the MernEats food delivery web application, built with React and Tailwind CSS. This README provides an overview of the frontend project, how to set it up, and the key features of the application.

## server listen URL
```bash
  https://zomato-server-api.onrender.com
```
## server github URL 
```bash
https://github.com/sanjay-lgtm/Zomato_Server_Api
```

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
git clone https://github.com/sanjay-lgtm/Zomato_client.git
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

## ScreenShots
## HomePage
![Zhome](https://github.com/user-attachments/assets/5035702f-4758-42b8-b27a-c5ddadddc4c1)

## manage resturents
![zmanageres](https://github.com/user-attachments/assets/109ff565-ced8-4b0c-95bd-55d40bcf0daa)
![zmr2](https://github.com/user-attachments/assets/fb7d73a1-2212-4d8a-8568-895995aac9d8)

## manage users
![zmu](https://github.com/user-attachments/assets/04650c57-3721-4a11-b0d0-2c1b124ac6a6)

## order status

![zorder](https://github.com/user-attachments/assets/0e9f4238-0469-4095-a0d3-bfb87b5ad464)



## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using MernEats Frontend! We hope you enjoy using our application. If you have any questions or feedback, feel free to open an issue or contact us.
