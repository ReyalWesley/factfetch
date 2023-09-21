<script setup lang="ts">
import Single_card from "@/components/cards/single_card.vue";
import type { CardProps } from "@/components/cards/single_card.vue";
import {ref} from "vue";

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

export type LogsType = {
  category: string
  description: string
  date: string
}

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
    <div class="logs">
      <h3 class="logs_title">Logs</h3>
      <div v-for="(log, index) in logs" :key="index">
        <div>
          <p class="logs_date">{{ log.date }}</p>
          <p class="logs_category">{{ log.category }} Fact</p>
          <p>{{ log.description }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style>

main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
  column-gap: 100px;
}

.cards {
  display: flex;
  flex-direction: column;
  row-gap: 40px;
}

.logs {
  width: 50%;
  background-color: #fff;
  height: 100%;
  padding: 35px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  overflow-y: scroll;
}

.logs_title {
  text-decoration: underline;
}

.logs_date, .logs_category {
  font-weight: bold;
  font-size: 1.1em;
}

.logs_category {
  text-transform: capitalize;
}

</style>
