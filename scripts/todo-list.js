const todoList = [];
function lap(){
const InputElemet = document.querySelector('.Listing')
const resultd = InputElemet.value;
todoList.push(resultd);
console.log(todoList);
InputElemet.value = ''

}