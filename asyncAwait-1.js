async function myDisplay() {
  console.log("Async begins")
    let myPromise = new Promise(function(myResolve, myReject) {
      myResolve("Resolve 1");
    });
    let myPromise2 = new Promise(function(myResolve, myReject) {
      myResolve("Resolve 2");
    });
   console.log(await myPromise);
   console.log("Await are you blocking 1")
   console.log(await myPromise2);
   console.log("Await are you blocking 2")
  }

  console.log("Before Async")
  myDisplay();
  console.log("JavaScript holdings")
  console.log("JavaScript holdings 2")
  