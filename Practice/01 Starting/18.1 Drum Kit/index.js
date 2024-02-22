

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        console.log(this.innerHTML);
        var buttonInnerHTML = this.innerHTML;
        // makeSound(buttonInnerHTML);
        // buttonAnimation(buttonInnerHTML);
    });
}
