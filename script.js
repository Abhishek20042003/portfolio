// Portfolio JavaScript - Vanilla JS implementation

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initParticleBackground();
    initTypewriter();
    initSkills();
    initProjects();
    initContactForm();
    initScrollAnimations();
});

// Particle Background
function initParticleBackground() {
    const particlesContainer = document.getElementById('particles');
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 8 + 2;
        const startPosition = Math.random() * window.innerWidth;
        const duration = Math.random() * 20 + 10;
        
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = startPosition + 'px';
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = (Math.random() * 5) + 's';
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, duration * 1000);
    }

    // Create initial particles
    for (let i = 0; i < 50; i++) {
        setTimeout(createParticle, i * 100);
    }

    // Continue creating particles
    setInterval(createParticle, 500);
}

// Typewriter Effect
function initTypewriter() {
    const text = 'Front-End Developer';
    const typewriterElement = document.getElementById('typewriter-text');
    const cursor = document.getElementById('cursor');
    
    typewriterElement.textContent = '';
    
    let currentIndex = 0;
    const timer = setInterval(() => {
        if (currentIndex <= text.length) {
            typewriterElement.textContent = text.slice(0, currentIndex);
            currentIndex++;
        } else {
            clearInterval(timer);
        }
    }, 100);
}

// Skills Section
function initSkills() {
    const skills = [
        {
            icon: 'code',
            title: 'Frontend Development',
            description: 'Creating responsive and interactive user interfaces with modern frameworks and libraries.'
        },
        // {
        //     icon: 'server',
        //     title: 'Backend Development',
        //     description: 'Building robust server-side applications and APIs with scalable architecture.'
        // },
        // {
        //     icon: 'database',
        //     title: 'Database Design',
        //     description: 'Designing efficient database schemas and optimizing query performance.'
        // },
        {
            icon: 'cloud',
            title: 'Cloud Services',
            description: 'Deploying and managing applications on cloud platforms with DevOps practices.'
        },
        // {
        //     icon: 'smartphone',
        //     title: 'Mobile Development',
        //     description: 'Creating cross-platform mobile applications with native performance.'
        // },
        {
            icon: 'palette',
            title: 'UI/UX Design',
            description: 'Designing user-centered interfaces that are both beautiful and functional.'
        }
    ];

    const skillsGrid = document.getElementById('skills-grid');
    
    skills.forEach((skill, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card hover-lift';
        skillCard.style.animationDelay = `${index * 0.1}s`;
        
        skillCard.innerHTML = `
            <div class="skill-icon glow-primary">
                <i data-lucide="${skill.icon}"></i>
            </div>
            <h3>${skill.title}</h3>
            <p>${skill.description}</p>
        `;
        
        skillsGrid.appendChild(skillCard);
    });
    
    // Reinitialize Lucide icons for new elements
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Projects Section
function initProjects() {
    const projects = [
        {
            title: 'Weather forecast',
            description: 'Web application providing real-time weather updates and forecasts',
            image: 'https://images.unsplash.com/photo-1630260667842-830a17d12ec9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1630260667842-830a17d12ec9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            tech: ['HTML', 'CSS', 'API', 'JS'],
            color: 'from-purple-500 to-pink-500',
            link:"https://github.com/abhishek20042003/weather-forecast"
        },
        {
            title: 'Blinkit Clone',
            description: 'E-commerce platform for online grocery shopping with real-time updates',
            image: 'https://images.unsplash.com/photo-1667840578922-98e2a31aff95?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            tech: ['HTML', 'CSS', 'Js'],
            color: 'from-blue-500 to-cyan-500',
            link:"https://github.com/Abhishek20042003/Blinkit-Clone"
        },
        {
            title: 'Health Tracker',
            description: 'Web application for tracking health metrics and providing insights',
            image: 'https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            tech: ['React', 'Js', 'OpenAI'],
            color: 'from-green-500 to-teal-500',
            link:"https://github.com/Abhishek20042003/Health-Tracker"
        },
    ];

    const projectsGrid = document.getElementById('projects-grid');
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card hover-lift';
        projectCard.style.animationDelay = `${index * 0.2}s`;
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay gradient-${getGradientClass(project.color)}"></div>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-stack">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-buttons">
                    <button class="btn btn-outline btn-sm">
                        <a href=${project.link} target="_blank" style="remove-decoration: none; color: inherit; display: flex; align-items: center; gap: 0.25rem;">
                            <i data-lucide="github"></i>
                            <span>Code</span>
                        </a>
                    </button>
                    <button class="btn btn-primary btn-sm">
                        <i data-lucide="external-link"></i>
                        <span>Live Demo</span>
                    </button>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Reinitialize Lucide icons for new elements
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Helper function to convert Tailwind gradient classes to our system
function getGradientClass(tailwindClass) {
    if (tailwindClass.includes('purple') || tailwindClass.includes('pink')) return 'primary';
    if (tailwindClass.includes('blue') || tailwindClass.includes('cyan')) return 'secondary';
    if (tailwindClass.includes('green') || tailwindClass.includes('teal')) return 'accent';
    return 'primary';
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        console.log('Form submitted:', data);
        
        // Show success message
        showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// Simple toast notification
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--card);
        color: var(--card-foreground);
        padding: 1rem 1.5rem;
        border-radius: var(--radius);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-glow);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    if (type === 'success') {
        toast.style.borderColor = 'var(--primary)';
        toast.style.background = 'rgba(263, 70%, 50%, 0.1)';
    }
    
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// Scroll Animations
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

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Observe skill and project cards
    setTimeout(() => {
        const cards = document.querySelectorAll('.skill-card, .project-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(card);
        });
    }, 1000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Button click handlers
document.addEventListener('click', function(e) {
    if (e.target.closest('.btn')) {
        const btn = e.target.closest('.btn');
        const btnText = btn.textContent.trim();
        
        // Add click animation
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 150);
        
        // Handle different button actions
        if (btnText.includes('View My Work')) {
            document.querySelector('.projects-section').scrollIntoView({
                behavior: 'smooth'
            });
        } else if (btnText.includes('Get In Touch')) {
            document.querySelector('.contact-section').scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
});