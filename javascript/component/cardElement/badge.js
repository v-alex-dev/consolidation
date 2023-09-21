import {bgcBadge} from "../../function/bgc-badge.js";

function badges(genre) {
  const badge = document.getElementById('badge');

  badge.className = ' flex flex-wrap justify-around m-5';

  genre.forEach(element => {
    const span = document.createElement('span');

    span.innerHTML = element
    span.className = "rounded-full px-2 mt-1 text-white"
    bgcBadge(span);
    badge.append(span);
  });
}

export {badges};