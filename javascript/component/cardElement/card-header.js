
function cardHeader(link){
  const body = document.getElementById('content');
  const article = document.createElement('article');
  const div = document.createElement('div');
  const img = document.createElement('img');
  article.className = 'grid grid-rows-3 gap-2 shadow-lg rounded-md overflow-hidden';
  article.id = 'card';
  img.className = 'w-full h-full ';
  img.src = link;
  
  
  article.prepend(div);
  div.prepend(img);
  body.prepend(article)  
}

export {cardHeader};