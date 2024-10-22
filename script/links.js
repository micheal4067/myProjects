function NavigateLinks(){
  document.querySelector('.get-started-js').addEventListener('click',()=>{
    window.location.href = './contact.html';
  });
  
  document.querySelector('.overlay-btn-js').addEventListener('click',()=>{
    window.location.href = './contact.html';
  });

}

export function logoClick (){
  const logoClick = document.querySelector('.logo-js');
  logoClick.addEventListener('click', ()=>{
    window.location.href = './index.html';
  });
}

export {NavigateLinks};