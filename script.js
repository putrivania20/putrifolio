// ==================== Project Data ====================
const projectsData = [
    {
        id: 1,
        title: "Superstore Dashboard",
        icon: "📊",
        image: "assets/Dashboard Superstore Poppins.png",
        shortDescription: "An interactive Superstore dashboard analyzing sales, profit, and customer trends across regions and categories—highlighting key insights to support better business decisions.",
        fullDescription: "A comprehensive dashboard that provides real-time insights into sales performance across multiple regions and product categories.",
        overview: "This project involved creating an interactive Tableau dashboard that consolidates sales data from multiple sources. The dashboard allows stakeholders to filter by region, timeframe, and product category to quickly identify trends and anomalies.",
        features: [
            "Real-time data refresh every hour",
            "Interactive filtering by region and product",
            "Monthly and quarterly trend analysis",
            "Sales forecasting visualization",
            "Performance comparison metrics",
            "Export reports to PDF"
        ],
        tags: ["Tableau", "Excel"],
        results: "The dashboard reduced reporting time by 70% and improved decision-making speed. Management can now identify opportunities and issues within hours instead of days, resulting in a 15% increase in quarterly sales.",
        link: "#",
        github: "https://github.com",
        category: ["Business Analytics", "Data Visualization"]
    },
    {
        id: 2,
        title: "Customer Segmentation Analysis",
        icon: "📈",
        image: "assets/customer_segmentation.png",
        shortDescription: "Comprehensive customer analysis using Python and machine learning to identify market segments and improve targeting strategies.",
        fullDescription: "A machine learning project that analyzes customer behavior patterns to identify distinct market segments for targeted marketing.",
        overview: "Using Python and advanced statistical methods, this project identified 5 distinct customer segments based on purchasing behavior, demographics, and engagement patterns. The analysis revealed actionable insights for targeted marketing campaigns.",
        features: [
            "K-means clustering analysis",
            "RFM (Recency, Frequency, Monetary) analysis",
            "Customer lifetime value prediction",
            "Segment profiling and characteristics",
            "Churn prediction model",
            "Automated reporting"
        ],
        tags: ["Python", "ML", "Analytics"],
        results: "The segmentation strategy increased email campaign effectiveness by 45% and improved customer retention by 28%. Targeted campaigns based on segments achieved 3x higher conversion rates compared to generic campaigns.",
        link: "#",
        github: "https://github.com",
        category: "Machine Learning"
    },
    {
        id: 3,
        title: "Financial Forecasting Model",
        icon: "💹",
        image: "assets/financial_forecasting.png",
        shortDescription: "Time series analysis and forecasting model predicting future financial trends with 92% accuracy for strategic planning.",
        fullDescription: "An advanced time series forecasting model that predicts financial trends with high accuracy using statistical methods and machine learning.",
        overview: "This model uses ARIMA, Prophet, and ensemble methods to forecast financial metrics 12 months in advance. Historical data from 5 years was analyzed to build a robust predictive model.",
        features: [
            "Multi-method forecasting approach",
            "ARIMA and Prophet implementation",
            "Ensemble model for higher accuracy",
            "Confidence intervals for uncertainty",
            "Automated model retraining monthly",
            "Scenario analysis capabilities"
        ],
        tags: ["R", "Statistics", "Forecasting"],
        results: "Achieved 92% forecast accuracy, enabling better budget planning and resource allocation. The model helped reduce unexpected variances by 60% and improved financial planning efficiency.",
        link: "#",
        github: "https://github.com",
        category: "Predictive Analytics"
    },
    {
        id: 4,
        title: "Marketing Campaign Analysis",
        icon: "🎯",
        image: "assets/marketing_analytics.png",
        shortDescription: "Multi-channel marketing campaign analysis evaluating ROI across platforms and recommending optimization strategies.",
        fullDescription: "A comprehensive analysis of marketing campaigns across multiple channels to optimize spending and improve ROI.",
        overview: "This analysis examined 24 marketing campaigns across email, social media, paid search, and display advertising channels. Detailed ROI calculations helped identify the most effective channels and strategies.",
        features: [
            "Multi-channel ROI attribution",
            "Campaign performance benchmarking",
            "Customer acquisition cost analysis",
            "Lifetime value calculations",
            "A/B testing result analysis",
            "Optimization recommendations"
        ],
        tags: ["Power BI", "Analytics", "Insights"],
        results: "Identified that optimizing channel mix improved overall ROI by 35%. Reallocating budget based on analysis increased marketing efficiency and reduced customer acquisition cost by 22%.",
        link: "#",
        github: "https://github.com",
        category: "Marketing Analytics"
    },
    {
        id: 5,
        title: "Data Quality Assessment",
        icon: "🔍",
        image: "assets/data_quality.png",
        shortDescription: "Comprehensive data audit identifying anomalies and data quality issues with recommendations for database optimization.",
        fullDescription: "A detailed data quality audit that identified data issues and provided actionable recommendations for improvement.",
        overview: "This assessment examined data quality across 50+ datasets in the company's data warehouse. It identified missing values, duplicates, inconsistencies, and data validation issues affecting analytics accuracy.",
        features: [
            "Automated data profiling",
            "Anomaly detection algorithms",
            "Duplicate and null value analysis",
            "Data validation rules creation",
            "Root cause analysis",
            "Remediation plan development"
        ],
        tags: ["SQL", "Python", "QA"],
        results: "Data quality improved from 78% to 96%. Implementing recommendations prevented 23 analytical errors in pending reports and increased stakeholder confidence in data-driven insights.",
        link: "#",
        github: "https://github.com",
        category: "Data Engineering"
    },
    {
        id: 6,
        title: "Operational Efficiency Study",
        icon: "📋",
        image: "assets/operational_efficiency.png",
        shortDescription: "Process optimization analysis identifying bottlenecks and proposing solutions that increased operational efficiency by 35%.",
        fullDescription: "A process analysis study that identified inefficiencies and optimization opportunities across multiple operational areas.",
        overview: "This study examined key operational processes through data analysis, interviews, and process mining. It identified 8 major inefficiencies causing delays and additional costs.",
        features: [
            "Process flow mapping and analysis",
            "Bottleneck identification",
            "Resource utilization analysis",
            "Cycle time optimization",
            "Cost-benefit analysis for improvements",
            "Implementation roadmap"
        ],
        tags: ["Excel", "Analytics", "Process"],
        results: "Implemented recommendations resulted in 35% efficiency improvement, 22% cost reduction, and 40% faster average process completion time. Annual savings exceeded $500,000.",
        link: "#",
        github: "https://github.com",
        category: "Process Optimization"
    }
];

// ==================== DOM Elements ====================
const themeToggle = document.getElementById('themeToggle');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const projectModal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalCloseBtn = document.getElementById('modalCloseBtn');

// ==================== Project Modal ====================
function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;
    
    // Handle image - show actual image if available, otherwise use icon
    const imageElement = document.getElementById('modalProjectImage');
    
    if (project.image) {
        // Clear text/icon and set background image
        imageElement.textContent = '';
        const encodedPath = encodeURI(project.image);
        imageElement.style.backgroundImage = `url("${encodedPath}")`;
    } else {
        // Fallback to icon
        imageElement.style.backgroundImage = 'none';
        imageElement.textContent = project.icon;
    }
    
    document.getElementById('modalProjectTitle').textContent = project.title;
    document.getElementById('modalProjectDescription').textContent = project.shortDescription;
    document.getElementById('modalProjectOverview').textContent = project.overview;
    document.getElementById('modalProjectResults').textContent = project.results;
    
    // Update features list
    const featuresList = document.getElementById('modalProjectFeatures');
    featuresList.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join('');
    
    // Update tags
    const tagsList = document.getElementById('modalProjectTags');
    tagsList.innerHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    // Add meta information
    const metaContent = document.querySelector('.modal-meta');
    if (metaContent) {
        const categories = Array.isArray(project.category) 
            ? project.category.map(cat => `<span class="modal-category">${cat}</span>`).join('')
            : `<span class="modal-category">${project.category}</span>`;
        metaContent.innerHTML = categories;
    }
    
    // Update buttons - Show View Project and GitHub links
    const projectLink = document.getElementById('modalProjectLink');
    const modalActions = document.querySelector('.modal-actions');
    
    // Store current project ID globally for navigation
    window.currentProjectId = projectId;
    
    // Clear existing buttons and add new ones
    modalActions.innerHTML = '';
    
    // Add View Full Project Page button
    const fullPageBtn = document.createElement('a');
    fullPageBtn.href = `project-${projectId}.html`;
    fullPageBtn.className = 'btn btn-primary';
    fullPageBtn.textContent = 'View Full Project Page →';
    fullPageBtn.style.flex = '1';
    modalActions.appendChild(fullPageBtn);
    
    // Add View Project button if link exists
    if (project.link && project.link !== '#') {
        const viewBtn = document.createElement('a');
        viewBtn.href = project.link;
        viewBtn.className = 'btn btn-secondary';
        viewBtn.textContent = 'View Live Demo';
        viewBtn.target = '_blank';
        viewBtn.style.flex = '1';
        modalActions.appendChild(viewBtn);
    }
    
    // Add GitHub link if available
    if (project.github && project.github !== '#') {
        const githubBtn = document.createElement('a');
        githubBtn.href = project.github;
        githubBtn.className = 'btn btn-secondary';
        githubBtn.textContent = '🐙 GitHub';
        githubBtn.target = '_blank';
        githubBtn.style.flex = '1';
        modalActions.appendChild(githubBtn);
    }
    
    // Add Close button
    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'btn btn-secondary';
    closeBtn.textContent = 'Close';
    closeBtn.onclick = closeProjectModal;
    closeBtn.style.flex = '1';
    modalActions.appendChild(closeBtn);
    
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Add click handlers to project cards
function setupProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        const link = card.querySelector('.project-link');
        if (link) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                openProjectModal(index + 1);
            });
        }
    });
}

// Modal close handlers
if (modalClose) modalClose.addEventListener('click', closeProjectModal);
if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);

// Close modal when clicking outside
if (projectModal) {
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        closeProjectModal();
    }
});


// ==================== Dark/Light Mode ====================
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isAnimating = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isAnimating ? 'dark' : 'light');
}

themeToggle.addEventListener('click', toggleTheme);

// ==================== Mobile Menu ====================
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-buttons') && !e.target.closest('.nav-menu')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ==================== Smooth Scrolling ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Skip project links that were converted to page navigations
    if (anchor.classList.contains('project-link')) return;
    
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

// ==================== Form Handling ====================
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        // Always prevent default to keep the user on the current page (AJAX submission)
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validation
        if (!name || !email || !subject || !message) {
            showMessage('Please fill in all fields', 'error');
            return;
        }
        
        if (!validateEmail(email)) {
            showMessage('Please enter a valid email address', 'error');
            return;
        }
        
        // Send form data using Formsubmit.co AJAX API
        try {
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            
            // Prepare data as FormData for better compatibility
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('subject', subject);
            formData.append('message', message);
            formData.append('_subject', `New Message: ${subject}`);
            
            // Add hidden fields from HTML if they aren't here
            const templates = document.getElementsByName('_template');
            if (templates.length > 0) formData.append('_template', templates[0].value);
            
            const response = await fetch("https://formsubmit.co/ajax/putrivania070@gmail.com", {
                method: "POST",
                body: formData, // Sending FormData instead of JSON
                headers: { 
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                const result = await response.json();
                if (result.success === "true") {
                    contactForm.reset();
                    showMessage('Message sent successfully! I will get back to you soon.', 'success');
                } else {
                    throw new Error(result.message || 'FormSubmit error occurred');
                }
            } else {
                // Better error feedback based on status codes
                if (response.status === 403) {
                    showMessage('Activation required! Please check your email and click the confirmation link from FormSubmit.', 'error');
                } else if (response.status === 404) {
                    showMessage('Endpoint not found. Please check your FormSubmit setup.', 'error');
                } else {
                    showMessage(`Error ${response.status}: Failed to send message.`, 'error');
                }
                throw new Error(`HTTP ${response.status}`);
            }
            
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        } catch (error) {
            console.error('Submission Debug Info:', error);
            
            // Reset button if not already reset
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn.disabled) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }
        }
    });
}

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    // Auto hide after 4 seconds
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 4000);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ==================== Intersection Observer for Animations ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.querySelectorAll('.section-title, .project-card, .skill-category, .service-card, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==================== Progress Bar Animation ====================
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.transition = 'width 1s ease-out';
            bar.style.width = width;
        }, 100);
    });
}

const skillsSection = document.getElementById('skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillsObserver.observe(skillsSection);
}

// ==================== Dynamic Bar Animation ====================
function animateBars() {
    const bar1 = document.querySelector('.bar-1');
    const bar2 = document.querySelector('.bar-2');
    const bar3 = document.querySelector('.bar-3');
    
    if (bar1 && bar2 && bar3) {
        bar1.style.setProperty('--current-height', '80px');
        bar2.style.setProperty('--current-height', '140px');
        bar3.style.setProperty('--current-height', '100px');
    }
}

// Initial setup
initTheme();
animateBars();
setupProjectCards();

// ==================== Navbar Scroll Effect ====================
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = 'var(--shadow-sm)';
    } else {
        navbar.style.boxShadow = 'var(--shadow-sm)';
    }
    
    lastScrollTop = scrollTop;
});

// ==================== Active Nav Link ====================
window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active style
const style = document.createElement('style');
style.textContent = `
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ==================== Utility Functions ====================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==================== Page Load Animation ====================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Set initial opacity
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// Trigger reflow
setTimeout(() => {
    document.body.style.opacity = '1';
}, 100);

// ==================== Accessibility ====================
// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Focus visible for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});
