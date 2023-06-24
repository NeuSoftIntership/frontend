<script>
import {GoodsRequestEnterStatus} from "../../../assets/config.js";
import {reactive} from "vue";

export default {
  setup() {
    const data = reactive({goodsRequestList: undefined})

    return {
      data
    }
  },
  computed: {
    GoodsRequestEnterStatus() {
      return GoodsRequestEnterStatus
    }
  },
  mounted() {
    this.$fetchWithIpPort('/delivery/get-goods-request-list')
        .then(res => res.json())
        .then((res) => {
          this.data.goodsRequestList = res.data
        }).catch((e) => {
      console.log(e)
    })
  }
}
</script>

<template>
  <h5>补货请求列表</h5>
  <div>
    <div class="card">
      <div class="container px-4 text-center">
        <div class="row">
          <div class="col-6">
            <label for="inputEmail3" class="col-form-label">选择补货日期</label>
            <input type="date" class="form-control" style="display: inline; width: 60%;">
          </div>
          <div class="col-6">
            <div class="input-group mb-3">
              <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
              <button class="btn btn-outline-secondary" type="button">搜索</button>
            </div>
          </div>
        </div>
      </div>

      <!--展示信息的table-->
      <table class="table">
        <thead class="table-secondary">
        <tr>
          <th>序号</th>
          <th>补货请求单号</th>
          <th>所属订单号</th>
          <th>补货请求状态</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(goodsRequest, index) of this.data.goodsRequestList" class="table-primary" :key="goodsRequest.id">
          <td v-text="index + 1"></td>
          <td>{{ goodsRequest.id }}</td>
          <td>{{ goodsRequest.idTarget }}</td>
          <td>{{ GoodsRequestEnterStatus[goodsRequest.requestStatus] }}</td>
          <td>
            <div class="btn-group" role="group" aria-label="Basic outlined example">
              <button type="button" class="btn btn-outline-primary" @click="showGoodsDetail">详细信息</button>
              <button type="button" class="btn btn-outline-primary">发送补货请求</button>
            </div>
          </td>
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