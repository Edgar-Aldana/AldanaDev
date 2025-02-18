document.addEventListener("DOMContentLoaded", function () {
    var timelineOptions = {
        width: "100%", 
        height: "100%", 
        scale_factor: 2,
        timenav_mobile_height_percentage: 20
    };

    var timeline = new TL.Timeline("timeline-embed", "https://docs.google.com/spreadsheets/d/e/2PACX-1vRIhp3rtBHMMv1qmQVSeU3UpkXKj8lEH7aRvurClSswlyexgxkycoSqL_leG58ZvrBEbjX7GjLDVAVm/pubhtml", timelineOptions);

    setTimeout(() => {
        let swipeMessage = document.querySelector(".tl-message-full");
        if (swipeMessage) {
            swipeMessage.style.display = "none";
        }
    }, 1000);
  
    window.addEventListener("resize", () => {
        timeline.updateDisplay();
    });
});
