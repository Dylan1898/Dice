Sum=[]
Numbers = []
newNumbers = []
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('get').addEventListener('click', function () {
        var g = new Roller(Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6));
        g.div.addEventListener('click', g.roll.bind(g))
        Numbers.push(g)
    })
    document.getElementById('roll').addEventListener('click', function () {
            Numbers.forEach(function (die){
                die.roll() 
            })
        })
    document.getElementById('sum').addEventListener('click', function () {
        for(i=0; i<Numbers.length;i++){ 
            var e=  Numbers[i].value
                Sum.push(e)
                var f=Sum.join('+')
                var Total= eval(f)
        }
    alert(Total)
    Sum=[]
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
    this.div.addEventListener('dblclick', function (e) {
        this.remove()
        var index = e.target.getAttribute('value');
    Numbers.splice(index, 1)
    })
};
Roller.prototype.roll = function () {
    this.div.removeChild(this.div.firstChild)
    var q = (Math.floor(Math.random() * 6) + 1)
    this.value = q
    var h1 = document.createElement('h1');
    h1.innerHTML = this.value;
    this.div.appendChild(h1);
};