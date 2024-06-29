// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. 
// Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. 
// Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 31; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 2; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 1900; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini

if (tanggal >= 1 && tanggal <= 31) {
    console.log(`${tanggal}`);
}

switch (bulan) {
    case 1:
        console.log("Januari");
        break;
    case 2:
        console.log("Februari");
        break;
    case 3:
        console.log("Maret");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("Mei");
        break;
    case 6:
        console.log("Juni");
        break;
    case 7:
        console.log("Juli");
       break;
    case 8:
        console.log("Agustus");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("Oktober");
        break;
    case 11:
        console.log("November");
       break;
    case 12:
        console.log("Desember");
        break;
}

if (tahun >= 1900 && tahun <= 2200) {
    console.log(`${tahun}`);
}
