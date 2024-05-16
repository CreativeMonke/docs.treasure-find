# API endpoints reference

This section provides detailed information on the API endpoints available in the Treasure Hunt app. The endpoints are grouped by functionality and cover managing answers, authentication, hunts, locations, and users.

## General Information

### Middleware

The following middleware is used across various endpoints to ensure security and proper request validation:

- **Verify:** Ensures the user is authenticated.
- **VerifyRole:** Ensures the user has the appropriate role (admin).
- **Validate:** Validates input data based on specified criteria.
- **LocateMiddleware:** Validates location ID for location-related requests.
- **ValidateUpdate:** Validates input data for user update requests.

---

## Answer Management

<details>
<summary><strong>Create a New Answer</strong></summary>

**Endpoint:**

`POST /answer/submit`

**Description:**

Submit a new answer to a question.

**Request Body:**

- `question` (string, required): The question being answered.
- `answer` (string, required): The answer to the question. Must be between 5 and 200 characters.

**Example:**

```json
{
  "question": "What is the capital of France?",
  "answer": "Paris"
}
```

</details>

<details>
<summary><strong>Get Answers by Location ID</strong></summary>

**Endpoint:**

`GET /answer/getAnswersByLocationId/:locationId`

**Description:**

Retrieve answers associated with a specific location.

**Parameters:**

- `locationId` (string, required): The ID of the location.

</details>

<details>
<summary><strong>Get Answers by User ID</strong></summary>

**Endpoint:**

`GET /answer/getAnswersByUserId`

**Description:**

Retrieve answers submitted by the authenticated user.

</details>

<details>
<summary><strong>Update Answer Validity</strong></summary>

**Endpoint:**

`POST /answer/updateAnswerValidity/:answerId`

**Description:**

Update the validity of a specific answer.

**Parameters:**

- `answerId` (string, required): The ID of the answer.

</details>

<details>
<summary><strong>Edit Answer</strong></summary>

**Endpoint:**

`PUT /answer/updateAnswerById/:answerId`

**Description:**

Edit the answer and validity fields of a specific answer.

**Parameters:**

- `answerId` (string, required): The ID of the answer.

</details>

<details>
<summary><strong>Get Answer by Location and User IDs</strong></summary>

**Endpoint:**

`GET /answer/getAnswer/:locationId`

**Description:**

Retrieve an answer based on location and user IDs.

**Parameters:**

- `locationId` (string, required): The ID of the location.

</details>

<details>
<summary><strong>Get All Answers as CSV</strong></summary>

**Endpoint:**

`GET /answer/getAllAnswers`

**Description:**

Retrieve all answers in CSV format.

</details>

<details>
<summary><strong>Get Number of Correct Answers</strong></summary>

**Endpoint:**

`GET /answer/getNumberOfCorrectAnswers`

**Description:**

Retrieve the number of correct answers.

</details>

<details>
<summary><strong>Check All Answers</strong></summary>

**Endpoint:**

`GET /answer/checkAllAnswers`

**Description:**

Check the validity of all answers.

</details>

---

## User Authentication

<details>
<summary><strong>Register</strong></summary>

**Endpoint:**

`POST /auth/register`

**Description:**

Register a new user. The password is encrypted before storage.

**Request Body:**

- `email` (string, required): User's email address.
- `first_name` (string, required): User's first name.
- `last_name` (string, required): User's last name.
- `password` (string, required): User's password (minimum 8 characters).
- `town` (string, required): User's town.

**Example:**

```json
{
  "email": "user@example.com",
  "first_name": "John",
  "last_name": "Doe",
  "password": "password123",
  "town": "New York"
}
```

</details>

<details>
<summary><strong>Verify Email</strong></summary>

**Endpoint:**

`POST /auth/verifyEmail`

**Description:**

Verify a user's email address.

**Request Body:**

- `email` (string, required): User's email address.

</details>

<details>
<summary><strong>Check Logged In</strong></summary>

**Endpoint:**

`GET /auth/checkLoggedIn`

**Description:**

Check if the user is logged in.

</details>

<details>
<summary><strong>Login</strong></summary>

**Endpoint:**

`POST /auth/login`

**Description:**

Log in a user.

**Request Body:**

- `email` (string, required): User's email address.
- `password` (string, required): User's password.

**Example:**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

</details>

<details>
<summary><strong>Logout</strong></summary>

**Endpoint:**

`GET /auth/logout`

**Description:**

Log out the authenticated user.

</details>

---

## Hunt Management

<details>
<summary><strong>Get Hunt Options</strong></summary>

**Endpoint:**

`GET /hunt/globalInfo`

**Description:**

Retrieve global hunt options.

</details>

<details>
<summary><strong>Update Hunt Options</strong></summary>

**Endpoint:**

`PUT /hunt/edit`

**Description:**

Update hunt options. Admin only.

</details>

---

## Location Management

<details>
<summary><strong>Create Location</strong></summary>

**Endpoint:**

`POST /locations/create`

**Description:**

Create a new location. Admin only.

</details>

<details>
<summary><strong>Edit Location</strong></summary>

**Endpoint:**

`PUT /locations/edit/:id`

**Description:**

Edit an existing location. Admin only.

**Parameters:**

- `id` (string, required): The ID of the location.

</details>

<details>
<summary><strong>Delete Location</strong></summary>

**Endpoint:**

`DELETE /locations/delete/:id`

**Description:**

Delete a location. Admin only.

**Parameters:**

- `id` (string, required): The ID of the location.

</details>

<details>
<summary><strong>Get All Locations</strong></summary>

**Endpoint:**

`GET /locations/all`

**Description:**

Retrieve all locations.

</details>

---

## User Management

<details>
<summary><strong>Edit User</strong></summary>

**Endpoint:**

`PUT /users/edit`

**Description:**

Edit user details.

**Request Body:**

- `first_name` (string, optional): User's first name.
- `last_name` (string, optional): User's last name.
- `town` (string, optional): User's town.

</details>

<details>
<summary><strong>Edit User by ID</strong></summary>

**Endpoint:**

`PUT /users/edit/:userId`

**Description:**

Edit user details by user ID. Admin only.

**Parameters:**

- `userId` (string, required): The ID of the user.

</details>

<details>
<summary><strong>Get All Users</strong></summary>

**Endpoint:**

`GET /users/getAll`

**Description:**

Retrieve all users. Admin only.

</details>

<details>
<summary><strong>Start Hunt</strong></summary>

**Endpoint:**

`GET /users/startHunt`

**Description:**

Start the treasure hunt for the authenticated user.

</details>

<details>
<summary><strong>End Hunt</strong></summary>

**Endpoint:**

`GET /users/endHunt`

**Description:**

End the treasure hunt for the authenticated user.

</details>

---

## Password Encryption

Passwords are encrypted using bcrypt before being stored in the database. This ensures that user passwords are securely stored.
