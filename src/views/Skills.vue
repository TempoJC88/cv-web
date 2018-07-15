<template lang="html">
  <section id="skills" class="section hero is-info is-fullheight">    
    <div class="container">
        <canvas id="radarCanvas" width="400" height="400"></canvas>
    </div>
  </section>
</template>

<script>
import Chart from 'chart.js';
export default {  
  data() {
    return {
    
    };
  },
  mounted(){      
    var radarChartData = {
        labels: ["HTML5/CSS", "GULP", "Webpack", "JavaScript", "Jquery", "Vue 2", "Polymer", "Git", "WordPress", "PHP", "Java", "Android", "MySQL"],
        datasets: [ {
            data: [75,80,30,80,85,80, 40, 80, 50, 50, 50, 60, 60],
            label : "Skills",           
            borderColor : "#5EB777", /*Color de las líneas de colores  */
            fill:true, //Area interior de la línea, rellenar
            pointBackgroundColor: "#5EB777"
        } ] 
    };
        
    var radarOptions = {    
                            scale: {
                                // Hides the scale
                                display: true
                            },
                            display: false,
                            responsive: true,
                            pointDot:false,
                            showTooltips: true,
                            scaleOverride: true,
                            scaleSteps: 4,
                            scaleStepWidth: 5,
                            scaleStartValue: 0
                        }

    var ctx = document.getElementById("radarCanvas").getContext("2d");    
    window.myRadar = new Chart(ctx, {
        type : "radar",
        data: radarChartData,
        options: radarOptions
    });

  }
};
</script>

<style lang="scss">
@import "src/sass/_app";

.hero.is-fullheight {
    min-height: 100vh;
}

.hero.is-info {
    background-color: #3273dc;
    color: #fff;
}
.section {
    background-color: #fff;
}
.hero {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
</style>