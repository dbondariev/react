// <div class="greeting">Hello, React!</div>

const rootElement = document.querySelector('#root');

// const greeingElement = document.createElement('div');
// greeingElement.classList.add('greeting');
// greeingElement.textContent = 'Hello, React!';

// rootElement.append(greeingElement);

const greetingElem = React.createElement(
  'div', // первый аргумент, тот элемент что мы хотим создать
  {
    className: 'greeting', // атрибуты элемента
  },
  'Hello, React!', // все потомки элемента
);

ReactDOM.render(greetingElem, rootElement); // первый аргумент = что мы хотим добавить / второй аргумент = "куда" в какой элемент добавить
