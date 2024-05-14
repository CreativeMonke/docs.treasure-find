# Configurarea Generală

Această secțiune descrie opțiunile de configurare pentru setările utilizatorilor și administratorilor din cadrul aplicației Căutarea Comoarelor.

## Setările Generale

### Setările Utilizatorilor:

- **Limbă (en/ro):** Utilizatorii pot alege limba preferată din partea de sus a meniului lateral.
- **Tematică (întunecat/luminos):** Tema se adaptează automat în funcție de setările dispozitivului utilizatorului.

### Setările Administratorilor:

- **Gestionarea Orarelor de Căutare:** Stabileșteți orele de început și de sfârșit globale pentru căutarea comorilor, asigurându-vă că toată lumea participă în intervalul de timp desemnat.
- **Afișare/Ascundere Pagină cu Răspunsuri:** Controlați dacă pagina care afișează răspunsurile corecte este accesibilă tuturor utilizatorilor.
- **Management Locații (Creare/Editare/Ștergere):** Administratorii pot gestiona Punctele de Interes (POI) din cadrul căutării. Acest lucru include adăugarea de noi locații, editarea celor existente și ștergerea lor completă.
- **Management Utilizatori (Rol/Ștergere):** Administratorii au posibilitatea de a edita rolurile utilizatorilor (de exemplu, jucător, administrator) și de a șterge conturile utilizatorilor.

# Configurarea Integrărilor

## Configurarea Bazei de Date

### Prerechizite (Implementare în Cloud):

- Este necesar un cont de MongoDB în cloud, cum ar fi MongoDB Atlas ([https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register)).

### Pașii de Implementare:

1. **Crearea unei Baze de Date MongoDB:**

   - Conectați-vă la contul dvs. de MongoDB în cloud.
   - Creați o nouă bază de date cu un nume descriptiv precum `treasure-find-db`.

2. **Crearea Colecțiilor:**
   În cadrul bazei de date nou-create, stabiliți trei colecții cu următoarele denumiri:
   - **users:** Stochează informații despre utilizatori (nume de utilizator, adresă de email, parolă hash, etc.).
   - **pois:** Stochează detalii despre punctele de interes (POI) (nume, descriere, geolocație, etc.).
   - **responses:** Stochează răspunsurile utilizatorilor (ID utilizator, ID POI, răspuns, timestamp, etc.).

### Conectarea la Baza de Date MongoDB

**Notă Importantă:** Fișierul `.env` este necesar doar pentru instalările locale. Pentru implementările în Render, trebuie să setați variabilele de mediu prin tab-ul de Mediu din dashboard-ul Render. Iată pașii:

1. **Autentificare pe Render:** Conectați-vă la contul dvs. Render.
2. **Selectați Serviciul Dvs.:** Navigați la serviciul unde doriți să setați variabilele de mediu.
3. **Accesați Tab-ul Mediu:** Faceți clic pe tab-ul "Mediu" în setările serviciului.
4. **Adăugați Variabilele de Mediu:** Adăugați variabilele de mediu necesare și valorile lor corespunzătoare:
   - `URI_USER`
   - `URI_POI`
   - `URI_RESPONSES`
   - `SECRET_ACCESS_TOKEN`
   - `HUGGING_FACE_TOKEN`
5. **Salvați Modificările:** Faceți clic pe "Salvare" sau "Implementare" pentru a aplica modificările la serviciul dvs. Render.

### .env

```plaintext
# Conexiunea la Baza de Date MongoDB
URI_USER="mongodb+srv://utilizatorulMeu:parolaMea@cluster0.example.mongodb.net/Users?retryWrites=true&w=majority"
URI_POI="mongodb+srv://utilizatorulMeu:parolaMea@cluster0.example.mongodb.net/pois?retryWrites=true&w=majority"
URI_RESPONSES="mongodb+srv://utilizatorulMeu:parolaMea@cluster0.example.mongodb.net/responses?retryWrites=true&w=majority"

# Portul Serverului
PORT=5005

# JWT Secret Access Token
SECRET_ACCESS_TOKEN="<cheia-secreta-access-jwt>"
# Tokenul Hugging Face API
HUGGING_FACE_TOKEN="<tokenul-hugging-face-api>"

```

## Portul Serverului

Serverul funcționează implicit pe portul `PORT=5005`.

## Variabilele de Mediu

- **SECRET_ACCESS_TOKEN="<jwt-secret-access-key>":** Această cheie secretă este crucială pentru generarea de Token-uri Web JSON (JWT) folosite pentru autentificarea utilizatorilor în cadrul aplicației.
- **HUGGING_FACE_TOKEN="<hugging-face-api-token>":** Acest token acordă acces la API-ul Hugging Face, care dotează aplicația cu caracteristici AI, cum ar fi evaluarea automată a răspunsurilor.

## De ce HuggingFace?

Aplicația Căutarea Comoarelor se bazează pe Hugging Face, o platformă de vârf pentru procesarea limbajului natural (NLP). Prin integrarea cu API-ul Hugging Face, aplicația poate implementa evaluarea automată a răspunsurilor utilizatorilor, reducând nevoia de evaluare manuală de către administratori. Acestă funcționalitate analizează răspunsurile utilizatorilor și le compară cu raspunsurile predefinite.
