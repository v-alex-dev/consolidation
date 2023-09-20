function badges(genre) {
  const badge = document.getElementById('badge');
  genre.forEach(element => {
    const span = document.createElement('span');
    span.innerHTML = element;
    badge.append(span);
  });
}

export {badges};