Numbers = []
newNumbers = []
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('get').addEventListener('click', function () {
        var g = new Roller(Math.floor(Math.random() * 6)+1, Math.floor(Math.random() * 6));
    
    document.getElementById('roll').addEventListener('click', function () {
    //    var bye= document.getElementsByClassName('dice')
    //         document.body.remove()
        // for (var i = 0; i < Numbers.length; i++) {
            g.greet()
                    // var g = new Roller(Math.floor(Math.random() * 6));
            // var q = (Math.floor(Math.random() * 6))
            // newNumbers.push(q)
            // this.newValue=q
            // this.div = document.createElement('div');
            // var h1 = document.createElement('h1');
            // h1.innerHTML = q;
            // this.div.appendChild(h1);
            // document.body.appendChild(this.div);
        // }
    })
})
})
var Roller = function (value, newValue) {
    this.value = value;
    
    this.div = document.createElement('div');
    var h1 = document.createElement('h1');
    h1.innerHTML = this.value;
    this.div.appendChild(h1);
    document.body.appendChild(this.div);
    this.div.className = 'dice'
    Numbers.push(this.value)   
};
Roller.prototype.greet = function() {
    while(this.div.firstChild){
        this.div.removeChild(this.div.firstChild);
    }
    this.newValue= q
    var q = (Math.floor(Math.random() * 6)+1)
            newNumbers.push(q)
            this.newValue=q
    // var derp=document.querySelectorAll("div")
    // this.innerHTML=''
    var h1 = document.createElement('h1');
    h1.innerHTML = this.newValue;
    this.div.appendChild(h1);
     console.log('stuff')
};

