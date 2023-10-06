window.onload = function(){ //모든 html을 파싱한 후 실행됨
    let btn = document.querySelector('#btn');
    console.log('btn: ', btn);
    btn.addEventListener('click', function() {
        alert("bye, world");
    });
}