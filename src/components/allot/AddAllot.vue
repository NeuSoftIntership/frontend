<script>
export default {

}
</script>

<template>
    <h5>新建分站</h5>
    <div class="card add-allot-center">
      <div class="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 6em">分站名</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
      </div>

      <div class="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 6em">分站电话</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
      </div>

      <div class="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 6em">分站地址</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
      </div>

      <div class="btn-group allot-add-button-box" role="group" aria-label="Default button group">
        <button type="button" class="btn btn-outline-primary">确定</button>
        <button type="button" class="btn btn-outline-primary">取消</button>
      </div>
    </div>
</template>

<style scoped>
.allot-add-button-box{
  margin: 20px;
}

.allot-add-button-box>button{
  margin: 20px 40px 20px 40px;
}

.add-allot-center{
  width: 70%;
  height: 50%;
  left: 15%;
  top: 20%;
}
</style>