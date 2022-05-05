
				DESPLIEGUE DEL PROYECTO.

El despliegue de esta aplicación web se llevo a cabo en Netlify. Por lo cual no fue muy laborioso el proceso, 
pero si hay que tener en cuenta ciertas consideraciones para que dicho proyecto pudiese ser desplegado.

Antes de desplegar el proyecto hay que asegurarse que no exista ninguna advertencia (warning) en la consola,
en dado caso que se quiera subir un proyecto con warnings o no nos percatemos de ello, vamos a tener problemas.

Dicho esto, lo primero que debemos hacer es iniciar sesión o crearse una cuenta si es que nunca ah ingresado a Netlify,
una vez dentro hay un apartado que dice "Sites" y a la derecha un botón que dice "Add new site", damos clic aquí y
seleccionamos la opción "Import an existing proyect". 

Nos llevara a app.netlify.com/start, donde tenemos una sección que dice "Connect to Git provider", podemos elegir entre
GitHub, GitLab o Bitbucket para conectar el repositorio que se quiera subir. En mi caso yo elegí GitHub, solo tenemos que 
aceptar los términos y automáticamente mostrara todos los repositorios de GitHub.

Buscamos el repositorio que vamos a subir y al dar clic nos llevara a una nueva pantalla donde podremos ver la configuración básica
del despliegue, al final hay dos opciones que dicen "Build command" y "Publish directory" estas se rellenan en automático, lo único 
que tenemos que hacer es dar clic en Deploy site, a continuación se mostrara otra pantalla con un mensaje que dice "Site deploy in progress"

Solo tenemos que esperar un poco mientras se despliega. Una vez completado el despliegue,se mostrara un link en lugar de
"Site deploy in progress", da clic en ese link y vera la aplicación desplegada en vivo.

La ventaja de utilizar este método es que cada vez que se suba cualquier cambio al repositorio de GitHub, se desplegará automáticamente en Netlify.
También se pueden ver todas las versiones desplegadas y retroceder fácilmente a cualquier versión de código que funcione previamente con un solo clic.



