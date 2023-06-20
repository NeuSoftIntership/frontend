<script>
 import {reactive} from "vue";

 export default {///allot/get-client-orders
   setup(){
     // 用来存储需要响应的数据
     const data = reactive({allot_info_list: undefined})

     return {
       data
     }
   },
   methods:{
     history_to_add_allot(){
       this.$router.push({
         name: "add-allot"
       });
     },
     history_to_allot_stock(){
       this.$router.push({
         name: "allot-stock",
         query:{
           clientName: "分站XXX"
         }
       });
     },
     history_to_allot_task_list(){
       this.$router.push({
         name: "allot-task-list",
       });
     },
     history_to_allot_bill_list(){
       this.$router.push({
         name: "allot-dispatch-bill-list"
       });
     },
     history_to_allot_courier_list(){
       this.$router.push({
         name: "allot-courier-list"
       });
     }
   },
   mounted() {
     this.$fetchWithIpPort('/allot/get-allot-list')
         .then(res => res.json())
         .then((res) => {
           this.data.allot_info_list = res.data
         }).catch((e) => {
       console.log(e)
     })
   }
 }
</script>

<template>
  <h6>分站中心</h6>
  <div style="height: 100%">
    <!--  搜索  -->
    <div class="input-group con" style="margin: 40px 0 40px 0">
      <input type="text" class="form-control" placeholder="Recipient's username"
             aria-label="Recipient's username with two button addons">
      <button class="btn btn-outline-secondary" type="button">搜索</button>
      <button class="btn btn-outline-secondary" type="button" @click='history_to_add_allot'>新建分站</button>
    </div>
    <!-- 展示数据的table -->
    <table class="table">
      <thead class="table-secondary">
      <tr>
        <th>序号</th>
        <th>分站名称</th>
        <th>分站电话</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(allot, index) of this.data.allot_info_list" class="table-primary" :key="allot.id">
        <td v-text="index + 1"></td>
        <td>{{ allot.station }}</td>
        <td>{{ allot.phone }}</td>
        <td>
          <div class="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" class="btn btn-outline-primary" @click="history_to_allot_stock">查询库存</button>
            <button type="button" class="btn btn-outline-primary" @click="history_to_allot_task_list">查看任务单</button>
            <button type="button" class="btn btn-outline-primary" @click="history_to_allot_bill_list">查看发票</button>
            <button type="button" class="btn btn-outline-primary" @click="history_to_allot_courier_list">查看配送员</button>
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