<script setup lang="ts">

export type LogsType = {
  category: string
  description: string
  date: string
}

defineProps({
  logs: {
    type: Array as () => Array<LogsType>,
    required: true
  }
});

</script>
<template>
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
</template>
<style>
.logs {
  background-color: #fff;
  height: 100%;
  padding: 35px;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  overflow-y: scroll;
}

.logs_title {
  text-decoration: underline;
  font-weight: bold;
}

.logs_date, .logs_category {
  font-weight: bold;
  font-size: 1.1em;
}

.logs_category {
  text-transform: capitalize;
}

@media (max-width: 900px) {
  .logs {
    height: 300px;
    overflow-y: visible;
  }
}

</style>