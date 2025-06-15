# React Native Authentication Flow

A complete authentication flow implementation in React Native with TypeScript, including phone number verification and user registration.

## Features

- Phone number verification with OTP
- Complete user registration form
- Form validation using Yup
- TypeScript support
- Modern UI with proper error handling
- Loading states and user feedback

## Prerequisites

- Node.js >= 14
- React Native development environment set up
- Android Studio / Xcode for mobile development

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-native-auth-flow
```

2. Install dependencies:
```bash
npm install
```

3. For iOS, install pods:
```bash
cd ios && pod install && cd ..
```

## Running the App

### Android
```bash
npm run android
```

### iOS
```bash
npm run ios
```

## Project Structure

```
src/
  ├── screens/
  │   └── auth/
  │       ├── LoginScreen.tsx
  │       ├── OTPScreen.tsx
  │       └── SignupScreen.tsx
  ├── validation/
  │   └── authSchema.ts
  └── navigation/
      └── AuthNavigator.tsx
```

## Dependencies

- React Navigation v6
- React Hook Form
- Yup for validation
- Axios for API calls
- React Native DateTimePicker
- TypeScript

## API Endpoints

The app uses the following API endpoints:

- Send OTP: `POST /api/v1/user/auth/send-otp`
- Verify OTP: `POST /api/v1/user/auth/verify-otp`
- Signup: `POST /api/v1/user/auth/signup`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 