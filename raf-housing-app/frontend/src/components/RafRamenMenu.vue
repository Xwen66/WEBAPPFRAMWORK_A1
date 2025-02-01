<template>
    <div class="raf-ramen">
        <h1>{{ storeName }}</h1>
        <h2>Ramen Menu</h2>
        <input v-model="newStoreName" placeholder="Enter new store name" />
        <button @click="changeStoreName">Change Store Name</button>
        <table>
            <thead>
                <tr>
                    <th>Ramen</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in ramenMenu" :key="index">
                    <td>{{ item.ramen }}</td>
                    <td>{{ item.price }}</td>
                </tr>
            </tbody>
        </table>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
</template>

<script>
    export default {
        name: 'RafRamenMenu',
        data(){
            return{
                storeName: 'Raf Ramen',
                newStoreName: '',
                ramenMenu: [],
                errorMessage: ''
            }
        },
        mounted() {
            this.fetchRamenMenuData()
        },
        methods: {
            async fetchRamenMenuData() {
                try {
                    const res = await fetch('/api/ramen-menu')
                    if (!res.ok) {
                        throw new Error(`Failed to fetch menu: Server returned status ${res.status}`)
                    }
                    const data = await res.json();
                    this.ramenMenu = data;
                } catch(err) {
                    console.error('Error fetching ramen menu:', err);
                    this.errorMessage = err.message || 'Unable to load ramen menu';
                }
            },
            changeStoreName() {
                this.storeName = this.newStoreName;
            }
        }
    }
</script>

<style scoped>
    .raf-ramen {
        margin-top: 10px;
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }
    .error {
        color: red;
        margin-top: 10px;
    }
</style>