<template>
    <section>
        <div class="dropdown-wrapper">
            <button class="dropdown-button" @click="backCategory">Category</button>
            <div class="dropdown-content">
                <a class="content" href="#" @click="filterCategory('Bed')">Bed</a>
                <a class="content" href="#" @click="filterCategory('Chair')">Chair</a>
            </div>
            <nuxt-link to="/create" class="add-product"> Add</nuxt-link>
        </div>
        <div class="wrap">
            <CardComponent v-for="item in filteredItems" :key="item.id" :item="item" />
        </div>
    </section>
</template>
  
<script>
import CardComponent from '~/components/carditem/CardItem.vue';

export default {
    components: {
        CardComponent,
    },
    data() {
        return {
            items: [

            ],
            selectedCategory: '', // Kategori yang dipilih
        };
    },
    computed: {
        filteredItems() {
            // Filter item berdasarkan kategori yang dipilih
            if (!this.selectedCategory) {
                // Jika tidak ada kategori yang dipilih, tampilkan semua item
                return this.items;
            } else {
                return this.items.filter(item => item.category === this.selectedCategory);
            }
        },
    },

    mounted() {
        this.getItems();
    },
    methods: {
        filterCategory(category) {
            // Fungsi untuk mengatur kategori yang dipilih
            this.selectedCategory = category;
        },
        async getItems() {
            const response = await this.$axios.get("/rest/v1/Product", {
                headers: {
                    apikey: process.env.supabaseKey
                }
            })

            this.items = response?.data
        },
        backCategory() {
            this.selectedCategory = ''
        }
    },
};
</script>
  

<style scoped>
.dropdown-wrapper {
    position: relative;
    margin:16px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.dropdown-button {
    background-color: white;
    font-size: 32px;
    padding: 10px;
    border: none;
    cursor: pointer;
    font-family: "Montserrat";
    display: flex;
    justify-content: center;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #fff;
    margin-left: 16px;
    min-width: 160px;
    z-index: 1;
    font-family: "Montserrat";
}

.dropdown-content a {
    color: #333;
    padding: 10px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    background-color: #f1f1f1;
}

.dropdown-wrapper:hover .dropdown-content {
    display: block;
}

.wrap {
    display: flex;
    justify-content: space-evenly;
}
</style>