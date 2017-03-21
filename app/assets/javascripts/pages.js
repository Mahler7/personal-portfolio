var $ = function(id){
  return document.getElementById(id);
}
actualizeInfo = function(event){
  event.preventDefault();
  var displayBlock = $("actualize-info");
  var displayImage = $("actualize-image");
  var buttonText = $("actualize-button");
  if (displayBlock.style.display !== "block"){
    displayBlock.style.display = "block";
    displayImage.style.display = "none";
    buttonText.innerHTML = "Hide";
  }
  else if (displayBlock.style.display !== "none") {
    displayBlock.style.display = "none";
    displayImage.style.display = "block";
    buttonText.innerHTML = "Details";
  }
}
justABreakInfo = function(event){
  event.preventDefault();
  var displayBlock = $("just-a-break-info");
  var displayImage = $("just-a-break-image");
  var buttonText = $("just-a-break-button");
  if (displayBlock.style.display !== "block"){
    displayBlock.style.display = "block";
    displayImage.style.display = "none";
    buttonText.innerHTML = "Hide";
  }
  else if (displayBlock.style.display !== "none") {
    displayBlock.style.display = "none";
    displayImage.style.display = "block";
    buttonText.innerHTML = "Details";
  }
}
johnMarshallLawInfo = function(event){
  event.preventDefault();
  var displayBlock = $("john-marshall-law-info");
  var displayImage = $("john-marshall-law-image");
  var buttonText = $("john-marshall-law-button");
  if (displayBlock.style.display !== "block"){
    displayBlock.style.display = "block";
    displayImage.style.display = "none";
    buttonText.innerHTML = "Hide";
  }
  else if (displayBlock.style.display !== "none") {
    displayBlock.style.display = "none";
    displayImage.style.display = "block";
    buttonText.innerHTML = "Details";
  }
}
importantPeopleInfo = function(event){
  event.preventDefault();
  var displayBlock = $("important-people-info");
  var displayImage = $("important-people-image");
  var buttonText = $("important-people-button");
  if (displayBlock.style.display !== "block"){
    displayBlock.style.display = "block";
    displayImage.style.display = "none";
    buttonText.innerHTML = "Hide";
  }
  else if (displayBlock.style.display !== "none") {
    displayBlock.style.display = "none";
    displayImage.style.display = "block";
    buttonText.innerHTML = "Details";
  }
}
