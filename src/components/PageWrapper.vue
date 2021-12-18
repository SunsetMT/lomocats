<template>
  <div class="page-wrapper">
    <PageHeader/>
    <AchieveBox/>
    <UsersRankBox/>
  </div>
</template>

<script>
import PageHeader from "@/header/PageHeader";
import AchieveBox from "@/components/AchieveBox";
import UsersRankBox from "@/components/UsersRankBox";

export default {
  name: "PageWrapper",
  components: {
    UsersRankBox,
    PageHeader,
    AchieveBox
  }
}
</script>

<style scoped>

</style>