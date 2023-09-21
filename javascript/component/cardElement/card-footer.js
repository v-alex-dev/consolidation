function footerCard() {
  const article = document.getElementById('card')
  const footer = document.createElement('div');
  const link = document.createElement('a');
  const img =document.createElement('img');


  footer.id = 'card-footer';
  footer.className = 'flex border-t items-center mx-5 min-h-20';



  img.src= '../public/games/youtube.png'
  link.href = 'https://www.youtube.com/watch?v=oHg5SJYRHA0';

  link.append(img)
  footer.append(link);
  article.append(footer);
}


export {footerCard};