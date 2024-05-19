# Cuprins

1. [Prezentare per Ansamblu a bazei de date](#prezentare-de-ansamblu-a-schemei)
2. [Descrieri ale Schemelor](#descrieri-ale-schemelor)
3. [Diagramă Entitate-Relație (DER)](#diagramă-entitate-relație-der)

---

# Documentație a Bazei de Date

## Prezentare per Ansamblu a bazei de date

În baza de date există 5 scheme diferite:

1. Schema Blacklist
2. Schema Locație
3. Schema Răspuns
4. Schema Înregistrare (Date temporare ale utilizatorilor)
5. Schema Utilizator

## Descrieri ale Schemelor

<details>
<summary><strong>Schema Blacklist</strong></summary>

**Fișier:** `blacklist.js`

Schema Blacklist este utilizată pentru a stoca tokenuri invalide, asigurându-se că acestea nu sunt refolosite pentru autentificare.

- **token**: Un șir de caractere care reprezintă tokenul, obligatoriu și face referire la schema Utilizator.
- **timestamps**: Marci temporale gestionate automat pentru crearea și actualizarea înregistrărilor.

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
<summary><strong>Schema Locație</strong></summary>

**Fișier:** `location.js`

Schema Locație stochează informații despre diverse locații.

- **name**: Numele locației, obligatoriu și fără spații suplimentare.
- **imgSrc**: URL-ul imaginii care reprezintă locația, obligatoriu și fără spații suplimentare.
- **question**: Întrebarea asociată locației, obligatorie și fără spații suplimentare.
- **answer**: Răspunsul corect la întrebare, obligatoriu și fără spații suplimentare.
- **radius**: Valoarea numerică a razelor cu o valoare implicită de 130.
- **lat**: Latitudinea locației, obligatorie.
- **lng**: Longitudinea locației, obligatorie.

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
<summary><strong>Schema Răspuns</strong></summary>

**Fișier:** `answer.js`

Schema Răspuns stochează răspunsurile utilizatorilor și evaluarea acestora.

- **question**: Întrebarea la care se răspunde, obligatorie.
- **correctAnswer**: Răspunsul corect la întrebare, obligatoriu.
- **answer**: Răspunsul utilizatorului, obligatoriu.
- **userId**: Referința către Utilizatorul care a furnizat răspunsul, obligatoriu.
- **locationId**: Referința către Locația legată de întrebare, obligatorie.
- **evaluationScore**: Scor numeric al evaluării răspunsului, valoarea implicită este -1.
- **isCorrectFinalEvaluation**: Boolean care indică dacă răspunsul a fost corect după evaluarea finală, valoarea implicită este false.
- **hasBeenUpdated**: Boolean care indică dacă răspunsul a fost actualizat, valoarea implicită este false.
- **timestamps**: Marci temporale gestionate automat pentru crearea și actualizarea înregistrărilor.

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
<summary><strong>Schema Înregistrare</strong></summary>

**Fișier:** `registration.js`

Schema Înregistrare este utilizată pentru gestionarea detaliilor de înregistrare ale utilizatorilor.

- **first_name**: Prenumele utilizatorului, obligatoriu, cu o lungime maximă de 25 de caractere.
- **last_name**: Numele utilizatorului, obligatoriu, cu o lungime maximă de 25 de caractere.
- **town**: Orașul utilizatorului, obligatoriu, cu o lungime maximă de 20 de caractere.
- **email**: Adresa de email a utilizatorului, obligatorie, unică și cu litere mici.
- **password**: Parola utilizatorului, obligatorie, cu o lungime maximă de 40 de caractere.
- **verificationCode**: Șir opțional pentru verificarea prin email.
- **createdAt**: Data creării, cu un index pentru expirarea automată după 15 minute.

````js
const registrationSchema = new mongoose.Schema({
  first```markdown
  name: {
    type: String,
    required: "Numele tău este necesar",
    max: 25,
  },
  last_name: {
    type: String,
    required: "Numele tău de familie este necesar",
    max: 25,
  },
  town: {
    type: String,
    required: "Orașul tău este necesar",
    max: 20,
  },
  email: {
    type: String,
    required: "Adresa ta de email este necesară",
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
    index: { expireAfterSeconds: 900 } // expiră după 15 minute
  }
});
````

</details>

<details>
<summary><strong>Schema Utilizator</strong></summary>

**Fișier:** `user.js`

Schema Utilizatorului definește structura datelor utilizatorului în baza de date.

- **first_name**: Prenumele utilizatorului, obligatoriu, cu o lungime maximă de 25 de caractere.
- **last_name**: Numele utilizatorului, obligatoriu, cu o lungime maximă de 25 de caractere.
- **email**: Adresa de email a utilizatorului, obligatorie, unică și cu litere mici.
- **password**: Parola utilizatorului, obligatorie, cu o lungime maximă de 40 de caractere.
- **town**: Orașul utilizatorului, obligatoriu, cu o lungime maximă de 20 de caractere.
- **huntState**: Obiect care urmărește starea vânătorii, inclusiv statusul de început și sfârșit cu marcaje temporale.
- **role**: Rolul utilizatorului, obligatoriu, valoarea implicită este "0x01".
- **timestamps**: Marci temporale gestionate automat pentru crearea și actualizarea înregistrărilor.

```js
const UserSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: "Prenumele tău este necesar",
      max: 25,
    },
    last_name: {
      type: String,
      required: "Numele tău de familie este necesar",
      max: 25,
    },
    email: {
      type: String,
      required: "Adresa ta de email este necesară",
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: "Parola ta este necesară",
      select: false,
      max: 40,
    },
    town: {
      type: String,
      required: "Orașul tău este necesar",
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

## Diagramă Entitate-Relație (DER)

Mai jos este o reprezentare vizuală a structurii bazei de date, împreună cu o vedere de ansamblu a funcțiilor API-ului.
![DER](/Docs/ro/Database/erd.png)
