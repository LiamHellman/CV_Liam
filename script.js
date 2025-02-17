/* script.js */

let language = 'en';
let isMenuOpen = false;

const translations = {
  en: {
    about: "About",
    education: "Education",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills & Interests",
    contact: "Contact",
    qualities: "Qualities",
    languages: "Languages",
    interests: "Interests",
    technicalSkills: "Technical Skills",
    programmingLanguages: "Programming Languages",
    frameworks: "Frameworks & Libraries",
    tools: "Tools & Technologies",
    databases: "Databases",
    professionalExperience: "Professional Experience"
  },
  fr: {
    about: "À propos",
    education: "Formation",
    experience: "Expérience",
    projects: "Projets",
    skills: "Compétences & Intérêts",
    contact: "Contact",
    qualities: "Qualités",
    languages: "Langues",
    interests: "Intérêts",
    technicalSkills: "Compétences Techniques",
    programmingLanguages: "Langages de Programmation",
    frameworks: "Frameworks & Bibliothèques",
    tools: "Outils & Technologies",
    databases: "Bases de Données",
    professionalExperience: "Expérience Professionnelle"
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
  const personalInfo = content[language].personalInfo;
  const education = content[language].education;
  const experience = content[language].experience;
  const projects = content[language].projects;
  const skills = content[language].skills;
  const t = translations[language];

  // Navigation (Desktop)
  document.getElementById('navName').innerText = personalInfo.name;
  document.getElementById('navAbout').innerText = t.about;
  document.getElementById('navEducation').innerText = t.education;
  document.getElementById('navExperience').innerText = t.experience;
  document.getElementById('navProjects').innerText = t.projects;
  document.getElementById('navSkills').innerText = t.skills;
  if(document.getElementById('navContact')) {
    document.getElementById('navContact').innerText = t.contact;
  }

  // Navigation (Mobile)
  document.getElementById('mobileNavAbout').innerText = t.about;
  document.getElementById('mobileNavEducation').innerText = t.education;
  document.getElementById('mobileNavExperience').innerText = t.experience;
  document.getElementById('mobileNavProjects').innerText = t.projects;
  document.getElementById('mobileNavSkills').innerText = t.skills;
  if(document.getElementById('mobileNavContact')) {
    document.getElementById('mobileNavContact').innerText = t.contact;
  }

  // Language Toggle Buttons
  const langButtonText = language === 'en' ? 'FR' : 'EN';
  document.getElementById('langToggleDesktop').innerText = langButtonText;
  document.getElementById('langToggleMobile').innerText = langButtonText;

  // Hero Section
  document.getElementById('heroName').innerText = personalInfo.name;
  // Trigger the typewriter effect after text is set
  document.getElementById('heroName').classList.add('typewriter');
  document.getElementById('heroTitle').innerText = personalInfo.title;
  document.getElementById('heroLocation').innerText = personalInfo.location;

  // Skills Section Headings
  document.getElementById('skillsHeading').innerText = t.skills;
  document.getElementById('qualitiesHeading').innerText = t.qualities;
  document.getElementById('languagesHeading').innerText = t.languages;
  document.getElementById('interestsHeading').innerText = t.interests;
  document.getElementById('technicalSkillsHeading').innerText = t.technicalSkills;
  document.getElementById('programmingLanguagesHeading').innerText = t.programmingLanguages;
  document.getElementById('frameworksHeading').innerText = t.frameworks;
  document.getElementById('toolsHeading').innerText = t.tools;
  document.getElementById('databasesHeading').innerText = t.databases;

  // Populate Qualities
  const qualitiesContainer = document.getElementById('qualitiesContainer');
  qualitiesContainer.innerHTML = "";
  skills.qualities.forEach(quality => {
    const span = document.createElement("span");
    span.className = "px-3 py-1 bg-green-900 text-green-400 rounded-full text-sm font-medium";
    span.innerText = quality;
    qualitiesContainer.appendChild(span);
  });

  // Populate Languages
  const languagesContainer = document.getElementById('languagesContainer');
  languagesContainer.innerHTML = "";
  skills.languages.forEach(lang => {
    const span = document.createElement("span");
    span.className = "px-3 py-1 bg-green-900 text-green-400 rounded-full text-sm font-medium";
    span.innerText = lang;
    languagesContainer.appendChild(span);
  });

  // Populate Interests
  const interestsContainer = document.getElementById('interestsContainer');
  interestsContainer.innerHTML = "";
  skills.interests.forEach(interest => {
    const span = document.createElement("span");
    span.className = "px-3 py-1 bg-green-900 text-green-400 rounded-full text-sm font-medium";
    span.innerText = interest;
    interestsContainer.appendChild(span);
  });

  // Populate Technical Skills: Programming
  const programmingContainer = document.getElementById('programmingContainer');
  programmingContainer.innerHTML = "";
  skills.technical.programming.forEach(lang => {
    const span = document.createElement("span");
    span.className = "px-3 py-1 bg-green-900 text-green-400 rounded-full text-sm font-medium";
    span.innerText = lang;
    programmingContainer.appendChild(span);
  });

  // Populate Technical Skills: Frameworks
  const frameworksContainer = document.getElementById('frameworksContainer');
  frameworksContainer.innerHTML = "";
  skills.technical.frameworks.forEach(framework => {
    const span = document.createElement("span");
    span.className = "px-3 py-1 bg-green-900 text-green-400 rounded-full text-sm font-medium";
    span.innerText = framework;
    frameworksContainer.appendChild(span);
  });

  // Populate Technical Skills: Tools
  const toolsContainer = document.getElementById('toolsContainer');
  toolsContainer.innerHTML = "";
  skills.technical.tools.forEach(tool => {
    const span = document.createElement("span");
    span.className = "px-3 py-1 bg-green-900 text-green-400 rounded-full text-sm font-medium";
    span.innerText = tool;
    toolsContainer.appendChild(span);
  });

  // Populate Technical Skills: Databases
  const databasesContainer = document.getElementById('databasesContainer');
  databasesContainer.innerHTML = "";
  skills.technical.databases.forEach(db => {
    const span = document.createElement("span");
    span.className = "px-3 py-1 bg-green-900 text-green-400 rounded-full text-sm font-medium";
    span.innerText = db;
    databasesContainer.appendChild(span);
  });

  // Projects Section
  document.getElementById('projectsHeading').innerText = t.projects;
  const projectsContainer = document.getElementById('projectsContainer');
  projectsContainer.innerHTML = "";
  projects.forEach(project => {
    const projectDiv = document.createElement("div");
    projectDiv.className = "bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-green-400 hover:shadow-xl transition-shadow duration-300";
    
    const innerDiv = document.createElement("div");
    innerDiv.className = "p-6";
    
    const headerDiv = document.createElement("div");
    headerDiv.className = "flex justify-between items-start";
    const h3 = document.createElement("h3");
    h3.className = "text-xl font-bold text-green-400";
    h3.innerText = project.title;
    const dateSpan = document.createElement("span");
    dateSpan.className = "text-sm text-green-300";
    dateSpan.innerText = project.date;
    headerDiv.appendChild(h3);
    headerDiv.appendChild(dateSpan);
    
    const descriptionP = document.createElement("p");
    descriptionP.className = "mt-2 text-green-300";
    descriptionP.innerText = project.description;
    
    const techDiv = document.createElement("div");
    techDiv.className = "mt-4 flex flex-wrap gap-2";
    project.technologies.forEach(tech => {
      const techSpan = document.createElement("span");
      techSpan.className = "px-2 py-1 bg-green-900 text-green-400 rounded text-sm";
      techSpan.innerText = tech;
      techDiv.appendChild(techSpan);
    });
    
    const pointsUl = document.createElement("ul");
    pointsUl.className = "mt-4 space-y-2";
    project.points.forEach(point => {
      const li = document.createElement("li");
      li.className = "text-green-300 text-sm";
      li.innerText = "• " + point;
      pointsUl.appendChild(li);
    });
    
    innerDiv.appendChild(headerDiv);
    innerDiv.appendChild(descriptionP);
    innerDiv.appendChild(techDiv);
    innerDiv.appendChild(pointsUl);
    projectDiv.appendChild(innerDiv);
    projectsContainer.appendChild(projectDiv);
  });

  // Experience Section
  document.getElementById('experienceHeading').innerText = t.professionalExperience;
  const experienceContainer = document.getElementById('experienceContainer');
  experienceContainer.innerHTML = "";
  experience.forEach(exp => {
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
    experienceContainer.appendChild(expDiv);
  });

  // Education Section
  document.getElementById('educationHeading').innerText = t.education;
  const educationContainer = document.getElementById('educationContainer');
  educationContainer.innerHTML = "";
  education.forEach(edu => {
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
    educationContainer.appendChild(eduDiv);
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

// Language toggle for both desktop and mobile
document.getElementById("langToggleDesktop").addEventListener("click", function () {
  language = language === "en" ? "fr" : "en";
  renderContent();
});
document.getElementById("langToggleMobile").addEventListener("click", function () {
  language = language === "en" ? "fr" : "en";
  renderContent();
});

// Set initial menu icon
document.getElementById("menuIcon").innerText = "☰";

// Initialize Particles.js
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles.js config loaded');
});

// Optionally add additional Anime.js animations
anime({
  targets: 'nav a, nav button',
  translateY: [-10, 0],
  opacity: [0, 1],
  delay: anime.stagger(100)
});

// Initial render
renderContent();
