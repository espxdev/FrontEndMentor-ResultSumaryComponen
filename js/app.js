const jsonData = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ];

const sumary = document.getElementById('percents');
const ulElement = document.createElement('ul');



jsonData.forEach((elem) => {
    const liElement = document.createElement('li');
    liElement.classList.add(`${elem.category.toLowerCase()}`);
    const img = document.createElement('img');
    img.setAttribute('src', `${elem.icon}`);
    const textCategory = document.createElement('h3');
    textCategory.classList.add('__category');
    textCategory.innerText = `${elem.category}`;
    const p = document.createElement('p');
    const span = document.createElement('span');
    span.innerText = " / 100";
    p.innerText =  `${elem.score}`;
    p.appendChild(span);
    liElement.appendChild(img)
    liElement.appendChild(textCategory);
    liElement.appendChild(p);
    ulElement.appendChild(liElement);
});

const button = document.createElement('button');
button.classList.add('percents-side_button');
button.innerText = 'Continue'; 
sumary.appendChild(ulElement);
sumary.appendChild(button);