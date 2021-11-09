function downloadBeta() {
  window.location.href = 'https://github.com/JiningLiu/AltApps/archive/refs/heads/main.zip';
}

function installLatest() {
  window.location.href = 'altstore://install?url=https://github.com/JiningLiu/AltApps/releases/download/v1.1.0/AltApps.ipa/';
}

function downloadLatest() {
  window.location.href = 'https://github.com/JiningLiu/AltApps/releases/download/v1.1.0/AltApps.ipa/';
}

function install1_0_0() {
  window.location.href = 'altstore://install?url=https://github.com/JiningLiu/AltApps/releases/download/v1.0.0-iOS14/AltApps.ipa';
}

function download1_0_0() {
  window.location.href = 'https://github.com/JiningLiu/AltApps/releases/download/v1.0.0-iOS14/AltApps.ipa';
}

$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 1000) {
    if (y < 2000) {
      $('#scroll1').fadeOut(250);
      $('#scroll2').fadeIn(250);
      $('#scroll3').fadeOut(250);
      $('#scroll4').fadeOut(250);
      $('#scroll5').fadeOut(250);
      $('#scroll6').fadeOut(250);
      $('#scroll7').fadeOut(250);
      $('#toTop').fadeIn(250);
      $('#scrollDown').fadeOut(250);
    } else {
      if (y > 3000) {
        if (y < 4000) {
          $('#scroll1').fadeOut(250);
          $('#scroll2').fadeOut(250);
          $('#scroll3').fadeOut(250);
          $('#scroll4').fadeIn(250);
          $('#scroll5').fadeOut(250);
          $('#scroll6').fadeOut(250);
          $('#scroll7').fadeOut(250);
          $('#toTop').fadeIn(250);
          $('#scrollDown').fadeOut(250);
        } else {
          if (y < 5000) {
            $('#scroll1').fadeOut(250);
            $('#scroll2').fadeOut(250);
            $('#scroll3').fadeOut(250);
            $('#scroll4').fadeOut(250);
            $('#scroll5').fadeIn(250);
            $('#scroll6').fadeOut(250);
            $('#scroll7').fadeOut(250);
            $('#toTop').fadeIn(250);
            $('#scrollDown').fadeOut(250);
          } else {
            if (y < 6000) {
              $('#scroll1').fadeOut(250);
              $('#scroll2').fadeOut(250);
              $('#scroll3').fadeOut(250);
              $('#scroll4').fadeOut(250);
              $('#scroll5').fadeOut(250);
              $('#scroll6').fadeIn(250);
              $('#scroll7').fadeOut(250);
              $('#toTop').fadeIn(250);
              $('#scrollDown').fadeOut(250);
            } else {
              $('#scroll1').fadeOut(250);
              $('#scroll2').fadeOut(250);
              $('#scroll3').fadeOut(250);
              $('#scroll4').fadeOut(250);
              $('#scroll5').fadeOut(250);
              $('#scroll6').fadeOut(250);
              $('#scroll7').fadeIn(250);
              $('#toTop').fadeIn(250);
              $('#scrollDown').fadeOut(250);
            }
          }
        }
      } else {
        $('#scroll1').fadeOut(250);
        $('#scroll2').fadeOut(250);
        $('#scroll3').fadeIn(250);
        $('#scroll4').fadeOut(250);
        $('#scroll5').fadeOut(250);
        $('#scroll6').fadeOut(250);
        $('#scroll7').fadeOut(250);
        $('#toTop').fadeIn(250);
        $('#scrollDown').fadeOut(250);
      }
    }
  } else {
    $('#scroll1').fadeIn(250);
    $('#scroll2').fadeOut(250);
    $('#scroll3').fadeOut(250);
    $('#scroll4').fadeOut(250);
    $('#scroll5').fadeOut(250);
    $('#scroll6').fadeOut(250);
    $('#scroll7').fadeOut(250);
    $('#toTop').fadeOut(250);
    $('#scrollDown').fadeIn(250);
  }
});
