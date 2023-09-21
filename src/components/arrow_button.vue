<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

type buttonProps = {
  handleClick: () => void
}

const { handleClick } = defineProps<buttonProps>()
</script>

<template>
  <div class="arrow_button" @click="handleClick">
    <font-awesome-icon icon="fa-solid fa-arrow-down" size="xl" />
  </div>

</template>

<style>
.arrow_button {
  width: 40px;
  height: 40px;
  background-color: #FF6969;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid black
}
</style>
