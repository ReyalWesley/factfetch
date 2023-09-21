<script setup lang="ts">
import Single_card from "@/components/cards/single_card.vue";
import type { CardProps } from "@/components/cards/single_card.vue";
import {ref} from "vue";
import Logs_list from "@/components/logs/logs_list.vue";
import type { LogsType } from "@/components/logs/logs_list.vue";

const cards = ref<CardProps[]>([
  {
    category: "math",
    description: "7500 is the order of a prefect group",

  },
  {
    category: "date",
    description: "September 21st is the day in 1961 that Maiden flight of the CH-47 Chinook transportation helicopter.",
  }
]);

const logs = ref<Array<LogsType>>([]);

const addLogs = (log: LogsType) => {
  logs.value.unshift(log);
};

</script>

<template>
  <main>
    <div class="cards">
      <Single_card v-for="(card, key) in cards" :description="card.description" :category="card.category" :key="key" :fetch-logs="addLogs"/>
    </div>
    <Logs_list :logs="logs" />
  </main>
</template>

<style>

main {
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  height: 700px;
  column-gap: 100px;
  margin: auto;
}

@media (max-width: 900px) {
  main {
    flex-direction: column;
    height: auto;
    row-gap: 50px;
  }
}

.cards {
  display: flex;
  flex-direction: column;
  row-gap: 40px;
}



</style>
