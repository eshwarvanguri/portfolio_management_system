document.addEventListener('DOMContentLoaded', () => {
    // Sector Allocation Chart
    const sectorAllocationCtx = document.getElementById('sectorAllocationChart').getContext('2d');
    const sectorAllocationChart = new Chart(sectorAllocationCtx, {
        type: 'bar',
        data: {
            labels: ['Technology', 'Healthcare', 'Finance', 'Consumer Goods', 'Utilities', 'Others'],
            datasets: [{
                label: 'Allocation (%)',
                data: [40, 20, 15, 10, 5, 10],
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
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Sector'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Allocation (%)'
                    }
                }
            }
        }
    });

    // Performance Comparison Chart
    const performanceComparisonCtx = document.getElementById('performanceComparisonChart').getContext('2d');
    const performanceComparisonChart = new Chart(performanceComparisonCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Portfolio',
                data: [120000, 125000, 130000, 135000, 140000, 150000],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'S&P 500',
                data: [110000, 115000, 120000, 125000, 130000, 135000],
                borderColor: 'rgba(153, 102, 255, 1)',
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
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Value ($)'
                    }
                }
            }
        }
    });
});
