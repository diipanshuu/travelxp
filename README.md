# Project Documentation: Next.js Authentication App

## Overview

This Next.js Authentication App is designed to provide a seamless and secure user authentication experience. It includes features such as mobile number validation, OTP generation, and token-based authentication using JSON Web Tokens (JWT).

## Table of Contents

1. [Getting Started](#getting-started)
   - [Installation](#installation)
   - [Running the Development Server](#running-the-development-server)
2. [Project Structure](#project-structure)
   - [Pages](#pages)
   - [API Routes](#api-routes)
   - [Context](#context)
   - [Utilities](#utilities)
   - [Configuration Files](#configuration-files)
3. [Dependencies](#dependencies)
4. [Usage](#usage)
   - [Home Page](#home-page)
   - [Sign-In Page](#sign-in-page)
   - [Validation Page](#validation-page)
5. [Deployment](#deployment)
6. [License](#license)

## Getting Started

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Project Structure

### Pages

- **`index.js`**: Home page with information about the authentication app.
- **`sign-in.js`**: Sign-in page for entering the mobile number.
- **`validate.js`**: Validation page for entering the simulated OTP.

### API Routes

- **`api/sign-in.js`**: Simulates sign-in, generates, and stores a random OTP.
- **`api/validate.js`**: Validates entered OTP, generates JWT tokens upon successful validation.

### Context

- **`AuthContext.js`**: Manages authentication data (mobile number and OTP) using React context.

### Utilities

- **`db.js`**: Connects to MongoDB for database operations.
- **`index.js` (in the utils folder)**: Utility function for generating random OTPs.
- **`otpRepository.js`**: Manages OTP storage, retrieval, and deletion using MongoDB.

### Configuration Files

- **`.env`**: Contains environment variables for access and refresh token secrets.
- **`.gitignore`**: Specifies files and directories to be ignored by Git.
- **`jsconfig.json`**: Configuration file for JavaScript projects.
- **`next.config.js`**: Configuration file for Next.js.

## Dependencies

- `joi`: Validation library for mobile numbers and OTPs.
- `jsonwebtoken`: Library for generating and verifying JWT tokens.
- `memory-cache`: In-memory caching library.
- `mongodb`: MongoDB driver for Node.js.
- `next`: Next.js framework.
- `react` and `react-dom`: React libraries.

## Usage

### Home Page

The home page welcomes users and provides information about the authentication app. Users can click on the "Sign in" text to navigate to the sign-in page.

### Sign-In Page

On the sign-in page, users are required to enter their mobile number with the country code. The entered mobile number is validated using Joi, and if valid, an OTP is generated and stored in the database.

### Validation Page

The validation page prompts users to enter the simulated OTP shown in the console. The entered OTP is validated against the stored OTP, and upon successful validation, JWT tokens are generated.

## Deployment

The app is configured for deployment on the Vercel platform. You can deploy the app easily using the Vercel Platform.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
