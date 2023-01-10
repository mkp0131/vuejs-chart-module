# vuejs-chart-module

## [vue] vue 컴포넌트를 지원하지 않는 라이브러리 사용 (차트)

### 일반사용

- 컴포넌트 생성주기 `mounted()` 에 해당하는 코드를 입력한다.

```js
<template>
  <div>
    <h1>차트 모듈화</h1>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  // #myChart 엘리먼트를 이용해야하니,mounted() 에서 실행.
  mounted() {
    const ctx = document.getElementById("myChart");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>

<style></style>
```

## [vue] vue HTML Element 선택

```js
<template>
  <div>
    <h2>라인 차트</h2>
    // ref 를 사용 하여 html 을 선택
    <canvas ref="myChart" id="myChart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import { months } from "../utils/chartUtils";
export default {
  mounted() {
    // ref 에 접근한다.
    const ctx = this.$refs.myChart;

    const labels = months({ count: 7 });

    new Chart(ctx, {
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
```

## [vue] vue plugin 생성

### 기본 예제

- 반복되는 코드를 plugin 을 생성
- `plugins/ChartPlugin.js` 생성

```js
export default {
  install(Vue) {
    console.log("플러그인");
  },
};
```

- `main.js` 에서 `Vue.use(플러그인)` 를 해준다.

```js
import Vue from "vue";
import App from "./App.vue";
import ChartPlugin from "./plugins/ChartPlugin";

Vue.config.productionTip = false;

Vue.use(ChartPlugin);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
```

### 실제 사용 예제

- chart 라이브러리를 저장한다.

```js
import Chart from "chart.js/auto";

export default {
  install(Vue) {
    // 뷰의 프로토 타입 객체에 $_Chart 를 넣는다.
    Vue.prototype.$_Chart = Chart;
  },
};
```

- 컴포넌트에서 사용시 `this` 로 접근 할 수 있다.

```js
<script>
import { months } from "../utils/chartUtils";

export default {
  mounted() {
    console.log(this);
    // ref 에 접근한다.
    const ctx = this.$refs.myChart;

    const labels = months({ count: 7 });

    new this.$_Chart(ctx, {
      type: "line",
```

## [vue] input 컨트롤

- 부모 컴포넌트

```js
<template>
  <div>
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

export default {
  data() {
    return {
      checked: true,
      txt: "안녕",
    };
  },
  components: { BarChart, LineChart, CheckBox },
  methods: {
    doToggleCheckBox() {},
  },
};
</script>

<style></style>
```

- 자식 컴포넌트

```js
<template>
  <label class="checkbox"
    ><input
      type="checkbox"
      :value="value"
      @click="toggleCheckBox"
      :checked="value"
    />
    체크박스</label
  >
</template>

<script>
export default {
  props: ["value"],
  created() {
    console.log(this.value);
  },
  methods: {
    toggleCheckBox() {
      this.$emit("input", !this.value);
    },
  },
};
</script>

<style scoped>
.checkbox {
  font-size: 42px;
  display: flex;
  align-items: center;
  background: blue;
}
.checkbox input {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
</style>
```

## [vue] render 함수

```js
<script>
export default {
  // tamplate 태그가 없을 경우 render 에 있는 것을 보여준다.
  render: (h) => h("p", "안녕"),
};
</script>
```
