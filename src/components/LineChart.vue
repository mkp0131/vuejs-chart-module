<template>
  <div>
    <h2>라인 차트</h2>
    // ref 를 사용 하여 html 을 선택
    <canvas ref="myChart" id="myChart"></canvas>
  </div>
</template>

<script>
import { months } from "../utils/chartUtils";

export default {
  mounted() {
    // ref 에 접근한다.
    const ctx = this.$refs.myChart;

    const labels = months({ count: 7 });

    new this.$_Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "My First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
    });
  },
};
</script>

<style></style>
