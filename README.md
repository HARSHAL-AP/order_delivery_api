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

##Functinality

-**User Account** : User can Register with name,city, password,email  Password will be hashed using bcrypt module.user can login with email and      password in response he get JWT token after sucsessfuly Login .
   -*Schema*:
   -name
   -email
   -password
   -city  
   
   -*Routs* 
   - registration   `/user/register`
   - Login `/user/login`

--**Item**: We can Perform all CRUD Opration on Item Colection .
   -*Schema*:
     -name
     -price

   -*Routs*  
   - Get all Items  `/item/get`  
   - Create new Item `/item/create`
   - Get With id  `/item/get/:id`
   - Update  `/item/update/:id`
   - Delet  `/item/delete/:id`

--**DeliveryVehicles**: Create, read, and update functionality for delivery vehicles. Ensuring  tht activeOrdersCount is properly sanitized.
  -*Schema*:
   - registration_number   (Unique And Alphaneumeric)
   - vehicleType
   - city  
   - active_order_count  (default zero ,maximum two )
   
   -*Routs*  
   - Get all vehicle  `/vehicle/get`  
   - Create new vehicle `/vehicle/create`
   - Get With id  `/vehicle/get/:id`
   - Update  `/vehicle/update/:id`
   - Delet  `/vehicle/delete/:id`

--**Order Creation** :Create ,read, update functinamlity for orders. Authonticate middleware is available for authonticating user is login or not.
Furnish delivery agents with the capability to flag orders as delivered. Upon such confirmation (isDelivered toggled to true), a corresponding reduction occurs in the delivery vehicle's activeOrdersCount.
   Schema:
   - orderNumber   (Unique , Incrimenting And startign from 0001)
   - item_id
   - price  
   - customer_id 
   - delivery_vehicle_id 
   - isDelivered 
   Routs 
   - Get all order  `/order/get`  
   - Create new order `/order/create`
   - Get With id  `/order/get/:id`
   - Update  `/order/update/:id`
   - Delet  `/order/delete/:id`


--**Error Handling**: Establish a robust system for handling errors across all routes, ensuring graceful degradation and user-friendly feedback.

## Tech Stack
- **Backend**: Node.js, Express
- **Database**: MongoDb
- **Deployment**: AWS , AWS EC2, PM2

## Getting Started

1. Clone the repository:https://github.com/HARSHAL-AP/order_delivery_api.git
2. cd `Node Logistic solution`
3. Install backend dependencies: `npm install`
4. Start the backend server using PM2: `node index.js `

