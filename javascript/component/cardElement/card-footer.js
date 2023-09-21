function footerCard(name) {
  const article = document.getElementById('card')
  const footer = document.createElement('div');
  const link = document.createElement('a');
  const img =document.createElement('img');
  const deleteButton = document.createElement('button');

  footer.id = 'card-footer';
  footer.className = 'flex justify-between border-t items-center mx-5 min-h-20';

  deleteButton.id = 'card-delete'
  deleteButton.className = 'rounded-full bg-red-500 px-2 '
  deleteButton.innerText = 'Delete';

  img.src= '../public/games/youtube.png'
  link.href = 'https://www.youtube.com/watch?v=oHg5SJYRHA0';

  link.append(img)
  footer.append(link);
  footer.append(deleteButton)
  article.append(footer);
}

export {footerCard};