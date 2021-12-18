<template>
  <div class="chat-item-wrapper w-[372px] h-[94px] border-8 border-[#892933] rounded-[20px]
  flex bg-white mx-auto my-[11px] place-items-center">
    <img class="heart-icon w-[54px] h-[47px] ml-[16px]" :src="require(`../assets/img/${item_data.img}`)"/>
    <div class="chat-item-description ml-[17px] flex flex-col items-start">
      <div class="chat-item-description-title text-[18px] text-[#892933]">{{ item_data.title }}</div>
      <div class="chat-item-description-text text-[14px] text-[#FFC233]">{{ item_data.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatItem",
  props: {
    item_data: {
      type: Object,
      default: () => {
      }
    }
  },
  data: function () {
    return {
      item: 'Heart_Icon.svg'
    }
  },

}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&family=Raleway:wght@600&display=swap')
.chat-item-description
  font-family: 'Nunito', serif

.heart-icon
  background-repeat: no-repeat
  background-position: 50% 50%

</style>