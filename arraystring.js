// ARRAY & STRING METHODS

// SLICE
const buah = ['apel', 'semangka', 'nanas', 'jeruk'];
console.log(buah.slice(-2)); // Mengambil 2 elemen terakhir

// toUpperCase toLowerCase
let celerates = 'celeRates';
celerates = celerates.toUpperCase();
console.log('TOUPPERCASE: ' + celerates);

let content1 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque illo ipsa. Deleniti cupiditate rerum, reprehenderit fuga corporis placeat necessitatibus aut. Illo natus suscipit cum minus dolorem quas ipsa rerum!';
content1 = content1.toLowerCase();
console.log('lowercase: ' + content1);

// split
const hewan = 'kucing, kodok, ayam, ikan';
const splittedhewan = hewan.split(', ');
console.log(splittedhewan);

// replace
console.log(hewan.replace('ayam', 'kuda'));

// push
const Fruits = ['kelapa', 'jeruk', 'durian', 'apel'];
console.log('hasil setelah ditambahkan input: ' + Fruits.push('mangga')); // Menampilkan panjang array
console.log(Fruits); // Array 'Fruits' setelah ditambahkan 'mangga'

// POP
const newFruits = Array.from(Fruits); // Membuat salinan dari 'Fruits'
newFruits.pop();
console.log('Array Lama : ' + Fruits);
console.log('Array Baru : ' + newFruits); // Menggunakan 'newFruits' agar hasil pop terlihat

// SHIFT
newFruits.shift();
console.log(newFruits); // Array 'newFruits' setelah menggunakan shift

// UNSHIFT
const myFruits = ['melon', 'anggur'];
newFruits.unshift('mangga', 'kelapa', ...myFruits); // Menambahkan elemen-elemen baru ke depan array
console.log(newFruits); // Array 'newFruits' setelah menggunakan unshift

// CONCAT
const myFavFruits = ['Klengkeng', 'Semangka'];
const FavFruits = newFruits.concat(myFavFruits); // Menggabungkan 'newFruits' dengan 'myFavFruits'
console.log(FavFruits); // Hasil gabungan array 'newFruits' dan 'myFavFruits'

// Menggabungkan dua array angka dengan spread operator
const arrNum1 = [1, 2, 3, 1, 4, 6];
const arrNum2 = [9, 7, 8, 5];
const arrNum3 = [...arrNum1, ...arrNum2];
console.log(arrNum3);

// REDUCE
const totalNum = arrNum3.reduce((acc, currItem) => acc + currItem, 0);
console.log(totalNum);

// FOREACH
FavFruits.forEach((fruit, index) => console.log(`Index ke ${index} buah: ${fruit}`));

// FIND
console.log('Array Num 3: ', arrNum3); // Perbaikan output ke konsol
const findNumberLargerThan2 = arrNum3.find((num) => num > 2);
console.log(findNumberLargerThan2);

// Soal
let antri = ['ray', 'fiki', 'fadhilla', 'farah'];
antri = [...antri, 'nabilla', 'mazaya', 'elsi']; // Menambahkan elemen baru
antri.pop(); // Menghapus elemen terakhir
antri = antri.slice(2); // Mengambil elemen mulai dari index ke-2
antri = ['tomi', ...antri]; // Menambahkan elemen 'tomi' di depan
console.log(antri);
