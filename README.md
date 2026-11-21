
# JazaGas

JazaGas is a simple LPG gas delivery marketplace built with React. It connects customers with local gas vendors, allowing them to compare prices, choose gas products and place delivery orders.

## Features

### Customer
- View available gas vendors.
- Browse 6kg and 13kg LPG cylinders.
- Compare prices from different vendors.
- Place gas delivery orders.
- View submitted orders and their status.

### Vendor
- View customer orders.
- Update order status.
- Track orders through Pending, Confirmed, Out for delivery and Delivered.

## Technologies Used

- React
- JavaScript
- React Router
- Context API
- HTML and CSS
- JSON Server
- Vite

## Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/Munenebaariu/jazagas.git
```

### 2. Enter the project folder

```bash
cd jazagas
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the frontend

Open a terminal and run:

```bash
npm run dev
```

### 5. Start the backend

Open a second terminal in the same project folder and run:

```bash
npm run server
```

The React application runs at:

http://localhost:5173

The JSON Server backend runs at:

http://localhost:3000

## Project Structure

```text
src/
├── components/
├── context/
├── pages/
├── App.jsx
├── App.css
└── main.jsx

db.json
package.json
```

## Note

This project uses JSON Server as a mock backend for learning and demonstration purposes. It is not a production backend.
