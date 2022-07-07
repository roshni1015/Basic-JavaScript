
/*-------------------------CallBack----------------------------*/
 function name(callback){
     myName = "Roshni";
     callback(grade);
}

function display(grade){
    console.log("My name is " + myName);
    let value= 75;
    grade(value)
}
function grade(value){
    console.log("My grade is " + value);
}

name(display);


/*-------------------------Promise----------------------------*/
function name(MyName, error){
    return new Promise((resolve, reject) => {
        if(!error){
            resolve(MyName);
        }else{
            reject("Something Went Wrong");
        }
        
    })
}
name("Roshni", false)
.then((output) => console.log("My Name is "+ output))
.catch(err => console.log(err)) 


/*-------------------------Async Await----------------------------*/
const result = async() => {
    try {
        let output = await name("Roshni", false);
        console.log("My name is " + output);
    }
    catch(err){
        console.log(err);
    }
}
result();