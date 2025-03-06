document.addEventListener("DOMContentLoaded", function() {
    // Create overlay element

    console.log("Animation script loaded");
    window.debugTerminal = true;
    const overlay = document.createElement('div');
    overlay.id = 'loading-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'black';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '9999';
    overlay.style.transition = 'opacity 1s ease-out';
    
    // Create terminal container
    const terminalContainer = document.createElement('div');
    terminalContainer.className = 'loading-terminal';
    terminalContainer.style.width = '80%';
    terminalContainer.style.maxWidth = '600px';
    terminalContainer.style.backgroundColor = '#000';
    terminalContainer.style.border = '1px solid #48bb78';
    terminalContainer.style.borderRadius = '5px';
    terminalContainer.style.padding = '20px';
    terminalContainer.style.boxShadow = '0 0 20px rgba(72, 187, 120, 0.5)';
    
    // Create terminal header
    const terminalHeader = document.createElement('div');
    terminalHeader.style.borderBottom = '1px solid #48bb78';
    terminalHeader.style.paddingBottom = '10px';
    terminalHeader.style.marginBottom = '10px';
    terminalHeader.style.display = 'flex';
    terminalHeader.style.justifyContent = 'space-between';
    
    // Create terminal title
    const terminalTitle = document.createElement('div');
    terminalTitle.textContent = 'SYSTEM BOOT';
    terminalTitle.style.color = '#48bb78';
    terminalTitle.style.fontFamily = 'monospace';
    
    // Create terminal controls
    const terminalControls = document.createElement('div');
    terminalControls.style.display = 'flex';
    terminalControls.style.gap = '5px';
    
    // Add control circles
    ['#FF5F56', '#FFBD2E', '#27C93F'].forEach(color => {
      const circle = document.createElement('div');
      circle.style.width = '12px';
      circle.style.height = '12px';
      circle.style.borderRadius = '50%';
      circle.style.backgroundColor = color;
      terminalControls.appendChild(circle);
    });
    
    terminalHeader.appendChild(terminalTitle);
    terminalHeader.appendChild(terminalControls);
    terminalContainer.appendChild(terminalHeader);
    
    // Create terminal output area
    const terminalOutput = document.createElement('div');
    terminalOutput.id = 'loading-terminal-output';
    terminalOutput.style.color = '#48bb78';
    terminalOutput.style.fontFamily = 'monospace';
    terminalOutput.style.minHeight = '150px';
    terminalContainer.appendChild(terminalOutput);
    
    // Create progress bar container
    const progressContainer = document.createElement('div');
    progressContainer.style.width = '100%';
    progressContainer.style.backgroundColor = '#1a1a1a';
    progressContainer.style.borderRadius = '3px';
    progressContainer.style.marginTop = '20px';
    progressContainer.style.overflow = 'hidden';
    
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.id = 'loading-progress';
    progressBar.style.width = '0%';
    progressBar.style.height = '20px';
    progressBar.style.backgroundColor = '#48bb78';
    progressBar.style.transition = 'width 0.5s ease-in-out';
    progressContainer.appendChild(progressBar);
    
    terminalContainer.appendChild(progressContainer);
    overlay.appendChild(terminalContainer);
    document.body.appendChild(overlay);
    
    // Loading animation text
    const textSequence = [
      { text: "Initializing system...", delay: 500 },
      { text: "Running security checks...", delay: 800 },
      { text: "Loading neural interface...", delay: 1000 },
      { text: "Importing particle system...", delay: 800 },
      { text: "Connecting to network...", delay: 700 },
      { text: "Preparing user experience...", delay: 900 },
      { text: "Generating content...", delay: 800 },
      { text: "Portfolio system ready!", delay: 500 }
    ];
    
    // Typing effect function
    function typeText(element, text, speed = 30) {
      return new Promise(resolve => {
        let i = 0;
        const line = document.createElement('div');
        line.style.marginBottom = '8px';
        element.appendChild(line);
        
        function typeChar() {
          if (i < text.length) {
            line.textContent += text.charAt(i);
            i++;
            setTimeout(typeChar, speed);
          } else {
            resolve();
          }
        }
        
        typeChar();
      });
    }
    
    // Run animation sequence
    async function runAnimation() {
      const output = document.getElementById('loading-terminal-output');
      const progress = document.getElementById('loading-progress');
      
      let progressValue = 0;
      
      for (let i = 0; i < textSequence.length; i++) {
        await typeText(output, textSequence[i].text);
        await new Promise(resolve => setTimeout(resolve, textSequence[i].delay));
        
        // Update progress bar
        progressValue = (i + 1) / textSequence.length * 100;
        progress.style.width = progressValue + '%';
      }
      
      // Add matrix rain effect to the overlay before fading out
      createMatrixRain(overlay);
      
      // Fade out and remove overlay
      await new Promise(resolve => setTimeout(resolve, 1000));
      overlay.style.opacity = '0';
      
      // Remove overlay after transition
      setTimeout(() => {
        overlay.remove();
      }, 1000);
    }
    
    // Create matrix rain effect
    function createMatrixRain(container) {
      const canvas = document.createElement('canvas');
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.zIndex = '-1';
      container.appendChild(canvas);
      
      const ctx = canvas.getContext('2d');
      
      // Make canvas full screen
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Characters to use
      const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789';
      const columns = canvas.width / 20; // Each column is 20px wide
      const drops = [];
      
      // Initialize all columns with random values
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
      }
      
      function drawMatrixRain() {
        // Set semi-transparent black background for trails
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#48bb78'; // Matrix green
        ctx.font = '15px monospace';
        
        // Loop over each drop
        for (let i = 0; i < drops.length; i++) {
          // Get random character
          const text = characters.charAt(Math.floor(Math.random() * characters.length));
          
          // Draw character
          ctx.fillText(text, i * 20, drops[i] * 20);
          
          // Reset droplet to top if it reaches bottom or randomly
          if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          
          // Move drops down the screen
          drops[i]++;
        }
      }
      
      // Animation loop for matrix rain
      const matrixInterval = setInterval(drawMatrixRain, 33);
      
      // Clear interval when animation is done
      setTimeout(() => {
        clearInterval(matrixInterval);
      }, 2000);
    }
    
    // Start animation
    runAnimation();
  });