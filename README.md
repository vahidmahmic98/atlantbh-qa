# Naziv projekta: Navigator.ba

Kratak opis: U ovom projektu sam testirao stranicu Navigator.ba i njene funkcionalnosti. Navigator.ba nam služi za pretragu stanova, ulica, restorana itd... ali i dodavanje novih objekata.
Zapažene greške, prijedloge sam evidentirao, pa krenimo od početka.


1. Write test cases for this application:

    Test cases se nalaze u fajlu test-cases.md 

2. From all the test cases, identify what you think represents a Smoke Test
    Smoke Test se nalazi u fajlu smoke-test.md

    U Smoke Test sam naveo osnovne funkcionalnosti za testiranje kako što je pretraga lokacije koja postoji i koja nije unesena, interakcija sa mapom i sl.

3. Identify positive and negative test cases
    Pozitivni i negativni slučajevi se nalaze u fajlu positive-negative-test-cases.md

4. With a programming/scripting language and testing framework of your choice, automate the smoke test from #2
    Testovi za ovaj slučaj se nalaze u folderu "tests" a unutar njega su ispisani testovi.

    Za testove sam koristio Playwright.

    Komande za pokretanje testova u terminalu:

    npx playwright test tests/map-zoom.spec.ts --headed
    --headed dodajemo kada želimo test pratiti u browseru

    Također, za ostale testove mijenjamo samo naziv fajla, u ovom slučaju naziv fajla je map-zoom.spec.ts

5. Create Github repository and push your assignment solution with the documentation on how to run the automated tests there (focus on writing comprehensive Readme file)
    Link od githuba: https://github.com/vahidmahmic98/atlantbh-qa

6. Report bugs if you find any, with detailed steps to reproduce
    Pronađeni bugovi i prijedlozi su kreirani u fajlu bugs.md
