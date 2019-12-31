<template>
  <div class="x-bar">
    <div ref="scene" class="scene"></div>
  </div>
</template>

<script>
import * as d3 from "d3";
import { Scene } from "spritejs";

const COLORS = ["#fe645b", "#feb050", "#c2af87", "#81b848", "#55abf8"];

export default {
  name: "x-bar",
  mounted() {
    const paper = new Scene(this.$refs.scene, {
      viewport: ["auto", "auto"],
      resolution: [1600, 1200],
      stickMode: "width",
      stickExtend: true
    });
    const dataset = [125, 121, 127, 193, 309, 380];
    const linear = d3
      .scaleLinear()
      .domain([d3.min(dataset) - 10, d3.max(dataset)])
      .range([0, 800]);
    const s = d3.select(paper).append("fglayer");
    this.$refs.scene.querySelector("canvas").style.backgroundColor =
      "transparent";
    const chart = s
      .selectAll("sprite")
      .data(dataset)
      .enter()
      .append("sprite")
      .attr("x", 0)
      .attr("y", (d, i) => {
        return 200 + i * 95;
      })
      .attr("width", 0)
      .attr("height", 80)
      .attr("bgcolor", "#ccc");
    chart
      .transition()
      .duration(2000)
      .attr("width", d => {
        return linear(d);
      })
      .attr("bgcolor", (d, i) => {
        return COLORS[i % COLORS.length];
      });
    // let axis = d3.axisBottom([linear]).ticks([100, 200, 300, 400]);
    // s.append(axis)
    //   .attr("pos", [450, 700])
    //   .attr("color", "#666");
    chart.on("click", data => {
      window.console.log(data, d3.event);
    });
  }
};
</script>

<style lang="scss" scoped>
.x-bar {
  position: relative;
  height: 500px;

  .scene {
    width: 100%;
    height: 100%;
  }
}
</style>