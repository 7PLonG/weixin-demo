var showBox = function() {
	var p4 = document.getElementById("p_04");
	var botton = p4.getElementsByClassName("botton");
	var inner = p4.getElementsByClassName("inner");
	var close = p4.getElementsByClassName("close");
	var box = p4.getElementsByClassName("box");
	var content = p4.getElementsByClassName("content");
	var inbox = p4.getElementsByClassName("inbox");
	var txt = p4.getElementsByClassName("text");
	for (var i = 0; i < botton.length; i++) {
		botton[i].i = i;     
		botton[i].onclick = function() {

			close[this.i].style.display = "block";
			box[this.i].className += " inner";
			content[this.i].className += " inbox";
			txt[this.i].setAttribute("class", "text");
			botton[this.i].style.display = "none";
		}
	}
	for (var i=0; i<close.length;i++){
		close[i].i = i; 
		close[i].onclick = function() {
			botton[this.i].style.display = "block";
			box[this.i].setAttribute("class", "box");
			content[this.i].setAttribute("class", "content");
			txt[this.i].setAttribute("class", "text f-ln3");
			close[this.i].style.display = "none";
		}
	}
	
}