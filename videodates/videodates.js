const specialDates = [
    { month: 1, date: 14, video: "poem.mp4", text: "damn thats deep kat" },
    { month: 6, date: 25, video: "birthday.mp4", text: "july 25th baby" },
    { month: 7, date: 11, video: "dogdays.mp4", text: "summer's gone" },
    { month: 7, date: 22, video: "schoolsin.mp4", text: "time for school" },
    { month: 9, date: 1, video: "spooky.mp4", text: "spooky begins" },
    { month: 11, date: 1, image: "christmasplaylistimg.png", playlist: "https://www.youtube.com/playlist?list=PL0s0N2avSv5eU9BDBymqdismmjwIEZ69-", text: "click for bridgeshof.com 12 days of christmas videos" },
];

function toggleContent() {
    const today = new Date();
    const v = document.getElementById("songvideo");
    const t = document.getElementById("songtext");
    
    for (const date of specialDates) {
        if (today.getMonth() === date.month && today.getDate() === date.date) {
            if (date.playlist) {
                v.style.display = "none";
                t.innerHTML = `<a href="${date.playlist}" target="_blank"><img src="videodates/${date.image}" alt="${date.text}" style="max-width: 200px;"><br>${date.text}</a>`;
            } else {
                v.src = `videodates/${date.video}`;
                t.textContent = date.text;
            }
            document.getElementById("brvideodates").style.display = "block";
            return;
        }
    }
    
    if (today.getMonth() === 11 && today.getDate() <= 12) {
        v.style.display = "none";
        t.innerHTML = `<a href="${specialDates[5].playlist}" target="_blank"><img src="videodates/${specialDates[5].image}" alt="${specialDates[5].text}" style="max-width: 200px;"><br>${specialDates[5].text}</a>`;
        document.getElementById("brvideodates").style.display = "block";
    } else {
        v.style.display = "none";
        t.style.display = "none";
    }
}

window.onload = toggleContent;