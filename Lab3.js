/*
const promise = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        setTimeout(()=> resolve ('Random number ok', 250))
    } else {
        setTimeout(()=> reject('Random number too low'), 250)
    }
})    
promise // consume the promise by responding to outcomes when they happen
.finally( () => console.log('Wait is over, promise has settled.')) //always prints
.then( (result) => console.log('Success! '+ result)) //prints resolve msg
.catch( (error) => console.log('Error!' + error)) // prints reject msg    
*/  

/*
async catchfunction . waitForPromise() { // async function allows synchronous promise handling internally
    // since we have synchronous code and no .catch(), we use try ... catch for errors
    try {
    let promiseResult = await promise; // waits here as long as promise needs to resolve
    console.log(`Success: ${promiseResult}`) // then continues executing other code
    return true;
    } catch(error) {
    console.error(`Failure: ${error.message}`)
    }
    //only gets here if return true above did NOT happen, ie. there was an error
    return false;
    }
    */

    const func1 = () => {
        // console.log('Start Preparing Pizza')
        return new promise((resolve, reject) => {
            if (Math.random() > 0.01) {
                setTimeout(()=> resolve ('Prepping Pizza'), 5);
            } else {
                setTimeout(()=> reject('Dough not Prepared'), 5);
            }
    });
    };
    const func2 = () => {
        // console.log('Start Preparing Pizza')
        return new promise((resolve, reject) => {
            if (Math.random() > 0.01) {
                setTimeout(()=> resolve ('Random number ok'), 10);
            } else {
                setTimeout(()=> reject('Random number too low'), 10);
            }
    });
    };
    const func3 = () => {
        // console.log('Start Preparing Pizza')
        return new promise((resolve, reject) => {
            if (Math.random() > 0.01) {
                setTimeout(()=> resolve ('Random number ok'), 20);
            } else {
                setTimeout(()=> reject('Random number too low'), 20);
            }
    });
    };
    const func4 = () => {
        // console.log('Start Preparing Pizza')
        return new promise((resolve, reject) => {
            if (Math.random() > 0.01) {
                setTimeout(()=> resolve ('Random number ok'), 30);
            } else {
                setTimeout(()=> reject('Random number too low'), 30);
            }
    });
    }; 
    const func5 = () => {
        // console.log('Start Preparing Pizza')
        return new promise((resolve, reject) => {
            if (Math.random() > 0.01) {
                setTimeout(()=> resolve ('Random number ok'), 40);
            } else {
                setTimeout(()=> reject('Random number too low'), 40);
            }
    });
    };
    const func6 = () => {
        // console.log('Start Preparing Pizza')
        return new promise((resolve, reject) => {
            if (Math.random() > 0.01) {
                setTimeout(()=> resolve ('Random number ok'), 50);
            } else {
                setTimeout(()=> reject('Random number too low'), 50);
            }
    });
    };

    func1()
        .then( (result) => console.log('Success! '+ result))
        .catch( (error) => console.log('Error!' + error));  

    func2()
        .then( (result) => console.log('Success! '+ result))
        .catch( (error) => console.log('Error!' + error)); 
    func3()
        .then( (result) => console.log('Success! '+ result))
        .catch( (error) => console.log('Error!' + error)); 
    func4()
        .then( (result) => console.log('Success! '+ result))
        .catch( (error) => console.log('Error!' + error)); 
    func5()
        .then( (result) => console.log('Success! '+ result))
        .catch( (error) => console.log('Error!' + error)); 
    func6()
        .then( (result) => console.log('Success! '+ result))
        .catch( (error) => console.log('Error!' + error)); 