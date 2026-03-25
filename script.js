function toggleMode() {
 const html = document.documentElement
 html.classList.toggle('light')

 // pegar a img
 const img = document.querySelector("#profile img") 
 //substituir a img
 if(html.classList.contains('light')) {
  // se tiver o light mode, add a img light
  img.setAttribute('src', './assets/avatar claro light.png.jpeg' )

 } else {
  img.setAttribute("src", "./assets/Avatar Projeto Dark.png.jpeg")

 }




}