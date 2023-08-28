# Node Logistic (Order Delivery API)
A robust API server for managing deliveries and orders, built using Node.js, Express.js, and MongoDB. This project provides user authentication, CRUD operations, error handling, and more. It's designed to streamline the process of creating and managing delivery services with a secure and efficient backend.
## Features

- **Database Management**: The heart of the app is the MongoDB database, where it stores and retrieves item, user data, authentication details and Orders.


- **Backend Power**: The backend is powered by Node.js and Express, which manage the API requests and the underlying data. This separation of concerns ensures efficient handling of various functionalities.

- **Secure Authentication**: User accounts are managed securely. Users can register, log in, and log out with their credentials. Passwords are hashed and stored securely.

- **Items availibility**: Users can conveniently browse through the collection of Items. Each itemg preview includes an name, prices.

- **Order Creation**: Users can conveniently placed order with authontication.
  
- **Delivery manegment **: Admin can Add Delivery vheicle edit its delivery Prefrances such as servign city locations can edit Order status for each order.
- 
- **AWS Deployment**: The app is deployed using Amazon Web Services (AWS) to ensure scalability and availability.

## Tech Stack
- **Backend**: Node.js, Express
- **Database**: MongoDb
- **Deployment**: AWS , AWS EC2, PM2

## Getting Started

1. Clone the repository:https://github.com/HARSHAL-AP/order_delivery_api.git
2. cd `Node Logistic solution`
3. Install backend dependencies: `npm install`
4. Start the backend server using PM2: `node index.js `

