// algoritma
/* 
-Diperlukan 2 variabel (nama dan peran) yang wajib memiliki isi data
-Bila 2 isi data variabel (nama dan peran) kosong maka akan diberikan sebuah peringatan:
->Nama kosong ("nama wajib diisi")
->Peran kosong ("Pilih Peranmu untuk memulai game")

-Membuat 3 peran (ksatria, Tabib, Penyihir, kosong(""))
-Membuat 4 jenis respons yang berbeda pada setiap peran
->ksatria (halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!)
->tabib (halo Tabib ${nama} , kamu akan membantu temanmu yang terluka)
->penyihir (halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!)
->Tidak ada (tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada)

-Tips
->Gunakan backtick untuk memanggil variabel ke dalam string 
*/


let nama = "icank", peran = "penyihir";

//code disini gunakan console.log untuk outputnya

if (nama === "") {
    console.log("Nama Wajib diisi")
} else if (peran === "") {
    console.log("Pilih Peranmu untuk memulai game")
}

if (peran == "ksatria") {
    console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`)
} else if (peran == "tabib") {
    console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`)
} else if (peran == "penyihir") {
    console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
} else if (peran) {
    console.log(`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`)
}


