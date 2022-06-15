console.log("Hi There")

let passdoodles = ['umbrella','television', 'sun']

class doodleChalenge{
    #canvas
    #clearButton
    #label
    #randomButton
    #randomSuggestion
    #classifier
    result = {
        label:null,
        confidence:null
    }
    #ctx
    #coord

    #drawfx

    #classes = ['flashlight', 'belt', 'mushroom', 'pond', 'strawberry', 'pineapple', 'sun', 'cow', 'ear', 'bush', 'pliers', 'watermelon', 'apple', 'baseball', 'feather', 'shoe', 'leaf', 'lollipop', 'crown', 'ocean', 'horse', 'mountain', 'mosquito', 'mug', 'hospital', 'saw', 'castle', 'angel', 'underwear', 'traffic_light', 'cruise_ship', 'marker', 'blueberry', 'flamingo', 'face', 'hockey_stick', 'bucket', 'campfire', 'asparagus', 'skateboard', 'door', 'suitcase', 'skull', 'cloud', 'paint_can', 'hockey_puck', 'steak', 'house_plant', 'sleeping_bag', 'bench', 'snowman', 'arm', 'crayon', 'fan', 'shovel', 'leg', 'washing_machine', 'harp', 'toothbrush', 'tree', 'bear', 'rake', 'megaphone', 'knee', 'guitar', 'calculator', 'hurricane', 'grapes', 'paintbrush', 'couch', 'nose', 'square', 'wristwatch', 'penguin', 'bridge', 'octagon', 'submarine', 'screwdriver', 'rollerskates', 'ladder', 'wine_bottle', 'cake', 'bracelet', 'broom', 'yoga', 'finger', 'fish', 'line', 'truck', 'snake', 'bus', 'stitches', 'snorkel', 'shorts', 'bowtie', 'pickup_truck', 'tooth', 'snail', 'foot', 'crab', 'school_bus', 'train', 'dresser', 'sock', 'tractor', 'map', 'hedgehog', 'coffee_cup', 'computer', 'matches', 'beard', 'frog', 'crocodile', 'bathtub', 'rain', 'moon', 'bee', 'knife', 'boomerang', 'lighthouse', 'chandelier', 'jail', 'pool', 'stethoscope', 'frying_pan', 'cell_phone', 'binoculars', 'purse', 'lantern', 'birthday_cake', 'clarinet', 'palm_tree', 'aircraft_carrier', 'vase', 'eraser', 'shark', 'skyscraper', 'bicycle', 'sink', 'teapot', 'circle', 'tornado', 'bird', 'stereo', 'mouth', 'key', 'hot_dog', 'spoon', 'laptop', 'cup', 'bottlecap', 'The_Great_Wall_of_China', 'The_Mona_Lisa', 'smiley_face', 'waterslide', 'eyeglasses', 'ceiling_fan', 'lobster', 'moustache', 'carrot', 'garden', 'police_car', 'postcard', 'necklace', 'helmet', 'blackberry', 'beach', 'golf_club', 'car', 'panda', 'alarm_clock', 't-shirt', 'dog', 'bread', 'wine_glass', 'lighter', 'flower', 'bandage', 'drill', 'butterfly', 'swan', 'owl', 'raccoon', 'squiggle', 'calendar', 'giraffe', 'elephant', 'trumpet', 'rabbit', 'trombone', 'sheep', 'onion', 'church', 'flip_flops', 'spreadsheet', 'pear', 'clock', 'roller_coaster', 'parachute', 'kangaroo', 'duck', 'remote_control', 'compass', 'monkey', 'rainbow', 'tennis_racquet', 'lion', 'pencil', 'string_bean', 'oven', 'star', 'cat', 'pizza', 'soccer_ball', 'syringe', 'flying_saucer', 'eye', 'cookie', 'floor_lamp', 'mouse', 'toilet', 'toaster', 'The_Eiffel_Tower', 'airplane', 'stove', 'cello', 'stop_sign', 'tent', 'diving_board', 'light_bulb', 'hammer', 'scorpion', 'headphones', 'basket', 'spider', 'paper_clip', 'sweater', 'ice_cream', 'envelope', 'sea_turtle', 'donut', 'hat', 'hourglass', 'broccoli', 'jacket', 'backpack', 'book', 'lightning', 'drums', 'snowflake', 'radio', 'banana', 'camel', 'canoe', 'toothpaste', 'chair', 'picture_frame', 'parrot', 'sandwich', 'lipstick', 'pants', 'violin', 'brain', 'power_outlet', 'triangle', 'hamburger', 'dragon', 'bulldozer', 'cannon', 'dolphin', 'zebra', 'animal_migration', 'camouflage', 'scissors', 'basketball', 'elbow', 'umbrella', 'windmill', 'table', 'rifle', 'hexagon', 'potato', 'anvil', 'sword', 'peanut', 'axe', 'television', 'rhinoceros', 'baseball_bat', 'speedboat', 'sailboat', 'zigzag', 'garden_hose', 'river', 'house', 'pillow', 'ant', 'tiger', 'stairs', 'cooler', 'see_saw', 'piano', 'fireplace', 'popsicle', 'dumbbell', 'mailbox', 'barn', 'hot_tub', 'teddy-bear', 'fork', 'dishwasher', 'peas', 'hot_air_balloon', 'keyboard', 'microwave', 'wheel', 'fire_hydrant', 'van', 'camera', 'whale', 'candle', 'octopus', 'pig', 'swing_set', 'helicopter', 'saxophone', 'passport', 'bat', 'ambulance', 'diamond', 'goatee', 'fence', 'grass', 'mermaid', 'motorbike', 'microphone', 'toe', 'cactus', 'nail', 'telephone', 'hand', 'squirrel', 'streetlight', 'bed', 'firetruck'];

    

    constructor(canvas, clearButton, label, randomButton, randomSuggestion){
        this.#canvas = canvas;
        this.#clearButton = clearButton;
        this.#label = label;
        this.#randomButton = randomButton;
        this.#randomSuggestion = randomSuggestion;

        this.#ctx = this.#canvas.getContext("2d");
        this.#coord = { x: 0, y: 0 };

        this.#canvas.addEventListener("mousedown",(ev) => this.#start(ev));
        this.#canvas.addEventListener("mouseup", (ev) => this.#stop(ev));
        this.#canvas.addEventListener("touchstart",(ev) => this.#start(ev));
        this.#canvas.addEventListener("touchend", (ev) => this.#stop(ev));

        this.#clearButton.addEventListener('click',(ev) => this.clear(ev))

        this.#randomButton.addEventListener('click',(ev)=>this.#setRendomSuggestion())

        this.#load()
        this.clear()
    }

    async #load (){
        this.#classifier = await ml5.imageClassifier('DoodleNet',this.#onModelReady);
    }

    #onModelReady() {
        console.log("ready!");
    }

    #submit(event){
        this.#classifier.classify(this.#canvas, 3,(err,r)=> this.#gotResult(err,r));
    }

    #gotResult(err,r){   
        if(r[0].confidence > .3){
            this.result = r[0]
            this.#label.innerHTML = `Label: ${this.result.label} ${this.result.confidence}`;
        } 
        else {
            this.result = {
                label:null,
                confidence:null
            }
            this.#label.innerHTML = `unknown doodle`;
        } 
    }

    #reposition(event) {

        const rect = this.#canvas.getBoundingClientRect();


        this.#coord.x = event.clientX - rect.left ;
        this.#coord.y = event.clientY - rect.top;


    }

    #start(event) {
        //console.log(event)
        if(this.#drawfx) this.#canvas.removeEventListener("mousemove", this.#drawfx);
        if(this.#drawfx) this.#canvas.removeEventListener("touchmove", this.#drawfx);
        this.#drawfx = (ev)=> this.#draw(ev) 
        this.#canvas.addEventListener("mousemove", this.#drawfx);
        this.#canvas.addEventListener("touchmove", this.#drawfx);
        this.#reposition(event);
        this.#draw(event)
    }

    #stop(event) {
        this.#canvas.removeEventListener("mousemove", this.#drawfx);
        this.#canvas.removeEventListener("touchmove", this.#drawfx);
        this.#drawfx = null;
        this.#submit()
    }

    #draw(event) {
        
        this.#ctx.beginPath();
        this.#ctx.lineWidth = 16;
        this.#ctx.lineCap = "round";
        this.#ctx.strokeStyle = "#000000";
        this.#ctx.moveTo(this.#coord.x, this.#coord.y);
        this.#reposition(event);
        this.#ctx.lineTo(this.#coord.x, this.#coord.y);
        this.#ctx.stroke();
    }

    clear(event){
        this.#ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.#ctx.fillStyle = "white";
        this.#ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.#label.innerHTML = `unknown doodle`;
        this.result = {
            label:null,
            confidence:null
        }
    }

    randomClase(){
        const l = this.#classes.length
        const index = Math.round(Math.random() * l)
        return this.#classes[index]
    }

    #setRendomSuggestion(){
        this.#randomSuggestion.innerHTML = `Try to draw a ${this.randomClase()}`
    }


}

const canvas = document.querySelector("#canvas0");
const clearButton = document.getElementById("clear0")
const label = document.getElementById("label0")
const randomButton = document.getElementById("random0")
const randomSuggestion = document.getElementById("suggest0")

let doodle0 = new doodleChalenge(canvas,clearButton,label, randomButton, randomSuggestion)

const canvas1 = document.querySelector("#canvas1");
const clearButton1 = document.getElementById("clear1")
const label1 = document.getElementById("label1")
const randomButton1 = document.getElementById("random1")
const randomSuggestion1 = document.getElementById("suggest1")

let doodle1 = new doodleChalenge(canvas1,clearButton1,label1, randomButton1, randomSuggestion1)

const canvas2 = document.querySelector("#canvas2");
const clearButton2 = document.getElementById("clear2")
const label2 = document.getElementById("label2")
const randomButton2 = document.getElementById("random2")
const randomSuggestion2 = document.getElementById("suggest2")

let doodle2 = new doodleChalenge(canvas2,clearButton2,label2, randomButton2, randomSuggestion2)


let tries = 0;
const submitDoodlesButton = document.getElementById("submitDoodles")
const loginResults = document.getElementById("loginResults")
submitDoodlesButton.addEventListener('click',()=>{

    tries++;
    if(tries > 3){
        loginResults.innerHTML = `You have been locked out`
        submitDoodlesButton.setAttribute("disabled","True")
        return false
    }
    if(doodle0.result.label == passdoodles[0] && doodle1.result.label == passdoodles[1] && doodle2.result.label == passdoodles[2]){
        loginResults.innerHTML = `You will now be given access`
        window.location.href = "/kidsAuth/myapp";
    }
    else{
        loginResults.innerHTML = `Try again`
    }

    doodle0.clear()
    doodle1.clear()
    doodle2.clear()
})


const saveDoodlesButton = document.getElementById("saveDoodles")
saveDoodlesButton.addEventListener('click',()=>{
    if(doodle0.result.label && doodle0.result.label.length > 0 && doodle1.result.label && doodle1.result.label.length > 0 && doodle2.result.label && doodle2.result.label.length > 0){
        passdoodles = [doodle0.result.label, doodle1.result.label, doodle2.result.label];
        loginResults.innerHTML = `Doodles saves as your passcode`
    }
    else{
        loginResults.innerHTML = `Please draw three doodles that can be labeled as your passcode`
    }

    doodle0.clear()
    doodle1.clear()
    doodle2.clear()
})


var video = document.getElementById('video');

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(async function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
        console.log(faceapi.nets)
        await faceapi.nets.ssdMobilenetv1.loadFromUri('/kidsAuth/weights')
        await faceapi.nets.faceLandmark68Net.loadFromUri('/kidsAuth/weights')
        await faceapi.nets.faceRecognitionNet.loadFromUri('/kidsAuth/weights')
        //await faceapi.loadFaceLandmarkModel('/weights')
        //await faceapi.loadFaceRecognitionModel('/weights')
        checkForFace()
    });
}



// video.addEventListener('click',async ()=>{
//     const detection = await faceapi.detectSingleFace(video).withFaceLandmarks()
//     .withFaceDescriptor()

//     console.log(detection)
// })


let faceResult = document.getElementById('faceResult')
let allFace = document.getElementById('allFace')
let alldoodles = document.getElementById('alldoodles')
async function checkForFace(){
    const detection = await faceapi.detectSingleFace(video).withFaceLandmarks()
    .withFaceDescriptor()

    if(detection){
        faceResult.innerHTML = `Welcome Aidan Grace, please draw your three doodle passcode.`
        allFace.hidden = true;
        alldoodles.hidden = false
    }
    else {
        faceResult.innerHTML = `Please look into the camera so we know who you are.`
    }
    

    setTimeout(async ()=>{
        checkForFace()
    }, 1000)
}
