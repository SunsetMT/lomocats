<template>
  <div class="achieve-wrapper relative bottom-[40px] border-8 border-[#892933] rounded-[20px] w-[356px] h-[319px] mx-auto bg-white">
    <h2 class="achieve-header text-[#892933] text-[27px] mt-[20px] mb-[32px]">Достижения</h2>
    <div class="flex flex-wrap mx-auto block-achieve">
      <div class="h-[88px] w-[88px] rounded-full border-8 border-[#FFC233] mx-[12px] mb-[19px] flex place-content-center place-items-center" v-for="i in 6" :key="i">
        {{i}}
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
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&family=Raleway:wght@600&display=swap')
.achieve-header
  font-family: 'Nunito', serif


</style>