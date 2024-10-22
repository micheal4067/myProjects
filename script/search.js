

function searchClick(){
  document.getElementById('search-btn').addEventListener('click', () => {
    const searchTerm = document.getElementById('search-input').value;
    const url = `./search.html?search=${searchTerm}`;
    window.open(url, '_blank');
  });
}



export {searchClick};



