# User API Documentation

## Register User

**Description:** This route registers a new user.

**HTTP Request:** `POST /users/register`

**Request Body:**
- `fullname.firstname` (string, required): The first name of the user. Must be at least 3 characters long.
- `fullname.lastname` (string, optional): The last name of the user. Must be at least 3 characters long.
- `email` (string, required): The email of the user. Must be a valid email address.
- `password` (string, required): The password of the user. Must be at least 6 characters long.

**Example Request:**
```JSON
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Example Request:**
```JSON
{
    "token": "jwt_token_here",
  "user": {
      "_id": "user_id_here",
    "fullname": {
        "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

## Login User

**Description:** This route logs in the user if they exist

**HTTP Request:** `POST /users/login`

**Request Body:**
- `email` (string, required): The first name of the user. Must be at least 3 characters long.
- `password` (string, required): The password of the user. Must be at least 6 characters long.

**Example Request:**
```JSON
{
    "email": "john.doe@example.com",
  "password": "password123"
}
```

**Example Response:**
```JSON
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

## Get User Profile

**Description:** This route retrieves the authenticated user's profile information.

**HTTP Request:** `GET /users/profile`

**Authentication:** Requires a valid JWT token in the request cookies or Authorization header.

**Example Response:**
```JSON
{
  "_id": "user_id_here",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null
}
```

## Logout User

**Description:** This route logs out the user by clearing the authentication token, and blacklists the token present in the cookies or
headers

**HTTP Request:** `GET /users/logout`

**Example Authorization:**
```JSON
{
  "authorization": "bearer <token>"
}
```

**Example Response:**
```JSON
{
  "message": "Logged out successfully"
}
```

# Captain API Documentation

## Register Captain

**Description:** This route registers a new captain.

**HTTP Request:** `POST /captains/register`

**Request Body:**
- `fullname.firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
- `fullname.lastname` (string, optional): The last name of the captain. Must be at least 3 characters long.
- `email` (string, required): The email of the captain. Must be a valid email address.
- `password` (string, required): The password of the captain. Must be at least 6 characters long.
- `vehicle.color` (string, required): The color of the vehicle. Must be at least 3 characters long.
- `vehicle.plate` (string, required): The license plate number. Must be at least 6 characters long.
- `vehicle.capacity` (number, required): The vehicle capacity. Must be at least 1.
- `vehicle.vehicleType` (string, required): The type of vehicle. Must be either 'car' or 'motorcycle'.

**Example Request:**
```JSON
{
  "fullname": {
    "firstname": "John",
    "lastname": "Smith"
  },
  "email": "john.smith@example.com",
  "password": "password123",
  "vehicle": {
    "color": "black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

**Example Response:**
```JSON
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Smith"
    },
    "email": "john.smith@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "socketId": null
  }
}
```
