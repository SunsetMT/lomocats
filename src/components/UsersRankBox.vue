<template>
  <div class="achieve-wrapper border-8 border-[#892933] rounded-[20px] w-[356px] h-[319px] mx-auto bg-white">
    <h2 class="user-rank-box-header text-[#892933] text-[27px] mt-[20px] mb-[32px]">Рейтинг</h2>
    <div class="column-names flex place-content-center place-items-center justify-around">
      <div class="user-name-column w-[50px] text-[#892933] text-[22px]">Name</div>
      <div class="user-name-column w-[50px] text-[#892933] text-[22px]">Rank</div>
      <div class="user-name-column w-[50px] text-[#892933] text-[22px]">Coins</div>
    </div>
    <UserRankBoxItem v-for="user in USERS" :key="user.id" :user="user"/>
  </div>
</template>

<script>
import UserRankBoxItem from "@/components/UserRankBoxItem";
import {mapGetters} from 'vuex'
export default {
  name: "UsersRankBox",
  components: {UserRankBoxItem},
  computed: {
    ...mapGetters(['USERS'])
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&family=Raleway:wght@600&display=swap')
.user-rank-box-header
  font-family: 'Nunito', serif

.user-name-column
  font-family: 'Nunito', serif


</style>