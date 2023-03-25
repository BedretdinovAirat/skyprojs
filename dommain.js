// уроки про DOM element
const buttonElement = document.getElementById('add-button');
const buttonElementTwo = document.getElementById('add-button_two');
const buttonElementThree = document.getElementById('add-button_three');
const buttonElementHeader = document.getElementById('add-button_header');
const nameInputElement = document.getElementById('name-input');
const colorInputElement = document.getElementById('color-input');
const listElement = document.getElementById('list'); // находим в ДОМ элемент с айди
const headerElement = document.getElementById('header');
buttonElement.addEventListener("click", () => {
    nameInputElement.classList.remove('error');
    // nameInputElement.style.backgroundColor = '';
    if (nameInputElement.value === '') {
        nameInputElement.classList.add('error');
        // nameInputElement.style.backgroundColor = 'red';
        return;
    }
    const oldListHtml = listElement.innerHTML;
    listElement.innerHTML = oldListHtml + `<li> ${nameInputElement.value}, любимый цвет <span style="color: ${colorInputElement.value}"> ${colorInputElement.value}</span></li>`;
    nameInputElement.value = "";
});
buttonElementTwo.addEventListener('click', () => {
    const headerNewElement = headerElement.innerHTML;
    headerElement.innerHTML = 'Самые любимые цвета студентов';
});
const headerTwoElement = document.getElementById('header');
buttonElementThree.addEventListener('click', () => {
    const headerNewTwoElement = headerElement.innerHTML;
    headerElement.innerHTML = 'Любимые цвета студентов';
});
nameInputElement.value = "";
buttonElementHeader.addEventListener('click', () => {
    headerElement.classList.add('head');
})
// console.log(listElement.innerHTML);
// listElement.innerHTML = '<p> Я новый текст </p>';