const locations = [
    // Kota kecil dan kawasan bersejarah yang lebih spesifik
    { name: "Gang-gang Jiufen, Taiwan", nativeName: "九份老街", lat: 25.1096, lng: 121.8455 },
    { name: "Gang biru Chefchaouen, Maroko", nativeName: "المدينة القديمة لشفشاون", lat: 35.1688, lng: -5.2636 },
    { name: "Rumah trulli Rione Monti, Alberobello, Italia", nativeName: "Trulli di Alberobello", lat: 40.7830, lng: 17.2370 },
    { name: "Desa budaya Gamcheon, Busan, Korea Selatan", nativeName: "감천문화마을", lat: 35.0971, lng: 129.0106 },
    { name: "Bo-Kaap, Cape Town, Afrika Selatan", nativeName: "Bo-Kaap", lat: -33.9225, lng: 18.4156 },
    { name: "Kawasan pemandian belerang Abanotubani, Tbilisi, Georgia", nativeName: "აბანოთუბანი", lat: 41.6878, lng: 44.8113 },
    { name: "Benteng kota tua Kotor, Montenegro", nativeName: "Стари град Котор", lat: 42.4247, lng: 18.7712 },
    { name: "Petite Venise, Colmar, Prancis", nativeName: "La Petite Venise", lat: 48.0755, lng: 7.3585 },
    { name: "Lorong mural George Town, Penang, Malaysia", nativeName: "乔治市", lat: 5.4164, lng: 100.3327 },
    { name: "Bukit berwarna Valparaíso, Chile", nativeName: "Valparaíso", lat: -33.0458, lng: -71.6197 },
    { name: "Kota tua Oaxaca, Meksiko", nativeName: "Oaxaca de Juárez", lat: 17.0617, lng: -96.7269 },
    { name: "Rumah karang Al-Balad, Jeddah, Arab Saudi", nativeName: "جدة التاريخية", lat: 21.4858, lng: 39.1925 },
    { name: "Desa batu Monsanto, Portugal", nativeName: "Aldeia de Monsanto", lat: 40.0390, lng: -7.1160 },
    { name: "Desa rumah di bawah batu Setenil de las Bodegas, Spanyol", nativeName: "Setenil de las Bodegas", lat: 36.8639, lng: -5.1817 },
    { name: "Kota gua Matera, Italia", nativeName: "Sassi di Matera", lat: 40.6663, lng: 16.6043 },
    { name: "Jembatan tua Mostar, Bosnia dan Herzegovina", nativeName: "Stari Most", lat: 43.3373, lng: 17.8150 },
    { name: "Kota bertembok Itchan Kala, Khiva, Uzbekistan", nativeName: "Ichan Qalʼа", lat: 41.3783, lng: 60.3593 },
    { name: "Alun-alun Lyabi-Hauz, Bukhara, Uzbekistan", nativeName: "Ляби-Хауз", lat: 39.7747, lng: 64.4150 },
    { name: "Benteng Galle, Sri Lanka", nativeName: "Galle Fort", lat: 6.0260, lng: 80.2170 },
    { name: "Kota tua Lamu, Kenya", nativeName: "Lamu Old Town", lat: -2.2717, lng: 40.9020 },
    { name: "Gang-gang kota tua Stone Town, Zanzibar", nativeName: "Mji Mkongwe", lat: -6.1622, lng: 39.1921 },
    { name: "Jembatan Jepang, Hoi An, Vietnam", nativeName: "Chùa Cầu", lat: 15.8770, lng: 108.3260 },
    { name: "Jalan Calle Crisologo, Vigan, Filipina", nativeName: "Calle Crisologo", lat: 17.5747, lng: 120.3870 },
    { name: "Alun-alun Bhaktapur Durbar, Nepal", nativeName: "भक्तपुर दरबार क्षेत्र", lat: 27.6728, lng: 85.4289 },
    { name: "Gang rumah kayu Sanmachi, Takayama, Jepang", nativeName: "三町筋", lat: 36.1420, lng: 137.2570 },
    { name: "Desa beratap jerami Shirakawa-go, Jepang", nativeName: "白川郷", lat: 36.2570, lng: 136.9060 },
    { name: "Jalan samurai Kakunodate, Jepang", nativeName: "角館武家屋敷通り", lat: 39.5970, lng: 140.5620 },
    { name: "Desa tradisional Hahoe, Korea Selatan", nativeName: "안동 하회마을", lat: 36.5390, lng: 128.5190 },
    { name: "Kota tua Lijiang, Tiongkok", nativeName: "丽江古城", lat: 26.8721, lng: 100.2320 },
    { name: "Kota tua Gjirokastër, Albania", nativeName: "Gjirokastra", lat: 40.0750, lng: 20.1389 },
    { name: "Persimpangan Shibuya, Tokyo, Jepang", nativeName: "渋谷スクランブル交差点", lat: 35.6595, lng: 139.7004 },
    { name: "Gang Haji Lane, Singapura", nativeName: "Haji Lane", lat: 1.3008, lng: 103.8590 },
    { name: "Kampung Pelangi, Semarang, Indonesia", nativeName: "Kampung Pelangi", lat: -7.0098, lng: 110.4229 },
    { name: "Jalan-jalan Ubud, Bali, Indonesia", nativeName: "Ubud", lat: -8.5069, lng: 115.2625 },
    { name: "Kota tua Cartagena, Kolombia", nativeName: "Centro Histórico de Cartagena", lat: 10.4236, lng: -75.5491 },
    { name: "Jalan berbatu Antigua, Guatemala", nativeName: "Antigua Guatemala", lat: 14.5586, lng: -90.7295 },
    { name: "French Quarter, New Orleans, Amerika Serikat", nativeName: "French Quarter", lat: 29.9584, lng: -90.0644 },
    { name: "Lombard Street, San Francisco, Amerika Serikat", nativeName: "Lombard Street", lat: 37.8021, lng: -122.4187 },
    { name: "DUMBO, Brooklyn, Amerika Serikat", nativeName: "DUMBO", lat: 40.7033, lng: -73.9896 },
    { name: "Gang-gang kanal Venesia, Italia", nativeName: "Canal Grande", lat: 45.4372, lng: 12.3358 },
    { name: "Kota tua Sintra, Portugal", nativeName: "Vila de Sintra", lat: 38.7976, lng: -9.3905 },
    { name: "Desa Oia, Santorini, Yunani", nativeName: "Οία", lat: 36.4618, lng: 25.3753 },
    { name: "Kota bertembok Rothenburg, Jerman", nativeName: "Rothenburg ob der Tauber", lat: 49.3779, lng: 10.1796 },
    { name: "Jalan Göreme, Cappadocia, Turki", nativeName: "Göreme", lat: 38.6431, lng: 34.8294 },
    { name: "Reykjavík, Islandia", nativeName: "Reykjavík", lat: 64.1466, lng: -21.9426 },
    { name: "Kota pelabuhan Bergen, Norwegia", nativeName: "Bryggen, Bergen", lat: 60.3975, lng: 5.3242 },
    { name: "Kawasan Nyhavn, Kopenhagen, Denmark", nativeName: "Nyhavn", lat: 55.6798, lng: 12.5910 },
    { name: "Jalan warna-warni La Boca, Buenos Aires, Argentina", nativeName: "Caminito, La Boca", lat: -34.6345, lng: -58.3631 },
    { name: "Kawasan tepi laut Manly, Sydney, Australia", nativeName: "Manly Beach", lat: -33.7969, lng: 151.2886 },
    { name: "Jalan-jalan pusat kota Queenstown, Selandia Baru", nativeName: "Queenstown", lat: -45.0312, lng: 168.6626 },
    { name: "Kota tua Jaisalmer, India", nativeName: "Jaisalmer Fort", lat: 26.9124, lng: 70.9120 },
    { name: "Kawasan pasar Jaipur, India", nativeName: "Hawa Mahal, Jaipur", lat: 26.9239, lng: 75.8267 },
    { name: "Kota tua Baku, Azerbaijan", nativeName: "İçərişəhər", lat: 40.3661, lng: 49.8352 },
    { name: "Kawasan tepi laut Essaouira, Maroko", nativeName: "الصويرة", lat: 31.5131, lng: -9.7700 },
    { name: "Kawasan seni Santa Teresa, Rio de Janeiro, Brasil", nativeName: "Santa Teresa", lat: -22.9150, lng: -43.1880 },
    { name: "Jalan-jalan pusat kota Cusco, Peru", nativeName: "Plaza de Armas de Cusco", lat: -13.5164, lng: -71.9785 },
    { name: "Kawasan Coyoacán, Mexico City, Meksiko", nativeName: "Coyoacán", lat: 19.3502, lng: -99.1624 },
    { name: "Distrik seni Wynwood, Miami, Amerika Serikat", nativeName: "Wynwood Walls", lat: 25.8011, lng: -80.1995 },
    { name: "Kawasan kanal Christianshavn, Kopenhagen, Denmark", nativeName: "Christianshavn", lat: 55.6735, lng: 12.5948 }
];

function formatLocation(location) {
    return location.name;
}

let questions = [];
let previousQuestions = [];
let current = 0;
let score = 0;
let streak = 0;
let answered = false;
let guessMarker = null;
let answerMarker = null;
let distanceLine = null;

const $ = id => document.getElementById(id);

function pinIcon(color) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41"><path fill="${color}" stroke="#fff" stroke-width="1.5" d="M12.5 1C6.15 1 1 6.15 1 12.5 1 21.1 12.5 40 12.5 40S24 21.1 24 12.5C24 6.15 18.85 1 12.5 1z"/><circle cx="12.5" cy="12.5" r="4" fill="#fff"/></svg>`;
    return L.icon({
        iconUrl: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    });
}

const guessMap = L.map("guessMap", {
    worldCopyJump: false,
    maxBounds: [[-85.0511, -180], [85.0511, 180]],
    maxBoundsViscosity: 1,
    zoomSnap: 0.5,
    minZoom: 1,
    maxZoom: 18
});

guessMap.setView([20, 0], 2.5);

// OpenStreetMap tiles use local scripts where available and do not require an API key.
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    noWrap: true,
    minZoom: 1,
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(guessMap);

guessMap.on("click", event => {
    if (answered) return;
    if (guessMarker) guessMap.removeLayer(guessMarker);
    guessMarker = L.marker(event.latlng, { icon: pinIcon("#3388ff") }).addTo(guessMap);
    $("submitGuess").disabled = false;
});

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function startGame() {
    const freshLocations = locations.filter(location => !previousQuestions.includes(location));
    questions = shuffle(freshLocations.length >= 5 ? freshLocations : locations).slice(0, 5);
    previousQuestions = questions;
    current = 0;
    score = 0;
    streak = 0;
    $("game").classList.remove("hidden");
    $("finish").classList.add("hidden");
    updateStats();
    showQuestion();
    setTimeout(() => guessMap.invalidateSize(), 100);
}

function showQuestion() {
    answered = false;
    const q = questions[current];
    $("round").textContent = `ROUND ${current + 1} / 5`;
    $("progress").style.width = `${(current + 1) * 20}%`;
    // Request English labels in Street View where Google has them available.
    $("streetView").src = `https://maps.google.com/maps?q=&layer=c&cbll=${q.lat},${q.lng}&cbp=11,0,0,0,0&output=svembed&hl=en`;
    $("result").textContent = "";
    $("next").classList.add("hidden");
    $("submitGuess").disabled = true;
    if (guessMarker) {
        guessMap.removeLayer(guessMarker);
        guessMarker = null;
    }
    if (answerMarker) {
        guessMap.removeLayer(answerMarker);
        answerMarker = null;
    }
    if (distanceLine) {
        guessMap.removeLayer(distanceLine);
        distanceLine = null;
    }
    guessMap.setView([20, 0], 2.5);
    setTimeout(() => guessMap.invalidateSize(), 50);
}

function distanceKm(lat1, lng1, lat2, lng2) {
    const radians = degrees => degrees * Math.PI / 180;
    const dLat = radians(lat2 - lat1);
    const dLng = radians(lng2 - lng1);
    const a = Math.sin(dLat / 2) ** 2 +
        Math.cos(radians(lat1)) * Math.cos(radians(lat2)) * Math.sin(dLng / 2) ** 2;
    return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function submitGuess() {
    if (answered) return;
    if (!guessMarker) {
        const q = questions[current];
        answerMarker = L.marker([q.lat, q.lng], { icon: pinIcon("#e53935") }).addTo(guessMap)
            .bindPopup(`Lokasi sebenarnya: ${formatLocation(q)}`).openPopup();
        $("result").textContent = `Kamu belum memilih tebakan, jadi jarak tidak bisa dihitung. Lokasi aslinya: ${formatLocation(q)}. +0 poin`;
        streak = 0;
        finishAnswer();
        return;
    }
    const guess = guessMarker.getLatLng();
    const q = questions[current];
    const distance = distanceKm(guess.lat, guess.lng, q.lat, q.lng);
    const points = Math.max(0, Math.round(5000 * Math.exp(-distance / 1800)));
    score += points;
    streak = distance < 100 ? streak + 1 : 0;
    answerMarker = L.marker([q.lat, q.lng], { icon: pinIcon("#e53935") }).addTo(guessMap)
        .bindPopup(`Lokasi sebenarnya: ${formatLocation(q)}`).openPopup();
    const distanceText = `${Math.round(distance).toLocaleString("id-ID")} km`;
    distanceLine = L.polyline([guess, [q.lat, q.lng]], {
        color: "#ffd166",
        weight: 3,
        dashArray: "8, 8"
    }).addTo(guessMap).bindPopup(`Jarak tebakan ke lokasi asli: ${distanceText}`);
    guessMap.fitBounds(distanceLine.getBounds(), { padding: [40, 40], maxZoom: 6 });
    $("result").textContent = `📍 Jarak tebakanmu ke lokasi asli: ${distanceText}. Lokasi aslinya: ${formatLocation(q)}. +${points} poin`;
    finishAnswer();
}

function finishAnswer() {
    answered = true;
    $("submitGuess").disabled = true;
    updateStats();
    $("next").textContent = current === 4 ? "LIHAT HASIL 🏆" : "LANJUT →";
    $("next").classList.remove("hidden");
}

function nextRound() {
    current++;
    if (current >= 5) {
        finishGame();
    } else {
        showQuestion();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

function updateStats() {
    $("score").textContent = score.toLocaleString("id-ID");
    $("streak").textContent = streak;
}

function finishGame() {
    $("game").classList.add("hidden");
    $("finish").classList.remove("hidden");
    $("finalScore").textContent = score.toLocaleString("id-ID");
    if (score >= 15000) $("rank").textContent = "🌍 GEOGRAPHY MASTER!";
    else if (score >= 8000) $("rank").textContent = "⭐ EXPLORER!";
    else if (score >= 3000) $("rank").textContent = "🧭 TRAVELER!";
    else $("rank").textContent = "🌱 BEGINNER!";
    $("summary").textContent = `Kamu menyelesaikan 5 ronde dengan ${score.toLocaleString("id-ID")} poin.`;
}

$("submitGuess").addEventListener("click", submitGuess);
$("next").addEventListener("click", nextRound);
$("restart").addEventListener("click", startGame);
startGame();
