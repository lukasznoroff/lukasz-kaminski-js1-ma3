function showMessage(type = "no-error", message = "No message") {

    const html = `<div class="message ${type}">${message}</div>`;

    return html;

}

function errorMessage(type = "error", message = "An error occurred") {

    const html = `<div class="message ${type}">${message}</div>`;

    return html;

}


