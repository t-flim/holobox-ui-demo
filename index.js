
const button = $(".btn");
const optionButton = $(".option-btn");
const buttonDiv = $(".buttons");
const optionDiv = $(".options");

button.on("click", function() {
    buttonDiv.addClass("hidden");
    optionDiv.removeClass("hidden");
    
    optionButton.on("click", function(e) {
        const code = e.currentTarget.innerText;

        switch (code) {
            case "Home":
                returnHome()
                break;
            
            case "Option 1":
                playVideo("1");
                break;

            case "Option 2":
                playVideo("2");
                break;

            case "Option 3":
                playVideo("3");

            default:
                console.log(code);
                break;
        }
    })
});

function returnHome() {
    setTimeout(function() {
        optionDiv.addClass("hidden");
        buttonDiv.removeClass("hidden");
    }, 150);
}

function playVideo(num) {
    optionDiv.addClass("hidden");
    setTimeout(function() {
        $("#video").attr("src", "video/sample video_" + num + ".mp4");
        $("#video").removeClass("hidden");
        $("#video")[0].play();
    }, 150)

    $("#video").on("ended", function() {
        setTimeout(function(    ) {
            $("#video")[0].pause();
            $("#video").addClass("hidden");
            buttonDiv.removeClass("hidden");
        }, 150);
    })
}