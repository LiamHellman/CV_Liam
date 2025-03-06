function initParticles() {
  if (typeof particlesJS !== 'undefined') {
    // Initialize particles with your JSON configuration
    fetch('particles.json')
      .then(response => response.json())
      .then(particlesConfig => {
        particlesJS('particles-js', particlesConfig);
        console.log('Particles.js initialized with custom config');
        
        // Add a glow effect to the particles container
        const particlesElement = document.getElementById('particles-js');
        if (particlesElement) {
          particlesElement.classList.add('particle-glow');
          // Ensure particles container is visible and spans full viewport
          particlesElement.style.opacity = '1';
          particlesElement.style.width = '100%';
          particlesElement.style.height = '100%';
          particlesElement.style.position = 'fixed';
          particlesElement.style.top = '0';
          particlesElement.style.left = '0';
          particlesElement.style.zIndex = '0';
        }
      })
      .catch(error => {
        console.error('Failed to load particles config:', error);
        // Fallback to basic particles config
        initBasicParticles();
      });
  } else {
    console.error('particlesJS is not defined!');
  }
}

// Fallback function with inline configuration
function initBasicParticles() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#00FFFF"
        },
        "shape": {
          "type": "circle"
        },
        "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#00FFFF",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": true,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "push": {
            "particles_nb": 4
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          }
        }
      },
      "retina_detect": true
    });
    console.log('Basic particles.js initialized');
  }
}

// Modify the existing document.addEventListener("DOMContentLoaded") block
document.addEventListener("DOMContentLoaded", function() {
  // Original content should be hidden initially
  const mainSections = document.querySelectorAll('#terminal, #education, #experience, #projects, #skills');
  mainSections.forEach(section => {
    if (section) {
      section.style.opacity = "0";
      section.style.transition = "opacity 0.8s ease-out";
      section.classList.remove('fade-in-up'); // Remove original animations temporarily
    }
  });
  
  // Wait for loading overlay to finish and remove
  const checkLoaderRemoved = setInterval(() => {
    if (!document.getElementById('loading-overlay')) {
      clearInterval(checkLoaderRemoved);
      
      // Initialize particles after loading animation completes
      initParticles();
      
      // Sequence the reveal of each section with slight delays
      let delay = 300;
      
      mainSections.forEach((section, index) => {
        if (section) {
          setTimeout(() => {
            section.style.opacity = "1";
            section.classList.add('content-enter');
          }, delay * (index + 1));
        }
      });
      
      // Re-initialize the terminal with a dramatic entrance
      const terminalElement = document.getElementById('embedded-terminal');
      if (terminalElement) {
        terminalElement.style.transform = "scale(0.9)";
        terminalElement.style.opacity = "0";
        
        setTimeout(() => {
          terminalElement.style.transition = "all 0.8s cubic-bezier(0.17, 0.84, 0.44, 1.2)";
          terminalElement.style.transform = "scale(1)";
          terminalElement.style.opacity = "1";
          
          // Simulate typing in the terminal after it appears
          setTimeout(() => {
            const terminalOutput = document.getElementById('embedded-terminal-output');
            if (terminalOutput) {
              const welcomeMessage = document.createElement('div');
              welcomeMessage.innerHTML = '<span class="text-yellow-300">System loaded successfully. Welcome to Liam Hellman\'s portfolio.</span>';
              terminalOutput.appendChild(welcomeMessage);
              terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }
          }, 800);
        }, delay * (mainSections.length + 1));
      }
    }
  }, 100);
});
      

// Enhanced particles initialization with more dynamic settings
document.addEventListener("DOMContentLoaded", function() {
  // Enhanced particles configuration
  if (typeof particlesJS !== 'undefined') {
    // Check if particles.js is loaded before initializing
    const enhancedParticleConfig = {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#48bb78"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#48bb78",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": true,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    };

    // Override the default particles initialization to use enhanced settings
    // But don't immediately initialize - wait for loading animation to complete
    const originalParticlesLoad = window.particlesJS ? window.particlesJS.load : null;
    if (originalParticlesLoad) {
      window.particlesJS.load = function(selector, path, callback) {
        // Just initialize with our custom config instead of loading from path
        window.particlesJS(selector, enhancedParticleConfig);
        if (callback) callback();
      };
    }
  }
});



document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded and DOM ready.");

  let language = "en";
  let isSidebarOpen = false;

  const sidebar = document.getElementById("sidebar");
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  
  // Toggle sidebar
  sidebarToggle.addEventListener("click", function () {
    toggleSidebar();
  });

  // Close sidebar when clicking overlay
  sidebarOverlay.addEventListener("click", function () {
    closeSidebar();
  });

  // Close sidebar when clicking a link
  const sidebarLinks = document.querySelectorAll("#sidebar a");
  sidebarLinks.forEach(link => {
    link.addEventListener("click", function () {
      closeSidebar();
    });
  });

  // Language toggle for sidebar
  document.getElementById("langToggleSidebar").addEventListener("click", function () {
    language = language === "en" ? "fr" : "en";
    renderContent();
    closeSidebar(); // Close the sidebar when language is toggled
  });

  // Initialize Particles.js
  particlesJS.load("particles-js", "particles.json", function () {
    console.log("Particles.js config loaded");
  });

  // Function to toggle sidebar
  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
    if (isSidebarOpen) {
      sidebar.classList.remove("-translate-x-full");
      sidebarOverlay.classList.remove("hidden");
      document.body.classList.add("sidebar-open");
      sidebarToggle.classList.add("hidden"); // Hide the toggle button when sidebar is open
    } else {
      sidebar.classList.add("-translate-x-full");
      sidebarOverlay.classList.add("hidden");
      document.body.classList.remove("sidebar-open");
      // Add a delay before showing the toggle button again
      setTimeout(() => {
        sidebarToggle.classList.remove("hidden");
      }, 300); // Match this with the sidebar transition duration
    }
  }

  // Function to close sidebar
  function closeSidebar() {
    isSidebarOpen = false;
    sidebar.classList.add("-translate-x-full");
    sidebarOverlay.classList.add("hidden");
    document.body.classList.remove("sidebar-open");
    // Add a delay before showing the toggle button again
    setTimeout(() => {
      sidebarToggle.classList.remove("hidden");
    }, 300); // Match this with the sidebar transition duration
  }
  // Translations and content
  const translations = {
    en: {
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact"
    },
    fr: {
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
      ],
      skills: {
        qualities: ["Punctual", "Eloquent", "Quick Learner", "Organized", "Attentive", "Sociable"],
        languages: ["French", "English"],
        interests: ["Cooking", "Robotics", "Computer Science", "Music", "Team Sports", "Visual Arts", "Finance"],
        technical: {
          programming: ["JavaScript", "Python", "C#", "HTML", "CSS", "SQL"],
          frameworks: ["React", "Unity", "jQuery"],
          tools: ["Git", "Azure", "Terraform", "OpenCV", "Dlib"],
          databases: ["MySQL", "PostgreSQL"]
        }
      }
    },
    fr: {
      personalInfo: {
        name: "Liam Hellman",
        title: "Étudiant en informatique",
        location: "Montréal, Canada"
      },
      education: [
        {
          degree: "Baccalauréat en informatique",
          institution: "Université de Montréal",
          period: "09/2024 - 04/2027",
          details: ["Programme coopératif"]
        },
        {
          degree: "DEC en Administration",
          institution: "Collège de Maisonneuve",
          period: "08/2022 - 05/2024",
          details: ["Économie", "Sciences Sociales"]
        },
        {
          degree: "DES en Formation Enrichie",
          institution: "Académie de Roberval",
          period: "08/2016 - 06/2021",
          details: ["Anglais langue première", "Robotique"]
        }
      ],
      experience: [
        {
          title: "Administrateur Système - Étudiant",
          company: "Croix Bleue Canassurance - Can Assistance",
          period: "05/2022 - 04/2023",
          responsibilities: [
            "Réorganisé le système DNS de l'entreprise",
            "Travaillé avec la technologie Azure",
            "Utilisé Terraform"
          ]
        },
        {
          title: "Cuisinier",
          company: "CPE Le Sablier",
          period: "05/2024 - 09/2024",
          responsibilities: [
            "Préparé divers menus",
            "Travaillé de manière efficace (200 couverts)",
            "Offert un excellent service client"
          ]
        },
        {
          title: "Technicien d'événements",
          company: "Expérience Centre-Ville XP-MTL",
          period: "06/2021 - 09/2021",
          responsibilities: [
            "Assisté les artistes avec le service client",
            "Géré l'organisation sur place et la coordination des artistes",
            "Géré la planification et la facturation (Excel)"
          ]
        },
        {
          title: "Support Santé et Technique",
          company: "Marchés Publiques de Montreal",
          period: "06/2020 - 08/2020",
          responsibilities: [
            "Fourni un service client",
            "Mis en place des mesures sanitaires COVID-19",
            "Organisé et agencé les installations du marché"
          ]
        }
      ],
      projects: [
        {
          title: "Roast-Me!",
          date: "Fév. 2025",
          description: "Application web alimentée par IA qui fournit des répliques en temps réel ou des compliments grâce à la reconnaissance faciale",
          technologies: ["HTML", "CSS", "JavaScript", "Python", "OpenCV", "Dlib"],
          points: [
            "Intégré le suivi facial en utilisant les bibliothèques OpenCV et Dlib",
            "Offert aux utilisateurs des répliques ou des compliments en envoyant des données faciales à l'API ChatGPT d'OpenAI",
            "Implémenté la voix off IA en utilisant l'API ElevenLabs"
          ]
        },
        {
          title: "MediWatch",
          date: "Janv. 2025",
          description: "Application web pour les patients attendant aux urgences",
          technologies: ["HTML", "CSS", "JavaScript", "Python", "SQL", "jQuery"],
          points: [
            "Créé un chatbot de soulagement de l'anxiété en utilisant l'API d'OpenAI",
            "Implémenté un mini-jeu interactif de type trivia et Wordle en utilisant des APIs externes",
            "Intégré l'API de l'IFEM pour simuler des temps d'attente réalistes basés sur la priorité des patients",
            "Rempli et modifié la base de données des patients en utilisant SQL"
          ]
        },
        {
          title: "McGameJam Project",
          date: "Janv. 2025",
          description: "Jeu de plateforme développé avec le moteur Unity",
          technologies: ["C#", "Unity Engine"],
          points: [
            "Conçu et implémenté les mécaniques de base incluant le mouvement du joueur, l'IA des ennemis et les interactions physiques"
          ]
        }
      ],
      skills: {
        qualities: ["Ponctuel", "Éloquent", "Apprenant rapide", "Organisé", "Attentif", "Sociable"],
        languages: ["Français", "Anglais"],
        interests: ["Cuisine", "Robotique", "Informatique", "Musique", "Sports d'équipe", "Arts visuels", "Finance"],
        technical: {
          programming: ["JavaScript", "Python", "C#", "HTML", "CSS", "SQL"],
          frameworks: ["React", "Unity", "jQuery"],
          tools: ["Git", "Azure", "Terraform", "OpenCV", "Dlib"],
          databases: ["MySQL", "PostgreSQL"]
        }
      }
    }
  };

  // Function to create bubbles for skills
  function createBubbles(items, colorClass) {
    const container = document.createElement("div");
    container.className = "flex flex-wrap gap-2 mt-2";
    items.forEach(item => {
      const span = document.createElement("span");
      span.className = `px-3 py-1 ${colorClass} rounded-full text-sm font-medium`;
      span.innerText = item;
      container.appendChild(span);
    });
    return container;
  }

  // Function to render content based on language
  function renderContent() {
    // Render Education Section (if container exists)
    const eduContainer = document.getElementById("educationContainer");
    if (eduContainer) {
      eduContainer.innerHTML = ""; // Clear existing content
      content[language].education.forEach(edu => {
        const eduDiv = document.createElement("div");
        eduDiv.className = "bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-green-400 hover:shadow-xl transition-shadow duration-300 p-6";
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
    }

    // Render Experience Section (if container exists)
    const expContainer = document.getElementById("experienceContainer");
    if (expContainer) {
      expContainer.innerHTML = ""; // Clear existing content
      content[language].experience.forEach(exp => {
        const expDiv = document.createElement("div");
        expDiv.className = "bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-green-400 hover:shadow-xl transition-shadow duration-300 p-6";
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
    }

    // Render Projects Section (if container exists)
    const projContainer = document.getElementById("projectsContainer");
    if (projContainer) {
      projContainer.innerHTML = ""; // Clear existing content
      content[language].projects.forEach(proj => {
        const projDiv = document.createElement("div");
        projDiv.className = "bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-green-400 hover:shadow-xl transition-shadow duration-300 p-6";
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
        projDiv.appendChild(headerDiv);
        projDiv.appendChild(descP);
        projDiv.appendChild(techDiv);
        projDiv.appendChild(ul);
        projContainer.appendChild(projDiv);
      });
    }

    // Render Skills & Interests Section (if container exists)
    const skillsSectionContainer = document.getElementById("skillsContent");
    if (skillsSectionContainer) {
      skillsSectionContainer.innerHTML = ""; // Clear existing content
      const skillsCard = document.createElement("div");
      skillsCard.className = "bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-green-400 hover:shadow-xl transition-shadow duration-300 p-6";
  
      const skillsData = content[language].skills;
  
      // Qualities - green theme
      const qualitiesHeading = document.createElement("h3");
      qualitiesHeading.innerText = "Qualities:";
      qualitiesHeading.className = "text-xl font-bold text-green-400";
      skillsCard.appendChild(qualitiesHeading);
      skillsCard.appendChild(createBubbles(skillsData.qualities, "bg-green-900 text-purple-100"));
  
      // Languages - blue theme
      const languagesHeading = document.createElement("h3");
      languagesHeading.innerText = "Languages:";
      languagesHeading.className = "text-xl font-bold text-green-400 mt-4";
      skillsCard.appendChild(languagesHeading);
      skillsCard.appendChild(createBubbles(skillsData.languages, "bg-blue-900 text-blue-100"));
  
      // Interests - cyan theme (fallback from teal)
      const interestsHeading = document.createElement("h3");
      interestsHeading.innerText = "Interests:";
      interestsHeading.className = "text-xl font-bold text-green-400 mt-4";
      skillsCard.appendChild(interestsHeading);
      skillsCard.appendChild(createBubbles(skillsData.interests, "bg-blue-800 text-white"));
  
      // Technical Skills - heading
      const techHeading = document.createElement("h3");
      techHeading.innerText = "Technical Skills:";
      techHeading.className = "text-xl font-bold text-green-400 mt-4";
      skillsCard.appendChild(techHeading);
  
      const technical = skillsData.technical;
      
      // Programming - red theme
      const programmingHeading = document.createElement("h4");
      programmingHeading.innerText = "Programming:";
      programmingHeading.className = "text-lg font-bold text-green-400 mt-2";
      skillsCard.appendChild(programmingHeading);
      skillsCard.appendChild(createBubbles(technical.programming, "bg-red-900 text-red-100"));
  
      // Frameworks - indigo theme 
      const frameworksHeading = document.createElement("h4");
      frameworksHeading.innerText = "Frameworks:";
      frameworksHeading.className = "text-lg font-bold text-green-400 mt-2";
      skillsCard.appendChild(frameworksHeading);
      skillsCard.appendChild(createBubbles(technical.frameworks, "bg-indigo-800 text-white"));
  
      // Tools - orange theme
      const toolsHeading = document.createElement("h4");
      toolsHeading.innerText = "Tools:";
      toolsHeading.className = "text-lg font-bold text-green-400 mt-2";
      skillsCard.appendChild(toolsHeading);
      skillsCard.appendChild(createBubbles(technical.tools, "bg-yellow-900 text-indigo-100"));
  
      // Databases - pruple theme (fallback from emerald)
      const databasesHeading = document.createElement("h4");
      databasesHeading.innerText = "Databases:";
      databasesHeading.className = "text-lg font-bold text-green-400 mt-2";
      skillsCard.appendChild(databasesHeading);
      skillsCard.appendChild(createBubbles(technical.databases, "bg-purple-800 text-white"));
  
      skillsSectionContainer.appendChild(skillsCard);
    }
  }

  // Initial render of content
  renderContent();


});






// Updated terminal implementation for embedding in the hero section

document.addEventListener("DOMContentLoaded", function() {
  // Find the hero section and the place to embed the terminal
  const heroSection = document.getElementById('terminal');
  if (!heroSection) return; // Exit if we're not on the homepage
  
  // Find the container where we'll embed the terminal
  const terminalContainer = heroSection.querySelector('.max-w-2xl');
  if (!terminalContainer) return;
  
  // Remove the existing fake terminal prompt
  const fakePrompt = terminalContainer.querySelector('p.text-sm.mb-4');
  if (fakePrompt) {
    fakePrompt.remove();
  }
  
  // Create and insert the embedded terminal
  createEmbeddedTerminal(terminalContainer);
  
  function createEmbeddedTerminal(container) {
    // Create terminal container
    const terminal = document.createElement('div');
    terminal.id = 'embedded-terminal';
    terminal.className = 'w-full mb-6 font-mono text-base relative z-20'; // Changed text-sm to text-base
    
    // Create terminal header
    const header = document.createElement('div');
    header.className = 'flex items-center justify-between p-3 bg-gray-800 border-t border-l border-r border-green-400 rounded-t-md'; // Increased padding
    
    const title = document.createElement('div');
    title.className = 'text-green-300 text-sm'; // Increased from text-xs
    title.textContent = 'Resume Terminal';
    
    const controls = document.createElement('div');
    controls.className = 'flex space-x-2'; // Increased spacing
    
    ['#FF5F56', '#FFBD2E', '#27C93F'].forEach(color => {
      const circle = document.createElement('div');
      circle.className = 'w-3 h-3 rounded-full'; // Increased size
      circle.style.backgroundColor = color;
      controls.appendChild(circle);
    });
    
    header.appendChild(title);
    header.appendChild(controls);
    terminal.appendChild(header);
    
    // Create terminal body
    const body = document.createElement('div');
    body.className = 'p-4 bg-black border-l border-r border-green-400'; // Increased padding
    body.style.minHeight = '300px'; // Ensure minimum height
    
    // Create terminal output
    const output = document.createElement('div');
    output.id = 'embedded-terminal-output';
    output.className = 'text-green-400 mb-3 overflow-y-auto'; // Increased margin
    output.style.height = '250px'; // Fixed height
    output.style.minHeight = '250px'; 
    output.style.maxHeight = '250px';
    body.appendChild(output);
    
    // Create input area
    const inputContainer = document.createElement('div');
    inputContainer.className = 'flex items-center mt-2'; // Added margin top
    
    const prompt = document.createElement('span');
    prompt.className = 'mr-2 text-base'; // Increased margin and font size
    prompt.innerHTML = '<span class="text-green-300">liam@portfolio</span>:<span class="text-blue-400">~</span>$ ';
    inputContainer.appendChild(prompt);
    
    const input = document.createElement('input');
    input.id = 'embedded-terminal-input';
    input.className = 'flex-grow bg-transparent text-green-400 outline-none text-base'; // Increased font size
    input.type = 'text';
    input.autocomplete = 'off';
    input.placeholder = 'ʕ•ᴥ•ʔ';
    inputContainer.appendChild(input);
    
    body.appendChild(inputContainer);
    
    // Create terminal footer
    const footer = document.createElement('div');
    footer.className = 'p-2 text-right text-sm text-green-300 bg-gray-800 border-b border-l border-r border-green-400 rounded-b-md'; // Increased font size
    footer.textContent = 'Type "help" for commands';
    
    terminal.appendChild(header);
    terminal.appendChild(body);
    terminal.appendChild(footer);
    
    // Insert terminal at the top of the container
    container.insertBefore(terminal, container.firstChild);
    
    // Initialize terminal functionality
    initializeTerminal();
  }
  
  function initializeTerminal() {
    const terminal = document.getElementById('embedded-terminal-input');
    const terminalOutput = document.getElementById('embedded-terminal-output');
    const terminalHistory = [];
    let historyIndex = -1;

    // Show welcome message
    addToTerminalOutput('');
    
    // Auto-execute intro command after a brief delay
    //setTimeout(() => {
    //  executeCommand('');
    //}, 500);

    // Terminal input handling
    terminal.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        const command = terminal.value.trim();
        
        if (command) {
          terminalHistory.push(command);
          historyIndex = terminalHistory.length;
          executeCommand(command);
          terminal.value = '';
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex > 0) {
          historyIndex--;
          terminal.value = terminalHistory[historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < terminalHistory.length - 1) {
          historyIndex++;
          terminal.value = terminalHistory[historyIndex];
        } else {
          historyIndex = terminalHistory.length;
          terminal.value = '';
        }
      }
    });

    // Focus terminal on click - more robust event handling
    document.getElementById('embedded-terminal').addEventListener('click', function(e) {
      e.stopPropagation();
      terminal.focus();
    }, true);
    
    // Make sure the terminal container is properly clickable
    document.querySelectorAll('#embedded-terminal, #embedded-terminal *').forEach(el => {
      el.addEventListener('click', function(e) {
        e.stopPropagation();
        terminal.focus();
      }, true);
    });

    // Execute terminal commands
    function executeCommand(command) {
      const commandLower = command.toLowerCase();
      const args = commandLower.split(' ');
      const cmd = args[0];

      addToTerminalOutput(`<span class="text-green-300">liam@portfolio</span>:<span class="text-blue-400">~</span>$ ${command}`);

      switch (cmd) {
        case 'help':
          showHelp();
          break;
        case 'clear':
        case 'cls':
          clearTerminal();
          break;
        case 'goto':
        case 'cd':
          if (args.length < 2) {
            addToTerminalOutput('Usage: goto [section]');
            addToTerminalOutput('Available sections: education, experience, projects, skills, contact');
          } else {
            navigateToSection(args[1]);
          }
          break;
        case 'ls':
          listSections();
          break;
        case 'whoami':
          addToTerminalOutput('visitor - You are browsing Liam Hellman\'s portfolio');
          break;
        case 'date':
          addToTerminalOutput(new Date().toString());
          break;
        default:
          addToTerminalOutput(`Command not found: ${command}. Type 'help' for available commands.`);
      }
    }

    // Terminal helper functions
    function addToTerminalOutput(text) {
      const line = document.createElement('div');
      line.className = 'mb-1';
      line.innerHTML = text;
      terminalOutput.appendChild(line);
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    function clearTerminal() {
      terminalOutput.innerHTML = '';
    }

    function showHelp() {
      addToTerminalOutput('<span class="text-yellow-300">Available commands:</span>');
      addToTerminalOutput('  <span class="text-blue-400">help</span>           - Show this help message');
      addToTerminalOutput('  <span class="text-blue-400">clear, cls</span>     - Clear terminal output');
      addToTerminalOutput('  <span class="text-blue-400">goto, cd</span>       - Navigate to a section (e.g., goto projects)');
      addToTerminalOutput('  <span class="text-blue-400">ls</span>             - List available sections');
      addToTerminalOutput('  <span class="text-blue-400">whoami</span>         - Display current user');
      addToTerminalOutput('  <span class="text-blue-400">date</span>           - Display current date and time');
    }

    function listSections() {
      addToTerminalOutput('<span class="text-yellow-300">Available sections:</span>');
      addToTerminalOutput('education   experience');
      addToTerminalOutput('projects    skills      contact');
    }

    function navigateToSection(section) {
      const validSections = ['education', 'experience', 'projects', 'skills', 'contact'];
      
      if (validSections.includes(section)) {
        if (section === 'contact') {
          window.location.href = 'contact.html';
          addToTerminalOutput(`Navigating to ${section}...`);
        } else {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            addToTerminalOutput(`Navigating to ${section}...`);
          } else {
            addToTerminalOutput(`Error: Section #${section} not found in the current page.`);
          }
        }
      } else {
        addToTerminalOutput(`Error: Section "${section}" not found.`);
        addToTerminalOutput('Available sections: education, experience, projects, skills, contact');
      }
    }

    function showIntroduction() {
      // Fetch the hero content and display it in the terminal
      const name = document.getElementById('heroName').innerText || content[language].personalInfo.name;
      const title = document.getElementById('heroTitle').innerText || content[language].personalInfo.title;
      const location = document.getElementById('heroLocation').innerText || content[language].personalInfo.location;
      
      addToTerminalOutput('<span class="text-yellow-300">// Introduction.txt</span>');
      addToTerminalOutput(`<span class="text-green-400 font-bold">${name}</span>`);
      addToTerminalOutput(`<span class="text-green-300">${title}</span>`);
      addToTerminalOutput(`<span class="text-green-300">${location}</span>`);
      addToTerminalOutput('');
      addToTerminalOutput('Welcome to my interactive portfolio! Use the terminal to navigate through my experience and projects.');
    }
  }
});


window.addEventListener('resize', function() {
  const terminal = document.getElementById('embedded-terminal');
  const terminalOutput = document.getElementById('embedded-terminal-output');
  
  if (terminal && terminalOutput) {
    // Apply fixed height to ensure consistency
    terminalOutput.style.height = '250px';
    terminalOutput.style.minHeight = '250px';
    terminalOutput.style.maxHeight = '250px';
    
    // Adjust for mobile devices
    if (window.innerWidth <= 640) {
      terminalOutput.style.height = '200px';
      terminalOutput.style.minHeight = '200px';
      terminalOutput.style.maxHeight = '200px';
    }
  }
});

// Apply terminal size immediately on load
document.addEventListener('DOMContentLoaded', function() {
  // Wait a short time to ensure DOM is fully loaded
  setTimeout(() => {
    const terminalOutput = document.getElementById('embedded-terminal-output');
    if (terminalOutput) {
      // Set fixed height
      terminalOutput.style.height = window.innerWidth <= 640 ? '200px' : '250px';
      terminalOutput.style.minHeight = window.innerWidth <= 640 ? '200px' : '250px';
      terminalOutput.style.maxHeight = window.innerWidth <= 640 ? '200px' : '250px';
      
      console.log('Terminal size applied successfully');
    }
  }, 500);
});

// Fix terminal clickability issues
document.addEventListener('DOMContentLoaded', function() {
  // Wait for the terminal to be fully created
  setTimeout(() => {
    const terminal = document.getElementById('embedded-terminal');
    const input = document.getElementById('embedded-terminal-input');
    
    if (terminal && input) {
      // Ensure the terminal and its children have proper z-index and pointer events
      terminal.style.position = 'relative';
      terminal.style.zIndex = '30';
      terminal.style.pointerEvents = 'auto';
      
      // Add a direct click handler to focus the input
      terminal.onclick = function(e) {
        input.focus();
        e.stopPropagation();
      };
      
      // Handle clicks on all terminal elements
      const terminalElements = terminal.querySelectorAll('*');
      terminalElements.forEach(element => {
        element.style.pointerEvents = 'auto';
        element.onclick = function(e) {
          input.focus();
          e.stopPropagation();
        };
      });
      
      // Focus the input on page load
      input.focus();
      
      console.log('Terminal click handlers applied');
    } else {
      console.log('Terminal elements not found');
    }
  }, 1000); // Wait a second for any animations to complete
  
});