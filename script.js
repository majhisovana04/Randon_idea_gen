const ideas = [
    "Build a personal budget tracker app.",
    "Design a to-do list with AI reminders.",
    "Create a fitness tracker with daily goals.",
    "Make a random quote generator.",
    "Develop a weather forecast app.",
    "Create a simple recipe sharing platform.",
    "Build a mindfulness breathing timer.",
    "Design a study planner with gamification.",
    "Create a virtual art gallery.",
    "Develop a language learning chatbot.",
  ];
  
  function generateIdea() {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    const ideaElement = document.getElementById("idea");
    ideaElement.textContent = `"${ideas[randomIndex]}"`;
  }
  
