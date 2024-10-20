<template>
    <div class="flex justify-center space-x-4 mt-4">
        <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1"
            class="bg-blue-500 text-white px-4 py-2 rounded">
            Previous
        </button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages"
            class="bg-blue-500 text-white px-4 py-2 rounded">
            Next
        </button>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: {
        currentPage: {
            type: Number,
            required: true
        },
        totalPages: {
            type: Number,
            required: true
        },
        onPageChange: {
            type: Function,
            required: true
        }
    },
    methods: {
        changePage(page) {
            if (page > 0 && page <= this.totalPages) {
                this.onPageChange(page);
            }
        }
    }
};
</script>

<style scoped>
/* Add any styles specific to pagination here */
</style>