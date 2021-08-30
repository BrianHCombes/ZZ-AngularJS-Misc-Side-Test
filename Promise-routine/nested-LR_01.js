console.log("");




function testCallBack1(){
    return new Promise(resolve => {
      console.log("calling");
      setTimeout(() => {
        resolve('Using async await - This should be first with async await or last <span style="color:blue;"<u>without</u></span> async await!');
      }, 1500);
    });  
}



function testCallBack2(){
    return new Promise(resolve => {
      console.log("calling");
      setTimeout(() => {
        resolve('Using async await - Should be last with async await - Should be first without async await!');
      }, 750);
    });  
}

var testCallBack3 = function(delayedStuffRef){
   
      var value = "WTF";
      setTimeout(func1, 3750);
      console.log("value is: " + value);
      var value1 = "WTF";
      function func1(){
        console.log("value1 from setTimeout is: " + value1);    
        delayedStuffRef(value1);
      };
}

function testPromise4(){
    return new Promise(resolve => {
      console.log("calling");
      setTimeout(() => {
        //resolve('Using async await - Should be the third async await. Calls testPromise4()');
        resolve(lr.w("promise:ms",1170,100,360,50));
      }, 100);
    });  
}

function testPromise5(){
    return new Promise(resolve => {
      console.log("calling");
      setTimeout(() => {
        resolve(lr.w("",1170,100,360,50));
      }, 1000);
    });  
}

async function getFile() {
  
    let myAsyncAwait1 = await testCallBack1();
    document.getElementById("demo1").innerHTML = "Async Await architecture: " + myAsyncAwait1;
    
    let myAsyncAwait2 = await testCallBack2();
    document.getElementById("demo2").innerHTML = "Async Await architecture: " + myAsyncAwait2;
    
    var delayedStuff = function(myAsyncAwait3){
        document.getElementById("demo3").innerHTML = "This is standard callback architecture with setTimeout delaying data return of.... " + myAsyncAwait3;
    }
    testCallBack3(delayedStuff); // Standard Callback
    
    document.getElementById("demo4").innerHTML = "Another Day";
    
    let myAsyncAwait4 = await testPromise4();
      document.getElementById("demo5").innerHTML = "LR is: " + lr.w("WTF:BS",1920, 20, 360, 10) + " and return value is: " + myAsyncAwait4;
      
    // The code before this line and within this getFile() async function is the build up to this testPromise5() function which satisfies my nested LR needs.
    // Note the declaring of the getFile() function is preceded by the 'async' keyword and inside this function the 'await' keyword is used.
    // testPromise5() is called and a promise is returned and holds further code execution until the data part of the promise is returned and assigned.
    // My thinking here my not be just right but so far this is my interpretation. The promise is an object but only the data part is accessible. 
    let myAsyncAwait5 = await testPromise5();
      document.getElementById("demo6").innerHTML = "LR (nested and arbitrarily using 'width:%') is: " + lr.w("width:%",1920, myAsyncAwait5, 360, 10) + " and the return promise value for inset is: " + myAsyncAwait5;  
      
      
      setTimeout(function(){document.getElementById("demo7").innerHTML = "LR is: " + lr.w("2nd line after await:BS",1920, 20, 360, 10);},500);

}
getFile();


async function getFile2(){}












