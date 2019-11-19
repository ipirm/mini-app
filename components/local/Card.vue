<template>
    <div class="card"  :style="{ backgroundColor: `${this.data.bgColor}` }">
        <a class="card-btn" href="#" @click.prevent="changeSize">
            <span>Настройки</span>
        </a>
        <textarea
                class="card-textarea"
                v-model="text"
                :style="{width: this.data.settings[0].fieldValue,height: this.data.settings[1].fieldValue,backgroundColor: `${this.data.bgColor}`}">
        >
        </textarea>
    </div>
</template>

<script>
    export default {
        props: {
            data: {
                type: Object,
                default: {}
            }
        },
        created(){
        },
        data() {
            return {
                text: this.data.bText || ''
            }
        },
        methods: {
            changeSize() {
                this.$emit('update-cart', this.data.blockID);
            },
        }
    }
</script>

<style scoped lang="scss">
    .card {
        width: 100%;
        height: 50vh;

        &-btn {
            margin: 35px 35px 0 auto;
        }

        &-textarea {
            border: none;
            margin-top: auto;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #282828;
            font-size: 16px;
            background-color: #f0fff0;
        }
    }
</style>
