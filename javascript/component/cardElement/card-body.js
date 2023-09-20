import { badges } from "./badge.js";



function cardBody(name, dev, genre ){
  const article = document.getElementById('card');
  const badge = document.createElement('div');
  const title = document.createElement('div');
  const platforms = document.createElement('div');
  const body = document.createElement('div');

  body.id = 'body';
  badge.id = 'badge';
  title.id = 'title';
  platforms.id = 'platforms';

  article.append(body);
  body.append(badge);
  body.append(title);
  body.append(platforms);
  
  badges(genre);
}


export {cardBody};