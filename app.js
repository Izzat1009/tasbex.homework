const count = document.querySelector(".counter")
const title = document.querySelector(".title")

let offset = 0

function inc(){
    offset = offset + 1
    count.innerHTML = offset
    if(offset < 33){
        title.innerHTML = "Subhanallah"
    }else if(offset < 66){
        title.innerHTML = "Alhamdullilah"
    }else if(offset < 99){
        title.innerHTML = "Allohuakbar"
    }else{
        offset = 0
    }
}

function reset(){
    offset = 0 
    count.innerHTML = offset
}