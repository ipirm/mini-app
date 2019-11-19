<template>
    <div class="sidebar">
        <div class="d-flex">
            <span>Настройки</span>
            <a class="card-btn" href="#" @click.prevent="sendData">
                <span>Сохранить</span>
            </a>
            <a class="close" href="#" @click.prevent="hideSidebar">
                <img src="~assets/icons/close.svg">
            </a>
        </div>
        <input-custom
                v-if="data.blockID === 12345"
                v-for="(item, index) in data.settings"
                :key="index"
                :inputProp="item"
                class="mt-4"
                @getData="getData"
        />
        <select class="sidebar-select" v-if="data.blockID === 12346" v-model="selected_answer">
            <option value="" selected>Выберите ваш ответ</option>
            <option value="yes">Да</option>
            <option value="no">Нет</option>
        </select>
    </div>
</template>

<script>
    import InputCustom from '~/components/elements/InputCustom'

    export default {
        props: {
            data: {
                type: Object,
                default: {}
            }
        },
        data() {
            return {
                selected_answer: '',
                body: {
                    width: '',
                    height: ''
                }
            }
        },
        components: {
            InputCustom
        },
        methods: {
            sendData() {
                this.data.blockID === 12345 ? this.$store.dispatch('elements/sendSize', this.body) : this.$store.dispatch('elements/sendAnswer', this.selected_answer)
            },
            getData(v) {
                v.type === 'width' ? this.body.width = v.value : this.body.height = v.value
            },
            hideSidebar() {
                this.$emit('hideSidebar')
            }
        }
    }
</script>

<style scoped lang="scss">
    .col-lg-12{
        padding: 0 !important;
    }
    .close{
        width: 30px;
        height: 30px;
        margin-right: 20px;
    }
    .sidebar {
        position: absolute;
        z-index: 99;
        background-color: rgba(169, 169, 169, 0.8);
        width: 25vw;
        height: 100vh;
        padding: 20px 15px;
        left: 0;
        &-select {
            width: 250px;
            height: 50px;
        }

        .d-flex {
            display: flex;
            justify-content: space-between;
            height: 100px;
            align-items: center;
        }
    }
</style>
