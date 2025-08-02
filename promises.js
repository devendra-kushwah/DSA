// State of promises
    // Pending, fullfilled, reject


const promise  = new Promise((resolve, reject) => {
  try {
    setTimeout(()=>resolve("resolve 1"), 2000)
  }catch(err){
    reject("reject");
  }
})

const promise2  = new Promise((resolve, reject) => {
    try {
      setTimeout(()=>resolve("resolve 2"), 3000)
    }catch(err){
      reject("reject");
    }
  })
  const promise3  = new Promise((resolve, reject) => {
    try {
      setTimeout(()=>resolve("resolve 3"), 5000)
    }catch(err){
      reject("reject");
    }
  })
// promise.then((res)=> {
//     console.log("promise1", res);
//      promise2.then(res2=> {
//         console.log("promis2", res2);
//          promise3.then(res3 => {
//             console.log("promis3", res3)
//         })
//     })
// })
promise.then((res1)=> {
    console.log("🚀 ~ promise.then ~ res1:", res1);
    return promise2;
}).then(res2=> {
    console.log("🚀 ~ promise.then ~ res2:", res2)
    return promise3;
}).then(res3=> {
    console.log("🚀 ~ promise.then ~ res3:", res3);
    
})

async function main(){
    console.log("getting data");
   const one =  await promise;
    console.log("🚀 ~ main ~ one:", one)
   const two = await promise2;
    console.log("🚀 ~ main ~ two:", two)
   const three = await promise3;
   console.log("🚀 ~ main ~ three:", three)
}
// main();

Promise.all([promise, promise2, promise3]).then((res)=> console.log("all res", res));
// function data(){
//     return new Promise((resolve, reject)=>{
//        try {
//         resolve("resolve")
//        } catch (error) {
//         reject("error", error)
//        }
//     })
// }
