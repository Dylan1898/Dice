Sum=[]
Numbers = []
newNumbers = []
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('get').addEventListener('click', function () {
        var g = new Roller(Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6));
        g.div.addEventListener('click', g.roll.bind(g))
        Numbers.push(g)
        // g.div.addEventListener('dblclick', g.remover.bind(g))
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

        // if (Numbers.length === 0 && newNumbers.length === 0) {
        //     alert('0')
        //     console.log('numbers===0')
        // }
        // else if (newNumbers.length === 0 && Numbers.length === 0) {
        //     alert('0')
        //     console.log('newnumbers===0')
        // }
        // else if (Numbers.length > 0) {
        //     var sum = Numbers.reduce((x, y) => x + y)
        //     alert(sum)
        //     console.log('numbers>0')
        // }
        // else if (newNumbers.length > 0) {
        //     var sum = newNumbers.reduce((x, y) => x + y)
        //     alert(sum)
        //     console.log('newnumbers>0')
        // }
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
    // this.div.addEventListener('dblclick', function(){
    //     this.remove()
    //     console.log('double')
    // })
    // Numbers.push(this.value)
    // Array.prototype.push.apply(newNumbers, Numbers)

    this.div.addEventListener('dblclick', function (e) {
        this.remove()
        console.log('dubl')
        var index = e.target.getAttribute('value');
    Numbers.splice(index, 1)
        // if (Numbers.length >= 0) {
        //     // this.value= -value
        //     // Numbers.push(this.value)
        //     var index = Numbers.indexOf(value);    
        //     if (index !== -1) {
        //         Numbers.splice(index, 1);
        //         console.log('worked')
        //     }
        // }
        // if (newNumbers.length != 0) {
        //     var index = newNumbers.indexOf(newValue);    
        //     if (index !== -1) {
        //         newNumbers.splice(index, 1);
        //         console.log('worked2')
        //     }

        // }
        console.log('dice')
        // // newNumbers=[]
    })
};
Roller.prototype.roll = function () {
    this.div.removeChild(this.div.firstChild)
    // Numbers=[]
    // while (this.div.firstChild) {
    //     console.log('stuffj')
    //     this.div.removeChild(this.div.firstChild);
    // }
    var q = (Math.floor(Math.random() * 6) + 1)
    
    this.value = q
    // Numbers = []
    // newNumbers=[]
    var h1 = document.createElement('h1');
    h1.innerHTML = this.value;
    this.div.appendChild(h1);
    console.log('stuff')
    
};

// Roller.prototype.remover = function (){
//     this.remove()
// }