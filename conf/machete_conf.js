function ctrl_C(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  window.alert(element.text() + "copied!!\n@machetevault");
}



