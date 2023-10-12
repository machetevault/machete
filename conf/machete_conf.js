function ctrl_C(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  window.alert(temp + "command copied!!\n@machetevault");
  $temp.remove();
}



