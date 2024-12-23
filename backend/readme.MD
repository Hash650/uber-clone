# User API Documentation

## Register User

**Description:** This route registers a new user.

**HTTP Request:** `POST /register`

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

**HTTP Request:** `POST /login`

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