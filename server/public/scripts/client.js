/* 
    This code is running on person's computer
*/

$(document).ready(onReady);

function onReady() {
    console.log('Super ready');

    $('button').on('click', onClick);

    // TODO
    // Write some code to get data
    // from GET /comments endpoint
    // and then render data to the DOM

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
    });

    console.log(`
        made a network request, but no one hsa time to wait for that
        `);
    
}

function onClick() {
    $('button').css(
        'background', 'green'
    )
}