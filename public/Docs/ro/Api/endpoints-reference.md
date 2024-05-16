# Referință API

Această secțiune oferă informații detaliate despre punctele de terminare API disponibile în aplicația Treasure Hunt. Punctele de terminare sunt grupate după funcționalitate și acoperă gestionarea răspunsurilor, autentificarea, vânătorile, locațiile și utilizatorii.

## Informații generale

### Middleware

Următoarele middleware-uri sunt utilizate în diverse puncte de terminare pentru a asigura securitatea și validarea corectă a cererilor:

- **Verify:** Asigură că utilizatorul este autentificat.
- **VerifyRole:** Asigură că utilizatorul are rolul corespunzător (admin).
- **Validate:** Validează datele de intrare în funcție de criteriile specificate.
- **LocateMiddleware:** Validează ID-ul locației pentru cererile legate de locație.
- **ValidateUpdate:** Validează datele de intrare pentru cererile de actualizare a utilizatorului.

---

## Gestionarea răspunsurilor

<details>
<summary><strong>Creează un răspuns nou</strong></summary>

**Punct de terminare:**

`POST /answer/submit`

**Descriere:**

Trimite un răspuns nou la o întrebare.

**Corpul cererii:**

- `question` (șir de caractere, obligatoriu): Întrebarea la care se răspunde.
- `answer` (șir de caractere, obligatoriu): Răspunsul la întrebare. Trebuie să aibă între 5 și 200 de caractere.

**Exemplu:**

```json
{
  "question": "Care este capitala Franței?",
  "answer": "Paris"
}
```

</details>

<details>
<summary><strong>Obține răspunsurile după ID-ul locației</strong></summary>

**Punct de terminare:**

`GET /answer/getAnswersByLocationId/:locationId`

**Descriere:**

Recuperează răspunsurile asociate cu o anumită locație.

**Parametri:**

- `locationId` (șir de caractere, obligatoriu): ID-ul locației.

</details>

<details>
<summary><strong>Obține răspunsurile după ID-ul utilizatorului</strong></summary>

**Punct de terminare:**

`GET /answer/getAnswersByUserId`

**Descriere:**

Recuperează răspunsurile trimise de utilizatorul autentificat.

</details>

<details>
<summary><strong>Actualizează validitatea răspunsului</strong></summary>

**Punct de terminare:**

`POST /answer/updateAnswerValidity/:answerId`

**Descriere:**

Actualizează validitatea unui anumit răspuns.

**Parametri:**

- `answerId` (șir de caractere, obligatoriu): ID-ul răspunsului.

</details>

<details>
<summary><strong>Editează răspunsul</strong></summary>

**Punct de terminare:**

`PUT /answer/updateAnswerById/:answerId`

**Descriere:**

Editează câmpurile răspunsului și validitatea unui anumit răspuns.

**Parametri:**

- `answerId` (șir de caractere, obligatoriu): ID-ul răspunsului.

</details>

<details>
<summary><strong>Obține răspunsul după ID-urile locației și utilizatorului</strong></summary>

**Punct de terminare:**

`GET /answer/getAnswer/:locationId`

**Descriere:**

Recuperează un răspuns pe baza ID-urilor locației și utilizatorului.

**Parametri:**

- `locationId` (șir de caractere, obligatoriu): ID-ul locației.

</details>

<details>
<summary><strong>Obține toate răspunsurile în format CSV</strong></summary>

**Punct de terminare:**

`GET /answer/getAllAnswers`

**Descriere:**

Recuperează toate răspunsurile în format CSV.

</details>

<details>
<summary><strong>Obține numărul de răspunsuri corecte</strong></summary>

**Punct de terminare:**

`GET /answer/getNumberOfCorrectAnswers`

**Descriere:**

Recuperează numărul de răspunsuri corecte.

</details>

<details>
<summary><strong>Verifică toate răspunsurile</strong></summary>

**Punct de terminare:**

`GET /answer/checkAllAnswers`

**Descriere:**

Verifică validitatea tuturor răspunsurilor.

</details>

---

## Autentificarea utilizatorului

<details>
<summary><strong>Înregistrare</strong></summary>

**Punct de terminare:**

`POST /auth/register`

**Descriere:**

Înregistrează un utilizator nou. Parola este criptată înainte de stocare.

**Corpul cererii:**

- `email` (șir de caractere, obligatoriu): Adresa de e-mail a utilizatorului.
- `first_name` (șir de caractere, obligatoriu): Prenumele utilizatorului.
- `last_name` (șir de caractere, obligatoriu): Numele de familie al utilizatorului.
- `password` (șir de caractere, obligatoriu): Parola utilizatorului (minim 8 caractere).
- `town` (șir de caractere, obligatoriu): Orașul utilizatorului.

**Exemplu:**

```json
{
  "email": "user@example.com",
  "first_name": "Ion",
  "last_name": "Popescu",
  "password": "parola123",
  "town": "București"
}
```

</details>

<details>
<summary><strong>Verificarea e-mailului</strong></summary>

**Punct de terminare:**

`POST /auth/verifyEmail`

**Descriere:**

Verifică adresa de e-mail a unui utilizator.

**Corpul cererii:**

- `email` (șir de caractere, obligatoriu): Adresa de e-mail a utilizatorului.

</details>

<details>
<summary><strong>Verificarea autentificării </strong></summary>

**Punct de terminare:**

`GET /auth/checkLoggedIn`

**Descriere:**

Verifică dacă utilizatorul este autentificat.

</details>

<details>
<summary><strong>Autentificare</strong></summary>

**Punct de terminare:**

`POST /auth/login`

**Descriere:**

Autentifică un utilizator.

**Corpul cererii:**

- `email` (șir de caractere, obligatoriu): Adresa de e-mail a utilizatorului.
- `password` (șir de caractere, obligatoriu): Parola utilizatorului.

**Exemplu:**

```json
{
  "email": "user@example.com",
  "password": "parola123"
}
```

</details>

<details>
<summary><strong>Deconectare</strong></summary>

**Punct de terminare:**

`GET /auth/logout`

**Descriere:**

Deconectează utilizatorul autentificat.

</details>

---

## Gestionarea individuală a vânătorii

<details>
<summary><strong>Obține opțiunile vânătorii</strong></summary>

**Punct de terminare:**

`GET /hunt/globalInfo`

**Descriere:**

Recuperează opțiunile globale ale vânătorii.

</details>

<details>
<summary><strong>Actualizează opțiunile vânătorii</strong></summary>

**Punct de terminare:**

`PUT /hunt/edit`

**Descriere:**

Actualizează opțiunile vânătorii. Doar pentru admin.

</details>

---

## Gestionarea locațiilor

<details>
<summary><strong>Creează o locație</strong></summary>

**Punct de terminare:**

`POST /locations/create`

**Descriere:**

Creează o locație nouă. Doar pentru admin.

</details>

<details>
<summary><strong>Editează o locație</strong></summary>

**Punct de terminare:**

`PUT /locations/edit/:id`

**Descriere:**

Editează o locație existentă. Doar pentru admin.

**Parametri:**

- `id` (șir de caractere, obligatoriu): ID-ul locației.

</details>

<details>
<summary><strong>Șterge o locație</strong></summary>

**Punct de terminare:**

`DELETE /locations/delete/:id`

**Descriere:**

Șterge o locație. Doar pentru admin.

**Parametri:**

- `id` (șir de caractere, obligatoriu): ID-ul locației.

</details>

<details>
<summary><strong>Obține toate locațiile</strong></summary>

**Punct de terminare:**

`GET /locations/all`

**Descriere:**

Recuperează toate locațiile.

</details>

---

## Gestionarea utilizatorilor

<details>
<summary><strong>Editează un utilizator</strong></summary>

**Punct de terminare:**

`PUT /users/edit`

**Descriere:**

Editează detaliile unui utilizator.

**Corpul cererii:**

- `first_name` (șir de caractere, opțional): Prenumele utilizatorului.
- `last_name` (șir de caractere, opțional): Numele de familie al utilizatorului.
- `town` (șir de caractere, opțional): Orașul utilizatorului.

</details>

<details>
<summary><strong>Editează un utilizator după ID</strong></summary>

**Punct de terminare:**

`PUT /users/edit/:userId`

**Descriere:**

Editează detaliile unui utilizator după ID-ul utilizatorului. Doar pentru admin.

**Parametri:**

- `userId` (șir de caractere, obligatoriu): ID-ul utilizatorului.

</details>

<details>
<summary><strong>Obține toți utilizatorii</strong></summary>

**Punct de terminare:**

`GET /users/getAll`

**Descriere:**

Recuperează toți utilizatorii. Doar pentru admin.

</details>

<details>
<summary><strong>Începe vânătoarea</strong></summary>

**Punct de terminare:**

`GET /users/startHunt`

**Descriere:**

Începe vânătoarea de comori pentru utilizatorul autentificat.

</details>

<details>
<summary><strong>Încheie vânătoarea</strong></summary>

**Punct de terminare:**

`GET /users/endHunt`

**Descriere:**

Încheie vânătoarea de comori pentru utilizatorul autentificat.

</details>

---

## Criptarea parolelor

Parolele sunt criptate folosind bcrypt înainte de a fi stocate în baza de date. Acest lucru asigură că parolele utilizatorilor sunt stocate în siguranță.
