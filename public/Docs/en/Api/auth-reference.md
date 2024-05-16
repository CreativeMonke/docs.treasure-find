# Table of Contents

1. [User Schema](#user-schema)
2. [Middleware Functions](#middleware-functions)
3. [Authentication Routes](#authentication-routes)
4. [Authentication Controllers](#authentication-controllers)
5. [Email Verification Process](#email-verification-process)

---

# User Schema

<details>
<summary><strong>User Schema Definition</strong></summary>

**File:** `user.js`

The User Schema defines the structure for user data in the database.

- Fields: `first_name`, `last_name`, `email`, `password`, `town`, `role`, etc.
- Passwords are hashed using bcrypt before being saved.
- JWT tokens are generated for authenticated sessions.

```js
const UserSchema = new mongoose.Schema({
  // schema definition
});
```

**Security Measures:**

- Password hashing using bcrypt.
- JWT token generation with an expiration time.

</details>

---

# Middleware Functions

<details>
<summary><strong>Token Verification Middleware</strong></summary>

**File:** `verify.js`

The Token Verification Middleware ensures that requests contain a valid JWT token.

- Checks for the presence of a JWT token in request headers.
- Verifies the token and checks if it is blacklisted.
- Attaches user data to the request object if the token is valid.

```js
export async function Verify(req, res, next) {
  // middleware logic
}
```

</details>

<details>
<summary><strong>Input Validation Middleware</strong></summary>

**File:** `validate.js`

The Input Validation Middleware ensures that all required fields in a request are present and correctly formatted.

- Uses express-validator for validation.
- Checks for required fields and their formats.

```js
const { check, validationResult } = require("express-validator");
```

</details>

<details>
<summary><strong>Role Verification Middleware</strong></summary>

**File:** `verify.js`

The Role Verification Middleware checks if the user has the appropriate role to access certain routes.

- Ensures the user has the necessary permissions based on their role.

```js
export async function VerifyRole(req, res, next) {
  // middleware logic
}
```

</details>

---

# Authentication Routes

<details>
<summary><strong>User Registration Route</strong></summary>

**File:** `auth.js`

The User Registration Route handles the registration of new users.

- Validates input data.
- Registers a new user and sends a verification email.

```js
router.post("/register", Validate, Register);
```

</details>

<details>
<summary><strong>User Login Route</strong></summary>

**File:** `auth.js`

The User Login Route handles user login.

- Validates email and password.
- Returns a JWT token for authenticated sessions.

```js
router.post("/login", Validate, Login);
```

</details>

<details>
<summary><strong>Email Verification Route</strong></summary>

**File:** `auth.js`

The Email Verification Route handles the verification of user email addresses.

- Verifies the user's email using a code sent via email.

```js
router.post("/verifyEmail", Validate, VerifyEmail);
```

</details>

<details>
<summary><strong>User Logout Route</strong></summary>

**File:** `auth.js`

The User Logout Route handles user logout.

- Logs out the user by blacklisting the JWT token.

```js
router.get("/logout", Verify, Logout);
```

</details>

---

# Authentication Controllers

<details>
<summary><strong>User Registration Controller</strong></summary>

**File:** `auth.js`

The User Registration Controller handles the logic for registering new users.

- Checks for existing users.
- Saves new users to a temporary registration collection.
- Sends a verification email.

```js
export async function Register(req, res) {
  // controller logic
}
```

</details>

<details>
<summary><strong>User Login Controller</strong></summary>

**File:** `auth.js`

The User Login Controller handles the logic for logging in users.

- Validates user credentials.
- Generates and returns a JWT token.

```js
export async function Login(req, res) {
  // controller logic
}
```

</details>

<details>
<summary><strong>Email Verification Controller</strong></summary>

**File:** `auth.js`

The Email Verification Controller handles the logic for verifying user email addresses.

- Verifies the code sent to the user's email.
- Moves the user from temporary to the main user collection upon successful verification.

```js
export async function VerifyEmail(req, res) {
  // controller logic
}
```

</details>

<details>
<summary><strong>User Logout Controller</strong></summary>

**File:** `auth.js`

The User Logout Controller handles the logic for logging out users.

- Blacklists the JWT

</details>

---

# Email Verification Process

<details>
<summary><strong>Email Verification Process</strong></summary>

**File:** `verifyMail.js`

The Email Verification Process sends a verification email to newly registered users.

- Generates a unique verification code.
- Sends an email with the verification code using nodemailer.
- Saves the verification code to the user's temporary registration record.

```js
function generateVerificationCode() {
  // function to generate a unique verification code
}

export default async function SendVerificationEmail(tempUser) {
  // function to send verification email
}
```

**Steps:**

1. **Generate Verification Code:**

   - A 6-digit code is generated to verify the user's email address.

   ```js
   function generateVerificationCode() {
     let digits = "0123456789";
     let code = "";
     for (let i = 0; i < 6; i++) {
       code += digits[Math.floor(Math.random() * 10)];
     }
     return code;
   }
   ```

2. **Send Verification Email:**

   - An email is sent to the user with the verification code.

   ```js
   const mailOptions = {
     from: "support@example.com",
     to: tempUser.email,
     subject: "Verify Your Email Address",
     text: `Use the following code to verify your email: ${verificationCode}`,
     html: `<p>Use the following code to verify your email: <strong>${verificationCode}</strong></p>`,
   };

   transporter.sendMail(mailOptions);
   ```

3. **Save Verification Code:**

   - The verification code is saved in the temporary user registration record.

   ```js
   tempUser.verificationCode = verificationCode;
   await tempUser.save();
   ```

</details>

---

# Conclusion

This document provides a high-level overview of the secure authentication system used in the application. Refer to the additional resources for more details on specific technologies used.


For further details, refer to the respective files and functions in the codebase.

---

# Additional Resources

- [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)
- [Express Validator Documentation](https://express-validator.github.io/docs/)
- [Nodemailer Documentation](https://nodemailer.com/about/)