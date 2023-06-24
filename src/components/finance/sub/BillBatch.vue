<script>
import {reactive} from "vue";
import {BillBatchStatus} from "../../../assets/config.js";
import {nanoid} from "nanoid";

export default {
  computed: {
    BillBatchStatus() {
      return BillBatchStatus
    }
  },
  setup(){
    const data = reactive({billBatchList: undefined})
    return {
      data
    }
  },
  methods:{
    async create_new_bill_batch() {

      const {value: formValues} = await this.$swal.fire({
        title: '新建发票批次',
        html:
            `<div>
批次ID: ${nanoid()}
</div>
开始号码：<input id="swal-input1" class="swal2-input"><br />
             结束号码：<input id="swal-input2" class="swal2-input">`,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value
          ]
        }
      })

      if (formValues) {
        Swal.fire(JSON.stringify(formValues))
      }
    }
  },
  mounted() {
    this.$fetchWithIpPort('/finance/get-bill-batch-list')
        .then(res => res.json())
        .then((res) => {
          this.data.billBatchList = res.data
        }).catch((e) => {
      console.log(e)
    })
  }

}
</script>

<template>
<h5>发票批次</h5>
  <div >
    <div class="card">
      <div class="container px-4 text-center _flex-space-between">
        <div class="input-group mb-3" style="width: 50%">
          <input type="text" class="form-control" placeholder="输入批次号" aria-label="Recipient's username" aria-describedby="button-addon2">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">查询</button>
        </div>
        <div class="input-group mb-3" style="width: 9em;margin-left: 30px">
          <button type="button" class="btn btn-outline-primary" @click="create_new_bill_batch">新建发票批次</button>
        </div>
      </div>

      <!--展示信息的table-->
      <table class="table">
        <thead class="table-secondary">
        <tr>
          <th>序号</th>
          <th>开始号码</th>
          <th>结束号码</th>
          <th>批次号</th>
          <th>所属分站</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(goods, index) of this.data.billBatchList" class="table-primary" :key="goods.id">
          <td v-text="index + 1"></td>
          <td>{{ goods.start }}</td>
          <td>{{ goods.stop }}</td>
          <td>{{ goods.batchId }}</td>
          <td>{{ goods.allot }}</td>
          <td>{{ BillBatchStatus[goods.status] }}</td>
          <td>
            <div class="btn-group" role="group" aria-label="Basic outlined example">
              <button type="button" class="btn btn-outline-primary">分配</button>
              <button type="button" class="btn btn-outline-primary">作废</button>
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