# saime_node_bot
Script en Nodejs con motivo estudiantil para revisar estatus de pagina de saime por intervalos de tiempo, en caso de estar activa envia un correo al correo que definas como destino, que la pagina esta online

**Para setear las variables **
Editar archivo docker-compose.yml
<code>
      environment:
      FROM_EMAIL: "EMAIL_WHERE_YOU_CREATE_PASSWORD" // Reemplazar con email origen es decir el email donde creaste la app password
      USER_EMAIL: "EMAIL_WHERE_YOU_WANT_TO_RECEIVE_THE_MAIL" // Email destino , donde quieres recibir el correo
      APP_PASSWORD: "APP_PASSWORD" // App password generada por google 
</code>.
Debes tener el 2step authorization activado en google para que funcione
