# Ejercicio 1

Para resolver este ejercicio cree dos arreglos <b>(subArray, subArrayAux)</b> esto para que al momento de iterar el arreglo recibido el <b>subArray</b> sea el arreglo que se va llenando mientras se cumple la condición de que los elementos del subarreglo sean mayor que el anterior, al momento que deje de cumplirse esa condición comparo la longitud de los dos subarreglos <b>(subArray, subArrayAux)</b> si la longitud de <b>subArrayAux</b> es menor que la de <b>subArray</b> sustituyo <b>subArrayAux</b> por <b>subArray</b> (el subArrayAux es el que va guardando el arreglo más grande) y permito que subArray vuelva a quedar vacio hasta que vuelve a encontrar otros elementos que cumplan la condición, este proceso se repite hasta terminar de iterar el arreglo recibido, por último comparo la longitud de los dos subarreglos y regreso el de mayor tamaño.

Este ejercicio en un principio me parecio sencillo pero al momento de realizar la prueba y releer lo que se pedía me di cuenta que en un principio solo estaba tomando en cuenta el primer subarreglo que cumplía la condición, me di cuenta agregando mas elementos al arreglo que cumplieran la condición, y no hacía la comparación de cual era mas grande por eso agregue la parte de utilizar otro subarreglo que fuera guardando el mas grande para poderlo comparar con el que se va llenado lo cual me llevo a utilizar un poco mas de tiempo.

# Ejercicio 2

Para resolver este ejercicio primero valido que los valores recibidos sean números y que sean mayores a 0 si esto no se cumple envía un mensaje de error, si pasa la validación entonces utilizo una variable llamada total que es la que iria acumulando la suma, para esto tomo el valor <b>m</b> como el valor final y comienzo una iteración de 0 a <b>m</b> donde en la primer itreación suma el valor de <b>n</b> y con cada iteración va sumando el valor de <b>n</b>  mas el numero de iteración y lo va sumando al total, al llegar a la ultima iteración suma el valor de <b>m</b> al total y con eso obtengo el resultado.

En este ejercicio me quede un poco con la duda de si hice lo correcto ya que la formula me confundio un poco, pero de la forma en que lo entendí me llevo poco tiempo realizarlo y de una complejidad no muy alta.


# Ejercicio 3

Para resolver este ejercicio primero valido que el número de elemento a buscar sea mayor a 0 y menor o igual a la longitud del arreglo si esto no se cumple envía un mensaje de error, ¿porque esta validación? porque si es igual a 0 no habría elemento a buscar y si es mayor a la longitud del arreglo estaria fuera del rango de busqueda, si pasa la validación  entonces lo que hago es ordenar el arreglo recibido utilizando el metodo sort y una una función de comparación para ordernarlo de mayor a menor, una vez ordenado al k-esimo numero recibido le resto 1 recordando que las posiciones en un array empiezan en 0 y asi poder obtener el elemento deseado.

Este ejercicio al igual que el anterior no me parecio muy complejo y el tiempo que me llevo para plantear como solucionarlo fue relativamente rapido.

# Ejercicio 4

Para resolver este ejercicio cree un arreglo llamado <b>duplicados</b> para guardar las posiciones de los valores que se repiten, esto lo hago anidando dos ciclos for en el primero itero el arreglo recibido y en el segundo itero a partir de la posición del primer ciclo en cada iteración compara si el valor de la posición del primer ciclo es igual al valor de la posición que se esta iterando en el segundo ciclo, si se cumple esta condición agrega el valor al arreglo <b>duplicados</b>, al terminar de iterar en el arreglo <b>duplicados</b> tenemos todas las posiciones de los números duplicados lo que hago es ordenarlo de mayor a menor para despues iterarlo  e ir borrando del arreglo recibido los numeros repetidos.

Este ejercicio me parecio de una complejidad mayor asi como me implico un mayor tiempo poder realizarlo, ya que tuve un problema al eliminar los duplicados del array original se recorría y no obtenía el resultado esperado, esto lo solucione ordenando el arreglo <b>duplicados</b> de mayor a menor para que al ir eliminando no recorriera las posciones del arreglo original, hubiera sido mas sencillo utilizar set o filtros pero decidí usar mas mi logica.


# Ejercicio 5

Para resolver este ejercicio primero valido que el residuo de la división entre 2 de la longitud de la cadena recibida de como resultado 0, si no se cumple regresa <b>false</b> con eso compruebo que mínimo al comenzar a evaluar si esta balanceada existe el mismo número de caracteres tanto a la izquierda como a la derecha, si pasa la validación entonces itero la primer mitad de la cadena para obtener los caracteres del lado izquierdo, en cada iteración obtengo el caracter utilizando substring donde el 1er parametro es el número de iteración y el 2do parametro es el número de iteracion mas 1 , mediante un switch valido el tipo de caracter este tiene que ser un parentesis o un corchete de apertura de lo contrario enviara un error 'caracter incorrecto', si es de alguno de los dos tipos busca el caracter al final de la cadena igualmente utilizando substring donde el 1er parametro es la longitud de la cadena menos el numero de iteracion menos 1 y el 2do es la longitud de la cadena menos 1, el valor de ese caracter debe ser un parentesis o un corchete de cierre segun sea el caso si no es asi regresa un <b>false</b>, si cada parentesis de apertura tiene su parentesis de cierre regresa <b>true</b>

Este ejercicio me parecio complicado al principio pero conforme lo fui realizando me di cuenta que no era tan complejo y fue relativamente rapido llevarlo a cabo.

# Ejercicio 6

Para resolver este ejercicio tome en cuenta que recibo un arreglo de objectos donde cada objeto tiene dos propiedades que son inicio y fin los cuales utilizo para poner la hora de inicio y termino de cada clase, luego utilizo una variable llamada <b>salones</b> que inicializo con el numero total de clases es decir como si hubiera un salon por cada clase, tambien creo un arreglo auxiliar identico al arreglo recibido <b>(clasesAux)</b> y una variable llamada <b>libres</b> que sera un contador para saber cuantos salones se han desocupado, despues utilizo dos ciclos for anidados en el primero itero el array recibido y saco la hora del inico de la clase despues en el 2do for itero de 0 a el numero de iteración del 1er ciclo para saber si existen clases previas y comparo el horario de inicio de la clase con el horario de fin de la clase anterior que se este iterando, si encuentra una clase que ya termino entonces resta 1 a la variable <b>salones</b> e incrementa 1 a la variable <b>libres</b> y remueve del arreglo <b>clasesAux</b> la posicion de la clase que ya termino con esto es como si el salon ya estuviera libre y pudiera ser ocupado con la siguiente clase, al termino de la iteración en la variable salones queda el numero total de salones necesarios.

Este ejercicio fue el de mayor complejidad y donde tuve que pensar e invertir mas tiempo ya que no a la primera obtuve el resultado y tuve que realizar varias modificaciones hasta lograrlo.
