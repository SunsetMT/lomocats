<template>

  <div class="get-tokens-page-wrapper w-[375px] h-[600px] mx-auto font-sans text-lg border-4
  border-indigo-500 rounded-xl">
    <UserInformationBox/>
    <img src="https://codeforces.org/s/46462/images/codeforces-logo-with-telegram.png" alt="" class="some-pic my-4 mx-auto">
    <div class="get-token-congratulations-text my-4">Молодец!</div>
    <div class="get-tokens-number h-[50px] w-[200px] bg-red-300 border-4 border-indigo-500 text-indigo-500
    mx-auto rounded-xl flex place-content-center place-items-center my-4">+123 C</div>
    <button class="get-tokens-button h-[40px] w-[100px] bg-red-300 border-2 rounded-xl text-indigo-500 border-indigo-500 my-4">Claim</button>
    <TokensCatalog/>
  </div>
</template>

<script>
import TokensCatalog from "@/components/TokensCatalog";
import UserInformationBox from "@/components/UserInformationBox";
export default {
  name: "GetTokensPage",
  components: {UserInformationBox, TokensCatalog}
}
</script>

<style scoped>

</style>