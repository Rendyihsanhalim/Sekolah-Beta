<template>
    <section class="flex-section">
        <div class="dropdown-wrapper">
            <button class="dropdown-button" @click="backCategory">Category</button>
            <div class="dropdown-content">
                <a v-for="category in category" :key="category.id" class="content" href="#"
                    @click="filterCategory(category.name)">{{ category.name }}</a>
            </div>
            <nuxt-link to="/product/CreateProduct" class="add-product"> Add Product</nuxt-link>
            <nuxt-link to="/product/CreateCategory" class="add-category"> Add Category</nuxt-link>
        </div>
        <div class="wrap">
            <CardComponent v-for="item in filteredItems" :key="item.id" :item="item" :onDelete="deleteItem" @getData="getItems" />
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

            category: [

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
        this.getCategory();
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

        async getCategory() {
            const response = await this.$axios.get("/rest/v1/Category", {
                headers: {
                    apikey: process.env.supabaseKey
                }
            })

            this.category = response?.data;
        },
        backCategory() {
            this.selectedCategory = ''
        },
        async deleteItem(itemId) {
            try {
                // Kirim permintaan penghapusan ke server Supabase
                await this.$axios.delete(`/rest/v1/Product/${itemId}`, {
                    headers: {
                        apikey: process.env.supabaseKey,
                    },
                });

                // Hapus item dari daftar lokal (jika berhasil dihapus dari server)
                this.items = this.items.filter((item) => item.id !== itemId);
            } catch (error) {
                console.error("Error deleting item:", error.message);
            }
        },
    },
};
</script>
  

<style scoped>
.dropdown-wrapper {
    position: relative;
    margin: 16px 15px;
    display: inline-flex;
    align-items: center;
    font-family: "Montserrat";
    column-gap: 20px;
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
    top: 50px;
}

.wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin: 20px 0;
    justify-content: center;
    align-items: center;
}

.add-product {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 30px;
    border-radius: 20px;
    border-style: none;
    background: rgb(112, 102, 102);
    color: white;
    font-family: "Montserrat";
    font-weight: bold;
    cursor: pointer;
}

.add-category {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 30px;
    border-radius: 20px;
    border-style: none;
    background: #ffd100;
    color: white;
    font-family: "Montserrat";
    font-weight: bold;
    cursor: pointer;
}
</style>