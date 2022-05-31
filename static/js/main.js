const slideList =  [{
  img: "static/img/la.jpg",
  heading: 'Los Angeles',
  text: 'We had the best time playing at Venice Beach!'
},
{
  img: "static/img/ny.jpg",
  heading: 'New York',
  text: 'The atmosphere in New York is lorem ipsum'
},
{
  img: "static/img/chicago.jpg",
  heading: 'Chicago',
  text: "Thank you, Chicago - A night we won't forget"
}];

const image = document.querySelector('.banner img.slider');
const h1 = document.querySelector('.banner header h1');
const subtitle = document.querySelector('.banner header p');

const time = 3000;
let active = 0;

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].heading;
  subtitle.textContent = slideList[active].text;
}

setInterval(changeSlide, time);