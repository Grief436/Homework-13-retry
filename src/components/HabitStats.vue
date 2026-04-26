<script setup>
import { useHabitStore } from '../store/habitStore'
const store = useHabitStore()
</script>

<template>
  <div>
    <p>Total habits: {{ store.totalHabits }}</p>
    <p>Completed: {{ store.completedHabits }}</p>
  </div>
</template>
