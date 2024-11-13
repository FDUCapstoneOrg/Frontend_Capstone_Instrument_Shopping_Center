<template>
    <div class="product-card">
        <div class="product-info">
            <img src="https://m.media-amazon.com/images/I/41P0qtzxWSL._AC_AA180_.jpg" alt="picture"
                class="product-image" />

            <div class="product-details">
                <div class="title">{{ product.instrument.name }}</div>
                <p class="seller-info">
                    {{ product.instrument.description }}
                </p>
                <div>
                    quantity:{{ product.quantity }}
                </div>
                <el-button type="text">delete</el-button>

            </div>
            <div class="price-area">
                <span class="price">${{ product.unitPrice }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
        };
    },
};
</script>

<style scoped>
.product-card {
    display: flex;
    padding: 10px;
    border-top: 1px solid grey;
}

.product-card .el-card__body {
    width: 100%;
}

.product-info {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-grow: 1;
}

.product-image {
    width: 120px;
    height: auto;
    margin-right: 20px;
}

.title {
    font-size: large;
    font-weight: bold;
}

.product-details {}

.description {
    font-size: 14px;
    color: #555;
    margin: 5px 0;
}

.seller-info {
    font-size: 12px;
    color: #888;
}

.price-area {
    width: 100px;
}

.price {
    font-size: 24px;
    font-weight: bold;
    margin-left: 10px;
}

.actions {
    display: flex;
    gap: 10px;
    margin-top: 15px;
}

.el-card__body {
    width: 100%;
}
</style>