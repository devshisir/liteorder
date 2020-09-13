var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'New orders this month',
            data: [
					'17500',
					'13500',
					'2000',
					'7000',
					'7000',
					'15000',
					'7000',
					'4000',
					'7000',
					'3000',
					'11000',
					'9000',
				],
            backgroundColor: [
                '#F5CD32',
                '#F5CD32',
                '#F5CD32',
                '#F5CD32',
                '#F5CD32',
                '#F5CD32',
                '#F5CD32',
                '#F5CD32',
                '#F5CD32',
                '#F5CD32',
                '#F5CD32',
                '#F5CD32',
            ],
            borderColor: [
                '#F5CD32',
                '#F5CD32',
                '#F5CD32',
                '#F5CD32',
                '#F5CD32',
                '#F5CD32',
                '#F5CD32',
                '#F5CD32',
                '#F5CD32',
                '#F5CD32',
                '#F5CD32',
                '#F5CD32',
            ],
            borderWidth: 0.5
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});