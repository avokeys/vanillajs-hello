/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let diffDomain = [".com", ".url", ".io"];
let domain = [];
window.onload = function() {};
let newDomain;
for (let itemP of pronoun) {
  for (let itemA of adj) {
    for (let itemN of noun) {
      for (let itemD of diffDomain) {
        newDomain = itemP + itemA + itemN + itemD;
        domain.push(newDomain);
      }
    }
  }
}

//  `` thegreatjogger.com
// thegreatracoon.com
// ourgreatjogger.com
// ourgreatracoon.com
// thebigjogger.com
// thebigracoon.com
// ourbigjogger.com
// ourbigracoon.com``
