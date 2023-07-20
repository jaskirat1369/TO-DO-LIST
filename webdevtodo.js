
var taskcount = 0;

function addtask() {
    var inputvalue = document.getElementById("taskinput").value;
    var ullist = document.getElementById("ultasklist");
    taskcount++;
    ullist.innerHTML+=`<li class="listitem" id="count`+taskcount+`"> 
    <button class="taskactionbtns" id="crossbtn" onclick="crossbtnclick(`+taskcount+`)">X</button>
    <button class="taskactionbtns upbtns" id="upbtn" onclick="upbtnclick()">↑</button>
    <button class="taskactionbtns downbtns" id="downbtn" onclick="downbtnclick()">↓</button>
    <span class="listspan">`+inputvalue+`</span>
    </li>`;
    console.log(inputvalue);
    document.getElementById("taskinput").value="";
    upbtnclick();
    downbtnclick();
}

function crossbtnclick(e) {
    // var myList = document.getElementById("ultasklist");
    // var items = document.querySelectorAll("#ultasklist li");
    // myList.removeChild(items[e-1]);

    console.log(e);

    var item = document.querySelector("#count"+taskcount);
    item.style.display="none";
}


function upbtnclick() {
    var upbtns = document.querySelectorAll(".upbtns");
    console.log("upbtns::::::::",upbtns);

    for (var i = 0; i < upbtns.length; i++) {
        console.log("inside for loop::::::::")
        console.log("upbtns[i]::::::::",upbtns[i])
		upbtns[i].addEventListener('click', function () {
            console.log("inside addEventListener::::::::")
			var wrapper = this.parentElement;
            console.log("wrapper::::::::",wrapper)
            if (wrapper.previousElementSibling){
                console.log("inside if::::::::")
			    wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
            }
        });
	}
}

function downbtnclick() {
    var downbtns = document.querySelectorAll(".downbtns");

	for (var i = 0; i < downbtns.length; i++) {
		downbtns[i].addEventListener('click', function () {
			var wrapper = this.parentElement;

			if (wrapper.nextElementSibling)
			    wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper);
		});
	}
}