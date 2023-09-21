
#
#
# @machetevault
# 
#
  
# copy commands to clipboard
function copy_To_Clipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}



