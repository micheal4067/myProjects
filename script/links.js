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

export function searchClick(){
  document.getElementById('search-btn').addEventListener('click', () => {
    const searchTerm = document.getElementById('search-input').value;
    const url = `./search.html?search=${searchTerm}`;
    window.location.href = './search.html';
  });
}
export {NavigateLinks};