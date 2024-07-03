const tombolTambah = document.querySelector('.tambah')
const container = document.querySelector('.container')
const isi = document.querySelector('.isi');
const judul = document.querySelector('.isi-judul')
const btn = document.querySelectorAll('.btn')
const catatanJudul = document.querySelectorAll('.catatan-judul')

let save = 0;
tombolTambah.addEventListener('click', function (e) {

    classTambah(e.target)
    inputJudul(save)
})



// saat tombol di click plus awal

function classTambah(e) {
    e.classList.add('opacity')
    setTimeout(() => {
        e.style.display = 'none';
        isi.style.display = 'flex';
    }, 1000)
}

// input judul 
function inputJudul(a) {

    //untuk menyimpan data judul catatan (saat tombol next pada isi-judul di click)
    function kirim(nilai) {
        btn[a].addEventListener('click', function (e) {
            catatanJudul[a].innerHTML = nilai;
            isi.style.display = 'none'
            container.style.display = 'flex'
            a++

        })
    }

    judul.addEventListener('change', function (e) {

        nilai = e.target.value
        kirim(nilai)

    })

}



const time = document.querySelectorAll('#time')

console.log(time[0])
