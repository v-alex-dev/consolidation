function titleCard(name,dev ){
  const body = document.getElementById('title');
  const title = document.createElement('h3');
  const paragraphe = document.createElement('p');

  title.innerHTML = name;
  paragraphe.innerHTML = paragraphe;

  title.classList = 'text-4xl font-bold'
  body.append(title);
  body.append(dev);

}

export {titleCard};