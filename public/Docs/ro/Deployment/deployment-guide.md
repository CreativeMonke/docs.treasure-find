# Ghid de Implementare

##### Acest ghid oferă instrucțiuni pentru implementarea componentelor frontend și backend ale aplicației Treasure Find. Include instrucțiuni pentru implementarea frontend-ului pe Vercel și backend-ului pe Render, împreună cu configurarea necesară a bazei de date și a variabilelor de mediu.

## Implementare Frontend

### Implementare Vercel

#### Cerințe preliminare

- Cont Vercel

#### Pași

1. Clonează depozitoriul de pe GitHub:

   - Accesează [pagina de depozitor GitHub](https://github.com/CreativeMonke/treasure-find-frontend).
   - Apasă butonul "Fork" în colțul din dreapta sus pentru a clona depozitoriul în propriul cont GitHub.

2. Conectează-te la Vercel și creează un proiect nou.

3. Conectează depozitoriul GitHub la Vercel.

4. Configurează setările proiectului (de exemplu, variabile de mediu, domenii personalizate).

5. Adaugă variabila de mediu `REACT_APP_API_BASE_URL` cu URL-ul API-ului backend corespunzător.

6. Implementează aplicația frontend.

## Implementare Backend

### Implementare Locală (Nerecomandată)

#### Cerințe preliminare

- Node.js instalat
- Git instalat

#### Pași

1. Clonează depozitoriul de pe GitHub:

   ```bash
   git clone https://github.com/CreativeMonke/treasure-find-backend.git
   ```

2. Navighează către directorul backend:

   ```bash
   cd treasure-find-backend
   ```

3. Instalează dependențele:

   ```bash
   npm install
   ```

4. Consultați secțiunea [configurare](/configuration) pentru setarea `MongoDB`, `JWT` și `HuggingFace`.

5. Rulează aplicația backend:

   ```bash
   npm start
   ```

### Implementare Render

#### Cerințe preliminare

- Cont Render

#### Pași

1. Clonează depozitoriul de pe GitHub:

   - Accesează [pagina de depozitor GitHub](https://github.com/CreativeMonke/treasure-find-api).
   - Apasă butonul "Fork" în colțul din dreapta sus pentru a clona depozitoriul în propriul cont GitHub.

2. Conectează-te la Render și creează un serviciu nou.

3. Conectează depozitoriul GitHub la Render.

4. Configurează setările serviciului:

   - Specifică comanda de pornire, de exemplu, `npm start`.
   - Consultați secțiunea [configurare](/configuration) pentru setarea `MongoDB`, `JWT` și `HuggingFace`.

5. Porneste aplicația backend.

---
