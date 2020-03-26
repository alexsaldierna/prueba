function ejercicio1(array) {
    var subArray = new Array();
    var subArrayAux = new Array();
    for (var i = 0; i < array.length; i++) {
        if (subArray.length === 0) {
            if (array[i] < array[i + 1]) {
                subArray.push(array[i]);
            }
        } else {
            if (array[i] > subArray[subArray.length - 1]) {
                subArray.push(array[i]);
            }else if(array[i] < array[i + 1]){
            	if (subArrayAux.length < subArray.length) {
            		subArrayAux = Array.from(subArray);
            	}
            	subArray = new Array();
            	subArray.push(array[i]);
            }else{
            	if (subArrayAux.length < subArray.length) {
            		subArrayAux = Array.from(subArray);
            	}
            	subArray = new Array();
            }
        }
    }
    if (subArray.length >= subArrayAux.length) {
       	return  subArray;
    }else{
       	return subArrayAux;
    }
}

function ejercicio2(n, m) {
    if(n <= 0 || m <= 0){
      var err = new Error();
      err.name = 'Los 2 números deben ser enteros positivos';
      throw console.dir( err );
    }
    var total = 0;
    for (var i = 0; i <= m; i++) {
        if (i === 0) {
            total = n;
        } else if (i === m) {
            total += m;
        } else {
            total += n + i;
        }
    }
    return total;
}

function ejercicio3(array, k) {
    if(k <= 0 || k >= array.length){
      var err = new Error();
      err.name = 'El k-ésimo numero a buscar debe ser mayor a 0 y menor al número de elementos en el array';
      throw console.dir( err );
    }
    array.sort(function (a, b) {
        return b - a;
    });
    return array[k-1];
}

function ejercicio4(array) {
    var duplicates = new Array();
    for (var i = 0; i < array.length; i++) {
        for (var j = i+1; j < array.length; j++) {
            if (array[i] === array[j]) {
                if (!duplicates.includes(j)) {
                    duplicates.push(j);
                }
            }
        }
    }
    duplicates.sort(function (a, b) {
        return b - a;
    });
    for (var i = 0; i < duplicates.length; i++) {
        array.splice(duplicates[i],1);
    }
    return array;
}

function ejercicio5(cadena) {
    var flag = true;
    var length = cadena.length/2;
    for (var i = 0; i < length; i++) {
        var char;
        if (i === 0) {
            char = cadena.substring(0,1);
            switch (char) {
                case '(':
                    if (cadena.substring((cadena.length-1), cadena.length) !== ')') {
                        flag = false;
                        return flag;
                    }
                    break;
                case '[':
                    if (cadena.substring((cadena.length-1), cadena.length) !== ']') {
                        flag = false;
                        return flag;
                    }
                    break;
                default:
                    var err = new Error();
                    err.name = 'Caracter incorrecto';
                    throw console.dir(err);
                    break;
            }
        }else{
            char = cadena.substring(i,i+1);
            switch (char) {
                case '(':
                    if (cadena.substring(((cadena.length)-i)-1, (cadena.length)-i) !== ')') {
                        flag = false;
                        return flag;
                    }
                    break;
                case '[':
                    if (cadena.substring(((cadena.length)-i)-1, (cadena.length)-i) !== ']') {
                        flag = false;
                        return flag;
                    }
                    break;
                default:
                    var err = new Error();
                    err.name = 'Caracter incorrecto';
                    throw console.dir(err);
                    break;
            }
        }
        
    }
    return flag;
}

function ejercicio6(clases) {
    var salones = clases.length;
    var clasesAux =  Array.from(clases);
    var libres = 0;
    for (var i = 0; i < clases.length; i++) {
    	var clase = clases[i].inicio;
    	for (var j = 0; j < i; j++) {
            var claseAnt = clasesAux[j].fin;
            if (clase >= claseAnt) {
                clasesAux.splice(j,1);
                salones--;
                break;
            }
        }
    }
    return salones;
}

exports.ejercicio1=ejercicio1;
exports.ejercicio2=ejercicio2;
exports.ejercicio3=ejercicio3;
exports.ejercicio4=ejercicio4;
exports.ejercicio5=ejercicio5;
exports.ejercicio6=ejercicio6;
