$(document).ready(function () {
  $("#submitButton").click(function (event) {
    event.preventDefault();
    console.log("clicked button");

    const name = $("#inputName").val();
    const email = $("#inputEmail").val();
    const textArea = $("#messageTextArea").val();
    const statusEl = $(".status");
    statusEl.empty()

    if (name.length > 2) {
        statusEl.append("<div>Name is Valid</div>")
    } else {
        event.preventDefault();
        statusEl.append("<div>Name is NOT Valid</div>")
    }

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
        statusEl.append("<div>Email is Valid</div>")
    } else {
        event.preventDefault();
        statusEl.append("<div>Email is NOT Valid</div>")
    }

    if (textArea.length > 1) {
        statusEl.append("<div>Message is Valid</div>")
    } else {
        event.preventDefault();
        statusEl.append("<div>Message is NOT Valid</div>")
    }
    
  });
});
