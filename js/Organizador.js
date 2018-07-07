var titles = document.getElementsByTagName("h2");
var toInsert ="";
for(var i = 0; i<titles.length;i++){
	toInsert= toInsert + "<li><a href = #"+titles[i].id+">"+titles[i].innerHTML+"</a></li>";
}
document.getElementById("main-content").innerHTML="<ul>"+toInsert+"</ul>"+document.getElementById("main-content").innerHTML;