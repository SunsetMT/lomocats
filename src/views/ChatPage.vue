<template>
  <div class="chat-page-wrapper bg-[#F4EBE9] pt-[32px] h-[926px]">
    <div class="chat-item-wrapper">
      <ChatItem v-for="i in 4" :key="i"/>
    </div>
    <TabBar/>
  </div>
</template>

<script>
import ChatItem from "@/components/ChatItem";
import TabBar from "@/components/TabBar";

export default {
  name: "ChatPage",
  components: {TabBar, ChatItem}
}
</script>

<style scoped>

</style>