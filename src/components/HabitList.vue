<script setup>
import { useHabitStore } from '../store/habitStore'
const store = useHabitStore()
</script>

<template>
  <ul>
    <li v-for="habit in store.habits" :key="habit.id">
      <input type="checkbox" v-model="habit.completed" @change="store.toggleHabit(habit.id)" />
      {{ habit.name }}
      <button @click="store.removeHabit(habit.id)">X</button>
    </li>
  </ul>
</template>
