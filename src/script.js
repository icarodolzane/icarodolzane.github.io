const getUsaFlag = document.getElementById('usa-flag');

const getH1Tittle = document.getElementById('hello').firstElementChild;

const getH2Left = document.getElementById('personal-info').children;

const h2PtBrArray = [];

const h2EnArray = ['Studying', 'Degree', 'Contact Info'];

for (const iterator of getH2Left) {
  if(iterator.tagName === 'H2' && iterator.id !== 'name'){
    h2PtBrArray.push(iterator.innerHTML);
  }
}

console.log(h2PtBrArray);

const translateText = (element) =>{
  const flagId = element.target; 
  if(flagId.id === 'usa-flag'){
    console.log('Yes');
  }
}

getUsaFlag.addEventListener('click', translateText);