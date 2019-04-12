<template>
<div class="hello">
    <b-container class="bv-example-row">
        <b-row style="margin-bottom: 16px">
            <b-col lg="8" offset-lg="2">
                <h3 class="text-center">Input Berita</h3>
            </b-col>
        </b-row>
        <hr>
        <b-row>
            <b-col lg="8" offset-lg="2">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group id="input-group-1">
                        <b-form-input id="input-1" v-model="form.title" type="email" required placeholder="Judul Berita"></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2">
                        <b-form-input id="input-2" v-model="form.city" required placeholder="Kota"></b-form-input>
                    </b-form-group>

					<b-form-group id="input-group-3">
                        <b-form-input id="input-3" v-model="form.author" required placeholder="Penulis"></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-4" label="Content:" label-for="input-4">
                        <vue-editor id="input-4" v-model="form.content" required></vue-editor>
                    </b-form-group>

                    <b-button class="btn-block" type="submit" variant="primary">Submit</b-button>
                </b-form>
            </b-col>
        </b-row>
    </b-container>
    <br>
  </div>
</template>

<script>
import {
    VueEditor,
    Quill
} from 'vue2-editor'

export default {
    name: "HelloWorld",
    components: {
        VueEditor,
    },
    props: {
        msg: String
    },
    data() {
        return {            
            form: {
                title: '',
                city: '',
				author: '',
				content: '',
            },
            show: true
        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values
            this.form.email = ''
            this.form.name = ''
            this.form.food = null
            this.form.checked = []
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
