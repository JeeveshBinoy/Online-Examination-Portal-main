$(".logoutbtn").click(function() {
    window.location.href = 'index.html';
});

$(".signinbtn").click(function(event) {
    event.preventDefault();
    window.location.href = 'studentdashboard.html'; 
});


$(".startbtn").click(function(event){
    window.location.href = 'event.html';
})

$(".createexambtn").click(function(event){
    window.location.href = 'createexam.html';
})

$(".studentdashboard").click(function(event){
    window.location.href = 'studentdashboard.html';
})

$(".aboutbtn").click(function(event){
    window.location.href = 'about.html';
})

