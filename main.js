//Var Function test not wor hosisting lol why hositing
//im bor 

//o
//im so bored bab
var button = document.getElementById("button");
var div = document.getElementById("presses");
var upgrade = document.getElementById("upgrade")
var upgrade2 = document.getElementById("upgrade2")
var favicontitleicoim = document.getElementById("AB")

var clicksmulti = 1
var upmodifierupgradesupgradee= 1
var h = 1
var costs = 100
var upgrade22costs = 50000
var futureup101 = 100000

button.addEventListener("click", func);
upgrade.addEventListener("click",myfunc)
cost()
upgrade2.addEventListener("click",up2)
//
//hope work
function cost () {
  upgrade.innerHTML ="<button>upgrade" + costs + "</button>" 
    window.globalFunction = cost()
  //test 1234
}

function costup () {
  upgrade2.innerHTML  = "<button>Upgrade x2 it costs" + upgrade22costs + "</button>" 
} 


costup()
//Why not working var
function up2() {
  if (h>=upgrade22costs) {
    setTimeout(costup,1000)
   h = h + 1 
   h = h - upgrade22costs
   cost()
   costup()
   func()
   console.log(h)
   upmodifierupgradespgradee = upmodifierupgradesupgradee * 2
  } else {
    upgrade2.innerHTML = "You dont have enough moneyyy" 
    setTimeout(costup, 1000)
   //Trebuie sa fac system da upgrade mai jmeker
    //lol hekdudjsgshdjs

  }
}
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
 h= h +clicksmulti + upmodifierupgradesupgradee 
  
  if (h==50000 && if h>1) {
    favicontitleicoim.innerHTML = "<title>📲50000 baga upgrade</title>"
  } else {    
    if (h<=499800 ) {
    setTimeout(iconssss,4000)
    
    } else {
      if (h>=50020 && h>=50000) {
        setTimeout(iconssss,4000)
        
      } 
    }
  }
  }

function iconssss() {
  
  favicontitleicoim.innerHTML("<title>Click" + h + "</title>")
}

function myfunc() {
  if (h>=100 && clicksmulti<=1000) {
    if (h>=costs) { //code pls works button game cool game hope works ommmm
    var hh = 50
    clicksmulti = clicksmulti + 50
  
      
      
    
    h = h - costs
    costs = costs * 3,1
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
      setTimeout(cost, 1000)
      cost()
  }
  }
}
