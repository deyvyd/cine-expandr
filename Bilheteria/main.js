var hello = "hello";
var check = false;
var selectedSeat = '';
var selectedObj =null;
var accessSeat = 'CA';
/*alert(hello);*/
         
/*-- Ao passar o mouse em cima de um Assento Simples --*/
function mouseOver(obj, text) {
	obj.innerText = text;
	obj.style.backgroundColor = '#FF5733'; //laranja
}

/*-- Ao passar o mouse em cima de um Assento de Cadeirante --*/
function mouseOverAccess(obj, text) {
	accessSeat = obj.innerText;
	obj.innerText = text;
	obj.style.backgroundColor = '#FF5733'; //laranja
}

/*-- Ao tirar o mouse de cima de um Assento Simples --*/
function mouseOut(obj) {
	if ((obj.innerText == selectedSeat) && (check == true)) {
	
	} else {
		obj.innerText = '';
		obj.style.backgroundColor = '#38a63a'; //verde
	}
}

/*-- Ao tirar o mouse de cima de um Assento de Cadeirante --*/
function mouseOutAccess(obj) {
	if ((obj.innerText == selectedSeat) && (check == true)) {
	
	} else {
		obj.innerText = accessSeat;
		obj.style.backgroundColor = '#3b5998'; //azul
	}
}

/*-- Click em Assento Simples --*/
function mouseClick(obj, text) {
	if (check == false) { //Se não existe Assento Selecionado
		obj.innerText = text;
		selectedSeat = text;
		selectedObj = obj;
		obj.style.backgroundColor = '#FF5733'; //laranja
		check = true;
	} else { //Se existe Assento Selecionado
		if (obj.innerText == selectedSeat){  //Se esse é o Assento selecionado
			obj.innerText = '';
			obj.style.backgroundColor = '#38a63a'; //verde
			selectedSeat = '';
			check = false;
		} else {  //Se outro Assento é selecionado
			if (accessSeat == 'CA') {//Se um Assento Simples foi selecionado antes desse
				selectedObj.innerText = '';
				selectedObj.style.backgroundColor = '#38a63a'; //verde
				obj.innerText = text;
				selectedSeat = text;
				selectedObj = obj;
				obj.style.backgroundColor = '#FF5733'; //laranja
				check = true;
			} else {//Se um Assento de Cadeirante foi selecionado antes desse
				selectedObj.style.backgroundColor = '#3b5998';//azul
				selectedSeat = text;
				selectedObj = obj;
				obj.style.backgroundColor = '#FF5733';//laranja
				accessSeat = 'CA';
				check = true;
			}
		}
	}
}

/*-- Click em Assento de Cadeirante --*/
function mouseClickAccess(obj, text) {
	if (check == false) { // Se não existe Assento Selecionado
		accessSeat = text;
		//obj.innerText = text;
		selectedSeat = text;
		selectedObj = obj;
		obj.style.backgroundColor = '#FF5733'; //laranja
		check = true;
	} else { // Se existe Assento Selecionado
		if (accessSeat == selectedSeat){ //Se esse Assento é selecionado
			//obj.innerText = '';
			obj.style.backgroundColor = '#3b5998'; //azul
			selectedSeat = '';
			accessSeat = 'CA';
			check = false;
		} else { // Se outro Assento é selecionado
			if (accessSeat != 'CA') { //Se outro Assento de Cadeirante foi selecionado antes desse
				//selectedObj.innerText = '';
				selectedObj.style.backgroundColor = '#3b5998'; //azul
				//obj.innerText = text;
				accessSeat = text;
				selectedSeat = text;
				selectedObj = obj;
				obj.style.backgroundColor = '#FF5733'; //laranja
			} else { // Se outro Assento Simples foi selecionado antes desse
				selectedObj.innerText = '';
				selectedObj.style.backgroundColor = '#38a63a'; //verde
				//obj.innerText = text;
				accessSeat = 'CA';
				selectedSeat = text;
				selectedObj = obj;
				obj.style.backgroundColor = '#FF5733'; //laranja
			}
			check = true;
		}
	}
}

function bookSeat() {
	if (selectedSeat == '') {
		alert("Selecione um assento!")
	} else {
		alert("O assunto "+selectedSeat+" foi reservado com sucesso!");
	}
}