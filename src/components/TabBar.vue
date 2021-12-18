<template>
  <div class="space-block h-[100px]"></div>
  <div class="tab-bar-wrapper bg-[#FFC233] fixed bottom-[0] w-[99vw]">
    <div class="icons-box w-[277px] mx-auto flex place-items-center place-content-center justify-between h-[90px]">
      <button class="chat-button h-[50px] w-[50px]" @click="redirect('/#/chat')"></button>
      <button class="home-button h-[50px] w-[50px]" @click="redirect('#/user')"></button>
      <button class="cat-button h-[50px] w-[50px]"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  methods: {
    redirect(link) {
      window.location = link
    }
  }
}
</script>

<style lang="sass">
.chat-button
  background-image: url("../assets/img/Chat_Icon.svg")
.home-button
  background-image: url("../assets/img/Home_Icon.svg")
  background-size: 50px 50px
.cat-button
  background-image: url("../assets/img/Cat_Icon.svg")

</style>