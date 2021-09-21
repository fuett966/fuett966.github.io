
let input = document.querySelector('.input');
let power = "";

function insert(num) 
{
    if (input.textContent == 0) 
    {
        input.textContent = 0;
        input.textContent = "";
        input.textContent += num;
    } 
    else
    {
        input.textContent += num;
    }
}

function clean() {
    input.textContent = "0";
    power = "";
}

function back() {
    let exp = input.textContent;
    input.textContent = exp.substring(0, exp.length - 1);
    if (input.textContent == 0) {
        input.textContent = "0";
    }
}

function equal() {
    let exp = input.textContent;
    if (input.textContent.includes('^')) {
        let tmp = input.textContent.split('^')
        let num = parseFloat(power);
        let pow = +tmp[1]
        input.textContent = Math.pow(num, pow);
        power = "";
        return;
    }
    if (exp) {
        input.textContent = parseFloat(exp);
    }
}

function percent() {
    input.textContent = parseFloat(input.textContent) / 100;
}

function constant(name) {
    if (input.textContent == 0) {
        input.textContent = "";
    }
    if (name == "pi")
        input.textContent += Math.PI.toFixed(8);
    if (name == "e")
        input.textContent += Math.E.toFixed(8);
}

function operation(name) {
    if (name == "sqrt")
        input.textContent = Math.sqrt(parseFloat(input.textContent));
    if (name == "sqr")
        input.textContent = Math.pow(parseFloat(input.textContent), 2);
    if (name == "^-1")
        input.textContent = Math.pow(parseFloat(input.textContent), -1);
    if (name == "^") {
        power = input.textContent;
        input.textContent += "^";
    }
}

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
function fact() {
    input.textContent = factorial(+parseFloat(input.textContent));
}

function log(name) {
    if (name == 'lg') {
        input.textContent = Math.log10(parseFloat(input.textContent)).toFixed(8);
    }
    if (name == 'ln') {
        input.textContent = Math.log(parseFloat(input.textContent)).toFixed(8);
    }
}

document.querySelector('.type').addEventListener('click', function() {
    if (document.querySelector('.type').textContent == "deg") {
        this.textContent = "rad";
        console.log('Градусы')
    } else if (document.querySelector('.type').textContent == "rad") {
        this.textContent = "deg";
        console.log('Радианы')
    }
})

function f(name) {
    if (name == 'sin') {
        if(document.querySelector('.type').textContent == "deg") {
            input.textContent = parseFloat(Math.sin(parseFloat(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            input.textContent = parseFloat(Math.sin(parseFloat(input.textContent)).toFixed(8).toString());
        }        
    }
    if (name == 'cos') {
        if(document.querySelector('.type').textContent == "deg") {
            input.textContent = parseFloat(Math.cos(parseFloat(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            input.textContent = parseFloat(Math.cos(parseFloat(input.textContent)).toFixed(8).toString());
        } 
    }
    if (name == 'tan') {
        if(document.querySelector('.type').textContent == "deg") {
            input.textContent = parseFloat(Math.tan(parseFloat(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            input.textContent = parseFloat(Math.tan(parseFloat(input.textContent)).toFixed(8).toString());
        }  
    }
    if (name == 'ctg') {
        if(document.querySelector('.type').textContent == "deg") {
            input.textContent = parseFloat(1/Math.tan(parseFloat(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            input.textContent = parseFloat(1/Math.tan(parseFloat(input.textContent)).toFixed(8).toString());
        } 
    }
}


$( "#clickme" ).click(function() {
    $( ".engineer" ).toggleClass( "show");
    $( ".container" ).toggleClass( "active");
}
)