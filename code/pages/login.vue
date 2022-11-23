<template>
    <v-container class="w-100 h-100 d-flex justify-center align-center" style="background-color: rgb(229,229,229);">
        <v-card width="700" class="pa-10 mt-15 mx-auto cardShadow">
            <v-card-title primary-title class="text-center mb-5">
                <h2> Login to access the platform </h2>
            </v-card-title>
            <v-form @submit.prevent="onSubmit">
                <BaseInput label="E-mail" v-model="email" :error="errors.email" type="text" prepend-icon="mdi-email" />
                <PasswordField1 v-model="password" :error="errors.password" label="Password"></PasswordField1>

                <v-card-actions class="justify-center">
                    <v-btn color="success" type="submit" variant="elevated" class="d-flex align-center px-8 py-5"
                        :disabled="Object.keys(errors).length > 0">Login
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-container>
</template>

   

<script setup>
import { useForm, useField } from 'vee-validate'
import { object, string } from 'yup'
import PasswordField1 from '~~/components/forms/PasswordField.vue';

const schema = object({
    email: string().email().required(),
    password: string().required()
})

const { handleSubmit, errors } = useForm({ validationSchema: schema, })
const { value: email } = useField('email')
const { value: password } = useField('password')


const onSubmit = handleSubmit(values => {
    loginUser(values.email, values.password)
})

definePageMeta({
    layout: "navbar-only"
})
</script>  
  