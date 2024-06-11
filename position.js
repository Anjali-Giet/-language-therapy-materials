function playSound(soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
}

function practiceSound(sound) {
    alert("Practice saying: " + sound);
    // You can add more interactive elements here, such as recording the user's response, providing feedback, etc.
}
function updateProgress(column) {
    // Send an AJAX request to update the progress on the server
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "update_progress.php?column=" + column, true);
    xhr.send();
  }

  document.querySelectorAll('.play-button').forEach(function(button) {
    button.addEventListener('click', function() {
        var audio = this.parentElement.querySelector('audio');
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});