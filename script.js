document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded and DOM ready.");

  let language = 'en';
  let isMenuOpen = false;

  const translations = {
    en: {
      about: "About",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact"
    },
    fr: {
      about: "À propos",
      education: "Formation",
      experience: "Expérience",
      projects: "Projets",
      contact: "Contact"
    }
  };

  const content = {
    en: {
      personalInfo: {
        name: "Liam Hellman",
        title: "Computer Science Student",
        location: "Montreal, Canada"
      },
      education: [
        {
          degree: "Bachelor's in Computer Science",
          institution: "University of Montreal",
          period: "09/2024 - 04/2027",
          details: ["Co-op Program"]
        },
        {
          degree: "DEC in Administration",
          institution: "Collège de Maisonneuve",
          period: "08/2022 - 05/2024",
          details: ["Economics", "Social Sciences"]
        },
        {
          degree: "DES in Enriched Training",
          institution: "Académie de Roberval",
          period: "08/2016 - 06/2021",
          details: ["English as First Language", "Robotics"]
        }
      ],
      experience: [
        {
          title: "System Administrator - Student",
          company: "Croix Bleue Canassurance - Can Assistance",
          period: "05/2022 - 04/2023",
          responsibilities: [
            "Rearranged the company's DNS system",
            "Worked with Azure technology",
            "Utilized Terraform"
          ]
        },
        {
          title: "Cook",
          company: "CPE Le Sablier",
          period: "05/2024 - 09/2024",
          responsibilities: [
            "Prepared various menus",
            "Worked efficiently (200 covers)",
            "Provided excellent customer service"
          ]
        },
        {
          title: "Events Technician",
          company: "Expérience Centre-Ville XP-MTL",
          period: "06/2021 - 09/2021",
          responsibilities: [
            "Assisted artists with customer service",
            "Managed on-site organization and artist coordination",
            "Handled scheduling and billing (Excel)"
          ]
        },
        {
          title: "Health & Technical Support",
          company: "Marchés Publiques de Montreal",
          period: "06/2020 - 08/2020",
          responsibilities: [
            "Provided customer service",
            "Implemented COVID-19 sanitary measures",
            "Organized and arranged market installations"
          ]
        }
      ],
      projects: [
        {
          title: "Roast-Me!",
          date: "Feb. 2025",
          description: "AI-powered web app that provides real-time roasts or compliments using facial recognition",
          technologies: ["HTML", "CSS", "JavaScript", "Python", "OpenCV", "Dlib"],
          points: [
            "Integrated facial tracking using OpenCV and Dlib libraries",
            "Provided users with roasts or compliments by sending facial data to OpenAI's ChatGPT API",
            "Implemented AI voice-over using ElevenLabs API"
          ]
        },
        {
          title: "MediWatch",
          date: "Jan. 2025",
          description: "Web app for patients waiting in the ER",
          technologies: ["HTML", "CSS", "JavaScript", "Python", "SQL", "jQuery"],
          points: [
            "Created an anxiety relief chatbot using OpenAI's API",
            "Implemented an interactive trivia and Wordle-style mini-game using external APIs",
            "Integrated IFEM's API to simulate realistic wait times based on patient priority levels",
            "Populated and modified the patient database using SQL"
          ]
        },
        {
          title: "McGameJam Project",
          date: "Jan. 2025",
          description: "Platformer game developed with the Unity engine",
          technologies: ["C#", "Unity Engine"],
          points: [
            "Designed and implemented core mechanics including player movement, enemy AI, and physics interactions"
          ]
        }
      ]
    },
    fr: {
      // French content (omitted for brevity)
    }
  };

  function renderContent() {
    // Set navigation texts
    document.getElementById('navAbout').innerText = translations[language].about;
    document.getElementById('navEducation').innerText = translations[language].education;
    document.getElementById('navExperience').innerText = translations[language].experience;
    document.getElementById('navProjects').innerText = translations[language].projects;
    document.getElementById('navContact').innerText = translations[language].contact;

    // Mobile Navigation
    document.getElementById('mobileNavAbout').innerText = translations[language].about;
    document.getElementById('mobileNavEducation').innerText = translations[language].education;
    document.getElementById('mobileNavExperience').innerText = translations[language].experience;
    document.getElementById('mobileNavProjects').innerText = translations[language].projects;
    document.getElementById('mobileNavContact').innerText = translations[language].contact;

    // Hero Section content
    const personalInfo = content[language].personalInfo;
    document.getElementById('heroName').innerText = personalInfo.name;
    document.getElementById('heroTitle').innerText = personalInfo.title;
    document.getElementById('heroLocation').innerText = personalInfo.location;

    // Render Education Section
    const eduContainer = document.getElementById('educationContainer');
    eduContainer.innerHTML = "";
    content[language].education.forEach(edu => {
      const eduDiv = document.createElement("div");
      eduDiv.className = "bg-gray-800 shadow rounded-lg p-6";
      const headerDiv = document.createElement("div");
      headerDiv.className = "flex justify-between items-start";
      const innerDiv = document.createElement("div");
      const h3 = document.createElement("h3");
      h3.className = "text-xl font-bold text-green-400";
      h3.innerText = edu.degree;
      const p = document.createElement("p");
      p.className = "text-green-300";
      p.innerText = edu.institution;
      innerDiv.appendChild(h3);
      innerDiv.appendChild(p);
      const periodSpan = document.createElement("span");
      periodSpan.className = "text-sm text-green-300";
      periodSpan.innerText = edu.period;
      headerDiv.appendChild(innerDiv);
      headerDiv.appendChild(periodSpan);
      const ul = document.createElement("ul");
      ul.className = "mt-4 space-y-2";
      edu.details.forEach(detail => {
        const li = document.createElement("li");
        li.className = "text-green-300";
        li.innerText = "• " + detail;
        ul.appendChild(li);
      });
      eduDiv.appendChild(headerDiv);
      eduDiv.appendChild(ul);
      eduContainer.appendChild(eduDiv);
    });

    // Render Experience Section
    const expContainer = document.getElementById('experienceContainer');
    expContainer.innerHTML = "";
    content[language].experience.forEach(exp => {
      const expDiv = document.createElement("div");
      expDiv.className = "bg-gray-800 shadow rounded-lg p-6";
      const headerDiv = document.createElement("div");
      headerDiv.className = "flex justify-between items-start";
      const innerDiv = document.createElement("div");
      const h3 = document.createElement("h3");
      h3.className = "text-xl font-bold text-green-400";
      h3.innerText = exp.title;
      const p = document.createElement("p");
      p.className = "text-green-300";
      p.innerText = exp.company;
      innerDiv.appendChild(h3);
      innerDiv.appendChild(p);
      const periodSpan = document.createElement("span");
      periodSpan.className = "text-sm text-green-300";
      periodSpan.innerText = exp.period;
      headerDiv.appendChild(innerDiv);
      headerDiv.appendChild(periodSpan);
      const ul = document.createElement("ul");
      ul.className = "mt-4 space-y-2";
      exp.responsibilities.forEach(resp => {
        const li = document.createElement("li");
        li.className = "text-green-300";
        li.innerText = "• " + resp;
        ul.appendChild(li);
      });
      expDiv.appendChild(headerDiv);
      expDiv.appendChild(ul);
      expContainer.appendChild(expDiv);
    });

    // Render Projects Section
    const projContainer = document.getElementById('projectsContainer');
    projContainer.innerHTML = "";
    content[language].projects.forEach(proj => {
      const projDiv = document.createElement("div");
      projDiv.className = "bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-green-400 hover:shadow-xl transition-shadow duration-300";
      const innerDiv = document.createElement("div");
      innerDiv.className = "p-6";
      const headerDiv = document.createElement("div");
      headerDiv.className = "flex justify-between items-start";
      const h3 = document.createElement("h3");
      h3.className = "text-xl font-bold text-green-400";
      h3.innerText = proj.title;
      const dateSpan = document.createElement("span");
      dateSpan.className = "text-sm text-green-300";
      dateSpan.innerText = proj.date;
      headerDiv.appendChild(h3);
      headerDiv.appendChild(dateSpan);
      const descP = document.createElement("p");
      descP.className = "mt-2 text-green-300";
      descP.innerText = proj.description;
      const techDiv = document.createElement("div");
      techDiv.className = "mt-4 flex flex-wrap gap-2";
      proj.technologies.forEach(tech => {
        const techSpan = document.createElement("span");
        techSpan.className = "px-2 py-1 bg-green-900 text-green-400 rounded text-sm";
        techSpan.innerText = tech;
        techDiv.appendChild(techSpan);
      });
      const ul = document.createElement("ul");
      ul.className = "mt-4 space-y-2";
      proj.points.forEach(point => {
        const li = document.createElement("li");
        li.className = "text-green-300 text-sm";
        li.innerText = "• " + point;
        ul.appendChild(li);
      });
      innerDiv.appendChild(headerDiv);
      innerDiv.appendChild(descP);
      innerDiv.appendChild(techDiv);
      innerDiv.appendChild(ul);
      projDiv.appendChild(innerDiv);
      projContainer.appendChild(projDiv);
    });
  }

  // Mobile menu toggle
  document.getElementById("menuToggle").addEventListener("click", function () {
    isMenuOpen = !isMenuOpen;
    const mobileMenu = document.getElementById("mobileMenu");
    if (isMenuOpen) {
      mobileMenu.classList.remove("hidden");
      document.getElementById("menuIcon").innerText = "✕";
    } else {
      mobileMenu.classList.add("hidden");
      document.getElementById("menuIcon").innerText = "☰";
    }
  });

  // Initialize Particles.js
  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js config loaded');
  });

  // Anime.js animations for nav items
  anime({
    targets: 'nav a, nav button',
    translateY: [-10, 0],
    opacity: [0, 1],
    delay: anime.stagger(100)
  });

  // Initial render of content
  renderContent();

  // Shrink the nav on scroll and hide extra items
  window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 100) {
      nav.classList.add("shrink");
    } else {
      nav.classList.remove("shrink");
    }
  });

  // Smooth scroll for "Get Started" button
  const getStartedBtn = document.getElementById("getStarted");
  if(getStartedBtn) {
    getStartedBtn.addEventListener("click", function(e) {
      e.preventDefault();
      document.getElementById("education").scrollIntoView({ behavior: "smooth" });
    });
  }
});
