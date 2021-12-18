<template>
  <div class="page-wrapper">
    <PageHeader/>
    <AchievBox/>
  </div>
</template>

<script>
import PageHeader from "@/header/PageHeader";
import AchievBox from "@/middle/AchieveBox";

export default {
  name: "PageWrapper",
  components: {
    PageHeader,
    AchievBox
  }
}
</script>

<style scoped>

</style>