window.onload = function() {
    var loading = document.getElementById('loading');
    loading.style.marginLeft = "1px";
}

function menu() {
    var menu = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menu.classList.toggle('active');
    navigation.classList.toggle('active');
}

function validateform() {
    if(document.getElementById('name').value == "" || document.getElementById('email').value == "") {
        alert("Πρέπει να συμπληρωθούν όλα τα πεδία!");
    }
    else if (document.getElementById('message').value == "") {
        alert("Πρέπει να συμπληρωθούν όλα τα πεδία!");
    }

    if (document.getElementById('message').value.length > 100) {
        alert("Το μήνυμα δεν πρέπει να ξεπερνά τους 100 χαρακτήρες!");
    }
    

    if((document.getElementById('name').value != "") && (document.getElementById('email').value != "") && (document.getElementById('message').value != "")){
        document.getElementById('form').style.visibility = "hidden";
        document.getElementById('submissiontext').style.visibility = "visible";
    }
}
