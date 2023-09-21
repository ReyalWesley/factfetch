<script setup lang="ts">
import Arrow_button from "@/components/arrow_button.vue";
import { fetchFact } from "@/data/fetchApi";
import { onMounted, ref } from "vue";
import type { LogsType } from "@/components/cards/cards_list.vue";

export type CardProps = {
  category: string
  description: string
  fetchLogs: (log: { date: any; description: any; category: string }) => LogsType[]
}

const props =  defineProps<CardProps>();

const fact = ref<string | null>(null);
const actualDate = ref<string | null>(null);

onMounted(async () => {
  await refetchFact();
});

const refetchFact = async () => {
  const [ date, data ] = await fetchFact(props.category);
  fact.value = data;
  actualDate.value = date;
  props.fetchLogs({ category: props.category, description: data, date: date });
};

</script>

<template>
  <div class="card">
    <section class="card_header">
      <h3>A cool <span class="card_title">{{ category }}</span> Fact</h3>
      <Arrow_button :handle-click="refetchFact"/>
    </section>

    <p class="description">{{ fact || description }}</p>
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

.card_title span {
  font-weight: bold;
  text-decoration: underline;
  text-transform: capitalize;
}

.description {
  font-size: 1.1rem;
  font-weight: 500;
}
</style>
