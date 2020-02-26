
let open = document.getElementById('open');
let menu = document.querySelector('#menu');
let num = 1;
open.addEventListener('click',function(){
  num += 1;
  if (num%2==0) {
    menu.style.left = "0";
    open.style.color = "#fff";
  } else{
    menu.style.left = "-68%";
    open.style.color = "#000";
  }
});


Vue.component('line-chart', {
  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      labels: ['30.05', '31.05', '01.06', '02.06', '03.06', '04.06', '05.06','06.06','07.06','08.06','09.06'],
      datasets: [
        {
          label: 'Income',
          display: false,
          backgroundColor: 'rgb(215 ,140, 220, 0.7)',
          data: [50, 35, 50, 45, 50, 40, 50, 35, 50, 36, 50],
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#4C5E70',
          pointHoverBorderWidth: 5,

        },
        {
          label: 'Sale',
          backgroundColor: 'rgb(255 ,22, 118, 0.7)',
          data: [42, 50, 35, 50, 42, 50, 36, 50, 40, 50, 32],
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#4C5E70',
          pointHoverBorderWidth: 5,
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
})

var vm = new Vue({
  el: '.app',
  data: {
    message: 'Hello World'
  }
})


var densityCanvas = document.getElementById("densityChart");

Chart.defaults.global.defaultFontFamily = "AvenirNextLTPro-Regular";
Chart.defaults.global.defaultFontSize = 14;

var densityData = {
  label: '',
  data: [600, 610, 20, 20, 200],
  display:false,
  backgroundColor: [
    'rgba(0, 99, 132, 0.6)',
    'rgba(30, 99, 132, 0.6)',
    'rgba(60, 99, 132, 0.6)',
    'rgba(90, 99, 132, 0.6)',
    'rgba(120, 99, 132, 0.6)'
  ],
  borderColor: [
    'rgba(0, 99, 132, 1)',
    'rgba(30, 99, 132, 1)',
    'rgba(60, 99, 132, 1)',
    'rgba(90, 99, 132, 1)',
    'rgba(120, 99, 132, 1)'
  ],
  borderWidth: 2,
  hoverBorderWidth: 1
};

var chartOptions = {
  scales: {
    yAxes: [{
      barPercentage: 0.5
    }]
  },
  elements: {
    rectangle: {
      borderSkipped: 'left',
    }
  }
};

var barChart = new Chart(densityCanvas, {
  type: 'horizontalBar',
  data: {
    labels: ["Всего", "Закрыто", "В работе", "Новый", "Просрочен"],
    datasets: [densityData],
  },
  options: chartOptions
});




var ctx = document.getElementById('myChart').getContext('2d');

var data = data = {
    datasets: [{
        data: [40, 40, 20],
      backgroundColor: [
                'rgba(255, 103, 0, 0.8)',
                'rgba(255, 231, 0, 0.8)',
                'rgba(0, 86, 114, 0.8)',
            ],
      hoverBackgroundColor: [
        'rgba(255, 103, 0, 1)',
        'rgba(255, 231, 0, 1)',
        'rgba(0, 86, 114, 1)',
        ],
        borderWidth: 0,
        hoverBorderWidth: 0
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Да',
        'Нет',
        'Такое',
    ]
};

// And for a doughnut chart
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    cutoutPercentage: 0,
    options: {
      rotation: 1 * Math.PI,
      'animation.animateScale': true,
    }
});
