function isJuly25th() {
        var today = new Date();
        return today.getMonth() === 6 && today.getDate() === 25;
    }

    function isAugest11th() {
        var today = new Date();
        return today.getMonth() === 7 && today.getDate() === 11;
    }
    function isOctober1st() {
        var today = new Date();
        return today.getMonth() === 9 && today.getDate() === 1;
    }

    function toggleContent() {
        var v = document.getElementById("songvideo");
        var t = document.getElementById("songtext");

        if (isJuly25th()) {
            v.src = "birthday.mp4";
            t.textContent = "july 25th baby";
        } else if (isAugest11th()) {
            v.src = "dogdays.mp4";
            t.textContent = "school time";
        } else if (isOctober1st()){
        	v.src = "spooky.mp4";
        	t.textContent = "spooky begins";
        } else {
            v.style.display = "none";
            t.style.display = "none";
        }
    }

    window.onload = toggleContent;