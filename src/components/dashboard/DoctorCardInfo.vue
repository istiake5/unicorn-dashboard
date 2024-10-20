<template>
    <div class="bg-white shadow-sm rounded-lg overflow-hidden border-l-[5px]" :class="getRandomBorderColor()">
        <div class="flex items-center justify-between px-4">
            <div class="p-4 flex items-center space-x-6">
                <div>
                    <p class="text-sm text-gray-500">No</p>
                    <p class="font-semibold text-lg">{{ serialNo }}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Doctor Name</p>
                    <p class="font-semibold text-lg">{{ data.name }}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Age</p>
                    <p class="text-lg">{{ data.age }}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Color</p>
                    <p class="text-lg">{{ data.colour }}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Status</p>
                    <span
                        class="inline-flex items-center px-3 py-1.5 rounded-xl bg-yellow-100 text-yellow-800 text-sm font-medium">
                        {{ unicornStatus(data) }}
                    </span>
                </div>
            </div>
            <div class="ml-auto flex space-x-2">
                <button class="border-2 hover:bg-blue-100 px-3 py-1 rounded-lg  font-medium"
                    @click="openUnicornEditModal(data)">
                    Edit
                </button>
                <button class="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm font-medium">
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
        getRandomBorderColor() {
            const colors = [
                'border-blue-800',
                'border-red-500',
                'border-green-500',
                'border-yellow-400',
                'border-purple-600'
            ];
            return colors[Math.floor(Math.random() * colors.length)];
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