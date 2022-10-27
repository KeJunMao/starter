import { defineStore } from "pinia";

export const useCountStore = defineStore("count", () => {
  let count = ref(0);
  const double = computed(() => count.value * 2);
  function add() {
    count.value++;
  }
  return {
    count,
    double,
    add,
  };
});
