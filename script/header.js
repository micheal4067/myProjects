

function header(){
  window.addEventListener('scroll', ()=> {
    let header = document.querySelector('.m2-first-d');
    let scrollPosition = window.scrollY;
    if (scrollPosition > window.innerHeight* 0.5 && window.innerWidth < 701){
      header.classList.add('sticky-header');
    } else if (scrollPosition < window.innerHeight* 0.1) {
      header.classList.remove('sticky-header');
    }
  });

  const toggleIcon = document.querySelector('.hamb-icon');
  const sideBar = document.querySelector('.sidebar');
  const closeMenu = document.querySelector('.close-menu-image');
  const dropMenu = document.querySelector('.dropdown-menus');
  const droparrow = document.querySelector('.carret');
  const changeCarret = document.querySelector('.carret');
  const bodyMain = document.querySelector('body'); 
  const filterBody = document.querySelector('.page'); 
  
   document.querySelector('.m-logo-area').addEventListener('click', ()=>{
    window.location.href = './index.html';
   });
  
  let display = false;
 
 closeMenu.addEventListener('click',()=>{
  sideBar.style.display = 'none';
  dropMenu.style.display = 'none' ;
  filterBody.style.filter = '';
  changeCarret.innerHTML = `<img src="./images/carret-right.png" class="carret-img">`;
  sideBar.style.width = '250px';
  display = false;
  document.body.style.overflow = '';
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

  toggleIcon.addEventListener('click', (event)=>{
    event.stopPropagation();
    sideBar.style.display = 'block';
    filterBody.style.filter = 'brightness(40%)';
    boot();
    document.body.style.overflow = 'hidden';
    const checkWidth = ()=> {if (window.innerWidth > 771){
      sideBar.style.display = 'none';
   }}
   window.addEventListener('resize', checkWidth);
   });

    bodyMain.addEventListener('click',()=>{
      sideBar.style.display = 'none';
      dropMenu.style.display = 'none' ;
      filterBody.style.filter = '';
      changeCarret.innerHTML = `<img src="./images/carret-right.png" class="carret-img">`;
      sideBar.style.width = '250px';
      display = false;
      document.body.style.overflow = '';
     
     });

 function boot(){
  document.querySelector('.home-js a').addEventListener('click',()=>{
    window.location.href = './index.html';
  });
 
  document.querySelector('.about-js a').addEventListener('click',()=>{
    window.location.href = './about.html';
  });
 
  document.querySelector('.contact-js a').addEventListener('click',()=>{
    window.location.href = './contact.html';
  });
 }

 
}
header();

export  {header};

