

function header(){
  window.addEventListener('scroll', ()=> {
    let header = document.querySelector('header');
    let scrollPosition = window.scrollY;
    if (scrollPosition > window.innerHeight* 0.5) {
      header.classList.add('sticky-header');
    } else if (scrollPosition < window.innerHeight* 0.1) {
      header.classList.remove('sticky-header');
    }
  });

  const toggleIcon = document.querySelector('.hamb-icon');
  const sideBar = document.querySelector('.sidebar');
  const body = document.querySelector('.close-menu');
  const dropMenu = document.querySelector('.dropdown-menus');
  const droparrow = document.querySelector('.carret');
  const changeCarret = document.querySelector('.carret');
  

  let display = false;
 


 body.addEventListener('click',()=>{
  sideBar.style.display = 'none';
  dropMenu.style.display = 'none' ;
  changeCarret.innerHTML = `<img src="./images/carret-right.png" class="carret-img">`;
  sideBar.style.width = '250px';
  display = false;
  document.body.style.overflow = '';
 });
 window.addEventListener('scroll',()=>{
 
 
 });
 droparrow.addEventListener('click', () => { 
  if(!display){
    sideBar.style.width = '300px';
    dropMenu.style.display = 'block';
    changeCarret.innerHTML = `<img src="./images/carret-left.png" class="carret-img">`;
    display = true;
 
  }else{
    dropMenu.style.display = 'none';
    sideBar.style.width = '250px';
    changeCarret.innerHTML = `<img src="./images/carret-right.png" class="carret-img">`;
    display = false;
 
  }
});

toggleIcon.addEventListener('click', ()=>{
  sideBar.style.display = 'block';
  document.body.style.overflow = 'hidden';
 });


 const checkWidth = ()=> {if (window.innerWidth > 771){
     sideBar.style.display = 'none';
  }}
  window.addEventListener('resize', checkWidth);
}
header();

export  {header};

