# Smoke Testovi za Navigator.ba

**Smoke Test** je osnovni skup testova koji se izvode kako bi se provjerilo da li osnovne funkcionalnosti aplikacije rade bez ozbiljnih grešaka prie nego što se izvrši detaljnije testiranje.

## Test Case 1: Prebacivanje jezika (Bosanski / Engleski)
### Naziv testa:
Prebacivanje jezika na engleski i bosanski

### Koraci:
1. Otvoriti početnu stranicu aplikacije
2. U desnoj strani topbara se nalaze ponuđeni jezici (EN/BS)
3. Potrebno je kliknuti na željeni jezik kako bi se stranica prikazala na tom jeziku
4. Provjeriti da li se svi tekstovi na stranici (npr. naslovi, upute, dugmadi) ispravno prebacuju na odabrani jezik.

Ponoviti postupak za oba jezika.

### Očekivani rezultat:
Aplikacija treba pravilno prikazati sve tekstove na odabranom jeziku (bosanski ili engleski).

---

## Test Case 2: Pretraga postojeće lokacije
### Naziv testa:
Pretraga postojeće lokacije putem search bara

### Koraci:
1. Otvoriti početnu stranicu Navigator.ba
2. U search bar upisati naziv postojeće lokacije (npr. "Konzum")
3. Kliknuti Enter ili dugme za pretragu

### Očekivani rezultat:
Prikazuje se ta lokacija na mapi sa detaljima. Potrebno je kliknuti na ponuđenu lokaciju u sidebaru nakon čega će lokacija biti prikazana na mapi.

---

## Test Case 5: Provjera prikaza mape i zoom funkcije
### Naziv testa:
Interakcija sa mapom (zumiranje i pomjeranje)

### Koraci:
1. Koristiti scroll na mišu za zumiranje ili dugmiće sa desne strane sa oznakom " + " i " - "
2. Kliknuti i povući mapu da se vidi druga lokacija.
3. Kliknuti na različite lokacije

### Očekivani rezultat:
Mapa pravilno reaguje na komande bez zamrzavanja ili grešaka.

---

## Test Case 6: Negativni test - Pretraga nepostojeće lokacije
### Naziv testa:
Pretraga nepostojeće lokacije

### Koraci:
1. U search bar upisati random niz znakova (npr. "asdhaskdjhakjshd").
2. Pritisnuti pretragu ili enter

### Očekivani rezultat:
Prikazuje se poruka "Žao nam je. Nismo uspjeli pronaći niti jedan rezultat za traženu pretragu."
