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
          degree: "BAC Informatique",
          institution: "Université de Montréal",
          period: "09/2024 - 04/2027",
          details: ["Orientation COOP"]
        },
        {
          degree: "DEC Administration",
          institution: "Collège de Maisonneuve",
          period: "08/2022 - 05/2024",
          details: ["Économie", "Sciences Sociales"]
        },
        {
          degree: "DES Formation Enrichie",
          institution: "Académie de Roberval",
          period: "08/2016 - 06/2021",
          details: ["Anglais langue première", "Robotique"]
        }
      ],
      experience: [
        {
          title: "Administrateur de Système - Étudiant",
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
            "Travail rapide (200 couverts)",
            "Service clientèle"
          ]
        },
        {
          title: "Technicien d'Événements",
          company: "Expérience Centre-Ville XP-MTL",
          period: "06/2021 - 09/2021",
          responsibilities: [
            "Assistance aux artistes pour le service clientèle",
            "Organisation sur le terrain et coordination des artistes",
            "Gestion des horaires et facturation (Excel)"
          ]
        },
        {
          title: "Support Sanitaire & Technique",
          company: "Marchés Publiques de Montréal",
          period: "06/2020 - 08/2020",
          responsibilities: [
            "Service clientèle",
            "Application des mesures sanitaires liées à la Covid-19",
            "Organisation et rangement des installations des marchés"
          ]
        }
      ],
      projects: [
        {
          title: "Roast-Me!",
          date: "Fév. 2025",
          description: "Application web propulsée par l'IA qui fournit en temps réel des moqueries ou des compliments grâce à la reconnaissance faciale",
          technologies: ["HTML", "CSS", "JavaScript", "Python", "OpenCV", "Dlib"],
          points: [
            "Intégration du suivi facial via les bibliothèques OpenCV et Dlib",
            "Fournit aux utilisateurs des moqueries ou des compliments en envoyant les données faciales à l'API ChatGPT d'OpenAI",
            "Implémentation d'une voix off IA via l'API ElevenLabs"
          ]
        },
        {
          title: "MediWatch",
          date: "Janv. 2025",
          description: "Application web pour les patients en attente aux urgences",
          technologies: ["HTML", "CSS", "JavaScript", "Python", "SQL", "jQuery"],
          points: [
            "Création d'un chatbot pour soulager l'anxiété à l'aide de l'API OpenAI",
            "Implémentation d'un mini-jeu interactif de type trivia et Wordle via des API externes",
            "Intégration de l'API IFEM pour simuler des temps d'attente réalistes selon les niveaux de priorité des patients",
            "Gestion et modification de la base de données des patients avec SQL"
          ]
        },
        {
          title: "McGameJam Project",
          date: "Janv. 2025",
          description: "Jeu de plateforme développé avec le moteur Unity",
          technologies: ["C#", "Unity Engine"],
          points: [
            "Conception et mise en œuvre des mécaniques principales, incluant le mouvement du joueur, l'IA des ennemis et les interactions physiques"
          ]
        }
      ],
      skills: {
        qualities: ["Ponctuel", "Éloquent", "Apprentissage Rapide", "Organisé", "Attentif", "Sociable"],
        languages: ["Français", "Anglais"],
        interests: ["Cuisine", "Robotique", "Informatique", "Musique", "Sports Collectifs", "Arts Visuels", "Finance"],
        technical: {
          programming: ["JavaScript", "Python", "C#", "HTML", "CSS", "SQL"],
          frameworks: ["React", "Unity", "jQuery"],
          tools: ["Git", "Azure", "Terraform", "OpenCV", "Dlib"],
          databases: ["MySQL", "PostgreSQL"]
        }
      }
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
    document.getElementById('heroName').classList.add('typewriter');
    document.getElementById('heroTitle').innerText = personalInfo.title;
    document.getElementById('heroLocation').innerText = personalInfo.location;

    // (Rendering for Education, Experience, Projects, and Skills would go here)
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

  // Add scroll event listener to shrink the nav on scroll
  window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 100) {
      nav.classList.add("shrink");
    } else {
      nav.classList.remove("shrink");
    }
  });
});
