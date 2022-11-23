<template>

  <v-text-field v-bind="{
    ...$attrs, 
    onInput: updateValue
  }" :id="uuid" :class="{ error }" :label="label" :value="modelValue"
    :aria-describedby="error ? `${uuid}-error` : null" :aria-invalid="error ? true : false" prepend-icon="mdi-lock"
    :append-icon="passwordProps.eyeIcon" :type="passwordProps.textFieldType"
    @click:append="passwordProps.show = !passwordProps.show" autocomplete="off">
  </v-text-field>

  <Transition name=" error" mode="out-in">
    <v-alert v-if="error" type="error" :value="true" class="mt-n3 mb-6">
      {{ error}}
    </v-alert>
  </Transition>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },

  error: {
    type: String,
    default: ''
  },

  label: {
    type: String,
    default: ''
  }
})

const passwordProps = reactive({
  show: false,
  textFieldType: computed(() => passwordProps.show ? "text" : "password"),
  eyeIcon: computed(() => passwordProps.show ? "mdi-eye" : "mdi-eye-off")
})

</script>

