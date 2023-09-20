import { badges } from "./badge.js";
import { platformsComp } from "./platforms.js";
import { titleCard } from "./title.js";


function cardBody(name, dev, genre, list ){
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
  
  article.className = 'grid grid-rows-3 gap-2 shadow-lg';
  badges(genre);
  titleCard(name, dev);
  platformsComp(list);
}


export {cardBody};