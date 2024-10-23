// Show button when scrolled down
function backToTop(){
  const topButton = document.getElementById('top-btn');
 setTimeout(window.addEventListener('scroll', function() {
  if (window.scrollY > 200) { 
   showButton();
  } else {
    hideButton()
  }
}),2000) 

  function showButton() {
    topButton.style.display = 'block';
}

function hideButton() {
    topButton.style.display = 'none';
}
  
  document.getElementById('top-btn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

export {backToTop};