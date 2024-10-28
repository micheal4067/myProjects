
import { header } from "./header.js";
import { searchClick } from "./links.js";


header();
searchClick();

document.getElementById('search-results').innerHTML = `<p> Sorry! No results found for your search.</p>`;


