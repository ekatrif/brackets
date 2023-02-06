module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let dictionary = {};
  bracketsConfig.forEach(function (array) {
    dictionary[array[1]] = array[0];
  });
  
  let openBrackets = Object.values(dictionary);
  console.log("opens",openBrackets);
  console.log(dictionary);
  for (let i = 0; i < str.length; i++) {
    let currentItem = str[i];
    console.log("currentItem", currentItem);
    //Если скобка открывающаяся, кладем ее в стек
    if (openBrackets.includes(currentItem)) {     
      stack.push(currentItem);
      console.log("stack push",stack)
      if (
        stack[stack.length - 1] === stack[stack.length - 2] &&
        dictionary[currentItem] === currentItem
      ) {
        console.log("у нас повтор")
        stack.pop();
        stack.pop();
      }
      console.log("stack", stack);
      //Если стек пуст (не было ни одной открытой скобки), return false
    } else if (stack.length === 0) {
      console.log("return false");
      return false;
    }
    else {
    //Если она закрывающаяся, то удаляем из стека последний элемент, если он там есть и он соответствует закрывающей скобке
    let lastItemInStack = stack[stack.length - 1];
    console.log("lastItem",lastItemInStack)
    //Проверить есть ли в объекте ключ, равный lastItemInStack и соответствующий значению currentItem
    if (dictionary[currentItem] === lastItemInStack) {
      stack.pop();
    } else {
      return false;
    }
  }
  }

  return stack.length === 0;
}