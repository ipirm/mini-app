<template>
    <div class="sidebar-input">
        <span>{{ this.inputProp.Name }}</span>
        <input :class="{error : error, success : success }" v-model="size.value" @input="getData"/>
    </div>
</template>

<script>
    export default {
        props: {
            inputProp: {
                type: Object,
                default: ''
            }
        },
        data() {
            return {
                error: false,
                success: false,
                size: {
                    type: this.inputProp.type,
                    value: this.inputProp.fieldValue,
                }
            }
        },
        methods: {
            getData() {
                let regex = /(\d*\.?\d+)\s?(px|em|%|rem+)/igm
                this.size.value.match(regex) && this.size.value !== '' ? this.error = false : this.error = true
                if (!this.error) {
                    this.$emit('getData', this.size)
                    this.$store.dispatch('elements/newSize', this.size)
                    this.success = true
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .success {
        outline: 1px solid green;
    }

    .error {
        outline: 1px solid red;
    }

    .sidebar-input {
        display: flex;
        flex-direction: column;
        max-width: 150px;

        input {
            margin-top: 10px;
        }
    }
</style>
