<template>
  <div class="user-page-wrapper">
    <div class="user-avatar-box mx-auto h-[445px] bg-[#FFC233] flex place-content-center place-items-center">
      <img src="../assets/img/Cat1.svg" alt="" class="">
    </div>
    <div class="user-page-information bg-[#F4EBE9]">
      <AchieveBox/>
      <UsersRankBox/>
      <TabBar/>
    </div>
  </div>

</template>

<script>
import AchieveBox from "@/components/AchieveBox";
import UsersRankBox from "@/components/UsersRankBox";
import TabBar from "@/components/TabBar";

export default {
  name: "UserPage",
  components: {TabBar, UsersRankBox, AchieveBox}
}
</script>

<style scoped>

</style>