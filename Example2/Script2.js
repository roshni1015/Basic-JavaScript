
/*-------------------------CallBack----------------------------*/
function step1(num,callback){
    callback(num+5,false);
}

function step2(num,callback){
    callback(num+5,false);
}

function step3(num,callback){
    callback(num+5,false);
}
step1(20, function(output1,error){
    if(!error){
        step2(output1, function(output2, error){
            if(!error){
                step3(output2, function(output3, error){
                    if(error){
                        console.log("output : ", output3);
                    }
                })
            }
        })
    }
}) 

/*-------------------------Promise----------------------------*/
 function step1 (num, error) {
    return new Promise((resolve, reject)=> {
    
            if(!error){
                resolve(num+5);
            }else{
                reject("Something Went Wrong");
            }
    
    })

} 
 
function step2 (num, error){
    return new Promise((resolve, reject)=>{
            if(!error){
                resolve(num+5);
            }else{
                reject("Something Went Wrong");
            }
    
    })

}
 
function step3 (num, error) {
    return new Promise((resolve, reject)=>{
        if(!error){
            resolve(num+5);
        }else{
            reject("Something Went Wrong");
        }
    })
}

step1(20, false)
.then((output1) => step2(output1,false))
.then((output2) => step3(output2,false))
.then((output3) => console.log("Result : ", output3))
.catch(err => console.log(err));       


/*-------------------------Async Await----------------------------*/
const result = async () => {    
    try {
        let output1 = await step1(20, false);
        let output2 = await step2(output1, false);
        let output3 = await step3(output2, false);
        console.log("Result : ", +output3);
    }catch(err){
        console.log(err);
    }
}
result();