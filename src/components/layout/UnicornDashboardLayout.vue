<template>
    <div class="antialiased bg-gray-200 w-full">

        <div class="h-screen flex overflow-hidden">

            <!-- Menu Above Medium Screen -->
            <SideBarMenu />
            <!-- @end Menu Above Medium Screen -->

            <div class="flex-1 flex-col relative z-0 overflow-y-auto">
                <Nav />

                <div class="md:max-w-full md:mx-auto px-10 py-8">
                    <router-view />

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from './Nav.vue';
import SideBarMenu from './SideBarMenu.vue';

export default {
    name: "UnicornDashboardLayout",
    components: { SideBarMenu, Nav },
    setup() {

    },
    async mounted() {

    },
    computed: {

    }

};
</script>

<style scoped></style>
