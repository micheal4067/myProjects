import {header} from './header.js' ;
import { backToTop } from './backToTop.js';
import { logoClick } from './links.js';
import { searchClick } from './links.js';
 
header();
logoClick();
searchClick();


window.onload = function() {
  const skills = document.querySelectorAll('.skill-progress');
  skills.forEach(skill => skill.classList.add('loaded'));
}

let middleText = document.getElementById('middle');
let addText = ' Where we provide skilled expertise to industrial, institutional, commercial and residential customers. ';
let i = 0;
let adding = true;

function addAndRemoveText() {
  if (adding) {
    if (i < addText.length) {
      middleText.textContent += addText[i];
      i++;
    } else {
      setTimeout(() => {
        adding = false;
        removeText();
      }, 2000); // wait 2 seconds before removing
    }
  } else {
    removeText();
  }

}

function removeText() {
  if (middleText.textContent.length > 0) {
    middleText.textContent = middleText.textContent.slice(0, -1);
  } else {
    adding = true;
    i = 0;
  }
}

setInterval(addAndRemoveText, 100); // add next letter every 2 seconds

 backToTop();

imageClick();

function imageClick(){
  document.getElementById('tech').addEventListener('click',()=>{
    window.location.href = "./tech.html";
  });
  document.getElementById('web').addEventListener('click',()=>{
    window.location.href = "./web.html";
  });
  document.getElementById('electric').addEventListener('click',()=>{
    window.location.href = "./electric.html";
  })
};



