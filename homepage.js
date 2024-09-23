document.addEventListener('DOMContentLoaded', () => {
    // Performance Chart
    const performanceCtx = document.getElementById('performanceChart').getContext('2d');
    const performanceChart = new Chart(performanceCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Portfolio Value',
                data: [120000, 125000, 130000, 135000, 140000, 150000],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Month'
                    }},
                y: {
                    title: {
                        display: true,
                        text: 'Value ($)'
                    }
                  }
            }
           }
        });
       // Diversification Chart
    const diversificationCtx = document.getElementById('diversificationChart').getContext('2d');
    const diversificationChart = new Chart(diversificationCtx, {
        type: 'pie',
        data: {
            labels: ['Stocks', 'Bonds', 'Real Estate', 'Mutual Funds', 'ETFs', 'Cash'],
            datasets: [{
                data: [40, 20, 15, 10, 10, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
});
