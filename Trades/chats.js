//document.querySelector("#MiddleColumn div.messages-container").innerHTML = "";


chrome.storage.onChanged.addListener(function (changes, namespace) {
	'use strict';
	for (let [data, { oldValue, newValue }] of Object.entries(changes)) {
    	if(newValue.type == "test"){
    		addC(newValue);
		}
  }
});

function addC(newValue){
	let cont = document.createElement("div");
	cont.innerHTML = newValue.Element;
	cont.querySelector("i").addEventListener("click",()=>{
		alert("Do...");
	});

	cont.querySelectorAll("i")[1].addEventListener("click",()=>{
		alert("Minimuze...");
	});

	cont.querySelectorAll("i")[2].addEventListener("click",removePar(cont));



	if(!!(document.querySelector("#MiddleColumn div.messages-container>div"))){
		let chec = targetEl(parseInt(cont.querySelector("div").dataset.timestamp));
		if(chec == -1){
			document.querySelector("#MiddleColumn div.messages-container").append(cont.querySelector("div"));
		}else{
			document.querySelector("#MiddleColumn div.messages-container").insertBefore(cont.querySelector("div"),chec);
		}
	}else{
		document.querySelector("#MiddleColumn div.messages-container").append(cont.querySelector("div"));
	}

}

function removePar(par){
	par.remove();
}

function mini(e){
	e.target.style.height = "0px";
}

function hello(){
	alert("Hello world");
}

function targetEl(timestamp){
	let divC = document.querySelector("#MiddleColumn div.messages-container");
	let len = divC.length;
	for(let i = 0; i < len; i++){
		if(!!(divC[i].dataset.timestamp)){
			if(parseInt(divC[i].dataset.timestamp) <= timestamp){
				return divC[i];
			}
		}else{
			return divC;
		}
	}
	return -1;
}
