<template>
  <div class="users-rank-box-wrapper w-[375px] h-[600px] bg-red-500 mx-auto rounded-xl border-4 border-indigo-500">
    <UsersRankTableHeader/>
    <UserRankElement v-for="i in 5" :key="i" :place="i"/>
  </div>
</template>

<script>
import UserRankElement from "@/components/UserRankElement";
import UsersRankTableHeader from "@/components/UsersRankTableHeader";
export default {
name: "UsersRankBox",
  components: {UsersRankTableHeader, UserRankElement}
}
</script>

<style scoped>

</style>