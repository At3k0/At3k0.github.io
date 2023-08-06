function isFebuary14th() {
    var today = new Date();
    return today.getMonth() === 7 && today.getDate() === 6;
}
function isJuly25th() {
    var today = new Date();
    return today.getMonth() === 6 && today.getDate() === 25;
}

function isAugust11th() {
    var today = new Date();
    return today.getMonth() === 7 && today.getDate() === 11;
}

function isAugust22nd() {
    var today = new Date();
    return today.getMonth() === 7 && today.getDate() === 22;
}

function isOctober1st() {
    var today = new Date();
    return today.getMonth() === 9 && today.getDate() === 1;
}

function isDecember1st() {
    var today = new Date();
    return today.getMonth() === 11 && today.getDate() === 1;
}

function isDecember2nd() {
    var today = new Date();
    return today.getMonth() === 11 && today.getDate() === 2;
}

function toggleContent() {
    var v = document.getElementById("songvideo");
    var t = document.getElementById("songtext");
    if (isFebuary14th()) {
        v.src = "videodates/poem.mp4"
        t.textContent = "damn thats deep kat"
    } else if (isJuly25th()) {
        v.src = "videodates/birthday.mp4";
        t.textContent = "july 25th baby";
    } else if (isAugust11th()) {
        v.src = "videodates/dogdays.mp4";
        t.textContent = "summer's gone";
    } else if (isAugust22nd()) {
        v.src = "videodates/schoolsin.mp4"
        t.textContent = "time for school"
    } else if (isOctober1st()){
    	v.src = "videodates/spooky.mp4";
    	t.textContent = "spooky begins";
    } else if (isDecember1st()){
        v.src = "videodates/beginchristmas.mp4";
        t.textContent = "december day 1 lesson - dont die";
    } else if (isDecember2nd()){
        v.src = "videodates/wonderfultime.mp4";
        t.textContent = "december day 2 lesson - look both ways before crossing the road ";
    /*ill add more christmas ones later, probably in december because obviously*/
    } else {
        v.style.display = "none";
        t.style.display = "none";
    }
}

window.onload = toggleContent;