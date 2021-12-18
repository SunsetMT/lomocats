<template>
  <div class="shop-page-wrapper w-[375px] h-[600px] mx-auto bg-red-500">
    <h2 class="shop-page-header text-xl font-sans text-indigo-500">Shop</h2>
    <TokensCatalog/>
  </div>
</template>

<script>
import TokensCatalog from "@/components/TokensCatalog";
export default {
name: "ShopPage",
  components: {TokensCatalog}
}
</script>

<style scoped>

</style>