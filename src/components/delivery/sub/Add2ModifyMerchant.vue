<script>
import {reactive, ref} from "vue";

export default {
  setup() {
    let isNotEdit = ref(true)
    const data = reactive({})

    return {
      data,
      isNotEdit: isNotEdit
    }
  },
  methods: {
    modify2save() {
      if(!this.isNotEdit){
        this.$swal.fire({
          icon: 'success',
          text: '修改成功',
        })
      }
      this.isNotEdit = !this.isNotEdit
    }
  }
}
</script>

<template>

  <div class="_flex-space-between">
    <span>商品详细信息</span>
    <button type="button" class="btn btn-outline-primary" v-text="isNotEdit?'修改':'保存'" @click="modify2save"></button>
  </div>
  <div>

    <ul class="list-group">
      <li class="list-group-item" aria-disabled="true" :class="[{disabled: isNotEdit}]">
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">供货商代码</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword">
          </div>
        </div>
      </li>
        <li class="list-group-item" aria-disabled="true" :class="[{disabled: isNotEdit}]">
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">供货商名称</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword">
            </div>
          </div>
        </li>
        <li class="list-group-item" aria-disabled="true" :class="[{disabled: isNotEdit}]">
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">地址</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword">
            </div>
          </div>
        </li>
        <li class="list-group-item" aria-disabled="true" :class="[{disabled: isNotEdit}]">
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">联系人</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword">
            </div>
          </div>
        </li>
        <li class="list-group-item" aria-disabled="true" :class="[{disabled: isNotEdit}]">
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">联系人电话</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword">
            </div>
          </div>
        </li>
        <li class="list-group-item" aria-disabled="true" :class="[{disabled: isNotEdit}]">
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">邮政编码</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword">
            </div>
          </div>
        </li>
        <li class="list-group-item" aria-disabled="true" :class="[{disabled: isNotEdit}]">
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">银行卡号</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword">
            </div>
          </div>
        </li>
        <li class="list-group-item" aria-disabled="true" :class="[{disabled: isNotEdit}]">
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">备注</label>
            <div class="col-sm-10">
              <textarea type="password" class="form-control"></textarea>
            </div>
          </div>
        </li>
    </ul>
  </div>
</template>

<style scoped>

</style>