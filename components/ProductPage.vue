<template>
    <section>
        <div class="dropdown-wrapper">
            <button class="dropdown-button" @click="backCategory">Category</button>
            <div class="dropdown-content">
                <a href="#" @click="filterCategory('Bed')">Bed</a>
                <a href="#" @click="filterCategory('Chair')">Chair</a>
            </div>
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
                { id: 1, name: 'IDANAS', description: 'Bed frame, high, black-brown', price: "$249", src: require('~/assets/bed-dark-brown.jpg'), category: 'Bed' },
                { id: 2, name: 'MALM', description: 'white stained oak veneer/Luröy', price: "$279.0", src: require('~/assets/bed-wood.jpg'), category: 'Bed' },
                { id: 3, name: 'MALSKAR', description: 'Swivel Chair', price: "$49", src: require('~/assets/chair-grey.jpg'), category: 'Chair' },
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
    methods: {
        filterCategory(category) {
            // Fungsi untuk mengatur kategori yang dipilih
            this.selectedCategory = category;
        },
        backCategory(){
            this.selectedCategory = ''
        }
    },
};
</script>
  

<style scoped>
.dropdown-wrapper {
  position: relative;
  display: inline-block;
}

.dropdown-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 160px;
  z-index: 1;
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

.wrap{
    display:flex;
    justify-content: space-evenly;
}
</style>