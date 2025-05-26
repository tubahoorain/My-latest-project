 // JavaScript to show the "Contact Us" section and overlay with fade-in effect
 document.getElementById("showContactUsButton321msg").addEventListener("click", function() {
  document.getElementById("overlay321msg").style.display = "block";
  document.querySelector(".contact-us321msg").style.display = "block";
  // Use setTimeout to trigger opacity change after the elements are displayed
  setTimeout(function() {
      document.getElementById("overlay321msg").style.opacity = "1";
      document.querySelector(".contact-us321msg").style.opacity = "1";
  }, 10); // A small delay to ensure smooth animation
});

// JavaScript to close the "Contact Us" section and overlay
function closeContactUs321msg() {
  document.getElementById("overlay321msg").style.opacity = "0";
  document.querySelector(".contact-us321msg").style.opacity = "0";
  setTimeout(function() {
      document.getElementById("overlay321msg").style.display = "none";
      document.querySelector(".contact-us321msg").style.display = "none";
  }, 500); // Wait for the animation to complete (0.5 seconds)
}

// JavaScript to handle sending a message
function sendMessage() {
  // You can add your own logic to send the message here, e.g., through AJAX or other methods.
  alert("Your message has been sent!");
}


document.getElementById("showServicesButton321").addEventListener("click", function() {
  document.getElementById("overlay321").style.display = "block";
  document.getElementById("services321").style.display = "block";
  // Use setTimeout to trigger opacity change after the elements are displayed
  setTimeout(function() {
      document.getElementById("overlay321").style.opacity = "1";
      document.getElementById("services321").style.opacity = "1";
  }, 10); // A small delay to ensure smooth animation
});

// JavaScript to close the "Services" section and overlay
function closeServices321() {
  document.getElementById("overlay321").style.opacity = "0";
  document.getElementById("services321").style.opacity = "0";
  setTimeout(function() {
      document.getElementById("overlay321").style.display = "none";
      document.getElementById("services321").style.display = "none";
  }, 500); // Wait for the animation to complete (0.5 seconds)
}
function closeServices21() {
  document.getElementById("overlay321").style.opacity = "0";
  document.getElementById("services21").style.opacity = "0";
  setTimeout(function() {
      document.getElementById("overlay321").style.display = "none";
      document.getElementById("services321").style.display = "none";
  }, 500); // Wait for the animation to complete (0.5 seconds)
}




$(document).ready(function () {
  $('#but').click(function () {
      $('#para').fadeToggle();
     
  });
});









     // Handle sign-in button click
     $('.sign-in-button').on('click', function() {
    $('.sign-in-form').fadeIn();
  });

  // Handle close button click
  $('.close-btn').on('click', function() {
    $('.sign-in-form').fadeOut();
  });

  // Handle form submission
  $('.sign-in-form form').on('submit', function(e) {
    e.preventDefault();
    const name = $('#nameInput').val();
    const initial = name.charAt(0).toUpperCase();
    $('.user-name').text(name);
    $('.user-initial').text(initial);
    $('.user-info').show();
    $('.sign-in-button').hide();
    $('.sign-in-form').fadeOut();
    alert('Congratulations, ' + name + '! You have been registered.');
  });

  // Handle dropdown actions
  $('.edit-account').on('click', function(e) {
    e.preventDefault();
    const name = $('.user-name').text();
    const email = prompt('Enter your new email:');
    if (email) {
      $('.user-name').text(name);
      alert('Account updated successfully!');
    }
  });
  $('.edit-account').on('click', function(e) {
    e.preventDefault();
    const name = $('.user-name').text();
    const newName = prompt('Enter your new name:');
    if (newName) {
      const initial = newName.charAt(0).toUpperCase();
      $('.user-name').text(newName);
      $('.user-initial').text(initial);
      alert('Account information updated successfully!');
    }
  });

  $('.log-out').on('click', function(e) {
    e.preventDefault();
    $('.user-name').text('');
    $('.user-initial').text('');
    $('.user-info').hide();
    $('.sign-in-button').show();
    alert('You have been logged out.');
  });



  $(document).ready(function() {
            // Show the form when the "Apply Now" button is clicked
            $("#applyButton").click(function() {
                $("#overlay").fadeIn();
            });

            // Handle form submission
            $("#courseForm").submit(function(e) {
                e.preventDefault();
                const selectedCourse = $("#course").val();
 // Handle close button click
 $('#close-btn').on('click', function() {
  $('.sign-in-form').fadeOut();
});
              
            });
        });

  


         
          // Handle form submission
          $("#courseForm").submit(function(e) {
            e.preventDefault();
            const selectedCourse = $("#course").val();
// Handle close button click
$('.close-button').on('click', function() {
$('.sign-in-form').fadeOut();
});
            // Open a new page based on the selected course (replace URL with actual URLs)
            switch (selectedCourse) {
                case "course1":
                    window.open("courses/office automation.html", "_blank");
                    break;
                case "course2":
                    window.open("courses/web design.html", "_blank");
                    break;
                case "course3":
                    window.open("courses/web development.html", "_blank");
                    break;
                case "course4":
                    window.open("courses/mobile.html", "_blank");
                    break;
                case "course5":
                    window.open("courses/seo.html", "_blank");
                    break;
                case "course6":
                    window.open("courses/autocad.html", "_blank");
                    break;
                case "course7":
                    window.open("courses/desktop.html", "_blank");
                    break;
                case "course8":
                    window.open("courses/excel.html", "_blank");
                    break;
                case "course9":
                    window.open("courses/freelance.html", "_blank");
                    break;
                case "course10":
                    window.open("courses/wordpress.html", "_blank");
                    break;
                case "course11":
                    window.open("courses/cloud.html", "_blank");
                    break;
                case "course12":
                    window.open("courses/game design & development.html", "_blank");
                    break;
                default:
                    alert("Invalid course selection");
            }
        });
  
        $(document).ready(function() {
          // Toggle sitemap on button click
          $("#toggleButton").click(function() {
            $("#sitemap").fadeToggle(400); // Toggle with fade effect
          });
        });
        $(document).ready(function () {
          const $carousel = $(".carousel");
          const $slides = $(".slide");
          const slideCount = $slides.length;
          let currentIndex = 0;
          let autoPlayInterval;

          function goToSlide(index) {
              currentIndex = index;
              const translateX = -currentIndex * 100 + "%";
              $carousel.css("transform", `translateX(${translateX})`);
          }

          function startAutoPlay() {
              autoPlayInterval = setInterval(() => {
                  if (currentIndex === slideCount - 1) {
                      goToSlide(0);
                  } else {
                      goToSlide(currentIndex + 1);
                  }
              }, 3000); // Change the time interval (in milliseconds) for auto-play here
          }

          function stopAutoPlay() {
              clearInterval(autoPlayInterval);
          }

          $(".prev").on("click", function () {
              stopAutoPlay();
              if (currentIndex === 0) {
                  goToSlide(slideCount - 1);
              } else {
                  goToSlide(currentIndex - 1);
              }
          });

          $(".next").on("click", function () {
              stopAutoPlay();
              if (currentIndex === slideCount - 1) {
                  goToSlide(0);
              } else {
                  goToSlide(currentIndex + 1);
              }
          });
          
        

        // Start auto-play by default
        startAutoPlay();
    });
