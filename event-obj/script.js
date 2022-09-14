
const commentBtn = document.querySelector('button')

// function add (event){
// console.log(this)
// }

commentBtn.addEventListener('click', function(e){ 
    //creates a new li element
    
    const li = document.createElement('li') 
    // just sitting in memory needs to be appended to the DOM - gets the input from the DOM

    const input = document.querySelector('input') 
// sets the li textContent to he value of the input

    li.textContent = input.value 
//will append the new li to the ul

    document.querySelector('ul').appendChild(li)
//reset the input back to an empty string
    input.value = ''
})