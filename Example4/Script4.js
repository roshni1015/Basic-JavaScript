
/*-------------------------CallBack----------------------------*/
 function sum(callback){
    num1=5, num2=4;
    Addition = num1+num2;
    callback(grade);
}

function display(grade){
   console.log("num1+num2 = " + Addition);
   Multification = num1 * num2;
   grade(Multification)
}
function grade(Multification){
   console.log("num1*num2 = " + Multification);
}
sum(display);


/*-------------------------Promise----------------------------*/
function promise1 (num1, num2, error) {
    return new Promise((resolve, reject)=> {
    
            if(!error){
                resolve(num1+num2);
            }else{
                reject("Something Went Wrong");
            }
    
    })

} 
 
function promise2 (num1, num2, error){
    return new Promise((resolve, reject)=>{
            if(!error){
                resolve(num1+num2+10);
            }else{
                reject("Something Went Wrong");
            }
    
    })

}
 
function promise3 (num1, num2, error) {
    return new Promise((resolve, reject)=>{
        if(!error){
            resolve((num1+num2+10) * 3);
        }else{
            reject("Something Went Wrong");
        }
    })
}
promise1(5, 4, false)
.then((result1) => promise2(result1,false))
.then((result2) => promise3(result2,false))
.then((result3) => console.log("Result : ",+ result3))
.catch(err => console.log(err));


/*-------------------------Async Await----------------------------*/
const result = async () => {    
    try {
        let result1 = await promise1(4, 5, false);
        let result2 = await promise2(result1, false);
        let result3 = await promise3(result2, false);
        console.log("Result : ", +result3);
    }catch(err){
        console.log(err);
    }
}
result();


 