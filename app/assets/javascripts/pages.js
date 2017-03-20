var $ = function(id){
  return document.getElementById(id);
}
justABreakInfo = function(event){
  event.preventDefault();
  var displayBlock = $("just-a-break-info").style.display = "block";
  if (displayBlock)
  displayBlock.innerHTML = "Hide";
}