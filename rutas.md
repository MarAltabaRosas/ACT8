Todas las acciones básicas (CRUD) sobre el grupo de datos que conforman los inmuebles de una finca.

GET     /api/inmuebles              -> Recupera todos los inmuebles
GET     /api/inmuebles/IDINMUEBLE   -> Recupera 1 inmueble por su ID
POST    /api/inmuebles              -> Crea 1 nuevo inmueble
PUT     /api/inmuebles/IDINMUEBLE   -> Actualiza un inmueble por su ID
DELETE  /api/inmuebles/IDINMUEBLE   -> Elimina 1 nuevo inmueble por su ID


Modelo cada inmueble: piso, letra, extensión (m2), número de habitaciones, alquilado (sí/no), nombre propietario, mail de contacto.


