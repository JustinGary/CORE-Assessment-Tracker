const questions = {
    curiosity: [
        "I enjoy learning about a variety of subjects",
        "I spend more time asking about others and listening than talking about myself",
        "I often get outside of my comfort zone and try new things",
        "When things don't go as planned, I dig deep to understand why. I don't accept the surface level answer"
    ],
    obsession: [
        "I can stay focussed on one task for a long time without issue",
        "I am conscious of how often I switch tasks or get diverted by distraction",
        "Once I start a project, I always see it through to conclusion",
        "I prioritize and take action on my most important tasks consistently"
    ],
    resilience: [
        "I am comfortable with uncertainty and change",
        "I see obstacles as learning opportunities",
        "I practice gratitude daily",
        "I have regular practices to rejuvenate myself and my energy reserves"
    ],
    empathy: [
        "I reflect back what others say, ensuring they feel heard",
        "I focus more on what I contribute to others than on what I receive",
        "I communicate my ideas clearly, confidently, and compellingly",
        "I am a leader and take 100% responsibility for my actions and outcomes"
    ]
};

// Generate the form HTML dynamically
window.onload = function() {
    const form = document.getElementById('assessmentForm');
    
    Object.entries(questions).forEach(([category, categoryQuestions]) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        categoryDiv.innerHTML = `<h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2>`;
        
        categoryQuestions.forEach((question, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            questionDiv.innerHTML = `
                <p>${question}</p>
                <select name="${category}-${index + 1}" required>
                    <option value="" disabled selected>Select a score</option>
                    <option value="1">1 - Not characteristic of me</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 - Very characteristic of me</option>
                </select>
            `;
            categoryDiv.appendChild(questionDiv);
        });
        
        form.insertBefore(categoryDiv, form.lastElementChild);
    });
};

document.getElementById('assessmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const scores = {
        curiosity: 0,
        obsession: 0,
        resilience: 0,
        empathy: 0
    };
    
    // Calculate scores for each category
    Object.keys(questions).forEach(category => {
        for (let i = 1; i <= 4; i++) {
            const value = parseInt(document.querySelector(`select[name="${category}-${i}"]`).value);
            scores[category] += value;
        }
    });
    
    // Display results
    document.getElementById('curiosityScore').textContent = scores.curiosity;
    document.getElementById('obsessionScore').textContent = scores.obsession;
    document.getElementById('resilienceScore').textContent = scores.resilience;
    document.getElementById('empathyScore').textContent = scores.empathy;
    
    document.getElementById('results').classList.remove('hidden');
}); 