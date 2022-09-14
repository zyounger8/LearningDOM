

//////////////////////
// Red Wedding 
//////////////////////
const addChildBtn = document.querySelector('#add-child')
const redWeddingBtn = document.querySelector('#red-wedding')
const addToStarks = document.querySelector('.starks')

// Create Two Functions -> addChild and redWedding
// Attach functions to buttons

// The addChild function creates new div & appends it to the starks div
addChildBtn.addEventListener('click', function(){
    const div = document.createElement('div')

    div.textContent = 'John Snow'
    addToStarks.appendChild(div)
})

// The redWedding function removes ALL stark children (loop)

redWeddingBtn.addEventListener('click', function(){
    
    while (addToStarks.childNodes.length > 0) {
        addToStarks.childNodes[0].remove()
    }

})







