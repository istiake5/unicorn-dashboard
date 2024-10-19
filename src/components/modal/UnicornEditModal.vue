<template>
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-[70]">
        <div class="modal-overlay"></div>
        <div class="modal-container bg-white mx-auto rounded-lg shadow-lg z-50 overflow-hidden">
            <div class="modal-content p-6 pr-3">
                <div class="modal-content-wrapper">
                    <div class="pb-4">
                        <div class="flex items-center justify-between mb-4 px-4  z-40 sticky top-0 border-b">
                            <h3 class="text-xl font-bold mb-3">Create Unicorn</h3>
                        </div>

                        <form class="bg-white shadow-md p-4 rounded-md">
                            <div class="space-y-3">
                                <div class="space-y-3">
                                    <label class="block font-medium text-lg" for="name">Name</label>
                                    <input type="text" id="name" placeholder="Write Name"
                                        class="border w-full p-2 rounded-md">
                                    <small class="text-gray-500 pt-4">This is the unicorn name</small>
                                </div>
                                <div class="space-y-3">
                                    <label class="block font-medium text-lg" for="age">Age</label>
                                    <input type="number" id="age" placeholder="Write age"
                                        class="border w-full p-2 rounded-md">
                                </div>
                                <div class="space-y-3">
                                    <label class="block font-medium text-lg" for="color">Color</label>
                                    <input type="text" id="color" placeholder="Write color"
                                        class="border w-full p-2 rounded-md">
                                </div>
                            </div>

                            <div class="flex justify-end mt-6">
                                <button
                                    class="border-2 hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center space-x-3"
                                    @click="closeModal">Cancel</button>
                                <button
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center space-x-3">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CloseIcon from "../icons/CloseIcon.vue";
export default {
    components: {
        CloseIcon,

    },
    props: {
        showModal: {
            type: Boolean,
            required: true,
        },

    },
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        closeModal() {
            this.$emit("close-modal");

        },

    },
    computed: {

    },
    watch: {

    },
};
</script>

<style scoped>
.modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 40;
}

.modal-container {
    max-height: 98vh;
    width: 32rem;
    z-index: 9999999;
}

.modal-content-wrapper {
    max-height: 98vh;
    border-radius: 0.5rem;

}

/* .modal-content {
  max-height: calc(80vh - 2rem);
  
} */

.modal-close {
    color: #4a4a4a;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
}
</style>
