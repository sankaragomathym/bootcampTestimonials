
var json = [
	{
		testimonial: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”" ,
		name: "Tanya Sinclair",
		designation: "UX Engineer",
		image: "images/image-tanya.jpg"
	},

	{
		testimonial: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”" ,
		name: "John Tarkpor",
		designation: "Junior Front-end Developer",
		image: "images/image-john.jpg"
	}
];

var slideNumber = 0;

function changeSlide(slideNumber) {

	var test = document.getElementsByClassName("testimonial")[0];
	var name = document.getElementsByClassName("member-name")[0];
	var desg = document.getElementsByClassName("designation")[0];
	var img = document.getElementsByClassName("member-photo")[0].firstElementChild;

	test.textContent = json[slideNumber].testimonial;
	name.textContent = json[slideNumber].name;
	desg.textContent = json[slideNumber].designation;
	img.setAttribute("src", json[slideNumber].image);
}

function prevSlide() {
	slideNumber = (json.length + slideNumber - 1) % json.length;
	changeSlide(slideNumber);
}

function nextSlide() {
	slideNumber = (slideNumber + 1) % json.length;
	changeSlide(slideNumber);
}

