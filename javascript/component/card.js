import {collection} from "../../data/gameData.js"
import { cardBody } from "./cardElement/card-body.js";
import { footerCard } from "./cardElement/card-footer.js";
import { cardHeader } from "./cardElement/card-header.js";
function card(){
  collection.forEach(element => {
    let link = element.picture;
    let name = element.name;
    let dev = element.Developpeur;
    let genre = element.genre;
    let platform = element.platforms
    cardHeader(link);
    cardBody(name, dev, genre, platform);
    footerCard();
  });

}


export {card};