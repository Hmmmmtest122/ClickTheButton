//Var Function test not wor hosisting lol why hositing
//im bor


//im so bored bab
var button = document.getElementById("button");
var div = document.getElementById("presses");
var upgrade = document.getElementById("upgrade")
var clicksmulti = 1
var h = 1
var costs = 100
button.addEventListener("click", func);
upgrade.addEventListener("click",myfunc)
cost()

function cost () {
  upgrade.innerHTML ="<button>upgrade" + costs + "</button>" 
  window.globalFunction = cost()
}


//Why not working var

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
    if (h>=costs) {
      
      
    
    h = h - costs
    costs = costs * 2 
    func()
     if (clicksmulti<200) {
       cost()
     }
  if (clicksmulti>=200) {
    upgrade.innerHTML = "<h1>Prea multe upgrade-uri</h1>"
    upgrade.removeEventListener("click",myfunc)
  }
  } else {
      upgrade.innerHTML = "<button>You dont have that sum of cashhhhhhhhh</button>" 
      cost()
  }
  }
}
