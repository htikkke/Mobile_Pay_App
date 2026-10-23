# YPay — Mobile Payment App

## Overview

YPay is a mobile payment app demo built with React Native, Expo, and TypeScript. This project was created to practice mobile app development, navigation, form validation, and payment-related user interfaces.

## Features

- **Home:** View the main dashboard and account balance.
- **Money Transfer:** Enter a transfer amount and validate user input.
- **QR Scanner:** Open the camera interface to scan QR codes.
- **Payment Confirmation:** Review payment details and validate the amount.
- **Exchange Rates:** View currency exchange rate cards.
- **Transaction History:** View sample income and expense transactions.

## Tech Stack

- React Native
- Expo
- TypeScript
- Expo Router

## Getting Started

### Prerequisites

- Node.js and npm
- Expo Go or a compatible development environment

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/htikkke/Mobile_Pay_App.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Mobile_Pay_App
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npx expo start
   ```

Follow the terminal instructions to open the app on a compatible device or emulator.

## Project Structure

```text
src/
├── app/
│   ├── index.tsx
│   ├── transfer.tsx
│   ├── scan.tsx
│   ├── paymentConfirmation.tsx
│   ├── fxrate.tsx
│   └── history.tsx
└── components/
    ├── ActionButton.tsx
    ├── BalanceCard.tsx
    └── Transactions.tsx
```

## Limitations

- This is a learning and demonstration project.
- Transaction history and exchange rates use sample data.
- Real money transfers and payment processing are not implemented.
- Production-ready authentication and backend integration are not yet implemented.
- QR scanning requires a compatible camera and appropriate permissions.

## Future Improvements

- Connect the app to a backend API.
- Implement secure user authentication.
- Store transaction data persistently.
- Integrate a trusted payment service.
- Add automated tests.

## Author

GitHub: [htikkke](https://github.com/htikkke)
