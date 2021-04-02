var curr_name = document.querySelector("#names .active"), curr_img = document.querySelector("#images .active"), curr_desc = document.querySelector("#desc .active");

function change(f, ind, len) {
    curr_name = document.querySelector("#names .active");
    curr_img = document.querySelector("#images .active");
    curr_desc = document.querySelector("#desc .active");
    var len = document.getElementById("names").getElementsByTagName("li").length;
    console.log(len);
    if (f === 'u') {
        if (curr_name.previousElementSibling !== null) {
            
            curr_name.previousElementSibling.classList.add("active");
            curr_name.previousElementSibling.style.display = "block";
            curr_name.style.display = "none";
            curr_name.classList.remove("active");

            curr_img.previousElementSibling.classList.add("active");
            curr_img.previousElementSibling.style.display = "block";
            curr_img.style.display = "none";
            curr_img.classList.remove("active");

            curr_desc.previousElementSibling.classList.add("active");
            curr_desc.previousElementSibling.style.display = "block";
            curr_desc.style.display = "none";
            curr_desc.classList.remove("active");
        }
    }
    else if (f === 'd') {
        if (curr_name.nextElementSibling !== null) {

            curr_name.nextElementSibling.classList.add("active");
            curr_name.nextElementSibling.style.display = "block";
            curr_name.style.display = "none";
            curr_name.classList.remove("active");

            curr_img.nextElementSibling.classList.add("active");
            curr_img.nextElementSibling.style.display = "block";
            curr_img.style.display = "none";
            curr_img.classList.remove("active");

            curr_desc.nextElementSibling.classList.add("active");
            curr_desc.nextElementSibling.style.display = "block";
            curr_desc.style.display = "none";
            curr_desc.classList.remove("active");
        }
    }
}