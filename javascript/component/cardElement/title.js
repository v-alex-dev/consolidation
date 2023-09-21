function titleCard(name,dev ){
  const body = document.getElementById('title');
  const title = document.createElement('h3');
  const paragraph = document.createElement('p');

  title.innerHTML = name;
  paragraph.innerHTML = dev;

  title.classList = 'text-4xl font-bold mb-2';
  paragraph.className = 'mb-3 italic text-slate-500'
  body.append(title);
  body.append(paragraph);

}

export {titleCard};