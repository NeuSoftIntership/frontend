<script>
import OrderDetail from "../client/OrderDetail.vue";
import {reactive} from "vue";

export default {
  setup() {
    const data = reactive({
      emojMap: {
        "1": "bi-emoji-frown",
        "2": "bi-emoji-frown",
        "3": "bi-emoji-neutral",
        "4": "bi-emoji-heart-eyes",
        "5": "bi-emoji-kiss",
      },
      emojColorShow: [
        true,
        true,
        true,
        true,
        true,
      ],
      resScore: 5
    })

    return {
      data,
    }
  },
  components: {OrderDetail},
  methods: {
    scoring(score) {
      for (let i = 0; i < score; i++) {
        this.data.emojColorShow[i] = true
      }
      for (let i = score; i < 5; i++) {
        this.data.emojColorShow[i] = false
      }
      this.data.resScore = score
    }
  }
}
</script>

<template>
  <order-detail></order-detail>
  <div>
    <h5>回执录入</h5>
    <div class="align-content-center">
      <ul class="list-group list-group-horizontal-md _li-quarter">
        <li class="list-group-item">发票号</li>
        <li class="list-group-item">

        </li>
        <li class="list-group-item">配送员</li>
        <li class="list-group-item">

        </li>
      </ul>
      <ul class="list-group list-group-horizontal _li-quarter">
        <li class="list-group-item">配送员电话</li>
        <li class="list-group-item">
        </li>
        <li class="list-group-item">收款</li>
        <li class="list-group-item"></li>
      </ul>
      <ul class="list-group list-group-horizontal-sm _li-half">
        <li class="list-group-item">用户满意度</li>
        <li class="list-group-item">
          <i class="bi" :class="[{'color-yellow': data.emojColorShow[score - 1]}, data.emojMap[data.resScore]]"
             :style="{'fontSize': '2em'}" v-for="score in 5" :key="score" @click="scoring(score)"></i> <!--1-2-->
        </li>
      </ul>
    </div>
    <div class="input-group">
      <span class="input-group-text">用户反馈：</span>
      <textarea class="form-control" aria-label="With textarea"></textarea>
    </div>
    <div class="btn-group" role="group" aria-label="Basic outlined example" style="float: right">
      <button type="button" class="btn btn-outline-primary">确定</button>
      <button type="button" class="btn btn-outline-primary">返回</button>
    </div>
  </div>
</template>

<style scoped>
.color-yellow {
  color: #f0e68c;
}
</style>