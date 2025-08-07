// Initialize Mermaid for diagrams
mermaid.initialize({ startOnLoad: true });

// Render inline Markdown content
const markdownSource = document.getElementById('markdownSource').textContent;
const markdownContent = document.getElementById('markdownContent');
markdownContent.innerHTML = marked.parse(markdownSource, {
    gfm: true,
    breaks: true,
    highlight: function (code, lang) {
        if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(code, { language: lang }).value;
        }
        return code;
    }
});

// Apply color scheme to table cells based on content
const colorCells = document.querySelectorAll('td');
colorCells.forEach(cell => {
    if (cell.textContent.includes('Zöld')) {
        cell.classList.add('green');
    } else if (cell.textContent.includes('Sárga')) {
        cell.classList.add('yellow');
    } else if (cell.textContent.includes('Kék')) {
        cell.classList.add('blue');
    } else if (cell.textContent.includes('Piros')) {
        cell.classList.add('red');
    }
});

// Search functionality
document.getElementById('searchInput').addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const markdownContent = document.getElementById('markdownContent');
    const elements = markdownContent.querySelectorAll('p, h1, h2, h3, li, td');

    elements.forEach(element => {
        const text = element.textContent.toLowerCase();
        if (searchTerm && text.includes(searchTerm)) {
            element.style.backgroundColor = '#fef9c3';
        } else {
            element.style.backgroundColor = '';
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});