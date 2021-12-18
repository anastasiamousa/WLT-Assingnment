function toggleMenu() {
    var menu = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menu.classList.toggle('active');
    navigation.classList.toggle('active');
}

window.onload = function() {
    var loading = document.getElementById('loading');
    loading.style.marginLeft = "8px";
}