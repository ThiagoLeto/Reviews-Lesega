<template>
    <v-container class="w-100 h-100 d-flex justify-center align-center" style="background-color: rgb(229,229,229);">
        <v-card width="700" class="pa-10 mt-15 mx-auto cardShadow">
            <h2 class="text-center"> Register to access the platform </h2>
            <v-form @submit.prevent="onSubmit" class="mt-5">
                <BaseInput label="Username" v-model="username" :error="errors.username" type="text" prepend-icon="mdi-account" />
                <BaseInput label="E-mail" v-model="email" :error="errors.email" type="text" prepend-icon="mdi-email" />
                <PasswordField1 v-model="password" :error="errors.password" label="Password"></PasswordField1>
                <PasswordField1 v-model="repeatPassword" :error="errors.repeatPassword" label="Repeat password">
                </PasswordField1>

                <v-card-actions class="justify-center">
                    <v-btn color="info" type="submit" variant="elevated" class="d-flex align-center px-8 py-5"
                        :disabled="Object.keys(errors).length > 0">Register
                    </v-btn>
                </v-card-actions>
                <div class="text-center mt-8">
                    <p> Already have an account? <nuxt-link to="/login"> Login </nuxt-link>
                    </p>
                </div>
            </v-form>
        </v-card>
    </v-container>
</template>

   

<script setup>
import { useForm, useField } from 'vee-validate'
import { object, string } from 'yup'
import * as Yup from 'yup';
import PasswordField1 from '~~/components/forms/PasswordField.vue';

const schema = object({
    username:string().max(25,'Username must not have more than 25 characters'),
    email: string().email().required(),
    password: string()
        .min(8, 'Password must have at least 8 characters')
        .max(32, 'Password must not have more than 32 characters')
        .test("hasNumber", "Password must contain at least one number", async input => /\d/.test(input))
        .test("hasLowerCase", "Password must contain at least one lowercase letter", async input => /[a-z]/.test(input))
        .test("hasUpperCase", "Password must contain at least uppercase letter", async input => /[A-Z]/.test(input)),
    repeatPassword: string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const { handleSubmit, errors } = useForm({ validationSchema: schema, })
const { value: email } = useField('email')
const { value: password } = useField('password')
const { value: repeatPassword } = useField('repeatPassword')
const { value: username } = useField('username')

const onSubmit = handleSubmit(values => {
    registerUser(values.email, values.username, values.password)
})

definePageMeta({
    layout: "navbar-only"
})
</script>  
  