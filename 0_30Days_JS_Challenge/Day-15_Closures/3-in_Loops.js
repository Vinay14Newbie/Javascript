// Closures in loops

// T-5 Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

function createFunctionArray(){
    const functArr = []

    for(let i=0; i<5; i++){
        functArr[i] =  function(){
                        return `current index is ${i}`
                    }
    }
    return functArr
}
const ans = createFunctionArray()
console.log(ans[2]());






// T-6  Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

function manageModule(){
    let list = []

    return {
        add: function(item){
            list.push(item)
        },
        remove: function(item){
            const idx = list.indexOf(item)
            if(idx > -1){
                list.splice(idx, 1)
            }
        },
        listItems: function(){
            console.log(list);
        }
    }
}

const a = manageModule()
a.add("apple")
a.add("banana")
a.remove("banana")
a.listItems()    //[ 'apple' ]