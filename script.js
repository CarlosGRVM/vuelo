// === Gráfico de barras ===
const ctxBar = document.getElementById('barChart');
new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun'],
    datasets: [
      { label:'Gold', data:[3,6,4,5,7,6], backgroundColor:'#d6b354' },
      { label:'Teal', data:[4,5,3,7,4,5], backgroundColor:'#3d5a57' }
    ]
  },
  options: { responsive:true, plugins:{ legend:{ display:false } } }
});

// === Gráfico circular ===
const ctxPie = document.getElementById('doughnutChart');
new Chart(ctxPie, {
  type: 'doughnut',
  data: {
    labels: ['A','B','C'],
    datasets: [{ data:[35,45,20], backgroundColor:['#3d5a57','#d6b354','#20b2aa'] }]
  },
  options: { cutout:'65%', plugins:{ legend:{ display:false } } }
});

// === Gráfico de líneas ===
const ctxLine = document.getElementById('lineChart');
new Chart(ctxLine, {
  type: 'line',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun'],
    datasets: [
      { data:[3,2,4,3,6,4], borderColor:'#3d5a57', fill:false },
      { data:[2,3,3,4,5,6], borderColor:'#d6b354', fill:true, backgroundColor:'rgba(214,179,84,0.15)' }
    ]
  },
  options: { responsive:true, plugins:{ legend:{ display:false } } }
});
