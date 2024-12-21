new Typed('#type-it', {
        strings: ['Web Developer', 'Mobile Developer', 'Freelancer'],
        typeSpeed: 100,
        loop: true
    });

document.addEventListener('DOMContentLoaded', function () {
        const starsContainer = document.getElementById('stars-container');
        const numberOfStars = 100;
    
        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            
            const size = Math.random() * 3 + 1;
            star.style.width = `${15}px`;
            star.style.height = `${15}px`;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * 100}vh`;
    
           
            const animationDuration = Math.random() * 10 + 5;
            star.style.animationDuration = `${animationDuration}s`;
    
            starsContainer.appendChild(star);
        }
    });


window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});





emailjs.init("_8ksd7otem1E6G1dY"); 

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = this.name.value;
    const email = this.email.value;
    const subject = this.subject.value;
    const message = this.message.value;

    console.log({ from_name: name, from_email: email, subject: subject, message: message });

    emailjs.send("service_c8xwqmw", "template_oznd4mu", {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    })
    .then(function(response) {
        console.log("Email sent successfully!", response.status, response.text); 
        alert("Message sent successfully!");
    }, function(error) {
        console.error("Error sending email:", error); 
        alert("Failed to send message. Please try again.");
    });
});
document.getElementById('expandProjectsBtn').addEventListener('click', function () {
    const hiddenProjects = document.querySelector('.hidden-projects');
    const arrowIcon = document.getElementById('arrowIcon');
    const btn = this;

    if (hiddenProjects.style.display === 'none' || hiddenProjects.style.display === '') {
        hiddenProjects.style.display = 'block';
        arrowIcon.src = 'images/arrow_up.svg';
        btn.textContent = '';
        btn.prepend(arrowIcon); 
    } else {
        hiddenProjects.style.display = 'none';
        arrowIcon.src = 'images/arrow_down.svg'; 
        btn.textContent = '';
        btn.prepend(arrowIcon); 
    }
});
