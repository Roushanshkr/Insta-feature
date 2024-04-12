var istatus = document.querySelector("h5")
var btn = document.querySelector("#add")
var check = 0

btn.addEventListener("click",function(){
    if(check == 0){
    istatus.innerHTML = "Friends"
    istatus.style.color = "Green"
    btn.innerHTML ="Remove  Friend"
    check = 1
}else{
    istatus.innerHTML = "Request Sent"
    istatus.style.color = "Orange"
    btn.innerHTML="Add as friend"
    check = 0
}
})

