<template>
    <div class="bg-white shadow-sm rounded-lg overflow-hidden border-l-[5px]"
        :class="getRandomBorderColor(data.colour)">
        <div class="flex items-center justify-between px-4">
            <div
                class="p-4 flex w-4/5 flex-col border-r-2 mr-2 lg:border-r-0 lg:mr-0 lg:flex-wrap lg:flex-row space-y-3 lg:items-center lg:space-x-6">
                <div class="w-[4%]">
                    <p class="text-sm text-gray-500 mt-2">No</p>
                    <p class="font-semibold text-lg">{{ serialNo }}</p>
                </div>
                <div class="w-[25%]">
                    <p class="text-sm text-gray-500 ">Doctor Name</p>
                    <p class="font-semibold text-lg">{{ data.name }}</p>
                </div>
                <div class="w-[4%]">
                    <p class="text-sm text-gray-500">Age</p>
                    <p class="text-lg">{{ data.age }}</p>
                </div>
                <div class="w-[5%]">
                    <p class="text-sm text-gray-500">Color</p>
                    <p class="text-lg">{{ data.colour }}</p>
                </div>
                <div class="w-[14%]">
                    <p class="text-sm text-gray-500">Status</p>
                    <span
                        class="inline-flex items-center px-3 py-1.5 rounded-xl bg-yellow-100 text-yellow-800 text-sm font-medium">
                        {{ unicornStatus(data) }}
                    </span>
                </div>
            </div>

            <div class="ml-auto  flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-2">
                <button class="border-2 hover:bg-blue-100 px-3 py-1 rounded-lg  font-medium w-16"
                    @click="openUnicornEditModal(data)">
                    Edit
                </button>
                <button
                    class="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm font-medium w-16 flex items-center justify-center">
                    <TrashIcon class="w-5 h-5" @click="deleteUnicornItem(data)" />
                </button>
            </div>
        </div>

        <!-- Details card -->
        <hr>
        <div class="border-2 rounded-md m-2" v-if="detailStatus">
            <div class="flex flex-col justify-center items-center bg-purple-100  rounded-md m-2 p-5">
                <EngingeeringIcon class="w-8 stroke-blue-700 mb-2" />
                <p class="text-center text-blue-700">The body copy explains the empty state. <br> The icon relates to
                    the situation</p>
            </div>
        </div>
        <hr class="px-4">
        <!-- Details Toggle -->
        <div class=" px-4 py-2 flex justify-end items-center">
            <span class="font-medium cursor-pointer" @click="toggleDetailStatus">Show details</span>
            <ChevronDownIcon class="w-6 h-6 border-2 rounded-full p-1 ml-3 cursor-pointer" @click="toggleDetailStatus"
                v-if="!detailStatus" />
            <ChevronUpIcon class="w-6 h-6 border-2 rounded-full p-1 ml-3 cursor-pointer" @click="toggleDetailStatus"
                v-if="detailStatus" />
        </div>

        <!-- Modals -->
        <UnicornEditModal :show-modal="showUnicornEditModal" :singleUnicornData="data"
            @close-modal="closeUnicornEditModal()" />

    </div>
</template>

<script>
import { useUnicornStore } from '@/stores/UnicornStore';
import ChevronDownIcon from '../icons/ChevronDownIcon.vue';
import ChevronUpIcon from '../icons/ChevronUpIcon.vue';
import EngingeeringIcon from '../icons/EngingeeringIcon.vue';
import TrashIcon from '../icons/TrashIcon.vue';
import UnicornEditModal from '../modal/UnicornEditModal.vue';



export default {
    name: "DashBoard",
    components: {
        TrashIcon,
        ChevronDownIcon,
        EngingeeringIcon,
        ChevronUpIcon,
        UnicornEditModal,


    },
    props: {
        data: Object,
        serialNo: Number
    },
    data() {
        return {
            detailStatus: false,
            showUnicornEditModal: false,
            crudId: null,
            unicornStore: useUnicornStore(),
        }
    },
    methods: {
        toggleDetailStatus() {
            this.detailStatus = !this.detailStatus
        },
        closeUnicornEditModal() {
            this.showUnicornEditModal = false;
            this.crudId = null;
        },
        openUnicornEditModal(data) {
            this.crudId = data._id;
            this.showUnicornEditModal = true;

        },
        async deleteUnicornItem(data) {
            if (confirm('Are you sure?')) {
                console.log('deleteUnicornItem', data)
                await this.unicornStore.deleteUnicornItem(data)
                this.unicornStore.getAllUnicornData();
                this.$emit("close-modal");
            }

        },
        getRandomBorderColor(colour) {
            switch (colour) {
                case 'blue':
                    return 'border-blue-800';
                case 'green':
                    return 'border-green-500';
                case 'yellow':
                    return 'border-yellow-400';
                case 'purple':
                    return 'border-purple-600';
                case 'gray':
                    return 'border-gray-500';
                default:
                    return 'border-gray-800';
            }
        },
        unicornStatus(data) {
            if (data.age >= 0 && data.age <= 8) {
                return "👶 Baby Unicorn";
            } else if (data.age >= 9 && data.age <= 25) {
                return "🦄 Mature Unicorn";
            } else {
                return "👴 Old Unicorn";
            }
        },

        computed: {

        }
    }
}
</script>