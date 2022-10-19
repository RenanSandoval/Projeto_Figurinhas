
image_array = [
'1.png',
'2.png',
'3.png',
'4.png',
'5.png',
'6.png',
'7.png',
'8.png',
'9.png',
'10.png',
'11.png',
'12.png',
'13.png',
'14.png',
'15.png',
'16.png',
'17.png',
'18.png',
'19.png',
'20.png',
'21.png',
'22.png',
'23.png',
'24.png',
'25.png',
'26.png',
'27.png',
'28.png',
'29.png',
'30.png',
'31.png',
'32.png',
'33.png',
'34.png',
'35.png',
'36.png',
'37.png',
'38.png',
'39.png',
'40.png',
'41.png',
'42.png',
'43.png',
'44.png',
'45.png',
'46.png',
'47.png',
'48.png',
'49.png',
'50.png',
'51.png',
'52.png',
'53.png',
'54.png',
'55.png',
'56.png',
'57.png',
'58.png',
'59.png',
'60.png',
'61.png',
'62.png',
'63.png',
'64.png',
'65.png',
'66.png',
'67.png',
'68.png',
'69.png',
'70.png',
'71.png',
'72.png',
'73.png',
'74.png',
'75.png',
'76.png',
'77.png',
'78.png',
'79.png',
'80.png',
'81.png',
'82.png',
'83.png',
'84.png',
'85.png',
'86.png',
'87.png',
'88.png',
'89.png',
'90.png',
'91.png',
'92.png',
'93.png',
'94.png',
'95.png',
'96.png',
'97.png',
'98.png',
'99.png',
'100.png',
'101.png',
'102.png',
'103.png',
'104.png',
'105.png',
'106.png',
]//inclui todas as imagens das figurinhas numa variavel

function get_random_image(){
    //Pega um índice aleatório
    random_index = Math.floor(Math.random() * image_array.length);
    random_index2 = Math.floor(Math.random() * image_array.length);
    random_index3 = Math.floor(Math.random() * image_array.length);
    random_index4 = Math.floor(Math.random() * image_array.length);
    random_index5 = Math.floor(Math.random() * image_array.length);
   

    //Pega uma imagem no random_index(indice aleatorio)
    selected_image = image_array[random_index]
    selected_image2 = image_array[random_index2]
    selected_image3 = image_array[random_index3]
    selected_image4 = image_array[random_index4]
    selected_image5 = image_array[random_index5]

    //Mostra a imagem
    document.getElementById('image_display').src = `./images/${selected_image}`
    document.getElementById('image_display2').src = `./images/${selected_image2}`
    document.getElementById('image_display3').src = `./images/${selected_image3}`
    document.getElementById('image_display4').src = `./images/${selected_image4}`
    document.getElementById('image_display5').src = `./images/${selected_image5}`

    
}

const openModalButtons = document.querySelectorAll('[data-modal-target]') //variável para inserir o botão 'clique para abrir' no js
const closeModalButtons = document.querySelectorAll('[data-close-button]')
//variável para inserir o botão 'x' no js
const overlay = document.getElementById('overlay')
//variavel para inserir a div 'overlay' (div que ocupa toda a tela e é responsável por dimunir a opacidade da tela ao modal ser ativado) no js
const img = document.getElementsByClassName('inner_container')
//variável para inserir o container das imagens de figurinhas no js

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})//arrow function para que ao botão 'clique para abrir' ser clicado, a function openmodal seja executada no parametro modal(definido pela variavel modal, que seleciona a div 'modal' )

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})//arrow function para que ao botão 'x' ser clicado, a function closemodal seja executada no parametro modal(definido pela variavel modal, que seleciona a div 'modal' )

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}//function para que seja adicionado a classe 'active' no modal (tela pop up com as figurinhas), permitindo que ele apareca na tela

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}//function para que seja removido a classe 'active' no modal (tela pop up com as figurinhas), permitindo que ele desapereça na tela


overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})// arrow function para que ao a div overlay ser clicada (div que ocupa toda a tela e é responsável por dimunir a opacidade da tela ao modal ser ativado), o modal desapareça na tela

