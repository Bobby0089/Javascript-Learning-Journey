# Project related to DOM

## project link
[cilck here](https://stackblitz.com/edit/dom-project-chaiaurcode-r3wf1zy4?file=index.html)

# Solution code

## project1

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```

## project 2

```javascript

const form = document.querySelector('form');

// This use case will give you null value
// const height = parseInt(document.querySelector('#height').value);
// console.log(height);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  console.log(height);

  const Weight = parseInt(document.querySelector('#weight').value);
  console.log(Weight);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = ` please enter a valid height ${height}`;
  } else if (Weight === '' || Weight < 0 || isNaN(Weight)) {
    results.innerHTML = ` please enter a valid weight ${Weight}`;
  } else {
    const bmi = (Weight / ((height * height) / 10000)).toFixed(2);
    console.log(bmi);
    results.innerHTML = `${bmi}`;
  }
});


```

## project 3 

```javascript

const clock = document.querySelector('#clock');

// const clock = document.getElementById("clock")

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = `${date.toLocaleTimeString()}`
}, 1000);



```