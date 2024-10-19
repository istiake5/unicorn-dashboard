<template>
    <div>
        <!-- title and crate button -->
        <div class="flex  items-center justify-between mb-5">
            <p class="text-2xl font-bold">Welcome John Doe {{ testEnv }}</p>
            <div>

                <button type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center space-x-3"
                    @click="openUnicornCreateModal">
                    <StopIcon class="w-7" />
                    <span>Create Unicorn</span>
                </button>
            </div>
        </div>
        <!-- end title and crate button -->

        <!-- Doctor card Info -->
        <div class="space-y-3">
            <DoctorCardInfo />
            <DoctorCardInfo />
        </div>
        <!-- End Doctor card Info -->

        <!-- Modals -->
        <UnicornCreateModal :show-modal="showUnicornCreateModal" @close-modal="closeUnicornCreateModal" />
    </div>
</template>

<script>
import DoctorCardInfo from '@/components/dashboard/DoctorCardInfo.vue';
import ChevronDownIcon from '@/components/icons/ChevronDownIcon.vue';
import EngingeeringIcon from '@/components/icons/EngingeeringIcon.vue';
import StopIcon from '@/components/icons/StopIcon.vue';
import TrashIcon from '@/components/icons/TrashIcon.vue';
import UnicornCreateModal from '@/components/modal/UnicornCreateModal.vue';

export default {
    name: "DashBoard",
    components: {
        StopIcon,
        TrashIcon,
        ChevronDownIcon,
        EngingeeringIcon,
        DoctorCardInfo,
        UnicornCreateModal,
    },

    data() {
        return {
            showUnicornCreateModal: false,
        }
    },
    methods: {
        closeUnicornCreateModal() {
            this.showUnicornCreateModal = false;
        },
        openUnicornCreateModal() {
            this.showUnicornCreateModal = true;
        }

    },

    computed: {
        testEnv() {
            return import.meta.env.VITE_TEST_ENV_FILE;
        }
    }
}
</script>