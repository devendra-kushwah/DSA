

const getFunction = (value, nextFunc)=> {
    setTimeout(()=> {
        console.log("value", value)
        if(nextFunc){
            nextFunc();
        }
    }, 2000);

}

// Nested callback funtions that are not readable and call this statement as a callback hell
// Difficult to manage and understand for other developers

getFunction(1, ()=> {
    getFunction(2, ()=> {
        getFunction(3, ()=> {
            getFunction(4, ()=> {
                getFunction(5)
            })
        })
    });
});