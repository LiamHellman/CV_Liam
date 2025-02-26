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
      sidebarToggle.classList.remove("hidden"); // Show the toggle button when sidebar is closed
    }
  }

  // Function to close sidebar
  function closeSidebar() {
    isSidebarOpen = false;
    sidebar.classList.add("-translate-x-full");
    sidebarOverlay.classList.add("hidden");
    document.body.classList.remove("sidebar-open");
    sidebarToggle.classList.remove("hidden"); // Show the toggle button when sidebar is closed
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

document.addEventListener("DOMContentLoaded", function() {
  // Find the hero section and the place to embed the terminal
  const heroSection = document.getElementById('about');
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
    terminal.className = 'w-full mb-6 font-mono text-sm';
    
    // Create terminal header
    const header = document.createElement('div');
    header.className = 'flex items-center justify-between p-2 bg-gray-800 border-t border-l border-r border-green-400 rounded-t-md';
    
    const title = document.createElement('div');
    title.className = 'text-green-300 text-xs';
    title.textContent = 'resume-terminal';
    
    const controls = document.createElement('div');
    controls.className = 'flex space-x-1';
    
    ['#FF5F56', '#FFBD2E', '#27C93F'].forEach(color => {
      const circle = document.createElement('div');
      circle.className = 'w-2 h-2 rounded-full';
      circle.style.backgroundColor = color;
      controls.appendChild(circle);
    });
    
    header.appendChild(title);
    header.appendChild(controls);
    terminal.appendChild(header);
    
    // Create terminal body
    const body = document.createElement('div');
    body.className = 'p-3 bg-black border-l border-r border-green-400';
    
    // Create terminal output
    const output = document.createElement('div');
    output.id = 'embedded-terminal-output';
    output.className = 'text-green-400 mb-2 h-32 overflow-y-auto';
    body.appendChild(output);
    
    // Create input area
    const inputContainer = document.createElement('div');
    inputContainer.className = 'flex items-center';
    
    const prompt = document.createElement('span');
    prompt.className = 'mr-1';
    prompt.innerHTML = '<span class="text-green-300">liam@portfolio</span>:<span class="text-blue-400">~</span>$ ';
    inputContainer.appendChild(prompt);
    
    const input = document.createElement('input');
    input.id = 'embedded-terminal-input';
    input.className = 'flex-grow bg-transparent text-green-400 outline-none';
    input.type = 'text';
    input.autocomplete = 'off';
    input.placeholder = 'Type a command (try help)';
    inputContainer.appendChild(input);
    
    body.appendChild(inputContainer);
    
    // Create terminal footer
    const footer = document.createElement('div');
    footer.className = 'p-1 text-right text-xs text-green-300 bg-gray-800 border-b border-l border-r border-green-400 rounded-b-md';
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
    addToTerminalOutput('<span class="text-yellow-300">Welcome to Liam Hellman\'s portfolio terminal!</span>');
    
    // Auto-execute intro command after a brief delay
    setTimeout(() => {
      executeCommand('cat introduction.txt');
    }, 500);

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

    // Focus terminal on click
    document.getElementById('embedded-terminal').addEventListener('click', () => {
      terminal.focus();
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
            addToTerminalOutput('Available sections: about, education, experience, projects, skills, contact');
          } else {
            navigateToSection(args[1]);
          }
          break;
        case 'ls':
          listSections();
          break;
        case 'cat':
          if (args.length < 2) {
            addToTerminalOutput('Usage: cat [filename]');
          } else if (args[1] === 'introduction.txt') {
            showIntroduction();
          } else {
            addToTerminalOutput(`File not found: ${args[1]}`);
          }
          break;
        case 'whoami':
          addToTerminalOutput('visitor - You are browsing Liam Hellman\'s portfolio');
          break;
        case 'date':
          addToTerminalOutput(new Date().toString());
          break;
        case 'skills':
          showSkills();
          break;
        case 'project':
        case 'projects':
          if (args.length < 2) {
            listProjects();
          } else {
            showProject(args[1]);
          }
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
      addToTerminalOutput('  <span class="text-blue-400">goto, cd</span>       - Navigate to a section (e.g., goto about)');
      addToTerminalOutput('  <span class="text-blue-400">ls</span>             - List available sections');
      addToTerminalOutput('  <span class="text-blue-400">cat</span>            - Display file contents (try: cat introduction.txt)');
      addToTerminalOutput('  <span class="text-blue-400">whoami</span>         - Display current user');
      addToTerminalOutput('  <span class="text-blue-400">date</span>           - Display current date and time');
      addToTerminalOutput('  <span class="text-blue-400">skills</span>         - Show my skills');
      addToTerminalOutput('  <span class="text-blue-400">projects</span>       - List all projects');
      addToTerminalOutput('  <span class="text-blue-400">project [name]</span> - Show specific project details');
    }

    function listSections() {
      addToTerminalOutput('<span class="text-yellow-300">Available sections:</span>');
      addToTerminalOutput('about       education   experience');
      addToTerminalOutput('projects    skills      contact');
    }

    function navigateToSection(section) {
      const validSections = ['about', 'education', 'experience', 'projects', 'skills', 'contact'];
      
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
        addToTerminalOutput('Available sections: about, education, experience, projects, skills, contact');
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

    function showSkills() {
      // Pull skill data from the content object
      const language = document.documentElement.lang === 'fr' ? 'fr' : 'en';
      const skillsData = window.content?.[language]?.skills;
      
      if (skillsData) {
        addToTerminalOutput('<span class="text-yellow-300">Technical Skills:</span>');
        addToTerminalOutput('<span class="text-blue-400">Programming:</span> ' + skillsData.technical.programming.join(', '));
        addToTerminalOutput('<span class="text-blue-400">Frameworks:</span> ' + skillsData.technical.frameworks.join(', '));
        addToTerminalOutput('<span class="text-blue-400">Tools:</span> ' + skillsData.technical.tools.join(', '));
        addToTerminalOutput('<span class="text-blue-400">Databases:</span> ' + skillsData.technical.databases.join(', '));
        
        addToTerminalOutput('');
        addToTerminalOutput('<span class="text-yellow-300">Languages:</span> ' + skillsData.languages.join(', '));
        addToTerminalOutput('<span class="text-yellow-300">Key Qualities:</span> ' + skillsData.qualities.join(', '));
      } else {
        addToTerminalOutput('Skills data not available. Navigate to the Skills section for more information.');
        addToTerminalOutput('Type: <span class="text-blue-400">goto skills</span>');
      }
    }

    function listProjects() {
      // Pull project data from the content object
      const language = document.documentElement.lang === 'fr' ? 'fr' : 'en';
      const projectsData = window.content?.[language]?.projects;
      
      if (projectsData) {
        addToTerminalOutput('<span class="text-yellow-300">Projects:</span>');
        projectsData.forEach((project, index) => {
          addToTerminalOutput(`<span class="text-blue-400">${index + 1}. ${project.title}</span> - ${project.date}`);
        });
        addToTerminalOutput('');
        addToTerminalOutput('For details on a specific project, type:');
        addToTerminalOutput('<span class="text-blue-400">project [name]</span> (e.g., project roast-me)');
      } else {
        addToTerminalOutput('Projects data not available. Navigate to the Projects section for more information.');
        addToTerminalOutput('Type: <span class="text-blue-400">goto projects</span>');
      }
    }

    function showProject(projectName) {
      // Pull project data from the content object
      const language = document.documentElement.lang === 'fr' ? 'fr' : 'en';
      const projectsData = window.content?.[language]?.projects;
      
      if (projectsData) {
        const project = projectsData.find(p => p.title.toLowerCase().includes(projectName));
        
        if (project) {
          addToTerminalOutput(`<span class="text-yellow-300">${project.title}</span> - ${project.date}`);
          addToTerminalOutput(project.description);
          addToTerminalOutput('');
          addToTerminalOutput('<span class="text-blue-400">Technologies:</span> ' + project.technologies.join(', '));
          addToTerminalOutput('');
          addToTerminalOutput('<span class="text-blue-400">Key features:</span>');
          project.points.forEach(point => {
            addToTerminalOutput(`• ${point}`);
          });
        } else {
          addToTerminalOutput(`Project "${projectName}" not found. Type <span class="text-blue-400">projects</span> to see all projects.`);
        }
      } else {
        addToTerminalOutput('Projects data not available. Navigate to the Projects section for more information.');
        addToTerminalOutput('Type: <span class="text-blue-400">goto projects</span>');
      }
    }
  }
});