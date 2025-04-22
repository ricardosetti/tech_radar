<!-- src/components/RadarChart.vue -->
<template>
    <div ref="chart" class="w-full h-[600px]"></div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import * as d3 from 'd3'
  
  // Example data
  const data = [
    { name: "Vue 3", quadrant: "Languages", ring: "Adopt" },
    { name: "Deno", quadrant: "Tools", ring: "Trial" },
    { name: "GraphQL", quadrant: "Techniques", ring: "Assess" }
  ]
  
  const chart = ref(null)
  
  onMounted(() => {
    const svg = d3.select(chart.value)
      .append("svg")
      .attr("width", 800)
      .attr("height", 600)
  
    svg.append("text")
      .text("Tech Radar (placeholder)")
      .attr("x", 200)
      .attr("y", 50)
  })
  </script>
  
  <style scoped>
  /* Add custom styles later */
  </style>
  