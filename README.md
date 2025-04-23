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

