<template>
  <div
      class="user-rank-element-wrapper flex mx-auto bg-green-500 h-[100px] border-2 border-grey
      flex justify-around place-items-center font-sans text-lg">
    <div class="user-rank-element-place text-yellow-300" v-if="place === 1">{{place}}</div>
    <div class="user-rank-element-place text-[#c0c0c0]" v-if="place === 2">{{place}}</div>
    <div class="user-rank-element-place text-[#FF8C00]" v-if="place === 3">{{place}}</div>
    <div class="user-rank-element-place" v-if="place> 3">{{place}}</div>
    <div class="user-rank-element-name">name: Sunset_MT</div>
    <div class="user-rank-element-points">tokens: 245</div>
  </div>
</template>

<script>
export default {
  name: "UserRankElement",
  props: {
    place: {
      type: Number,
      default: () => 1
    }
  }
}
</script>

<style scoped>

</style>