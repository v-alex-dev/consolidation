function platformsComp(item) {
  const platforms = document.getElementById('platforms');
  const list = document.createElement('ul');
  platforms.append(list);
  
  item.forEach(element => {
    const listElement = document.createElement('li');
    listElement.innerHTML = element
    list.append(listElement);
  });

}


export {platformsComp};