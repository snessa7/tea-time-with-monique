// Monique's Mind Blowers - Main JavaScript

// Global variables
let topics = [];
let filteredTopics = [];
let currentCategory = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadTopics();
    setupEventListeners();
    updateStats();
});

// Load topics from JSON
async function loadTopics() {
    try {
        const response = await fetch('topics.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        topics = await response.json();
        filteredTopics = [...topics];
        renderTopics();
    } catch (error) {
        console.error('Error loading topics:', error);
        showError('Failed to load topics. Please refresh the page.');
    }
}
// Setup event listeners
function setupEventListeners() {
    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.category;
            filterByCategory(category);
        });
    });
    
    // Search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchTopics(e.target.value);
    });
    
    // Modal close on outside click
    const modal = document.getElementById('topicModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Render topics
function renderTopics() {
    const grid = document.getElementById('topicsGrid');
    grid.innerHTML = '';
        
    filteredTopics.forEach(topic => {
        const card = createTopicCard(topic);
        grid.appendChild(card);
    });
    
    updateStats();
}

// Create topic card
function createTopicCard(topic) {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.onclick = () => openTopic(topic);
    
    card.innerHTML = `
        <span class="topic-category">${topic.category}</span>
        <h3 class="topic-title">${topic.title}</h3>
        <p class="topic-description">${topic.description}</p>
        <div class="topic-meta">
            <span>${topic.readTime}</span>
            <span>${topic.views} views</span>
        </div>
    `;
    
    return card;
}
// Open topic in modal
async function openTopic(topic) {
    const modal = document.getElementById('topicModal');
    const modalBody = document.getElementById('modalBody');
    
    // Show modal with loading state
    modal.classList.add('active');
    modalBody.innerHTML = '<p style="text-align: center; font-family: Georgia, serif; font-size: 1.2rem;">☕ Steeping your tea... Please wait while we brew this hot topic!</p>';
    
    try {
        // Fetch the topic HTML file
        const response = await fetch(topic.file);
        if (!response.ok) {
            throw new Error(`Failed to brew content: ${response.status}`);
        }
        
        const content = await response.text();
        modalBody.innerHTML = content;
        
        // Update view count
        topic.views += 1;
        saveViewCount(topic.id, topic.views);
        
    } catch (error) {
        console.error('Error loading topic:', error);
        modalBody.innerHTML = `
            <div style="text-align: center; color: #f4a0c4; font-family: Georgia, serif;">
                <h2>☕ Oh dear! The tea got cold...</h2>
                <p style="margin: 1rem 0;">We couldn't serve this piping hot content.</p>
                <p style="font-size: 0.9rem; opacity: 0.8;">Error: ${error.message}</p>
                <p style="margin-top: 2rem;">
                    <button onclick="closeModal()" style="padding: 0.7rem 1.5rem; background: #d4a574; border: none; border-radius: 25px; cursor: pointer; font-family: Georgia, serif; font-size: 1rem;">
                        Back to the Tea Menu
                    </button>
                </p>
            </div>
        `;
    }
}
// Close modal
function closeModal() {
    const modal = document.getElementById('topicModal');
    modal.classList.remove('active');
}

// Filter by category
function filterByCategory(category) {
    currentCategory = category;
    
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    
    // Filter topics
    if (category === 'all') {
        filteredTopics = [...topics];
    } else {
        filteredTopics = topics.filter(topic => topic.category === category);
    }
    
    renderTopics();
}

// Search topics
function searchTopics(query) {
    const searchTerm = query.toLowerCase();
    
    if (!searchTerm) {
        filterByCategory(currentCategory);
        return;
    }    
    filteredTopics = topics.filter(topic => {
        const matchesSearch = topic.title.toLowerCase().includes(searchTerm) ||
                            topic.description.toLowerCase().includes(searchTerm);
        const matchesCategory = currentCategory === 'all' || topic.category === currentCategory;
        return matchesSearch && matchesCategory;
    });
    
    renderTopics();
}

// Update stats
function updateStats() {
    document.getElementById('topicCount').textContent = filteredTopics.length;
    const totalViews = topics.reduce((sum, topic) => sum + topic.views, 0);
    document.getElementById('viewCount').textContent = totalViews;
}

// Save view count to localStorage
function saveViewCount(topicId, views) {
    const viewCounts = JSON.parse(localStorage.getItem('topicViews') || '{}');
    viewCounts[topicId] = views;
    localStorage.setItem('topicViews', JSON.stringify(viewCounts));
}
// Floating menu functions
function toggleMenu() {
    const menu = document.getElementById('fabMenu');
    menu.classList.toggle('active');
}

function randomTopic() {
    if (topics.length === 0) return;
    const randomIndex = Math.floor(Math.random() * topics.length);
    openTopic(topics[randomIndex]);
    toggleMenu();
}

function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
    toggleMenu();
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
    toggleMenu();
}
// Test modal function
function testModal() {
    const modal = document.getElementById('topicModal');
    const modalBody = document.getElementById('modalBody');
    
    modal.classList.add('active');
    modalBody.innerHTML = `
        <div style="text-align: center; font-family: Georgia, serif;">
            <h1 style="color: #d4a574;">☕ Welcome to Tea Time!</h1>
            <p style="font-size: 1.2rem; margin: 1rem 0;">The modal is brewing perfectly!</p>
            <p>If you can see this, our tea service is ready to serve you the hottest topics.</p>
            <hr style="margin: 2rem 0; opacity: 0.3; border-color: #d4a574;">
            <p style="color: #f4a0c4;">Debug Information:</p>
            <p>Total topics steeping: ${topics.length}</p>
            <p>Current tea house: ${window.location.href}</p>
            <p style="margin-top: 2rem;">
                <span style="font-size: 3rem;">🫖</span>
            </p>
        </div>
    `;
    toggleMenu();
}

// Show error message
function showError(message) {
    const grid = document.getElementById('topicsGrid');
    grid.innerHTML = `
        <div style="text-align: center; grid-column: 1 / -1; padding: 3rem; font-family: Georgia, serif;">
            <h2 style="color: #f4a0c4;">☕ Oops! The tea spilled...</h2>
            <p>${message}</p>
            <p style="margin-top: 1rem;">Let's brew a fresh pot and try again!</p>
        </div>
    `;
}