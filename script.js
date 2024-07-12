function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    const letters = /^[A-Za-z]+$/;
    const isValidName = letters.test(params.name);

    const emailPattern =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(params.email);

    if (params.name == "" || params.email == "" || params.subject == "" || params.message == "") {
        alert("Please fill out all fields.");
        return;
    }

    if (isValidName == false) {
        alert("Please enter valid name.");
        return;
    }

    if (isValid == false) {
        alert("Please enter valid email.");
        return;
    }

    const serviceID = "service_gbk8vr3";
    const templateID = "template_egpojxb";

    $('#loading-modal').modal('show');

    emailjs.send(serviceID, templateID, params).then(function (res) {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        $("#loading-modal").modal('hide');
        $("#success-modal").modal('show');
    });
}
