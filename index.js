// Variables

var response = 0;
var data = [];

//Stats
var assist = [];
var blocks = [];
var defRebound = [];
var offRebound = [];
var steals = [];
var turnOvers =[];

var fieldGoalsAttempted = [];
var feildGoalsMade = [];
var freeThrowsAttempted = [];
var freeThrowsMade = [];
var feildGoalthreesAttempted = [];
var feildGoalthreesMade = [];

var gamesPlayed = [];
var minutesPlayed = [];

//Functions 
//function to reload the page so that the user can restart//
function RELOAD() {
document.location.reload();
}

async function getNBASTATS(id) {
response = await fetch(`https://www.balldontlie.io/api/v1/season_averages?per_page=100&seasons[]=2019&player_ids[]=${id}`)

data = await response.json();

assist = data.data[0].ast;
blocks = data.data[0].blk;
defRebound = data.data[0].dreb;
offRebound = data.data[0].oreb;
steals = data.data[0].stl;
turnOvers =data.data[0].turnover;

fieldGoalsAttempted = data.data[0].fga;
feildGoalsMade = data.data[0].fgm;
freeThrowsAttempted = data.data[0].fta;
freeThrowsMade = data.data[0].ftm;
feildGoalthreesAttempted = data.data[0].fg3a;
feildGoalthreesMade = data.data[0].fg3m;

gamesPlayed = data.data[0].games_played;
minutesPlayed = data.data[0].min;


document.getElementById("screen1").style.visibility= "hidden";
   chartIT();
}



//runs the function to wipe the screen to create space for the charts and tables

    function chartIT() {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['3s made', 'Assists', 'Blocks', 'Steals', 'Turn Overs', 'Offensive Reb'],
                datasets: [{
                    label: 'Stats Range',
                    data: [feildGoalthreesMade, assist, blocks, steals, turnOvers, offRebound],
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
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
