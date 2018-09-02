

(function (global) {


function open(id){
  document.getElementById(id).classList.toggle('d-none');
}
function focusLost(id){
	if(document.getElementById(id).classList.contains('d-none')==false){
		open(id);
	}
}

var dropBtns = document.getElementsByClassName('dropdown-button');
var dropLists = document.getElementsByClassName('dropdown-itemlist');
var btnFuncs =[];
var outFuncs =[];

for (var i = 0; i<dropBtns.length;i++){
  btnFuncs[i]=open.bind(this, dropLists[i].id);

}
for (var i = 0; i<dropBtns.length;i++){
  dropBtns[i].addEventListener('click',btnFuncs[i],false);

}

for (var i = 0; i<dropBtns.length;i++){
  outFuncs[i]=focusLost.bind(this, dropLists[i].id);

}
for (var i = 0; i<dropBtns.length;i++){
  dropLists[i].addEventListener('mouseleave',outFuncs[i]);
}
})(window)