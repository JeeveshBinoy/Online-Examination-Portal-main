$(".logoutbtn").click(function() {
    window.location.href = 'loginpage.html';
});

$(".signinbtn").click(function(event) {
     event.preventDefault();
    window.location.href = 'studentdashboard.html';
});

$(".examstartbtn").click(function(event){
    window.location.href = 'event.html';
})
