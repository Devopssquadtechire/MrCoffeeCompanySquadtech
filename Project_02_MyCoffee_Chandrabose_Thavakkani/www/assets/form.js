const form1  = document.getElementById('myForm');
const formButton  = document.getElementById('sendButton');

// Get the modal
var modal = document.getElementById("myModal");
var errorModal = document.getElementById("myerrorModal");
var errorModal2 = document.getElementById("nomModalError1");
var errorModal3 = document.getElementById("phoneModalError1");
// Get the <span> element that closes the modal
var span = document.getElementById('modalSendButton');
var span1 = document.getElementById('modalSendButton1');

window.onload=(event) => {modal.style.display="none";errorModal.style.display="none";errorModal2.style.display ="none";errorModal3.style.display ="none"}

formButton.addEventListener('click', (event) => {
    // handle the form data
    var nom = document.getElementById("myForm").elements.namedItem("nom").value;
    var prenom = document.getElementById("myForm").elements.namedItem("prenom").value;
    var phone = document.getElementById("myForm").elements.namedItem("phone").value;
    var addressMail = document.getElementById("myForm").elements.namedItem("addressMail").value;
    var message = document.getElementById("myForm").elements.namedItem("message").value;
    event.preventDefault()         
    if (nom.trim()==="" || prenom==="" || addressMail ==="" || message==="") {   
            errorModal.style.display = "block";        
            errorModal2.style.display = "block";
           errorModal3.style.display = "none";            
    }
    else if (isNaN(phone)) {
           errorModal.style.display = "block";           
            errorModal2.style.display = "none";           
           errorModal3.style.display = "block";
    }
    else {
        console.log("printing form values", "\n", nom,"\n", prenom,"\n" , phone,"\n" , addressMail,"\n" , message)
        modal.style.display = "block";
    }
}); 

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

span1.onclick = function() {
      errorModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }