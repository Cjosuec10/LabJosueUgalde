// modulo de ejemplo.
module.exports = {

  is_valid_phone: function (phone) {

    var isValid = false;
    var re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i;

    try {
      isValid = re.test(phone);
    } catch (e) {
      console.log(e);
    } finally {
        return isValid;
    }
  },
  
  validateMessage: function(msg){
    var obj = JSON.parse(msg);

    // Evita la inyección de script
    obj.mensaje = obj.mensaje.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Validacion para ver si es URL de imagen o video
    var videoRegex = /\.(mp4)$/;
    var imageRegex = /\.(jpeg|jpg|gif|png)$/;
    

    if (imageRegex.test(obj.mensaje)) {
      obj.mensaje = `<img src="${obj.mensaje}" alt="Imagen no disponible">`;
    } else if (videoRegex.test(obj.mensaje)) {
      obj.mensaje = `<video controls><source src="${obj.mensaje}" type="video/mp4">Video no disponible</video>`;
    } else {
      if (this.is_valid_phone(obj.mensaje)) {
        console.log("Es un telefono!")
      }
    }
    return JSON.stringify(obj);
  }
};
