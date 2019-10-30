const dataURL = "https://api.myjson.com/bins/jcmhn";
const fields = [
    "var1",
    "var2",
    "var3",
    "var4",
    "var5",
    "var6",
    "speach"
]

function getFormValues() {
    let obj = {};

    fields.forEach(function(field) {
      obj[field] = $("input[name=" + field + "]")[0].value; 
    })
    
    return obj;
}

function handleButton(event) {
  $.getJSON(dataURL, handleData);
  // $("form").hide();
  // Функция event.preventDefault() предотвращает перезагрузку 
  //окна поле нажатия на кнопку отправки значений формы
  event.preventDefault();
}

function handleData(data) {
  let finalText = "";

  let obj = getFormValues();
  
  data["text"].forEach(function(string) {
      for(key in obj) {
        string = string.replace("{" + key + "}", obj[key]);
      }
      finalText = finalText + string + "<BR>";
    }
  );

  $("#result").html(finalText);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
