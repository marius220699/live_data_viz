let data = [{"Temp":0,"Violet":0,"Blue":0,"Green":0,"Yellow":0,"Orange":0,"Red":0}];

function setup(){
    createCanvas(windowWidth, windowHeight)
    //colorMode(HSB, 360, 100, 100)
}

function draw(){
    colorMode(RGB)
    //console.log(data[data.length-1])
    //const Durchschnitt = (data[data.length-1].Violet+data[data.length-1].Blue+data[data.length-1].Green+data[data.length-1].Yellow+data[data.length-1].Orange+data[data.length-1].Red)/6
    //const Farbe = color(Durchschnitt,100,100)
    const Farbe = color(data[data.length-1].Red,data[data.length-1].Green,data[data.length-1].Blue)
    background(Farbe)
    //console.log(data.length)
    colorMode(HSB, 360, 100, 100)
    noStroke();    
    /*fill(0, 100, data.Red)
    rect(0, 0, with/6, height)

    fill(0, 100, data.Orange)
    rect(0, 0, with/6, height)

    fill(0, 100, data.Yellow)
    rect(0, 0, with/6, height)

    fill(0, 100, data.Green)
    rect(0, 0, with/6, height)

    fill(0, 100, data.Blue)
    rect(0, 0, with/6, height)

    fill(0, 100, data.Violet)
    rect(0, 0, with/6, height)*/

    for (let i = 0; i < data.length; i++) {
        let d = data[i];
        let x = map(i, 0, 100, 0, width);
        let y = map(d.Red, 0, 1000, height, 0);

        fill(360, 100, 100)
        line(x,(d.Red/10),x,(d.Red/10));  
    }
    
    for (let i = 0; i < data.length; i++) {
        let d = data[i];
        let x = map(i, 0, 100, 0, width);
        let y = map(d.Orange, 0, 1000, height, 0);

        fill(30, 100, 100)
        circle(x,y,(d.Orange/10));  
    }

    for (let i = 0; i < data.length; i++) {
        let d = data[i];
        let x = map(i, 0, 100, 0, width);
        let y = map(d.Yellow, 0, 1000, height, 0);

        fill(60, 100, 100)
        circle(x,y,(d.Yellow/10));  
    }
    for (let i = 0; i < data.length; i++) {
        let d = data[i];
        let x = map(i, 0, 100, 0, width);
        let y = map(d.Green, 0, 1000, height, 0);
        
        fill(120, 100, 100)
        circle(x,y,(d.Green/10));  
    }

    for (let i = 0; i < data.length; i++) {
        let d = data[i];
        let x = map(i, 0, 100, 0, width);
        let y = map(d.Blue, 0, 1000, height, 0);

        fill(220, 100, 100)
        circle(x,y,(d.Blue/10));  
    }
    for (let i = 0; i < data.length; i++) {
        let d = data[i];
        let x = map(i, 0, 100, 0, width);
        let y = map(d.Violet, 0, 1000, height, 0);

        fill(280, 100, 100)
        circle(x,y,(d.Violet/10));  
    }
    
}

let ws = new WebSocket("ws://localhost:1880/ws/receive")

ws.onopen = function (event){
    console.log(event);
}

ws.onmessage = function (msg){
    data.push(JSON.parse(msg.data));
    if (data.length > 100){
        data.shift();
    }
    //console.log(JSON.parse(msg.data));
}