

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
  const droparrow = document.querySelector('.sidebar-link i');
  

  let display = false;
 
  toggleIcon.addEventListener('click', ()=>{
   sideBar.style.display = 'block';
  });

 body.addEventListener('click',()=>{
  sideBar.style.display = 'none';
  dropMenu.style.display = 'none' ;
 });
 window.addEventListener('scroll',()=>{
  sideBar.style.display = 'none';
  dropMenu.style.display = 'none' ;
 });
 droparrow.addEventListener('click', () => {
  display = !display; // Toggle the display state
  dropMenu.style.display = display ? 'block' : 'none'; // Set display based on the state
 
});
 
}

header();

export  {header};

