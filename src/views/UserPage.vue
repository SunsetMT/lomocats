<template>
  <div class="user-page-wrapper">
    <div class="user-avatar-box mx-auto h-[445px] bg-[#FFC233] flex place-content-center place-items-center">
      <img src="../assets/img/Cat_Icon2.svg" alt="" class="">
    </div>
    <span class="user-rank-value relative bottom-[170px] left-[29px] text-[25px] text-[#ffffff]">{{USER.rank}}</span>
    <span class="user-level-value relative bottom-[312px] right-[90px] text-[31px] text-[#892933]">{{USER.level}}</span>
    <span class="user-coins-value relative bottom-[115px] right-[57px] text-[white] text-[27px]">{{USER.coins}}</span>
    <div class="user-page-information bg-[#F4EBE9] relative bottom-[47px]">
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
import {mapGetters} from 'vuex'
export default {
  name: "UserPage",
  components: {TabBar, UsersRankBox, AchieveBox},
  data: function () {
    return {
      users: {
        type: Object,
        default: () => {}
      }
    }
  },
  computed: {
    ...mapGetters([
        'USER'
    ])
  }

}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@800&family=Raleway:wght@600&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap')
.user-rank-value, .user-coins-value
  font-family: 'Nunito', serif

.user-level-value
  font-family: 'Montserrat', serif

</style>