 
/*-------------------------CallBack----------------------------*/
function Calculator(num1, Callback) {
    let sum = num1 + 5;
    Callback(sum);
}
function Displayer(sum) {
    console.log("Sum : " + sum);;
}
Calculator(25, Displayer);
   

/*-------------------------Promise----------------------------*/
function Calculator1 (num1, error) {
    return new Promise((resolve, reject)=> {
    
            if(!error){
                resolve(num1+5);
            }else{
                reject("Something Went Wrong");
            }
    
    })

} 
 
function Calculator2 (num1, error){
    return new Promise((resolve, reject)=>{
            if(!error){
                resolve(num1+5);
            }else{
                reject("Something Went Wrong");
            }
    
    })

}
 
function Calculator3 (num1, error) {
    return new Promise((resolve, reject)=>{
        if(!error){
            resolve(num1+5);
        }else{
            reject("Something Went Wrong");
        }
    })
}

           

function Calculator4 (num1, error) {
    return new Promise((resolve, reject)=>{
        if(!error){
            resolve(num1+5);
        }else{
            reject("Something Went Wrong");
        }
              
    }) 

} 
Calculator1(25, false)
.then((result1) => Calculator2(result1,false))
.then((result2) => Calculator3(result2,false))
.then((result3) => Calculator4(result3,false))
.then((result4) => console.log("Result : ", result4))
.catch(err => console.log(err)); 


/*-------------------------Async Await----------------------------*/
const result = async () => {    
    try {
        let result1 = await Calculator1(25, false);
        let result2 = await Calculator2(result1, false);
        let result3 = await Calculator3(result2, false);
        let result4 = await Calculator4(result3, false);
        console.log("Result : ", +result4);
    }catch(err){
        console.log(err);
    }
}
result(); 