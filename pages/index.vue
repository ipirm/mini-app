<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="overlay-cards">
                    <transition name="fade">
                        <sidebar
                                v-if="this.selected.length"
                                @hideSidebar="showSideBar"
                                :data="this.selected[0]"
                        />
                    </transition>
                    <card @update-cart="showSideBar" v-for="(item, index) in list" :key="index" :data="item"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        data() {
            return {
                activeSidebar: false,
                selected: []
            }
        },
        methods: {
            showSideBar(v) {
                if (v !== undefined) this.selected = this.list.filter(item => item.blockID === v);
                else this.selected = {}
            },
        },
        computed: {
            ...mapState('elements', ['list'])

        }
    }
</script>

<style lang="scss">

</style>
