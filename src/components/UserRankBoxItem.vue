<template>
  <div class="user-rank-box-item-wrapper h-[60px] flex place-content-center place-items-center justify-around">
    <div class="user-name w-[60px]">{{user.name}}</div>
    <div class="user-rank w-[60px]">{{user.rank}}</div>
    <div class="user-coins w-[60px] ">{{user.coins}}</div>
  </div>
</template>

<script>
export default {
  name: "UserRankBoxItem",
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>