Numbers = []
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('get').addEventListener('click', function () {
        var g = new Roller(Math.floor(Math.random() * 6) + 1,);
        document.getElementById('roll').addEventListener('click', function () {
            g.roll()
        })
    })
    // document.getElementById('sum').addEventListener('click', function () {
    //      if (Numbers.length===0 && newNumbers.length===0){
    //     alert('0')
    // console.log('numbers===0')}
    //     else if( newNumbers.length===0 && Numbers.length ===0  ){
    //         alert('0')
    //         console.log('newnumbers===0')
    //     }
    //     else if (Numbers.length > 0) {
    //         var sum = Numbers.reduce((x, y) => x + y)
    //         alert(sum)
    //         console.log('numbers>0')
    //     }
        
    //     else if(newNumbers.length>0 ) {
    //         var sum = newNumbers.reduce((x, y) => x + y)
    //         alert(sum)
    //         console.log('newnumbers>0')
    //     }
       
    // })

})
var Roller = function (value) {
    // Numbers=[]
    // newNumbers=[]
    // Numbers.push.apply(newNumbers)
    // Array.prototype.push.apply(Numbers, newNumbers)
    // newNumbers= []
    this.value = value;
    this.div = document.createElement('div');
    var h1 = document.createElement('h1');
    h1.innerHTML = this.value;
    this.div.appendChild(h1);
    document.body.appendChild(this.div);
    this.div.className = 'dice'
    Numbers.push(this.value)
    
    this.div.addEventListener('dblclick', function () {
        this.remove()

        if (Numbers.length >= 0) {
            // this.value= -value
            // Numbers.push(this.value)
            var index = Numbers.indexOf(value);    // <-- Not supported in <IE9
            if (index !== -1) {
                Numbers.splice(index, 1);
                console.log('worked')
            }
        }
        if (newNumbers.length != 0) {
            var index = newNumbers.indexOf(value);    // <-- Not supported in <IE9
            if (index !== -1) {
                newNumbers.splice(index, 1);
                console.log('worked2')
            }
        }
        console.log('dice')
    })
};


Roller.prototype.roll = function () {
    while (this.div.firstChild) {
    this.div.removeChild(this.div.firstChild); 
    } 
    this.value = q
    var q = (Math.floor(Math.random() * 6) + 1)
    this.value = q
    Numbers.push(q)
    var h1 = document.createElement('h1');
    h1.innerHTML = this.value;
    this.div.appendChild(h1);
    console.log('stuff')
};

function bye () {
    Numbers=[]
}