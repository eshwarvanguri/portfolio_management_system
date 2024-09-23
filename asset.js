document.addEventListener('DOMContentLoaded', () => {
    // Asset Performance Chart
    const assetPerformanceCtx = document.getElementById('assetPerformanceChart').getContext('2d');
    const assetPerformanceChart = new Chart(assetPerformanceCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Asset Value',
                data: [20000, 21000, 22000, 23000, 24000, 25000],
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
