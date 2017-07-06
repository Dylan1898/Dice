Numbers = []
newNumbers = []
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('get').addEventListener('click', function () {
        var g = new Roller(Math.floor(Math.random() * 6), Math.floor(Math.random() * 6));
    
    document.getElementById('roll').addEventListener('click', function () {
    //    var bye= document.getElementsByClassName('dice')
    //         document.body.remove()
        for (var i = 0; i < Numbers.length; i++) {
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
        }
    })
})
})
var Roller = function (value, newValue) {
    this.value = value;
    this.newValue= newValue
    this.div = document.createElement('div');
   this.div.class = 'dice'
    var h1 = document.createElement('h1');
    h1.innerHTML = this.value;
    this.div.appendChild(h1);
    document.body.appendChild(this.div);
    Numbers.push(this.value)   
};
Roller.prototype.greet = function() {
    console.log('stuff')
    var derp=document.getElementsByClassName('dice')
    console.log('things')
    derp.innerHTML = this.newValue;
};

