<script setup lang="ts">

import Arrow_button from "@/components/arrow_button.vue";

type CardProps = {
  category: string
  description: string
}

defineProps<CardProps>();


const capitalizeFirstLetter = (str: string): string => {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

</script>

<template>
  <div class="card">
    <section class="card_header">
      <h3>A cool <span class="card_title">{{ capitalizeFirstLetter(category) }}</span> Fact</h3>
      <Arrow_button />
    </section>

    <p class="description">{{ description }}</p>
  </div>
</template>

<style>
.card {
  width: 400px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  border: 1px solid gray;
  padding: 25px;
}

.card_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card_title {
  font-weight: bold;
  text-decoration: underline;
}

.description {
  font-size: 1.1rem;
  font-weight: 500;
}
</style>
