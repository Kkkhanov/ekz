function saveToPC(str){

    let blob = new Blob([str], {type: "text/plain"});

    let link = document.createElement("a");

    link.setAttribute("href", URL.createObjectURL(blob));

    link.setAttribute("download", "123.txt");

    link.click();

}
let form = document.getElementById('form')
form.onsubmit = f1;

const manWeights = ['53', '59', '66', '74', '83', '93', '105', '120', '120+']

function f1(){
    let str = 'Данные формы' + '\n';
    let elems = form.elements
    for (x in elems){
        if (elems[x].type == 'radio' && elems[x].checked){
            str += elems[x].name + ' '
            str += elems[x].value + '\n'
        }
        if (elems[x].type == 'checkbox' && elems[x].checked){
            str += elems[x].name + ' '
            str += 'выбран' + '\n'
        }
        if (x == elems.length-1){break}
        if (elems[x].type!='checkbox' && elems[x].type!= 'radio'){
            if (elems[x].name == ''){continue}
            if (elems[x].value == undefined){continue}
            str += elems[x].name+ ' '
            str += elems[x].value + '\n'
        }
        
    }
    saveToPC(str)
    return false
}