function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    document.getElementById('current-time').textContent = `== Current Time for Me: ${hours}:${minutes}:${seconds} ${ampm} ==`;
}
setInterval(updateTime, 1000);

function startApp() {
    document.querySelector('.start-overlay').style.display = 'none';
    ['title', 'time', 'social-buttons', 'footer', 'audio-control'].forEach(e =>
        document.querySelector(`.${e}`).style.opacity = 1
    );
    document.querySelector('.audio-control').style.display = 'block';
    document.getElementById('audio-iframe').src =
        "https://www.youtube.com/embed/zfHAAuDWnFk?autoplay=1&loop=1&playlist=zfHAAuDWnFk";
}

function toggleLTCAddress() {
    const ltcAddress = document.querySelector('.ltc-address');
    ltcAddress.style.display = ltcAddress.style.display === 'block' ? 'none' : 'block';
}

function showAboutMe() {
    ['title', 'time', 'social-buttons', 'footer', 'audio-control'].forEach(e =>
        document.querySelector(`.${e}`).style.display = 'none'
    );
    document.querySelector('.about-me').style.display = 'block';
    document.querySelector('.back-button').style.display = 'block';
}

function goBack() {
    ['title', 'time', 'social-buttons', 'footer', 'audio-control'].forEach(e =>
        document.querySelector(`.${e}`).style.display = 'block'
    );
    document.querySelector('.about-me').style.display = 'none';
    document.querySelector('.back-button').style.display = 'none';
}

// Include your Canvas animation code here
// (Copied from your provided JavaScript starting from window.onload = function() { ... })
