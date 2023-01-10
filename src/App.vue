<template>
  <div>
    <h1>🔥 Render</h1>
    <render-html />
    <h1>✅ 체크박스</h1>
    <div>
      <check-box v-model="checked" />
    </div>
    <h1>👋 차트</h1>
    <bar-chart></bar-chart>
    <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from "./components/BarChart.vue";
import LineChart from "./components/LineChart.vue";
import CheckBox from "./components/CheckBox.vue";
import RenderHtml from "./components/RenderHtml.vue";

export default {
  data() {
    return {
      checked: true,
      txt: "안녕",
    };
  },
  components: { BarChart, LineChart, CheckBox, RenderHtml },
  methods: {
    doToggleCheckBox() {},
  },
};
</script>

<style></style>
