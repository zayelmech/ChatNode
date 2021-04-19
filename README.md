# Qué es Node y cómo instalarlo

**Node.js** es un entorno en tiempo de ejecución multiplataforma de código abierto para la capa del servidor basado en el lenguaje de programación **ECMAScript**, asíncrono y basado en el motor **V8** de Google.

Muchos proyectos utilizan Node para funcionar, como:

- Webpack
- Babel
- PM2
- Electron

# ¿Qué son y cómo se usan las peticiones HTTP?

Una petición HTTP es un protocolo de comunicación que permite las transferencias de información en la web.

Es el lenguaje común para todas las comunicaciones.

¿Cómo es una petición?

**GET** /index.html HTTP/1.1
**Host**: _www.example.com_
**Referer**: _www.google.com_ 
**User-Agent**: Mozilla/5.0
**Connection**: keep-alive

Puntos claves a tener en cuenta:

- Métodos: Qué quieres hacer
- Estado: Cómo ha ido la operación
- Cuerpo: Lo que el servidor devuelve

# Métodos, cabeceras y estados

Métodos HTTP:

- GET: Recoger información del servidor.
- POST: Añadir información al servidor.
- PUT: Reemplazar información en el servidor.
- PATCH: Actualizar parte de la información.
- DELETE: Eliminar información del servidor.
- OPTIONS: Pedir información sobre métodos (saber si podemos ejecutar alguno de los métodos anteriores).

**Las cabeceras** serán el envío al servidor de cómo queremos hacer la petición.

**Los estados** son números que indica el estado de la petición:

- 2XX: Todo ha ido bien.
- 3XX: La petición se ha redirigido.
- 4XX: Errores del cliente.
- 5XX: Ha habido un error al procesar la petición.

# Cuerpo y query de la petición

**El cuerpo de la petición** es la información en sí que queremos enviar, editar o que el servidor nos devuelva.

**Las queries** van a permitirte añadir información extra a los datos que queramos enviarle al servidor.

**NOTA**: Nunca se debe enviar información sensible por parametros del **query**

## Estructura de una query

- Añadir ? al final de la URL
- nombre=valor 
- Si se requiere mas de uno se debe separarlos con & 

Ej.
`{miweb.com?color=red}`
`{api.com/person?orderBy=name&age=25}`

# Tipos de Bases de Datos: Relacionales y No Relacionales

**Bases de Datos Relacionales**: no es una base de datos muy flexible, pero tiene a favor su gran soporte y el enorme desarrollo en herramientas para su uso. Si necesitamos cambiar un valor de un campo debemos hacerlo con todos los campos de nuestra BD, en cambio con NoSQL o No Relacional no es así.

**Bases de Datos No Relacionales**: son de bases de datos sin una tabla fija como las que sí se encuentran en las bases de datos relacionales, lo que permite una alta escalabilidad en ellas. Además, es abierta y por lo tanto flexible a diferentes tipos de datos y no necesita tantos recursos para ejecutarse; de hecho, el hardware necesario no cuesta mucho.

_un mock es falsear una base de datos_