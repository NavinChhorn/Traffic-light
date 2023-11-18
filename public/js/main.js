
// change to local IP
const IP = "127.0.0.1";
const PORT = 3000;

const URL_REQUEST = "http://" + IP + ":" + PORT + "/saveColor?color=";
const URL_RESPONSE = "http://" + IP + ":" + PORT + "/getColor";


function changeLight() {
    clearLight();
    console.log('server work');
    axios.get(URL_RESPONSE).then((response)=>{
       
        let color = response.data;
        let colorId = "#"+color+'Light';
        document.querySelector(colorId).className=color;
        console.log(color);
    });

}
let clearLight= ()=>{
    allcolors.forEach(element => {
        element.className = 'grey';
    });
}

let saveColor = ()=>{
    let color = trafficStatus.value;
    axios.get(URL_REQUEST + color).then((response)=>{
        console.log('send color successfully ');
    });
    // changeLight();

}

let allcolors = document.querySelectorAll('.grey');
let trafficStatus  = document.getElementById('trafficStatus');
document.getElementById('setAllColor').addEventListener('click',()=>{
    saveColor();
});
setInterval(changeLight, 1000);
