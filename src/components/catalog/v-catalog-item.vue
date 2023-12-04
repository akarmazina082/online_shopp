<template>
    <div class="v-catalog-item">
        <v-popup v-if="isInfoPopupVisible" rightBtnTitle="Add to cart" :popupTitle="product_data.name"
            @closePopup="closeInfoPopup" @rightBtnAction="addToCart">
            <img class="v-catalog-item__image" :src="require('../../assets/images/' + product_data.image)" alt="img">
            <div>
                <p class="v-catalog-item__name">{{ product_data.name }}</p>
                <p class="v-catalog-item__price">Price: {{ product_data.price }} Р.</p>
                <p class="v-catalog-item__price">{{ product_data.category }}</p>
            </div>
        </v-popup>
        <img class="v-catalog-item__image" :src="require('../../assets/images/' + product_data.image)" alt="img" />
        <p class="v-catalog-item__name">{{ product_data.name }}</p>
        <p class="v-cataloge-item__price">{{ product_data.price }}</p>
        <button class="v-cataloge-item__show-info" @click="showPopupInfo">Show info</button>
        <button class="v-catalog-item__add_to_cart_btn btn" @click="addToCart">
            Add to cart
        </button>
    </div>
</template>

<script>
import vPopup from '../popup/v-popup'
import toFix from '../filters/toFix'

export default {
    name: "v-catalog-item",
    components: {
        vPopup
    },
    props: {
        product_data: {
            type: Object,
            defoult() {
                return {};
            },
        },
    },
    data() {
        return {
            isInfoPopupVisible: false
        }
    },
    computed: {},
    methods: {
        showPopupInfo() {
            this.isInfoPopupVisible = true;
        },
        closeInfoPopup() {
            this.isInfoPopupVisible = false;
        },
        addToCart() {
            this.$emit('addToCart', this.product_data)
        }
    }
}
</script>

<style>
.v-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 16px;
    margin-bottom: 16px;
}

.btn {
    padding: 8px 16px;
    background: green;
    color: #ffff;
    border: 0;
    border-radius: 4px;
}
</style>