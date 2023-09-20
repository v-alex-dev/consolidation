
function cardHeader(link){
  const body = document.getElementById('content');
  const article = document.createElement('article');
  const div = document.createElement('div');
  const img = document.createElement('img');
  article.id = 'card';
  img.src = link;
  
  article.prepend(div);
  div.prepend(img);
  body.prepend(article) 
}

export {cardHeader};