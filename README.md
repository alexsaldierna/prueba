# Ejercicio 1

Para resolver este ejercicio cree un subarreglo vacio llamado (subArray), posteriormente itere el arreglo recibido (Array)
en cada iteración compara si la longitud del subarreglo es igual a 0, si esto se cumple compara que el valor de la posicion que se esta iterando sea menor  que el valor siguiente a iterar si esto se cumple agrega el valor que se esta iterando al subarreglo (con esto puedo encontrar la posicion 0 del subarreglo, si esta condicion no se cumple entonces el subarreglo queda vacio es decir no e cumple la condicion del problema), si la longitud del subarreglo es mayor a 0 entonces compara que el valor de la posicion que se esta iterando en el arreglo sea mayor al ultimo valor del subarreglo, si esto se cumple entonces agrega el valor que se esta iterando al subarreglo. 

# Ejercicio 2

Para resolver este ejercicio primero valido que los valores recibidos sean numeros y que sean mayores a 0 si esto no se cumple envia un mensaje de error diciendo que 'Los 2 numeros deben ser enteros y positivos', si pasa la validación entonces inicializo una variable llamada total que es la que iria acumulando la suma, para esto tomo el valor 'm' como el valor final y comienzo una iteración de 0 al valor de 'm' en la primer itreación suma al total el valor de 'n' y con cada iteración va sumando el valor de 'n'  mas el numero de iteración y lo suma al total, al llegar a la ultima iteración suma el valor de 'm' al total y con eso obtenemos el resultado.


# Ejercicio 3

Para resolver este ejercicio primero valido que el numero de elemento a buscar sea mayor a 0 y menor o igual a la longitud del arreglo si esto no se cumple envía un mensaje de error diciendo que 'El k-ésimo numero a buscar debe ser mayor a 0 y menor al número de elementos en el array', si pasa la validación  entonces lo que hago es ordenar el array utilizando el metodo sort y una una función de comparación para ordernarlo de mayor a menor, una vez ordenado saco el elemento k-1 recordando que las posiciones en un array empiezan en 0.

