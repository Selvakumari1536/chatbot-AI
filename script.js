// Medical Knowledge Database - MORE COMPREHENSIVE
const medicalKnowledge = {
    diabetes: {
        title: "🩸 Diabetes Type 2 Management",
        diet: {
            include: [
                "🥦 Non-starchy vegetables (broccoli, spinach)",
                "🍓 Berries and low-sugar fruits",
                "🌾 Whole grains (oats, quinoa)",
                "🥜 Nuts and seeds",
                "🐟 Fatty fish (salmon, mackerel)",
                "🥑 Avocados and olive oil"
            ],
            avoid: [
                "🍬 Sugary drinks and desserts",
                "🍚 White rice and bread",
                "🍟 Fried and processed foods",
                "🍌 High-sugar fruits (bananas, mangoes)",
                "🥓 Processed meats"
            ]
        },
        routine: [
            "🕖 7:00 AM: Check blood sugar, take medication",
            "🍳 7:30 AM: High-protein breakfast (eggs, Greek yogurt)",
            "🚶 8:30 AM: 30-minute morning walk",
            "🥗 12:30 PM: Fiber-rich lunch (salad with lean protein)",
            "🧘 3:00 PM: Stress-relief break (meditation)",
            "🍠 6:30 PM: Low-carb dinner (vegetables with fish)",
            "📝 9:00 PM: Log glucose readings, prepare for tomorrow",
            "😴 10:30 PM: 7-8 hours quality sleep"
        ],
        exercise: "🏃 150 minutes moderate exercise weekly (walking, swimming, cycling)",
        hydration: "💧 8-10 glasses water, herbal teas, limit caffeine",
        warnings: [
            "Monitor blood sugar regularly",
            "Foot care daily",
            "Regular eye checkups",
            "Carry emergency glucose"
        ]
    },
    hypertension: {
        title: "❤️ Hypertension Management",
        diet: {
            include: [
                "🍌 Potassium-rich foods (bananas, spinach)",
                "🥬 Leafy greens (kale, swiss chard)",
                "🍓 Berries and beets",
                "🎃 Garlic and onions",
                "🥜 Seeds (flax, chia)",
                "🐟 Omega-3 rich fish"
            ],
            avoid: [
                "🧂 High-sodium foods",
                "🥫 Canned and processed foods",
                "🍟 Fast food and fried items",
                "☕ Excessive caffeine",
                "🍺 Alcohol (limit to 1 drink/day)"
            ]
        },
        routine: [
            "🕖 7:00 AM: Blood pressure check, medication",
            "🥣 7:30 AM: Oatmeal with berries breakfast",
            "🧘 8:00 AM: 15-minute meditation",
            "🚶 10:00 AM: Brisk 20-minute walk",
            "🥗 1:00 PM: DASH diet lunch (quinoa salad)",
            "📊 4:00 PM: Second BP check if needed",
            "🍲 7:00 PM: Light dinner (soup, vegetables)",
            "📚 9:00 PM: Relaxing activity (reading)",
            "😴 10:00 PM: Sleep in cool, dark room"
        ],
        exercise: "🏊 30 minutes daily moderate exercise (walking, swimming, yoga)",
        hydration: "💧 8 glasses water, hibiscus tea, limit coffee to 2 cups",
        warnings: [
            "Monitor BP twice daily",
            "Reduce stress through relaxation",
            "Limit alcohol intake",
            "Maintain healthy weight"
        ]
    },
    arthritis: {
        title: "🦵 Arthritis Pain Management",
        diet: {
            include: [
                "🐟 Fatty fish (salmon, sardines)",
                "🫚 Turmeric and ginger",
                "🥜 Walnuts and almonds",
                "🫒 Olive oil",
                "🍓 Berries (blueberries, strawberries)",
                "🥦 Broccoli and spinach"
            ],
            avoid: [
                "🍟 Fried and processed foods",
                "🍖 Red meat",
                "🍭 Sugar and refined carbs",
                "🧈 Trans fats",
                "🍅 Nightshades (if sensitive)"
            ]
        },
        routine: [
            "🕗 8:00 AM: Gentle stretching",
            "🛁 8:30 AM: Warm shower to loosen joints",
            "🍎 9:00 AM: Anti-inflammatory breakfast (oatmeal with flax)",
            "🏊 10:00 AM: Low-impact exercise (swimming, water aerobics)",
            "🥗 1:00 PM: Lunch with omega-3s (salmon salad)",
            "💆 3:00 PM: Rest with joint elevation",
            "🔥 4:00 PM: Warm compress on painful joints",
            "🍲 7:00 PM: Light dinner (vegetable soup)",
            "🛀 9:00 PM: Warm bath with Epsom salts",
            "😴 10:00 PM: Sleep with supportive pillows"
        ],
        exercise: "🤸 Gentle range-of-motion exercises, swimming, tai chi, walking",
        hydration: "💧 8 glasses water, ginger tea, turmeric milk",
        warnings: [
            "Avoid high-impact activities",
            "Use joint protection techniques",
            "Maintain healthy weight",
            "Apply heat/cold as needed"
        ]
    },
    "weight-loss": {
        title: "⚖️ Healthy Weight Loss",
        diet: {
            include: [
                "🥦 High-fiber vegetables",
                "🍎 Whole fruits (apples, berries)",
                "🍗 Lean proteins (chicken, tofu)",
                "🌾 Whole grains (quinoa, brown rice)",
                "🥑 Healthy fats (avocado, nuts)",
                "🥚 Eggs and Greek yogurt"
            ],
            avoid: [
                "🍬 Sugary drinks and snacks",
                "🍟 Fried foods",
                "🍰 Processed desserts",
                "🥤 Liquid calories",
                "🍞 White bread and pasta"
            ]
        },
        routine: [
            "🕕 6:00 AM: Wake up, drink water",
            "🏃 6:30 AM: 45-minute cardio (running, cycling)",
            "🍳 8:00 AM: High-protein breakfast",
            "💧 10:00 AM: Water break, healthy snack",
            "🥗 12:30 PM: Vegetable-rich lunch",
            "🏋️ 4:00 PM: Strength training",
            "🥦 7:00 PM: Light dinner (protein + vegetables)",
            "🚶 8:00 PM: Evening walk",
            "📓 9:30 PM: Food journal review",
            "😴 10:30 PM: Sleep"
        ],
        exercise: "🏋️ 150+ minutes cardio + 2-3 strength sessions weekly",
        hydration: "💧 10-12 glasses water, green tea, black coffee",
        warnings: [
            "Aim for 1-2 lbs loss per week",
            "Don't skip meals",
            "Portion control",
            "Combine diet with exercise"
        ]
    }
};

// Chat messages array
let chatMessages = [];

// DOM Elements - WITH PROPER SELECTORS
let chatContainer, messageInput, sendBtn;

// Initialize the chat
function initChat() {
    // Get DOM elements
    chatContainer = document.getElementById('chatContainer');
    messageInput = document.getElementById('messageInput');
    sendBtn = document.getElementById('sendBtn');
    
    console.log("DOM Elements loaded:", {chatContainer, messageInput, sendBtn});
    
    // Check if elements exist
    if (!chatContainer || !messageInput || !sendBtn) {
        console.error("Missing DOM elements! Check your HTML IDs.");
        alert("Error loading chat interface. Please refresh the page.");
        return;
    }
    
    // Check if user has seen disclaimer
    if (!localStorage.getItem('disclaimerAccepted')) {
        setTimeout(() => {
            const modal = document.getElementById('disclaimerModal');
            if (modal) modal.style.display = 'flex';
        }, 1000);
    }
    
    // Load any saved messages
    loadChatHistory();
    
    // Set up event listeners
    setupEventListeners();
    
    console.log("Chatbot initialized successfully!");
}

// Set up all event listeners
function setupEventListeners() {
    // Send message on button click
    sendBtn.addEventListener('click', sendMessage);
    
    // Send message on Enter key (but not Shift+Enter)
    messageInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    // Clear chat button
    const clearChatBtn = document.getElementById('clearChat');
    if (clearChatBtn) {
        clearChatBtn.addEventListener('click', clearChat);
    }
    
    // Condition buttons
    document.querySelectorAll('.condition-btn').forEach(button => {
        button.addEventListener('click', () => {
            const condition = button.dataset.condition;
            const conditionNames = {
                diabetes: 'diabetes',
                hypertension: 'high blood pressure',
                arthritis: 'arthritis',
                'weight-loss': 'weight loss',
                cholesterol: 'high cholesterol',
                asthma: 'asthma',
                insomnia: 'insomnia',
                digestive: 'digestive issues'
            };
            
            const question = `Tell me about ${conditionNames[condition]}. What diet and routine should I follow?`;
            addMessage(question, true);
            generateAIResponse(question);
        });
    });
    
    // Quick question buttons
    document.querySelectorAll('.quick-btn').forEach(button => {
        button.addEventListener('click', () => {
            const question = button.textContent;
            addMessage(question, true);
            generateAIResponse(question);
        });
    });
    
    // Suggestion buttons
    document.querySelectorAll('.suggestion-btn').forEach(button => {
        button.addEventListener('click', () => {
            const question = button.textContent;
            addMessage(question, true);
            generateAIResponse(question);
        });
    });
    
    // Symptom checker
    const checkSymptomBtn = document.getElementById('checkSymptom');
    if (checkSymptomBtn) {
        checkSymptomBtn.addEventListener('click', checkSymptom);
    }
    
    // Emergency button
    const emergencyBtn = document.getElementById('emergencyBtn');
    if (emergencyBtn) {
        emergencyBtn.addEventListener('click', showEmergencyContacts);
    }
    
    // Disclaimer modal
    const showDisclaimerBtn = document.getElementById('showDisclaimer');
    if (showDisclaimerBtn) {
        showDisclaimerBtn.addEventListener('click', () => {
            const modal = document.getElementById('disclaimerModal');
            if (modal) modal.style.display = 'flex';
        });
    }
    
    // Close modal button
    const closeModalBtn = document.querySelector('.close-modal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            const modal = document.getElementById('disclaimerModal');
            if (modal) modal.style.display = 'none';
        });
    }
    
    // Accept disclaimer
    const acceptDisclaimerBtn = document.getElementById('acceptDisclaimer');
    if (acceptDisclaimerBtn) {
        acceptDisclaimerBtn.addEventListener('click', acceptDisclaimer);
    }
    
    // Reset chatbot
    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetChatbot);
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('disclaimerModal');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Add message to chat
function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    messageDiv.innerHTML = `
        <div class="avatar">
            <i class="fas ${isUser ? 'fa-user' : 'fa-robot'}"></i>
        </div>
        <div class="message-content">
            <div class="message-header">
                <strong>${isUser ? 'You' : 'Dr. HealthBot'}</strong>
                <span class="message-time">${time}</span>
            </div>
            <p>${text.replace(/\n/g, '<br>')}</p>
        </div>
    `;
    
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    // Save to chat history
    chatMessages.push({
        text,
        isUser,
        time: new Date().toISOString()
    });
    
    saveChatHistory();
}

// Show typing indicator
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing';
    typingDiv.innerHTML = `
        <div class="avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
            <div class="message-header">
                <strong>Dr. HealthBot</strong>
                <span class="message-time">Typing...</span>
            </div>
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    
    chatContainer.appendChild(typingDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    return typingDiv;
}

// Hide typing indicator
function hideTypingIndicator(typingElement) {
    if (typingElement && typingElement.parentNode) {
        typingElement.remove();
    }
}

// Generate AI response
function generateAIResponse(userInput) {
    const typingElement = showTypingIndicator();
    
    // Simulate AI processing delay
    setTimeout(() => {
        hideTypingIndicator(typingElement);
        
        let response = '';
        const inputLower = userInput.toLowerCase();
        
        // Check for specific conditions
        if (inputLower.includes('diabet')) {
            response = formatConditionResponse(medicalKnowledge.diabetes);
        }
        else if (inputLower.includes('blood pressure') || inputLower.includes('hypertension')) {
            response = formatConditionResponse(medicalKnowledge.hypertension);
        }
        else if (inputLower.includes('arthrit') || inputLower.includes('joint')) {
            response = formatConditionResponse(medicalKnowledge.arthritis);
        }
        else if (inputLower.includes('weight') || inputLower.includes('lose') || inputLower.includes('obesity')) {
            response = formatConditionResponse(medicalKnowledge['weight-loss']);
        }
        else if (inputLower.includes('breakfast')) {
            response = `**Healthy Breakfast Ideas:**\n\n🥣 **Oatmeal Bowl:** Oats with berries, nuts, and a spoon of almond butter\n🍳 **Protein Breakfast:** 2 eggs with spinach and whole-grain toast\n🥛 **Smoothie:** Greek yogurt, spinach, banana, and protein powder\n🥑 **Avocado Toast:** Whole-grain bread with avocado and poached eggs\n\n**Tip:** Include protein and fiber for sustained energy!`;
        }
        else if (inputLower.includes('exercise') || inputLower.includes('workout')) {
            response = `**Exercise Recommendations:**\n\n🏃 **Cardio:** 150 minutes weekly of moderate activity (brisk walking, cycling)\n💪 **Strength:** 2-3 sessions weekly focusing on major muscle groups\n🧘 **Flexibility:** Daily stretching or yoga for mobility\n⚖️ **Balance:** Especially important for older adults\n\n**For beginners:** Start with 10-15 minutes daily and gradually increase.`;
        }
        else if (inputLower.includes('water') || inputLower.includes('hydrat')) {
            response = `**Hydration Guidelines:**\n\n💧 **General:** 8-10 glasses (2-2.5 liters) of water daily\n🌡️ **Hot weather/Exercise:** Add 1-2 extra glasses\n🍉 **Hydrating Foods:** Watermelon, cucumber, oranges, strawberries\n🚫 **Limit:** Caffeinated and sugary drinks\n\n**Signs of good hydration:** Light yellow urine, moist mouth, good skin elasticity.`;
        }
        else if (inputLower.includes('stress') || inputLower.includes('anxiety')) {
            response = `**Stress Management Techniques:**\n\n🧘 **Meditation:** 5-10 minutes daily using apps like Headspace\n🏃 **Physical Activity:** 30 minutes of exercise reduces cortisol\n📝 **Journaling:** Write about worries and gratitude\n💤 **Sleep:** 7-8 hours quality sleep\n🍽️ **Nutrition:** Balanced meals, limit caffeine and alcohol\n🌳 **Nature:** Spend time outdoors daily\n\n**Quick stress relief:** 4-7-8 breathing (inhale 4s, hold 7s, exhale 8s)`;
        }
        else if (inputLower.includes('immun') || inputLower.includes('cold')) {
            response = `**Immunity-Boosting Foods:**\n\n🍊 **Vitamin C:** Citrus fruits, bell peppers, broccoli\n🥕 **Vitamin A:** Sweet potatoes, carrots, spinach\n🥜 **Zinc:** Nuts, seeds, legumes, whole grains\n🐟 **Omega-3:** Fatty fish, flaxseeds, walnuts\n🧄 **Garlic & Ginger:** Natural anti-inflammatory compounds\n🍄 **Mushrooms:** Shiitake, maitake for immune support\n\n**Lifestyle:** Adequate sleep, regular exercise, stress management.`;
        }
        else if (inputLower.includes('sleep') || inputLower.includes('insomnia')) {
            response = `**Sleep Improvement Tips:**\n\n🌙 **Routine:** Go to bed and wake up same time daily\n🛌 **Environment:** Cool, dark, quiet room (65-68°F ideal)\n📵 **Digital Detox:** No screens 1 hour before bed\n☕ **Caffeine:** None after 2 PM\n🧘 **Relaxation:** Reading, meditation, warm bath before bed\n🏃 **Exercise:** Regular but not too close to bedtime\n\n**Sleep duration:** Adults need 7-9 hours nightly.`;
        }
        else {
            // Generic health advice
            response = `I understand you're asking about health. Here's some general advice:\n\n**General Health Guidelines:**\n✅ Eat a variety of colorful fruits and vegetables daily\n✅ Stay hydrated with water throughout the day\n✅ Get 7-8 hours of quality sleep nightly\n✅ Exercise for 30 minutes most days\n✅ Manage stress through relaxation techniques\n✅ Avoid smoking and limit alcohol\n✅ Regular health check-ups\n\nCould you be more specific about your concern?`;
        }
        
        // Add disclaimer
        response += `\n\n---\n\n**⚠️ Medical Disclaimer:** This is general educational information only. Consult healthcare professionals for personal medical advice.`;
        
        addMessage(response, false);
    }, 1500 + Math.random() * 1000);
}

// Format condition response
function formatConditionResponse(condition) {
    return `
**${condition.title}**

**🥗 Recommended Diet:**
**Include:**\n${condition.diet.include.map(item => `• ${item}`).join('\n')}

**Avoid:**\n${condition.diet.avoid.map(item => `• ${item}`).join('\n')}

**⏰ Sample Daily Routine:**
${condition.routine.map(item => `• ${item}`).join('\n')}

**🏋️ Exercise:**
${condition.exercise}

**💧 Hydration:**
${condition.hydration}

**⚠️ Important Notes:**
${condition.warnings.map(item => `• ${item}`).join('\n')}
`;
}

// Handle sending message
function sendMessage() {
    const text = messageInput.value.trim();
    if (!text) {
        messageInput.focus();
        return;
    }
    
    console.log("Sending message:", text);
    addMessage(text, true);
    messageInput.value = '';
    messageInput.focus();
    
    generateAIResponse(text);
}

// Save chat history to localStorage
function saveChatHistory() {
    try {
        localStorage.setItem('medicalChatHistory', JSON.stringify(chatMessages));
    } catch (e) {
        console.warn("Could not save chat history:", e);
    }
}

// Load chat history from localStorage
function loadChatHistory() {
    try {
        const saved = localStorage.getItem('medicalChatHistory');
        if (saved) {
            chatMessages = JSON.parse(saved);
            chatMessages.forEach(msg => {
                addMessage(msg.text, msg.isUser);
            });
        }
    } catch (e) {
        console.warn("Could not load chat history:", e);
    }
}

// Clear chat history
function clearChat() {
    if (confirm('Are you sure you want to clear the chat history?')) {
        chatMessages = [];
        chatContainer.innerHTML = '';
        
        // Clear localStorage
        try {
            localStorage.removeItem('medicalChatHistory');
        } catch (e) {
            console.warn("Could not clear localStorage:", e);
        }
        
        // Add welcome message back
        const welcomeDiv = document.createElement('div');
        welcomeDiv.className = 'message bot-message';
        welcomeDiv.innerHTML = `
            <div class="avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <div class="message-header">
                    <strong>Dr. HealthBot</strong>
                    <span class="message-time">Just now</span>
                </div>
                <p>👋 Hello! I'm Dr. HealthBot, your AI medical assistant. How can I help you today?</p>
            </div>
        `;
        chatContainer.appendChild(welcomeDiv);
    }
}

// Check symptom function
function checkSymptom() {
    const symptomSelect = document.getElementById('symptomSelect');
    if (!symptomSelect) return;
    
    const symptom = symptomSelect.value;
    if (!symptom) {
        alert('Please select a symptom first.');
        return;
    }
    
    const symptomResponses = {
        headache: `**Headache Management:**\n\n💊 **Immediate relief:** Rest in dark room, cool compress on forehead\n💧 **Hydration:** Drink water (dehydration causes headaches)\n🍽️ **Food triggers:** Identify and avoid (common: chocolate, cheese, processed meats)\n😴 **Sleep:** Maintain regular sleep schedule\n💆 **Stress:** Practice relaxation techniques\n\n**Seek medical attention if:** Severe headache, sudden onset, with fever/stiff neck.`,
        fever: `**Fever Management:**\n\n🌡️ **Temperature:** Monitor every 4 hours\n💧 **Hydration:** Drink plenty of fluids (water, broth)\n🛌 **Rest:** Stay home and rest\n👕 **Clothing:** Light, breathable fabrics\n🚫 **Medication:** Acetaminophen or ibuprofen as directed\n\n**Seek medical attention if:** Fever over 103°F (39.4°C), lasts more than 3 days, or with severe symptoms.`,
        cough: `**Cough Management:**\n\n🍯 **Home remedies:** Honey in warm water, steam inhalation\n💧 **Hydration:** Warm fluids (tea, broth)\n💨 **Humidity:** Use humidifier, especially at night\n🚭 **Avoid:** Smoke, strong perfumes, dust\n🛌 **Elevate:** Sleep with extra pillows\n\n**Seek medical attention if:** Cough lasts more than 3 weeks, produces blood, or with shortness of breath.`,
        fatigue: `**Fatigue Management:**\n\n😴 **Sleep:** 7-8 hours quality sleep, consistent schedule\n🍽️ **Nutrition:** Iron-rich foods (spinach, lentils), regular meals\n🏃 **Exercise:** Gentle daily activity boosts energy\n💧 **Hydration:** Dehydration causes fatigue\n🧘 **Stress:** Manage through relaxation techniques\n\n**Consider checking:** Iron levels, thyroid function, sleep quality.`,
        nausea: `**Nausea Management:**\n\n🍋 **Home remedies:** Ginger tea, peppermint, lemon\n🍽️ **Diet:** Small, frequent bland meals (BRAT diet: bananas, rice, applesauce, toast)\n💧 **Hydration:** Sip clear fluids slowly\n🌬️ **Air:** Fresh air, avoid strong smells\n🚫 **Avoid:** Greasy, spicy, or strong-smelling foods\n\n**Seek medical attention if:** Severe, persistent, or with abdominal pain/fever.`
    };
    
    const question = `I have ${symptom}. What should I do?`;
    addMessage(question, true);
    
    const typingElement = showTypingIndicator();
    setTimeout(() => {
        hideTypingIndicator(typingElement);
        addMessage(symptomResponses[symptom] + `\n\n---\n\n**⚠️ Medical Disclaimer:** This is general information only. Consult a doctor for proper diagnosis.`, false);
    }, 1500);
}

// Show emergency contacts
function showEmergencyContacts() {
    if (confirm('🚨 **EMERGENCY ALERT**\n\nIf this is a medical emergency, please call 911 or your local emergency number immediately.\n\nDo you want to see emergency contacts?')) {
        const emergencyMessage = `**🚨 EMERGENCY CONTACTS:**\n\n📞 **Emergency Services:** 911 (USA) / 112 (EU)\n💊 **Poison Control:** 1-800-222-1222\n🧠 **Mental Health Crisis:** 988 Suicide & Crisis Lifeline\n👶 **Pediatric Emergency:** Contact pediatrician immediately\n\n**Go to ER for:**\n• Chest pain/pressure\n• Difficulty breathing\n• Severe injury\n• Stroke symptoms (FAST: Face drooping, Arm weakness, Speech difficulty, Time to call)\n• Severe allergic reaction\n• Uncontrolled bleeding\n\n**⚠️ This chatbot cannot provide emergency care.**`;
        addMessage(emergencyMessage, false);
    }
}

// Accept disclaimer
function acceptDisclaimer() {
    const agreeCheckbox = document.getElementById('agreeDisclaimer');
    if (!agreeCheckbox) return;
    
    if (agreeCheckbox.checked) {
        try {
            localStorage.setItem('disclaimerAccepted', 'true');
            const modal = document.getElementById('disclaimerModal');
            if (modal) modal.style.display = 'none';
            alert('Thank you for acknowledging the disclaimer. Remember to always consult healthcare professionals for medical advice.');
        } catch (e) {
            console.warn("Could not save disclaimer acceptance:", e);
        }
    } else {
        alert('Please check the box to acknowledge the disclaimer.');
    }
}

// Reset chatbot
function resetChatbot() {
    if (confirm('Reset the chatbot to initial state?')) {
        try {
            localStorage.removeItem('disclaimerAccepted');
        } catch (e) {
            console.warn("Could not remove disclaimer acceptance:", e);
        }
        clearChat();
        initChat();
    }
}

// Initialize chat when page loads
document.addEventListener('DOMContentLoaded', initChat);

// Add some initial sample interaction
setTimeout(() => {
    if (chatMessages.length === 0) {
        addMessage("Try clicking on 'Diabetes' or 'Hypertension' in the sidebar for instant advice!", false);
    }
}, 3000);

// Debug function to check if everything is working
console.log("Medical Chatbot script loaded!");