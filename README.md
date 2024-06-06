# Angular SMS Authentication with Firebase

This project demonstrates a simple Angular application that uses Firebase SDK for SMS authentication. The application allows users to sign in using their phone number and receive an SMS code for authentication.

## Features

- User authentication via phone number
- SMS code verification using Firebase Authentication
- Secure and easy-to-implement authentication flow

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- Angular CLI installed and update
- Firebase project set up

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/angular-sms-auth.git
    cd angular-sms-auth
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Install Firebase and AngularFire:

    ```sh
    npm install firebase @angular/fire
    ```

4. Set up your Firebase project:
    - Go to the [Firebase Console](https://console.firebase.google.com/).
    - Create a new project (or use an existing one).
    - Enable Phone Authentication in the Authentication section.
    - Copy your Firebase configuration.

5. On the config.ts file add your Firebase configuration:

    ```typescript
    export const environment = {
      production: false,
      firebase: {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID",
        measurementId: "YOUR_MEASUREMENT_ID"
      }
    };
    ```

## Running the Application

1. Start the development server:

    ```sh
    ng serve
    ```

2. Open your browser and navigate to `http://localhost:4200`.

## Usage

1. Enter your phone number in the provided field.
2. Click on the "Send Code" button.
3. Wait for the verification form to appear
4. Enter the verification code you receive via SMS.
5. Click on the "Verify Code" button to authenticate.
6. Check in console for response

## Built With

- [Angular](https://angular.io/)
- [Firebase](https://firebase.google.com/)
