// Code your solutions in this file
function wrapCards(names, name){
  let messages = []
  for(let i = 0; i < names.length; i++){
    messages.push(`Thank you, ${names[i]}, for the wonderful ${name} gift!`)
  }
  return messages
}