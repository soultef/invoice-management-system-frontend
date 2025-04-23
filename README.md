<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# Invoice management system-FRONTEND
This is the frontend for the Invoice Management System, built with React. It interacts with the backend microservices via the API Gateway.

---

## 🎯 Features

- User login and authentication
- Create/edit/delete customers
- Manage invoices and invoice items
- Track and record payments
- Receive notifications for due/paid invoices

---

## 🛠 Tech Stack

- React
- Axios
- React Router
- Tailwind CSS or Bootstrap
- Redux Toolkit (optional)

---

## 🚀 Getting Started

1. Clone the repo:

   ```bash
   git clone https://github.com/your-username/invoice-system.git
   cd invoice-system/frontend/react-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set your API base URL in a config file:

   ```js
   // config.js
   export const API_BASE_URL = "http://localhost:8080/api";
   ```

4. Start the app:

   ```bash
   npm run dev
   ```

---

## 📦 Folder Structure

```bash
react-app/
│
├── public/                     # Static files like index.html, favicon, etc.
│
├── src/
│   ├── assets/                 # Images, fonts, icons, global styles
│   │
│   ├── components/             # Reusable UI components
│   │   ├── common/             # Buttons, Modals, InputFields, Loaders
│   │   └── layout/             # Header, Sidebar, Footer, Nav
│   │
│   ├── features/               # Domain-level modules (one folder per feature)
│   │   ├── auth/               # Login, register, authentication logic
│   │   ├── customers/          # Customer list, create/edit forms
│   │   ├── invoices/           # Invoice creation, view, edit
│   │   ├── payments/           # Payment-related components and logic
│   │   └── notifications/      # Notification settings or messages
│   │
│   ├── pages/                  # Page-level views (routes)
│   │   ├── Dashboard.jsx
│   │   ├── Customers.jsx
│   │   ├── Invoices.jsx
│   │   ├── Payments.jsx
│   │   ├── Login.jsx
│   │   └── NotFound.jsx
│   │
│   ├── routes/                 # Route definitions and protections
│   │   ├── AppRoutes.jsx
│   │   └── PrivateRoute.jsx
│   │
│   ├── services/               # Axios API calls organized per feature
│   │   ├── api.js              # Axios instance config
│   │   ├── authService.js
│   │   ├── customerService.js
│   │   ├── invoiceService.js
│   │   ├── paymentService.js
│   │   └── notificationService.js
│   │
│   ├── store/                  # Redux (or Zustand/Context API) setup
│   │   ├── index.js
│   │   ├── authSlice.js
│   │   └── other slices...
│   │
│   ├── utils/                  # Helper functions and constants
│   │   ├── authUtils.js
│   │   ├── dateFormatter.js
│   │   └── validators.js
│   │
│   ├── config/                 # Environment-specific configs
│   │   └── apiConfig.js
│   │
│   ├── App.jsx                 # App root component
│   ├── main.jsx                # Entry point (ReactDOM.render)
│   └── index.css               # Global styles
│
├── .env                        # API base URLs, etc.
├── package.json
└── README.md


---

## 🧪 Testing

```bash
npm test
```

---

## 📬 Maintainer

- **Solomon Demisse**

>>>>>>> 35ae55642c632114480cd01358ff9848b8b3c2af
