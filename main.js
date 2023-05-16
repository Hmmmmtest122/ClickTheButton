
//im so bored bab
var button = document.getElementById("button");
var div = document.getElementById("presses");
var upgrade = document.getElementById("upgrade")
var clicksmulti = 1
var h = 1
button.addEventListener("click", func);
upgrade.addEventListener("click",myfunc)
function func() {
  console.log(h)
   function func2() {
  div.innerHTML = "<h1>Your Presse Are " + h + "</h1>"
  }
  if (h == 10) {
    console.log("oh")
    window.globalFunction = func2()
   
    
    
  
    
   
   
  }
  func2()
 h= h +clicksmulti
}


function myfunc() {
  if (h>=100 && clicksmulti<=1000) {
    var hh = 50
    clicksmulti = clicksmulti + 50
    h = h - 100
    func()
  if (clicksmulti>=200) {
    upgrade.innerHTML = "<h1>Prea multe upgrade-uri</h1>"
    upgrade.removeEventListener("click",myfunc)
    
  }
  }
}
