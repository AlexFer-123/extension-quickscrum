<template>
    <div class="d-flex justify-center items-center" >
        <v-card variant="outlined" class="isolate bg-white px-6 py-24 sm:py-32 mx-2" style="width:375px;">
            <div>
                <div class="flex items-center justify-center mt-4 text-center">
                    <h1 class="text-h4 font-weight-bold">Seja bem vindo</h1>
                    <span class="text-subtitle-1 ">Faça login</span>
                </div>
                <v-form v-model="valid">
                    <v-container>
                        <v-row class="d-flex flex-column">
                            <v-col
                            cols="12"
                            >
                                <v-text-field
                                    :counter="10"
                                    label="E-mail"
                                    hide-details
                                    required
                                ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            >
                                <v-text-field
                                    :counter="10"
                                    label="Senha"
                                    hide-details
                                    required
                                ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            class="d-flex justify-center gap-4"
                            >
                                <v-btn variant="flat bg-deep-purple-darken-1 mr-2">Login</v-btn>
                                <v-btn variant="tonal">Cadastrar</v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </div>
        </v-card>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>