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

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&family=Raleway:wght@600&display=swap')
.user-rank, .user-name, .user-coins
  font-family: Nunito, serif



</style>