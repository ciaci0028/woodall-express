/* 
    This code is running on person's computer
*/

$(document).ready(onReady);

function onReady() {
    console.log('Super ready');

    $('button').on('click', onClick);
    $('#commentForm').on('submit', onAddComment);

    refresh();
    // TODO
    // Write some code to get data
    // from GET /comments endpoint
    // and then render data to the DOM

}

function render(comments) {
    // Do some jQuery to render
    $('#div').empty();
    for (let item of comments) {
        $('#div').append(`
            <h2>author:<br> ${item.author}</h2>
            <h3>comment:<br> ${item.message}</h3>
        `);
    }
}

function onClick() {
    $('button').css(
        'background', 'green'
    )
}

function onAddComment(event) {
    // Don't reload the page
    event.preventDefault();

    let inputComment = {
        author: $('#authorInput').val(),
        message: $('#messageInput').val(),
    }

    // Console.log to test
    console.log(inputComment)

    // Send data back to the server
    $.ajax({
        method: "POST",
        url: "/comments",
        data: inputComment,
    })
        .then((reponse) => {
            console.log(reponse);
            // Refresh page
            // Get commenets again and render to DOM
            refresh();
        });
}

function refresh() {

    // Make a network/HTTP/AJAX request
    // As an argument, gets an object
    // Request over the network to data warehouse
    let ajaxOptions = {
        method: 'GET',
        url: '/comments',
    };
    

    $.ajax(ajaxOptions)
        .then( (response) => {
            console.log('ajax request complete', response);
            render(response);
    });

    console.log(`
        made a network request, but no one has time to wait for that
        `);
    
}