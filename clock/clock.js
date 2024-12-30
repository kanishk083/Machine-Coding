setInterval(showTime,1000)
function showTime(){
    let time = new Date;
    h=time.getHours();
    m=time.getMinutes();
    s=time.getSeconds();
    session='AM';

    if(h>12){
        h-=12;
        session='PM'
    }if(h==0){
        h=12
        session='PM'
    }

    h=h<10? '0' + h:h;
    m=m<10? '0' + m:m;
    s=s<10? '0' + s:s;

    let cuurentTime = h + ':' + m + ':' + s + ' ' + session;
    document.getElementById('clock').innerHTML = cuurentTime;
}
showTime();





// setInterval(showTime,1000);
// function showTime(){
//     let time = new Date;
//     h=time.getHours();
//     m=time.getMinutes();
//     s=time.getSeconds();
//     session='AM';

//     if(h>12){
//         h-=12;
//         session='PM'
//     }if(h==0){
//         h=12;
//         session="PM"
//     }

//     h=h<10? '0'+ h:h;
//     m=m<10? '0'+ m:m;
//     s=s<10? '0'+ s:s;

//     let cuurentTime = h + ':' + m + ':' + s + " "+ session;
//     document.getElementById('clock').innerHTML = cuurentTime;
// }
// showTime();




