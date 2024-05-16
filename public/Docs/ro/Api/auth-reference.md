# Cuprins

1. [Schema Utilizatorului](#schema-utilizatorului)
2. [Funcții Middleware](#funcții-middleware)
3. [Rute Autentificare](#rute-autentificare)
4. [Controlere Autentificare](#controlere-autentificare)
5. [Proces Verificare Email](#proces-verificare-email)

---

# Schema Utilizatorului

<details>
<summary><strong>Definirea Schemei Utilizatorului</strong></summary>

**Fișier:** `user.js`

Schema Utilizatorului definește structura datelor utilizatorului în baza de date.

- Câmpuri: `first_name`, `last_name`, `email`, `password`, `town`, `role`, etc.
- Parolele sunt hash-uite folosind bcrypt înainte de a fi salvate.
- Token-urile JWT sunt generate pentru sesiuni autentificate.

```js
const UserSchema = new mongoose.Schema({
  // definirea schemei
});
```

**Măsuri de Securitate:**

- Hash-uirea parolelor folosind bcrypt.
- Generarea token-urilor JWT cu un timp de expirare.

</details>

---

# Funcții Middleware

<details>
<summary><strong>Middleware Verificare Token</strong></summary>

**Fișier:** `verify.js`

Middleware-ul pentru Verificarea Token-ului asigură că solicitările conțin un token JWT valid.

- Verifică prezența unui token JWT în anteturile solicitărilor.
- Verifică token-ul și verifică dacă este pe lista neagră.
- Atașează datele utilizatorului la obiectul solicitării dacă token-ul este valid.

```js
export async function Verify(req, res, next) {
  // logica middleware-ului
}
```

</details>

<details>
<summary><strong>Middleware Validare Input</strong></summary>

**Fișier:** `validate.js`

Middleware-ul pentru Validarea Input-ului asigură că toate câmpurile necesare dintr-o solicitare sunt prezente și corect formate.

- Folosește express-validator pentru validare.
- Verifică câmpurile necesare și formatele lor.

```js
const { check, validationResult } = require("express-validator");
```

</details>

<details>
<summary><strong>Middleware Verificare Rol</strong></summary>

**Fișier:** `verify.js`

Middleware-ul pentru Verificarea Rolului verifică dacă utilizatorul are rolul corespunzător pentru a accesa anumite rute.

- Asigură că utilizatorul are permisiunile necesare în funcție de rolul său.

```js
export async function VerifyRole(req, res, next) {
  // logica middleware-ului
}
```

</details>

---

# Rute Autentificare

<details>
<summary><strong>Ruta Înregistrare Utilizator</strong></summary>

**Fișier:** `auth.js`

Ruta pentru Înregistrarea Utilizatorului gestionează înregistrarea utilizatorilor noi.

- Validează datele de input.
- Înregistrează un nou utilizator și trimite un email de verificare.

```js
router.post("/register", Validate, Register);
```

</details>

<details>
<summary><strong>Ruta Login Utilizator</strong></summary>

**Fișier:** `auth.js`

Ruta pentru Login-ul Utilizatorului gestionează autentificarea utilizatorilor.

- Validează email-ul și parola.
- Returnează un token JWT pentru sesiuni autentificate.

```js
router.post("/login", Validate, Login);
```

</details>

<details>
<summary><strong>Ruta Verificare Email</strong></summary>

**Fișier:** `auth.js`

Ruta pentru Verificarea Email-ului gestionează verificarea adreselor de email ale utilizatorilor.

- Verifică email-ul utilizatorului folosind un cod trimis prin email.

```js
router.post("/verifyEmail", Validate, VerifyEmail);
```

</details>

<details>
<summary><strong>Ruta Logout Utilizator</strong></summary>

**Fișier:** `auth.js`

Ruta pentru Logout-ul Utilizatorului gestionează deconectarea utilizatorilor.

- Deconectează utilizatorul prin punerea pe lista neagră a token-ului JWT.

```js
router.get("/logout", Verify, Logout);
```

</details>

---

# Controlere Autentificare

<details>
<summary><strong>Controler Înregistrare Utilizator</strong></summary>

**Fișier:** `auth.js`

Controlerul pentru Înregistrarea Utilizatorilor gestionează logica pentru înregistrarea utilizatorilor noi.

- Verifică existența utilizatorilor existenți.
- Salvează utilizatorii noi într-o colecție temporară de înregistrare.
- Trimite un email de verificare.

```js
export async function Register(req, res) {
  // logica controlerului
}
```

</details>

<details>
<summary><strong>Controler Login Utilizator</strong></summary>

**Fișier:** `auth.js`

Controlerul pentru Login-ul Utilizatorilor gestionează logica pentru autentificarea utilizatorilor.

- Validează credențialele utilizatorilor.
- Generează și returnează un token JWT.

```js
export async function Login(req, res) {
  // logica controlerului
}
```

</details>

<details>
<summary><strong>Controler Verificare Email</strong></summary>

**Fișier:** `auth.js`

Controlerul pentru Verificarea Email-ului gestionează logica pentru verificarea adreselor de email ale utilizatorilor.

- Verifică codul trimis la email-ul utilizatorului.
- Mută utilizatorul din colecția temporară în colecția principală de utilizatori după verificarea cu succes.

```js
export async function VerifyEmail(req, res) {
  // logica controlerului
}
```

</details>

<details>
<summary><strong>Controler Logout Utilizator</strong></summary>

**Fișier:** `auth.js`

Controlerul pentru Logout-ul Utilizatorilor gestionează logica pentru deconectarea utilizatorilor.

- Pune pe lista neagră token-ul JWT.

</details>

---

# Proces Verificare Email

<details>
<summary><strong>Proces Verificare Email</strong></summary>

**Fișier:** `verifyMail.js`

Procesul de Verificare a Email-ului trimite un email de verificare utilizatorilor nou înregistrați.

- Generează un cod unic de verificare.
- Trimite un email cu codul de verificare folosind nodemailer.
- Salvează codul de verificare în înregistrarea temporară a utilizatorului.

```js
function generateVerificationCode() {
  // funcția pentru generarea unui cod unic de verificare
}

export default async function SendVerificationEmail(tempUser) {
  // funcția pentru trimiterea email-ului de verificare
}
```

**Pași:**

1. **Generare Cod de Verificare:**

   - Se generează un cod de 6 cifre pentru a verifica adresa de email a utilizatorului.

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

2. **Trimitere Email de Verificare:**

   - Se trimite un email utilizatorului cu codul de verificare.

   ```js
   const mailOptions = {
     from: "support@example.com",
     to: tempUser.email,
     subject: "Verifică Adresa Ta de Email",
     text: `Folosește următorul cod pentru a-ți verifica email-ul: ${verificationCode}`,
     html: `<p>Folosește următorul cod pentru a-ți verifica email-ul: <strong>${verificationCode}</strong></p>`,
   };

   transporter.sendMail(mailOptions);
   ```

3. **Salvare Cod de Verificare:**

   - Codul de verificare este salvat în înregistrarea temporară a utilizatorului.

   ```js
   tempUser.verificationCode = verificationCode;
   await tempUser.save();
   ```

</details>

---

# Concluzie

Acest document oferă o privire de ansamblu asupra sistemului de autentificare securizat utilizat în aplicație. Consultați resursele suplimentare pentru detalii specifice despre tehnologiile utilizate.

Pentru detalii suplimentare, consultați fișierele și funcțiile respective din codul sursă.

---

# Resurse Suplimentare

- [Documentație Mongoose](https://mongoosejs.com/docs/guide.html)
- [Documentație Express Validator](https://express-validator.github.io/docs/)
- [Documentație Nodemailer](https://nodemailer.com/about/)