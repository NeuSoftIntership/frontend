<script>
import {reactive} from "vue";

export default {
  setup(){
    const data = reactive({goodsRateList: undefined})
    return {
      data
    }
  },
  mounted() {
    this.$fetchWithIpPort('/delivery/get-goods-rate-list')
        .then(res => res.json())
        .then((res) => {
          this.data.goodsRateList = res.data
        }).catch((e) => {
      console.log(e)
    })
  }
}
</script>

<template>
<h5>商品订购排行</h5>

  <div >
    <div class="card">
      <div class="container px-4 text-center">
        <div class="input-group mb-3">
          <span class="input-group-text">选择区间：</span>
          <input type="date" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
          <span class="input-group-text" id="basic-addon1">到</span>
          <input type="date" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
        </div>
      </div>

      <!--展示信息的table-->
      <table class="table">
        <thead class="table-secondary">
        <tr>
          <th>序号</th>
          <th>商品编号</th>
          <th>商品名</th>
          <th>销售数量</th>
          <th>销售单价</th>
          <th>销售总价</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(goodsSell, index) of this.data.goodsRateList" class="table-primary" :key="goodsSell.id">
          <td v-text="index + 1"></td>
          <td>{{ goodsSell.id }}</td>
          <td>{{ goodsSell.name }}</td>
          <td>{{ goodsSell.price }}</td>
          <td>{{ goodsSell.soldCount }}</td>
          <td>{{ goodsSell.totalPerGoods }}</td>

        </tr>
        </tbody>
      </table>
    </div>

    <!-- 分页 -->
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-end">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link">1</a></li>
        <li class="page-item"><a class="page-link">2</a></li>
        <li class="page-item"><a class="page-link">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>

</style>