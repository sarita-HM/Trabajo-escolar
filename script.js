document.getElementById("Cambiar texto").addEventListener("click",function()
{
document.getElementById("miParrafo").textContent = "¡El texto ha cambiado"
});



function verificarCampo() {
  // Obtenemos el valor del campo de texto
  let campo = document.getElementById("miCampo").value.trim();

  // Verificamos si está vacío
  if (campo === "") {
    alert("⚠️ El campo de texto está vacío. Por favor, escribe algo.");
  } else {
    alert("✅ El campo de texto ha sido completado correctamente.");
  }
}
