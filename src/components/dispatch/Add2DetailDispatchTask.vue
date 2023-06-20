<script>
import OrderDetail from "../client/OrderDetail.vue";

export default {
  components: {OrderDetail},

  mounted() {
    ///client/get-order-detail
    this.$fetchWithIpPort('/client/get-order-detail')
        .then(res => res.json())
        .then((res) => {
          console.log(res);
        }).catch((e) => {
      console.log(e)
    })
  }

}
</script>

<template>
  <h6>添加新的调度任务/调度详情</h6>
  <div class="card">
<!--    表示的是订单的信息 -->
    <div>
      <OrderDetail></OrderDetail>
    </div>
<!--    调度选项-->
      <div style="margin: 20px">
        <div class="input-group mb-5">
          <span style="margin: 10px">调度分站</span>
          <select class="form-select" aria-label="Default select example" style="display: inline">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <span class="input-group-text" id="inputGroup-sizing-default">调度日期</span>
          <input type="date" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="align-content-end  justify-content-md-end" style="float: right" >
          <button type="button" class="btn btn-outline-primary me-md-2">发布调度/配货信息</button><button type="button" class="btn btn-outline-danger">返回</button>
        </div>
      </div>
  </div>
</template>

<style scoped>

</style>