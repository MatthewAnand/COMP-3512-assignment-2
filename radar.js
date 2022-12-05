
document.addEventListener('DOMContentLoaded', function(){

    //get data for chart
    let bpm = document.getElementById('bpm');
    console.log(bpm);


    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['BPM', 'Energy', 'Danceability', 'Liveness', 'Valence', 'Acousticness', 'Speechiness',
          'Popularity'
        ],
        datasets: [{
          label: '# of Votes',
          data: [105, 74, 66, 11, 54, 14, 27, 76],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });




});