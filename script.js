// Betölti és megjeleníti a markdown tartalmat
fetch('evolve_protocol_v2_6_challenge_lista_v1_0.md')
  .then(response => response.text())
  .then(markdown => {
    const markdownContent = document.getElementById('markdownContent');
    markdownContent.innerHTML = marked.parse(markdown);

    // Cellaszínezés
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
});

// Kereső funkció
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
