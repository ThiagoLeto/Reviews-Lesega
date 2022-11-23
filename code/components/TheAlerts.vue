<script setup>
import { useAlertsStore } from '~~/stores/AlertsStore';

const alerts = useAlertsStore()
</script>
<template>
  <div class="toast toast-end w-100">
    <TransitionGroup name="alerts">
      <v-card v-for="alert in alerts.items" :key="alert.id" class="my-1 py-2 w-100 d-flex justify-center"
        :color="alert.style">

        <div class="w-20 d-flex h-100 justify-center align-center">
          <button @click="alerts.remove(alert.id)" class="px-5">x</button>
        </div>
        <div>{{ alert.message }}</div>
      </v-card>
    </TransitionGroup>
  </div>
</template>
<style scoped>
.alerts-enter-active,
.alerts-leave-active {
  transition: all 0.5s ease;
}

.alerts-enter-from,
.alerts-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
