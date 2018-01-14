function addContent() {
    // CAPTURE THE TITLE + BODY //
    var $getTitle = $('#title');
    var postTitle = $getTitle.val();
    console.log(postTitle);
    var $getBody = $('#body');
    var postBody = $getBody.val();
    console.log(postBody);

    var mainURL = window.location.href

    // TURN ID INTO API URL //
    var post_fullURL = mainURL + "content/";


    // SEND POST REQUEST TO API //
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", post_fullURL, false);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("title=" + postTitle + "&body=" + postBody);
    var response = JSON.parse(xhttp.responseText);
    $("p.success").text("Success! Use this ID to GET your content: " + response._id);
    console.log(post_fullURL);
}

function getContent() {
    // CLEAR SUCCESS //
    $("p.success").text("");

    // CAPTURE THE UNIQUE ID //
    var $getID = $('#id');
    var ID = $getID.val();

    var mainURL = window.location.href

    // TURN ID INTO API URL //
    var get_fullURL = mainURL + 'content' + '/' + ID;

    // SEND GET REQUEST TO API //
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", get_fullURL, false);
    xhttp.setRequestHeader("Content-type", "x-www-form-urlencoded");
    xhttp.send();

    // PRINT THE RESPONSE TO CONSOLE (DEV TOOLS) //
    console.log(response);
    console.log(get_fullURL);

    // GET BODY AND SPLIT IT //
    var response = JSON.parse(xhttp.responseText);
    var markUp = markdown.toHTML(response.body);
    var splitResponse = markUp.split(/\n/);
    console.log(splitResponse);

    // PRINT BODY TO DIV //
    var div = document.getElementById('responseBody');
    for (para of splitResponse) {
        div.innerHTML += `<p>${para}</p>`;
    }

    // PRINT TITLE TO DIV //
    $("h2.responseTitle").text(response.title);
}

// HELP FORMATTING (Uses OP-API) //

function getHelp() {
    var get_fullURL = "http://op-api.now.sh/" + "content/59df998b1538bcd9a186aa36";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", get_fullURL, false);
    xhttp.setRequestHeader("Content-type", "x-www-form-urlencoded");
    xhttp.send()
    var response = JSON.parse(xhttp.responseText);
    var markUp = markdown.toHTML(response.body);
    var splitResponse = markUp.split(/\n/);
    console.log(splitResponse);
    var divBody = document.getElementById('responseBody');
    for (para of splitResponse) {
        divBody.innerHTML += `<p>${para}</p>`;
    }
    var divTitle = document.getElementById('responseTitle');
    divTitle.innerHTML += response.title;
    //    $("h2.responseTitle").text(response.title);    
}

function parsePostcode() {
    var part1 = $('#postCodeA').val()
    var part2 = $('#postCodeB').val()
    var userData = part1.replace(/\s+/g, '') + '+' + part2.replace(/\s+/g, '')
    var checkerURL = 'http://www.powercut105.com/FindOperator?Postcode=' //n7+8ha#dno
    var checkPostcode = checkerURL + userData + '#dno'
    window.open(checkPostcode);

}

    /* MODAL HELP, IF YA WANNIT

    // Get the modal
window.onload = function () {
    var modal = document.getElementById("helpBox");

    // Get the button that opens the modal
    var btn = document.getElementById("helpButt");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    } 
}*/