function sendMail() {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      emailjs
        .send("service_niluuxt", "template_v201iiq", {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
        })
        .then(
          function () {
            document.getElementById("alert").classList.remove("d-none");
            document.getElementById("contact-form").reset();
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    });
}

//

document.addEventListener("DOMContentLoaded", function() {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        if (entry.target.classList.contains("col-md-6")) {
          entry.target.classList.add("fade-in-left");
        }
        if (entry.target.classList.contains("col-md-6") && entry.target.nextElementSibling) {
          entry.target.nextElementSibling.classList.add("fade-in-right");
        }
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.contact .row, .contact .form-control, .contact .btn-primary, .contact .col-md-6').forEach((element) => {
    observer.observe(element);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const projectSection = document.getElementById('project');
  const projectItems = document.querySelectorAll('.project-item');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        projectItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add(index % 4 === 0 ? 'fade-in-up' : 
                              index % 4 === 1 ? 'fade-in-down' :
                              index % 4 === 2 ? 'fade-in-left' : 
                              'fade-in-right');
          }, index * 350); // Delay each item slightly
        });
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(projectSection);
});




