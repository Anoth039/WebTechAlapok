function szamkitalaloJatek() {
    const titkosSzam = Math.floor(Math.random() * 1000001);
    const maxTippek = 20;
    let probalkozas = 0;
    let kitalalta = false;

    while (probalkozas < maxTippek && !kitalalta) {
        let tipp = prompt(`${probalkozas + 1}. tipp: Adj meg egy számot 0 és 1 000 000 között:`);
        let szam = parseInt(tipp);

        if (isNaN(szam)) {
            alert("Érvénytelen bemenet! Kérlek, számot adj meg.");
            continue;
        }
        if (szam < 0 || szam > 1000000) {
            alert("Érvénytelen bemenet! Kérlek, egy 0 és 1000000 közötti számot adj meg.");
            continue;
        }

        probalkozas++;

        if (szam === titkosSzam) {
            alert(`Gratulálok, ${probalkozas} lépésből eltaláltad!`);
            kitalalta = true;
        } else if (szam > titkosSzam) {
            alert(`${probalkozas}. tipp nem talált: A megoldás kisebb.`);
        } else {
            alert(`${probalkozas}. tipp nem talált: A megoldás nagyobb.`);
        }
    }

    if (!kitalalta) {
        alert("Sajnos ez most nem sikerült!");
    }
}
