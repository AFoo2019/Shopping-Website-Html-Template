function myLoadFunction() {
  // Get the modal
  var modal = document.getElementById('myModal');
  // Get the button that opens the modal
  var btn = document.getElementById("btn-login");
  var lnksignup = document.getElementById('lnk-signup');
  // Get the modal content
  var modalSignIn = document.getElementsByClassName('modal-content')[0];
  var modalSignUp = document.getElementsByClassName('modal-content-alt')[0];
  //Get the button to switch content
  var lnksignup2 = document.getElementById('lnk-signup2');
  var lnksignin = document.getElementById('lnk-signin');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName('close')[0];
  var spanAlt = document.getElementsByClassName('close')[1];

  // When the user clicks the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  spanAlt.onclick = function() {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  // When the user click either button the modal content switches
  lnksignup.onclick = function() {
    modalSignIn.style.display = "none";
    modalSignUp.style.display = "block";
  }
  lnksignin.onclick = function() {
    modalSignIn.style.display = "block";
    modalSignUp.style.display = "none";
  }
  // Other button to go to the signup menu
  lnksignup2.onclick = function() {
    modal.style.display = "block";
    modalSignIn.style.display = "none";
    modalSignUp.style.display = "block";
  }
  $('.summernote').summernote({
    height: 200,
    popover:false,
    focus: true
  });
}

document.addEventListener('DOMContentLoaded', myLoadFunction);
