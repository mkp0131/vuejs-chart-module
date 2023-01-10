import Chart from "chart.js/auto";

export default {
  install(Vue) {
    // 뷰의 프로토 타입 객체에 $_Chart 를 넣는다.
    Vue.prototype.$_Chart = Chart;
  },
};
