function showThankYouMessage() {
    alert("Obrigado por entrar em contato conosco! Em breve responderemos você pelo email fornecido.");
  }
  
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    showThankYouMessage();
  });
  
  function animateButtonOnHover(button) {
    button.style.transform = "scale(1.1)";
  }
  
  function revertButtonAnimation(button) {
    button.style.transform = "scale(1)";
  }
  
  const queroViverSaudavelButton = document.getElementById("inicio-button");
  queroViverSaudavelButton.addEventListener("mouseover", function () {
    animateButtonOnHover(queroViverSaudavelButton);
  });
  queroViverSaudavelButton.addEventListener("mouseout", function () {
    revertButtonAnimation(queroViverSaudavelButton);
  });
  
  function redirectToContactSection() {
    const contatoSection = document.getElementById("contato");
    contatoSection.scrollIntoView({ behavior: "smooth" });
  }
  
  queroViverSaudavelButton.addEventListener("click", function () {
    redirectToContactSection();
  });
  
  const backButton = document.getElementById("back-to-top-button");
  backButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  


  