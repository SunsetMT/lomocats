<template>
  <div class="token-catalog-wrapper my-4">
    <div class="token-catalog-header">
      Потратить баллы
    </div>
    <TokenCatalogItem v-for="i in 3" :key="i"/>
  </div>
</template>

<script>
import TokenCatalogItem from "@/components/TokenCatalogItem";
export default {
name: "TokensCatalog",
  components: {TokenCatalogItem}
}
</script>

<style scoped>

</style>