function openMenu(){
let menu=document.getElementById('menu');
let btn=document.getElementById('menu-mobile')
  if(menu.style.display=='block'){
    menu.style.display="none"
    btn.innerText="Menu"
  }else{
    menu.style.display="block"
    btn.innerText="Close"
  }
}