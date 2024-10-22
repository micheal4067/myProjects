// Show button when scrolled down
function backToTop(){
  window.addEventListener('scroll', function() {
    if (window.scrollY > 200) { // Adjust the scroll position
      document.getElementById('top-btn').style.display = 'block';
    } else {
      document.getElementById('top-btn').style.display = 'none';
    }
  });
  
  // Scroll to top on button click
  document.getElementById('top-btn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

}

export {backToTop};