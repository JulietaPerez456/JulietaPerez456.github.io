//lanzamiento del service Worker
if ('serviceWorker' in navigator) {
    console.log('Si jala el SW');
    navigator.serviceWorker.register('./sw.js')
        .then( resp => console.log('serviceWorkwr ya cargo', resp))
        .catch(err => console.log('no hay SW',err));
}else{
    console.log('No soprta pwa');
}

//scroll suabisado

$(document).ready(function(){
    $("#menu a").click(function(){
        $("html, body").animate({
            screenTop: $($(this).attr('href')).offset().top
        });
        return false;
    });
})