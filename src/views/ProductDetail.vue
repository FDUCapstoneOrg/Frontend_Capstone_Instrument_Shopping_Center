<template>
    <div class="product-detail">
        <el-row :gutter="20">
            <!-- 左侧商品图片展示 -->
            <el-col :span="6">
                <el-image class="product-image" :src="product.image" alt="Product Image" fit="contain" />
            </el-col>

            <!-- 右侧商品信息展示 -->
            <el-col :span="18">
                <h1>{{ product.name }}</h1>
                <el-divider></el-divider>

                <el-row>
                    <el-col :span="12">
                        <p class="price">Price：${{ product.price }}</p>
                    </el-col>
                    <el-col :span="12">
                        <p class="description">{{ product.description }}</p>
                    </el-col>
                </el-row>

                <!-- 数量选择和添加到购物车按钮 -->
                <el-row :gutter="10">
                    <el-col :span="8">
                        <el-input-number v-model="quantity" :min="1" label="Quantity"></el-input-number>
                    </el-col>
                    <el-col :span="16">
                        <el-button type="primary" icon="el-icon-shopping-cart-full" @click="addToCart">
                            Add to Cart
                        </el-button>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>

        <!-- 商品详情和评论信息 -->
        <el-tabs type="border-card" class="product-tabs">
            <el-tab-pane label="Product Detail">
                <p>{{ product.details }}</p>
            </el-tab-pane>
            <el-tab-pane label="Comments">
                <el-list v-if="product.reviews.length > 0">
                    <el-list-item v-for="(review, index) in product.reviews" :key="index">
                        <p><strong>{{ review.username }}:</strong> {{ review.comment }}</p>
                    </el-list-item>
                </el-list>
                <p v-else>No Reviews</p>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            product: {
                name: "Yamaha Guitar",
                price: 199.99,
                image: require('@/assets/guitar.png'),
                description: "The guitar is a popular string instrument, typically with six strings, known for its versatility across various musical styles such as rock, jazz, blues, classical, and folk. It consists of a wooden body that amplifies the sound, a neck with frets to control pitch, and tuning pegs to adjust string tension. ",
                details: "这里是商品的详细信息。",
                reviews: [
                    { username: "用户1", comment: "非常好！" },
                    { username: "用户2", comment: "质量不错。" },
                ],
            },
            quantity: 1,
        };
    },
    methods: {
        addToCart() {
            this.$message({
                message: `Added${this.quantity}items in shopping cart`,
                type: "success",
            });
        },
    },
};
</script>

<style scoped>
.product-detail {
    padding: 20px;
}

.product-image {
    width: 100%;
    height: auto;
    border-radius: 5px;
}

.price {
    font-size: 20px;
    color: #ff4d4f;
    margin-top: 10px;
}

.description {
    font-size: 16px;
    margin-top: 5px;
    color: #606266;
    text-align: left;
}

.product-tabs {
    margin-top: 20px;
}
</style>