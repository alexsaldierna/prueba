# Ejercicio 1

Para resolver este ejercicio cree dos arreglos <b>(subArray, subArrayAux)</b> esto para que al momento de iterar el arreglo recibido el <b>subArray</b> sea el arreglo que se va llenando mientras se cumple la condición de que los elementos del subarreglo sean mayor que el anterior, al momento que deje de cumplirse esa condición comparo la longitud de los dos subarreglos <b>(subArray, subArrayAux)</b> si la longitud de <b>subArrayAux</b> es menor que la de <b>subArray</b> sustituyo <b>subArrayAux</b> por <b>subArray</b> (el subArrayAux es el que va guardando el arreglo más grande) y permito que subArray vuelva a quedar vacio hasta que vuelve a encontrar otros elementos que cumplan la condición, este proceso se repite hasta terminar de iterar el arreglo recibido, por ultimo comparo la longitud de los dos subarreglos y regreso el de mayor tamaño.

Este ejercicio en un principio me parecio sencillo pero al momento de realizar la prueba y releer lo que se pedia me di cuenta que en un principio solo estaba tomando en cuenta el primer subarreglo que cumplia la condición, me di cuenta agregando mas elementos al arreglo que cumplieran la condición, y no hacía la comparación de cual era mas grande por eso agregue la parte de utilizar otro subarreglo que fuera guardando el mas grande para poderlo comparar con el que se va llenado lo cual me llevo a utilizar un poco mas de tiempo.

# Ejercicio 2

Para resolver este ejercicio primero valido que los valores recibidos sean numeros y que sean mayores a 0 si esto no se cumple envia un mensaje de error, si pasa la validación entonces utilizo una variable llamada total que es la que iria acumulando la suma, para esto tomo el valor <b>m</b> como el valor final y comienzo una iteración de 0 a <b>m</b> donde en la primer itreación suma el valor de <b>n</b> y con cada iteración va sumando el valor de <b>n</b>  mas el numero de iteración y lo va sumando al total, al llegar a la ultima iteración suma el valor de <b>m</b> al total y con eso obtengo el resultado.

En este ejercicio me quede un poco con la duda de si hice lo correcto ya que la formula me confundio un poco, pero de la forma en que lo entendí me llevo poco tiempo realizarlo y de una complejidad no muy alta.


# Ejercicio 3

Para resolver este ejercicio primero valido que el numero de elemento a buscar sea mayor a 0 y menor o igual a la longitud del arreglo si esto no se cumple envía un mensaje de error, ¿porque esta validación? porque si es igual a 0 no habriá elemento a buscar y si es mayor a la longitud del arreglo estaria fuera del rango de busqueda, si pasa la validación  entonces lo que hago es ordenar el arreglo recibido utilizando el metodo sort y una una función de comparación para ordernarlo de mayor a menor, una vez ordenado al k-esimo numero recibido le resto 1 recordando que las posiciones en un array empiezan en 0 y asi poder obtener el elemento deseado.

Este ejercicio al igual que el anterior no me parecio muy complejo y el tiempo que me llevo para plantear como solucionarlo fue relativamente rapido.

# Ejercicio 4

Para resolver este ejercicio creo un arreglo llamado <b>  </b>

Este ejercicio al igual que el anterior no me parecio muy complejo y el tiempo que me llevo para plantear como solucionarlo fue relativamente rapido.
