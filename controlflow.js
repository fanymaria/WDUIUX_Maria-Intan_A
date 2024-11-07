console.log("Latihan 1: Lirik Chorus 'I'm Blue' sebanyak 6 kali:");
for (let i = 0; i < 6; i++) {
    console.log("Da ba dee da ba daa");
}

// 2. For Loops Practice (Count Down)
console.log("\nLatihan 2: Menghitung mundur dari 25 ke 0:");
for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
}

// 3. Iterating Arrays Exercise
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
console.log("\nLatihan 3: Mencetak nama-nama di array people dalam huruf kapital:");
for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}
