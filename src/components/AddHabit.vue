<script setup>
import { ref } from 'vue'
import { useHabitStore } from '../store/habitStore'

const store = useHabitStore()
const habitName = ref('')

function add() {
  if (habitName.value.trim()) {
    store.addHabit(habitName.value)
    habitName.value = ''
  }
}
</script>

<template>
  <div>
    <input v-model="habitName" placeholder="New habit" />
    <button @click="add">Add Habit</button>
  </div>
</template>
