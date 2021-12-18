<template>
  <div class="achieve-wrapper">
    <h2>Очивки</h2>
    <div class="flex flex-wrap mx-auto block-achieve w-[270px] ">
      <div class="bg-red-300 h-[64px] w-[64px] rounded-full mx-[10px] my-[10px]" v-for="i in 5" :key="i">

      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "AchieveBox"
}
</script>

<style lang="sass">
.achiev-wrapper
  height: 500px
  background-color: darkgrey


</style>