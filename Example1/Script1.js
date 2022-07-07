
/*-------------------------CallBack----------------------------*/
function step1(a, b, callback){
    callback((a+b)+10,false);
}

function step2(a, b, callback){
    callback((a+b)+10,false);
}

function step3(a, b, callback){
    callback((a+b)+10,false);
}

function step4(a, b, callback){
    callback((a+b)+10,false);
}
step1(10, 5, function(output1,error){
    if(!error){
        step2(output1, function(output2, error){
            if(!error){
                step3(output2, function(output3, error){
                    if(error){
                        step4(output3, function(output4, error){
                            if(error){
                                console.log("output : ", output4);

                            }
                        })
                    }
                })
            }
        })
    }
}) 

/*-------------------------Promise----------------------------*/
function promise1 (a, b, error) {
    return new Promise((resolve, reject)=> {
    
            if(!error){
                resolve((a+b)+10);
            }else{
                reject("Something Went Wrong");
            }
    
    })

} 
 
function promise2 (a, b, error){
    return new Promise((resolve, reject)=>{
            if(!error){
                resolve((a+b)+10);
            }else{
                reject("Something Went Wrong");
            }
    
    })

}
 
function promise3 (a, b, error) {
    return new Promise((resolve, reject)=>{
        if(!error){
            resolve((a+b)+10);
        }else{
            reject("Something Went Wrong");
        }
    })
}

function promise4 (a, b, error) {
    return new Promise((resolve, reject)=>{
        if(!error){
            resolve((a+b)+10);
        }else{
            reject("Something Went Wrong");
        }
              
    }) 

} 
promise1(10, 5, false)
.then((result1) => promise2(result1,false))
.then((result2) => promise3(result2,false))
.then((result3) => promise4(result3,false))
.then((result4) => console.log("Result : ", result4))
.catch(err => console.log(err));


/*-------------------------Async Await----------------------------*/
const result = async () => {    
    try {
        let result1 = await promise1(10, 5, false);
        let result2 = await promise2(result1, false);
        let result3 = await promise3(result2, false);
        let result4 = await promise4(result3, false);
        console.log("Result : ", +result4);
    }catch(err){
        console.log(err);
    }
}
result();


