function errorMessage(type = "error", message = "An error occurred") {

    const html = `<div class="message ${type}">${message}</div>`;

    return html;

}


