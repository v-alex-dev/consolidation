function platformsComp(item) {
  const platforms = document.getElementById('platforms');
  const list = document.createElement('ul');
  const titlePlat = document.createElement('h5');
  
  titlePlat.innerHTML = 'Plateforms';
  titlePlat.className = 'text-2xl mb-2 font-bold'
  platforms.append(titlePlat);  
  platforms.append(list);
  
  item.forEach(element => {
    const listElement = document.createElement('li');
    listElement.className = "list-inside list-disc"
    listElement.innerHTML = element
    list.append(listElement);
  });
  
}


export {platformsComp};