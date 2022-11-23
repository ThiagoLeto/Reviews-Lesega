<template>

  <v-text-field v-bind="{
    ...$attrs, 
    onInput: updateValue
  }" :id="uuid" :label="label" :value="modelValue" :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : false" :class="{ error }">
  </v-text-field>

  <Transition name="error" mode="out-in">
    <v-alert v-if="error" type="error" :value="true" class="mt-n3 mb-6">
      {{ error}}
    </v-alert>
  </Transition>


</template>

<script setup>
import UniqueID from '@/features/UniqueID'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  }
})
const updateValue = (event) => {
  emit("update:modelValue", event.target.value)
}

const uuid = UniqueID().getID().toString()
</script>

<style>
.error-enter-active,
.error-leave-active {
  transition: all 0.5s ease;
  width: inherit;
  height: inherit;
}

.error-enter-from,
.error-leave-to {
  transform: scaleY(0);
  opacity: 0%;
  height: inherit;

}

.error-enter-to {
  transform: scaleY(1);
}
</style>