# Table of Contents

  1. [Database Overview](#schema-overview)
  2. [Schema Descriptions](#table-descriptions)
  3. [Entity-Relationship Diagram (ERD)](#entity-relationship-diagram-erd)

---

# Database Documentation

## Database Overview

There are 5 different schemas in the database:
  1. Blacklist Schema
  2. Location Schema
  3. Answer Schema
  4. Registration Schema(Temp user data)
  5. User Schema
## Table Descriptions

<details>
<summary><strong>Blacklist Schema</strong></summary>

**File:** `blacklist.js`

The Blacklist Schema is used to store invalid tokens, ensuring they are not reused for authentication.

- **token**: A string representing the token, required, and references the User schema.
- **timestamps**: Automatically managed timestamps for record creation and updates.

```js
const BlacklistSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);
```

</details>

<details>
<summary><strong>Location Schema</strong></summary>

**File:** `location.js`

The Location Schema stores information about various locations.

- **name**: Name of the location, required, and trimmed.
- **imgSrc**: URL of the image representing the location, required, and trimmed.
- **question**: Associated question for the location, required, and trimmed.
- **answer**: Correct answer for the question, required, and trimmed.
- **radius**: Numeric radius value with a default of 130.
- **lat**: Latitude of the location, required.
- **lng**: Longitude of the location, required.

```js
const LocationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  imgSrc: {
    type: String,
    required: true,
    trim: true,
  },
  question: {
    type: String,
    required: true,
    trim: true,
  },
  answer: {
    type: String,
    required: true,
    trim: true,
  },
  radius: {
    type: Number,
    default: 130,
  },
  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
});
```

</details>

<details>
<summary><strong>Answer Schema</strong></summary>

**File:** `answer.js`

The Answer Schema stores user answers and their evaluation.

- **question**: The question being answered, required.
- **correctAnswer**: The correct answer to the question, required.
- **answer**: The user's answer, required.
- **userId**: Reference to the User who provided the answer, required.
- **locationId**: Reference to the Location related to the question, required.
- **evaluationScore**: Numeric score of the answer's evaluation, default is -1.
- **isCorrectFinalEvaluation**: Boolean indicating if the answer was correct after final evaluation, default is false.
- **hasBeenUpdated**: Boolean indicating if the answer has been updated, default is false.
- **timestamps**: Automatically managed timestamps for record creation and updates.

```js
const answerSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    correctAnswer: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    userId: {
      type: ObjectId,
      required: true,
    },
    locationId: {
      type: ObjectId,
      required: true,
    },
    evaluationScore: {
      type: Number,
      default: -1,
    },
    isCorrectFinalEvaluation: {
      type: Boolean,
      default: false,
    },
    hasBeenUpdated: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
```

</details>

<details>
<summary><strong>Registration Schema</strong></summary>

**File:** `registration.js`

The Registration Schema is used for managing user registration details.

- **first_name**: User's first name, required, max length of 25.
- **last_name**: User's last name, required, max length of 25.
- **town**: User's town, required, max length of 20.
- **email**: User's email, required, unique, and lowercase.
- **password**: User's password, required, max length of 40.
- **verificationCode**: Optional string for email verification.
- **createdAt**: Date of creation, with an index for automatic expiration after 15 minutes.

```js
const registrationSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: "Your firstname is required",
    max: 25,
  },
  last_name: {
    type: String,
    required: "Your lastname is required",
    max: 25,
  },
  town: {
    type: String,
    required: "Your town is required",
    max: 20,
  },
  email: {
    type: String,
    required: "Your email is required",
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    max: 40,
  },
  verificationCode: String,
  createdAt: {
    type: Date,
    default: Date.now,
    index: { expireAfterSeconds: 900 },
  }, // expires after 15 minutes
});
```

</details>

<details>
<summary><strong>User Schema</strong></summary>

**File:** `user.js`

The User Schema defines the structure for user data in the database.

- **first_name**: User's first name, required, max length of 25.
- **last_name**: User's last name, required, max length of 25.
- **email**: User's email, required, unique, and lowercase.
- **password**: User's password, required, max length of 40.
- **town**: User's town, required, max length of 20.
- **huntState**: Object tracking the hunt state, including start and end status with timestamps.
- **role**: User role, required, default value of "0x01".
- **timestamps**: Automatically managed timestamps for record creation and updates.

```js
const UserSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: "Your firstname is required",
      max: 25,
    },
    last_name: {
      type: String,
      required: "Your lastname is required",
      max: 25,
    },
    email: {
      type: String,
      required: "Your email is required",
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: "Your password is required",
      select: false,
      max: 40,
    },
    town: {
      type: String,
      required: "Your town is required",
      max: 20,
    },
    huntState: {
      hasStartedHunt: {
        type: Boolean,
        default: false,
        timestamps: true,
      },
      hasEndedHunt: {
        type: Boolean,
        default: false,
        timestamps: true,
      },
    },
    role: {
      type: String,
      required: true,
      default: "0x01",
    },
  },
  { timestamps: true }
);
```

</details>

## Entity-Relationship Diagram (ERD)

Below is a visual representation of the database structure, along with a high-level view of the api functions.
![ERD](/Docs/en/Database/erd.png)
