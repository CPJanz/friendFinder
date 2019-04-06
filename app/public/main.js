$(".question-range").change(function() {
    // Update survey answer label on answer update.
    $(this.nextElementSibling).html(this.value);
});

$("#submit").click(function() {
    event.preventDefault();

    // Gather data from inputs
    let answers = []
    let questionAnswers = $(".question-range");
    for (let i = 0; i < questionAnswers.length; i++) {
        answers.push(questionAnswers[i].value);
    }
    let person = { name: $("#nameInput").val(), url: $("#imageInput").val(), answers: answers };

    // Send data to server
    $.post("/api/friends", person, function(data) {
        // Recieve bestie info from server and put it into the modal
        let containerDiv = $("<div>");
        containerDiv.append($("<img style='display:block; margin:auto; max-width: 100%' src=" + data.url + " />"));
        containerDiv.append($("<h3 style='text-align:center'>" + data.name + "</h3>"));
        $(".modal-body").empty();
        $(".modal-body").append(containerDiv);
        $("#bestieModal").modal("toggle"); //Display modal.
    })
})