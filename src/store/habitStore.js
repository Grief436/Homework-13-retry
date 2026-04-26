import { defineStore } from 'pinia'

export const useHabitStore = defineStore('habitStore', {
  state: () => ({
    habits: []
  }),

  getters: {
    totalHabits: (state) => state.habits.length,
    completedHabits: (state) => state.habits.filter(h => h.completed).length
  },

  actions: {
    addHabit(name) {
      this.habits.push({
        id: Date.now(),
        name,
        completed: false
      })
    },

    toggleHabit(id) {
      const habit = this.habits.find(h => h.id === id)
      if (habit) habit.completed = !habit.completed
    },

    removeHabit(id) {
      this.habits = this.habits.filter(h => h.id !== id)
    }
  }
})
