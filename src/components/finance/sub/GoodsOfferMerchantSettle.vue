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
    const data = reactive({merchantSettleList: undefined})
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
        this.$swal.fire(JSON.stringify(formValues))
      }
    },
    history_to_detail(){
      this.$router.push({
        name: 'finance-goods-offer-merchant-detail'
      })
    }
  },
  mounted() {
    this.$fetchWithIpPort('/finance/get-merchant-settle-list')
        .then(res => res.json())
        .then((res) => {
          this.data.merchantSettleList = res.data
        }).catch((e) => {
      console.log(e)
    })
  }

}
</script>

<template>
  <h5>供货商结算</h5>
  <div >
    <div class="card">
      <div class="container px-4 text-center">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="供货商名称" aria-label="Recipient's username" aria-describedby="button-addon2">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">查询</button>
        </div>
      </div>

      <!--展示信息的table-->
      <table class="table">
        <thead class="table-secondary">
        <tr>
          <th>序号</th>
          <th>供货商名称</th>
          <th>地址</th>
          <th>联系人</th>
          <th>联系方式</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(goods, index) of this.data.merchantSettleList" class="table-primary" :key="goods.id">
          <td v-text="index + 1"></td>
          <td>{{ goods.name }}</td>
          <td>{{ goods.address }}</td>
          <td>{{ goods.contact }}</td>
          <td>{{ goods.phone }}</td>
          <td>
            <div class="btn-group" role="group" aria-label="Basic outlined example">
              <button type="button" class="btn btn-outline-primary" @click="history_to_detail">查看详细信息</button>
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