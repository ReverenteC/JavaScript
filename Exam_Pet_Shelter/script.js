console.log('Im Working!')

// Likes go up
function Like(id) {
    document.getElementById(id).innerHTML++
}

//donate disappear
function thanos(element) {
    element.remove()
}

//select alert
var element = document.getElementById
function alertMessage(){
    if(document.getElementsById('select_this').value !="Dogs"){
        alert('You are looking for Dogs')
    }
    if(document.getElementsById('select_this').value !="Cats"){
        alert('You are looking for Cats')
    }
}
