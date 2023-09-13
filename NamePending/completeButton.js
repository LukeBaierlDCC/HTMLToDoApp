const buttons = document.querySelectorAll(".complete-button");

      
      buttons.forEach(function(button) {
          button.addEventListener("click", function() {
              
              const listItem = button.parentElement;
              listItem.textContent = "Complete";
          });
      });
