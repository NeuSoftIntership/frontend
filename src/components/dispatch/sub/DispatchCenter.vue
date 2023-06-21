<!--调度中心-->
<script>
import {reactive} from "vue";
import {OrderStatusMap} from "../../../assets/config.js";

export default {
  setup(){
    const allot_info_list = reactive([])
    const orderStatusMap = OrderStatusMap

    return{
      allot_info_list,
      orderStatusMap
    }
  },
  methods: {
    history_to_dispatch_detail(){
      this.$router.push({
        name: 'add2detail-dispatch'
      })
    }
  },
  mounted() {
    this.$fetchWithIpPort('/dispatch/get-dispatch-info')
        .then(res => res.json())
        .then((res) => {
          this.allot_info_list.push(...res.data)
        }).catch((e) => {
      console.log(e)
    })
  }
}
</script>

<template>
  <h6>调度中心</h6>
  <div style="height: 100%">
    <!--  搜索  -->
    <div class="input-group con" style="margin: 40px 0 40px 0">
      <span style="margin: 10px">选择请求调度日期:</span>
      <input type="date" style="margin: 0 20px 0 20px"/>
      <input type="text" class="form-control" placeholder="Recipient's username"
             aria-label="Recipient's username with two button addons">
      <button class="btn btn-outline-secondary" type="button">搜索</button>
    </div>
    <!-- 展示数据的table -->
    <table class="table">
      <thead class="table-secondary">
      <tr>
        <th>序号</th>
        <th>订单ID</th>
        <th>送货地址</th>
        <th>接收人</th>
        <th>接收人电话</th>
        <th>订单状态</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(allot, index) of this.allot_info_list" class="table-primary" :key="allot.id">
        <td v-text="index + 1"></td>
        <td>{{ allot.id }}</td>
        <td>{{ allot.address }}</td>
        <td>{{ allot.receiver }}</td>
        <td>{{ allot.phone }}</td>
        <td>{{orderStatusMap[allot.orderStatus]}}</td>
        <td>
          <div class="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" class="btn btn-outline-primary" @click="history_to_dispatch_detail">详细信息</button>
            <button type="button" class="btn btn-outline-primary">执行调整</button>
            <button type="button" class="btn btn-outline-primary">补货</button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>

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