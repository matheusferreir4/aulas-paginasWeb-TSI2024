var ctx = document.getElementById('skillsChart').getContext('2d');
var skillsChart = new Chart(ctx, {
    type: 'radar', // Tipo de gráfico
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'C/C++', 'C#'], // Labels das habilidades
        datasets: [{
            label: 'Nível de Habilidade',
            data: [95, 90, 92, 85, 88, 80, 85, 82], // Níveis das habilidades melhorados
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            r: {
                angleLines: {
                    color: '#ffffff' // Cor das linhas da teia
                },
                grid: {
                    color: '#ffffff' // Cor das linhas da grade
                },
                pointLabels: {
                    color: '#ffffff' // Cor dos labels dos pontos
                },
                ticks: {
                    backdropColor: 'rgba(0, 0, 0, 0)', // Remover fundo dos ticks
                    color: '#ffffff' // Cor dos ticks
                }
            }
        }
    }
});
