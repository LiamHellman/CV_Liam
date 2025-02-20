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
    } else {
      sidebar.classList.add("-translate-x-full");
      sidebarOverlay.classList.add("hidden");
      document.body.classList.remove("sidebar-open");
    }
  }

  // Function to close sidebar
  function closeSidebar() {
    isSidebarOpen = false;
    sidebar.classList.add("-translate-x-full");
    sidebarOverlay.classList.add("hidden");
    document.body.classList.remove("sidebar-open");
  }

  // Translations and content
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
  function createBubbles(items) {
    const container = document.createElement("div");
    container.className = "flex flex-wrap gap-2 mt-2";
    items.forEach(item => {
      const span = document.createElement("span");
      span.className = "px-3 py-1 bg-green-900 text-green-400 rounded-full text-sm font-medium";
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

      // Qualities
      const qualitiesHeading = document.createElement("h3");
      qualitiesHeading.innerText = "Qualities:";
      qualitiesHeading.className = "text-xl font-bold text-green-400";
      skillsCard.appendChild(qualitiesHeading);
      skillsCard.appendChild(createBubbles(skillsData.qualities));

      // Languages
      const languagesHeading = document.createElement("h3");
      languagesHeading.innerText = "Languages:";
      languagesHeading.className = "text-xl font-bold text-green-400 mt-4";
      skillsCard.appendChild(languagesHeading);
      skillsCard.appendChild(createBubbles(skillsData.languages));

      // Interests
      const interestsHeading = document.createElement("h3");
      interestsHeading.innerText = "Interests:";
      interestsHeading.className = "text-xl font-bold text-green-400 mt-4";
      skillsCard.appendChild(interestsHeading);
      skillsCard.appendChild(createBubbles(skillsData.interests));

      // Technical Skills
      const techHeading = document.createElement("h3");
      techHeading.innerText = "Technical Skills:";
      techHeading.className = "text-xl font-bold text-green-400 mt-4";
      skillsCard.appendChild(techHeading);

      const technical = skillsData.technical;
      const programmingHeading = document.createElement("h4");
      programmingHeading.innerText = "Programming:";
      programmingHeading.className = "text-lg font-bold text-green-400 mt-2";
      skillsCard.appendChild(programmingHeading);
      skillsCard.appendChild(createBubbles(technical.programming));

      const frameworksHeading = document.createElement("h4");
      frameworksHeading.innerText = "Frameworks:";
      frameworksHeading.className = "text-lg font-bold text-green-400 mt-2";
      skillsCard.appendChild(frameworksHeading);
      skillsCard.appendChild(createBubbles(technical.frameworks));

      const toolsHeading = document.createElement("h4");
      toolsHeading.innerText = "Tools:";
      toolsHeading.className = "text-lg font-bold text-green-400 mt-2";
      skillsCard.appendChild(toolsHeading);
      skillsCard.appendChild(createBubbles(technical.tools));

      const databasesHeading = document.createElement("h4");
      databasesHeading.innerText = "Databases:";
      databasesHeading.className = "text-lg font-bold text-green-400 mt-2";
      skillsCard.appendChild(databasesHeading);
      skillsCard.appendChild(createBubbles(technical.databases));

      skillsSectionContainer.appendChild(skillsCard);
    }
  }

  // Initial render of content
  renderContent();
});