// JarvAI Landing Page Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initFloatingKeycaps();
    initLassoEffect();
    initSmoothScrolling();
    initParallaxEffect();
    initGestureSimulation();
    initTypewriterEffect();
});

// Floating Keycaps Animation Enhancement
function initFloatingKeycaps() {
    const keycaps = document.querySelectorAll('.keycap');
    
    keycaps.forEach((keycap, index) => {
        // Add random movement to keycaps
        setInterval(() => {
            const randomX = Math.random() * 20 - 10;
            const randomY = Math.random() * 20 - 10;
            keycap.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${Math.random() * 10 - 5}deg)`;
        }, 3000 + index * 500);
        
        // Add hover effect
        keycap.addEventListener('mouseenter', () => {
            keycap.style.color = 'rgba(233, 69, 96, 0.6)';
            keycap.style.transform = 'scale(1.2)';
            keycap.style.transition = 'all 0.3s ease';
        });
        
        keycap.addEventListener('mouseleave', () => {
            keycap.style.color = 'rgba(255, 255, 255, 0.1)';
            keycap.style.transform = 'scale(1)';
        });
    });
}

// Lasso Effect for Interactive Elements
function initLassoEffect() {
    const interactiveElements = document.querySelectorAll('.feature-card, .workflow-item, .user-card, .security-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.classList.add('lasso-highlight');
        });
        
        element.addEventListener('mouseleave', () => {
            element.classList.remove('lasso-highlight');
        });
    });
}

// Smooth Scrolling for Navigation
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Parallax Effect for Background
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-keycaps');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Gesture Simulation Demo
function initGestureSimulation() {
    const gestureDemo = document.createElement('div');
    gestureDemo.className = 'gesture-demo';
    gestureDemo.innerHTML = `
        <div class="gesture-overlay">
            <div class="gesture-instructions">
                <h3>Try JarvAI Gestures</h3>
                <div class="gesture-list">
                    <div class="gesture-item">👋 Wave to summon command bar</div>
                    <div class="gesture-item">✋ Pinch to scroll</div>
                    <div class="gesture-item">🔄 Circle to zoom</div>
                    <div class="gesture-item">👆 Flick to switch apps</div>
                </div>
                <button class="gesture-close">Close Demo</button>
            </div>
        </div>
    `;
    
    // Add gesture demo styles
    const gestureStyles = `
        .gesture-demo {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1000;
            display: none;
        }
        
        .gesture-overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(26, 26, 46, 0.95);
            backdrop-filter: blur(20px);
            border-radius: 20px;
            padding: 40px;
            border: 1px solid rgba(233, 69, 96, 0.3);
            text-align: center;
            max-width: 500px;
            width: 90%;
        }
        
        .gesture-instructions h3 {
            color: #ffffff;
            margin-bottom: 30px;
            font-size: 1.5rem;
        }
        
        .gesture-list {
            display: grid;
            gap: 15px;
            margin-bottom: 30px;
        }
        
        .gesture-item {
            background: rgba(255, 255, 255, 0.1);
            padding: 15px;
            border-radius: 10px;
            color: rgba(255, 255, 255, 0.9);
            font-size: 1.1rem;
        }
        
        .gesture-close {
            background: linear-gradient(135deg, #e94560 0%, #533483 100%);
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        
        .gesture-close:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(233, 69, 96, 0.3);
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = gestureStyles;
    document.head.appendChild(styleSheet);
    document.body.appendChild(gestureDemo);
    
    // Add gesture demo button to hero section
    const heroCta = document.querySelector('.hero-cta');
    const gestureButton = document.createElement('button');
    gestureButton.className = 'cta-button tertiary';
    gestureButton.innerHTML = '<span class="cta-icon">👋</span>Try Gestures';
    gestureButton.addEventListener('click', () => {
        gestureDemo.style.display = 'block';
    });
    heroCta.appendChild(gestureButton);
    
    // Close gesture demo
    gestureDemo.querySelector('.gesture-close').addEventListener('click', () => {
        gestureDemo.style.display = 'none';
    });
    
    // Close on overlay click
    gestureDemo.addEventListener('click', (e) => {
        if (e.target === gestureDemo) {
            gestureDemo.style.display = 'none';
        }
    });
}

// Wake Word Demo - Removed

// Typewriter Effect for Hero Title
function initTypewriterEffect() {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.textContent;
    
    // Split text into words
    const words = originalText.split(' ');
    heroTitle.textContent = '';
    
    let wordIndex = 0;
    const typewriterInterval = setInterval(() => {
        if (wordIndex < words.length) {
            heroTitle.textContent += words[wordIndex] + ' ';
            wordIndex++;
        } else {
            clearInterval(typewriterInterval);
        }
    }, 200);
}

// Add scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all feature cards and sections
    const animatedElements = document.querySelectorAll('.feature-card, .workflow-item, .user-card, .security-item, .faq-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// Add keyboard shortcuts simulation
document.addEventListener('keydown', (e) => {
    // Simulate JarvAI keyboard shortcuts
    if (e.metaKey || e.ctrlKey) {
        switch(e.key) {
            case 'k':
                e.preventDefault();
                showCommandBar();
                break;
            case 'j':
                e.preventDefault();
                showGestureDemo();
                break;
        }
    }
});

function showCommandBar() {
    const commandBar = document.createElement('div');
    commandBar.className = 'command-bar';
    commandBar.innerHTML = `
        <div class="command-bar-content">
            <div class="command-bar-header">
                <span class="command-bar-title">JarvAI Command Bar</span>
                <button class="command-bar-close">×</button>
            </div>
            <input type="text" placeholder="Ask anything: files, tabs, people, actions..." class="command-input">
            <div class="command-suggestions">
                <div class="suggestion">Open Zoom, start recording</div>
                <div class="suggestion">Summarize this email</div>
                <div class="suggestion">Rename these 12 files snake_case</div>
            </div>
        </div>
    `;
    
    // Add command bar styles
    const commandBarStyles = `
        .command-bar {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(26, 26, 46, 0.95);
            backdrop-filter: blur(20px);
            border-radius: 15px;
            border: 1px solid rgba(233, 69, 96, 0.3);
            z-index: 1000;
            width: 90%;
            max-width: 600px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .command-bar-content {
            padding: 20px;
        }
        
        .command-bar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .command-bar-title {
            color: white;
            font-weight: 600;
            font-size: 1.1rem;
        }
        
        .command-bar-close {
            background: none;
            border: none;
            color: rgba(255, 255, 255, 0.7);
            font-size: 24px;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .command-input {
            width: 100%;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 10px;
            padding: 15px;
            color: white;
            font-size: 16px;
            margin-bottom: 20px;
        }
        
        .command-input::placeholder {
            color: rgba(255, 255, 255, 0.5);
        }
        
        .command-suggestions {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
        .suggestion {
            background: rgba(255, 255, 255, 0.05);
            padding: 10px 15px;
            border-radius: 8px;
            color: rgba(255, 255, 255, 0.8);
            cursor: pointer;
            transition: background 0.2s ease;
        }
        
        .suggestion:hover {
            background: rgba(255, 255, 255, 0.1);
        }
    `;
    
    const commandBarStyleSheet = document.createElement('style');
    commandBarStyleSheet.textContent = commandBarStyles;
    document.head.appendChild(commandBarStyleSheet);
    document.body.appendChild(commandBar);
    
    // Focus on input
    commandBar.querySelector('.command-input').focus();
    
    // Close command bar
    commandBar.querySelector('.command-bar-close').addEventListener('click', () => {
        commandBar.remove();
    });
    
    // Close on escape key
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            commandBar.remove();
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}

function showGestureDemo() {
    const gestureDemo = document.querySelector('.gesture-demo');
    if (gestureDemo) {
        gestureDemo.style.display = 'block';
    }
}
