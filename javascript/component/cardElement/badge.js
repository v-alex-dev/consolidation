function badges(genre) {
  const badge = document.getElementById('badge');
  badge.className = ' flex flex-wrap justify-around'
  genre.forEach(element => {
    const span = document.createElement('span');
    span.innerHTML = element;
    badge.append(span);
  });
}

export {badges};