<script>
import OrderDetail from "../client/OrderDetail.vue";

export default {
  components: {OrderDetail}

}
</script>

<template>
  <h6>发布配送单</h6>
  <OrderDetail></OrderDetail>
  <div class="align-content-center">
    <h5>配送任务</h5>
    <ul class="list-group list-group-horizontal-md _li-quarter">
      <li class="list-group-item">配送员</li>
      <li class="list-group-item">
        <select class="form-select" aria-label="Default select example" style="border: none">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </li>
      <li class="list-group-item">配送站点</li>
      <li class="list-group-item">
        已知的XXX
      </li>
    </ul>
    <ul class="list-group list-group-horizontal _li-quarter">
      <li class="list-group-item">配送开始日期</li>
      <li class="list-group-item">
        <input type="date" style="border: none"/>
      </li>
      <li class="list-group-item">配送截止日期</li>
      <li class="list-group-item">
        <input type="date" style="border: none"/>
      </li>
    </ul>
    <div>
      <div class="btn-group" role="group" aria-label="Basic outlined example"
           style="display: flex; justify-content: space-around">
        <button type="button" class="btn btn-outline-primary">发布配送任务</button>
        <button type="button" class="btn btn-outline-primary">返回</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>