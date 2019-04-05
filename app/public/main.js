$(".question-range").change(function() {
    $(this.nextElementSibling).html(this.value);
});

$("#submit").click(function() {
    event.preventDefault();
    //gather inputs
    let answers = []
    let questionAnswers = $(".question-range");
    for (let i = 0; i < questionAnswers.length; i++) {
        answers.push(questionAnswers[i].value);
    }
    let person = { name: $("#nameInput").val(), url: $("#imageInput").val(), answers: answers };
    //post
    $.post("/api/friends", person, function(data) {
        //TODO: display data to the modal
        let containerDiv = $("<div>");
        containerDiv.append($("<img style='display:block; margin:auto; max-width: 100%' src=" + data.url + " />"));
        containerDiv.append($("<h3 style='text-align:center'>" + data.name + "</h3>"));
        $(".modal-body").empty();
        $(".modal-body").append(containerDiv);
        $("#bestieModal").modal("toggle");
    })
})



// TODO: once a match is found display the result (name and picture) in a modal.