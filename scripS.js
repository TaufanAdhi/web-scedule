const tambah = document.querySelector('.tambah')
const createJud = document.querySelector('.isi')
const contain = document.querySelector('.container');
const [label, input, area, next] = createJud.querySelectorAll('*')

tambah.onclick = function () {
    tambah.classList.add('opacityHide')
    tambah.style.top= '-10rem' 
    setTimeout(() => {
        createJud.style.display = 'flex';
    }, 1000);


}



async function coba() {
    let isiInput;
    let isiArea;
    input.addEventListener('change', function (e) {
        isiInput = e.target.value
    })
    area.addEventListener('change', function (e) {
        isiArea = e.target.value
    })

    next.addEventListener('click', function (e) {
        elm(isiInput,isiArea)
        input.value = '';
        area.value = '';
        createJud.style.display = 'none';
        contain.style.display = 'flex';
        tambah.classList.remove('opacityHide')
        tambah.style.top= '25rem'
        tambah.style.left= '1rem'  
    })


}
coba()


function elm(i,a) {

    const div = document.createElement('div');
    div.setAttribute('class', 'card')
    div.innerHTML = `<h3></h3>
                    <p></p>
                    <div><h1 class="catatan-judul">${i}</h1></div>
    `
    console.log(div)

    contain.append(div)



}














// const Elm =  {
//     div : function() {
//         return document.createElement('div')
//     }
// }

// console.log(Elm)















