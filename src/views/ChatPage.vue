<template>
  <div class="chat-page-wrapper bg-[#F4EBE9] pt-[32px] h-[926px]">
    <div class="chat-item-wrapper">
      <ChatItem v-for="i in CHAT_PRODUCTS" :key="i.id" :item_data="i"/>
    </div>
    <TabBar/>
  </div>
</template>

<script>
import ChatItem from "@/components/ChatItem";
import TabBar from "@/components/TabBar";
import {mapGetters} from 'vuex'

export default {
  name: "ChatPage",
  components: {TabBar, ChatItem},
  computed: {
    ...mapGetters(['CHAT_PRODUCTS'])
  }
}
</script>

<style scoped>

</style>