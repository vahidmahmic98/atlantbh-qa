Test Case 1: Prebacivanje jezika (Bosanski / Engleski)
Naziv testa: Prebacivanje jezika na engleski i bosanski

Koraci:

1. Otvoriti početnu stranicu aplikacije
2. U desnoj strani topbara se nalaze ponuđeni jezici (EN/BS)
3. Potrebno je kliknuti na željeni jezik kako bi se stranica prikazala na tom jeziku
4. Provjeriti da li se svi tekstovi na stranici (npr. naslovi, upute, dugmadi) ispravno prebacuju na odabrani jezik.

Ponoviti postupak za oba jezika.

Očekivani rezultat:
Aplikacija treba pravilno prikazati sve tekstove na odabranom jeziku (bosanski ili engleski).


Test Case 2: Pretraga postojeće lokacije
Naziv testa: Pretraga postojeće lokacije putem search bara

Koraci:

1. Otvoriti početnu stranicu Navigator.ba
2. U search bar upisati naziv postojeće lokacije (npr. "Konzum")
3. Kliknuti Enter ili dugme za pretragu

Očekivani rezultat: Prikazuje se ta lokacija na mapi sa detaljima. Potrebno je kliknuti na ponuđenu lokaciju u sidebaru nakon čega će lokacija biti prikazana na mapi.


Test Case 3: Dodavanje nove lokacije
Naziv testa: Dodavanje nove lokacije kroz opciju "Dodaj objekat".

Koraci:

1. Kliknuti na opciju "Dodaj objekat" u topbaru pored pretraživača
2. Popuniti polja kao što su naziv, grad, ulica, broj, itd...
3. Nakon unešenih informacija za novu lokaciju, odnosno objekat, pritisnuti dugme za potvrdu odnosno "Kreiraj".

Očekivani rezultat: Lokacija se uspješno šalje na pregled ili odmah prikazuje na mapi ako nema dodatne verifikacije.


Test Case 4: Kategorijska pretraga
Naziv testa: Pretraživanje lokacija po kategorijama (npr. Smještaj, Kafa, Hrana i sl.)

Koraci:

1. U lijevom sidebaru potrebno je kliknuti na kategoriju koju želimo pogledati
2. Nakon što smo odabrali kategoriju, dobit ćemo listu unesenih lokacija sa tom kategorijom
3. Prilikom odabira željene lokacije ona će se prikazati na mapi

Očekivani rezultat: Mapa prikazuje samo lokacije izabrane kategorije.


Test Case 4: Predlaganje izmijena
Naziv testa: Predlaganje izmjena kod postojećih lokacija

Koraci:

1. Nakon odrađenog "Test Case 3" dobit ćemo opciju preglaganjem izmjena
2. Potrebno je kliknuti na dugme "Predloži izmjene"
3. Nakon što smo dobili novi prozor sa postojećom lokacijom, potrebno je unijeti prijedlog za izmjenu
4. Poslije unešenih prijedloga za izmjenom kliknut čemo na dugme "Predloži izmjene".

Očekivani rezultat: Izmjene se trebaju spremiti kao prijedlog.


Test Case 5: Provjera prikaza mape i zoom funkcije
Naziv testa: Interakcija sa mapom (zumiranje i pomjeranje)

Koraci:

1. Koristiti scroll na mišu za zumiranje ili dugmiće sa desne strane sa oznakom " + " i " - "
2. Kliknuti i povući mapu da se vidi druga lokacija.
3. Kliknuti na različite lokacije

Očekivani rezultat: Mapa pravilno reaguje na komande bez zamrzavanja ili grešaka.


Test Case 6: Negativni test - Pretraga nepostojeće lokacije
Naziv testa: Pretraga nepostojeće lokacije

Koraci:

1. U search bar upisati random niz znakova (npr. "asdhaskdjhakjshd").
2. Pritisnuti pretragu ili enter

Očekivani rezultat: Prikazuje se poruka "Žao nam je. Nismo uspjeli pronaći niti jedan rezultat za traženu pretragu."


Test Case 7: Predloži ideju - Pošalji komentar
Naziv testa: Prijedlog za ideju ili ostavljanje komentara

Koraci:

1. Otvoriti početnu stranicu
2. U topbaru, pored kreiranja objekta se nalazi opcija "Predloži ideju - Pošalji komentar"
3. Nakon što smo kliknuli na ovu opciju, dobit ćemo mali prozor koji je potrebno popuniti
4. Kada smo popunili tražene podatke, potrebno je odabrati da li je to Pohvala ili kritika a zatim kliknuti na dugme "Pošalji"

Očekivani rezultat: Uspješno slanje Pohvale/Kritike.