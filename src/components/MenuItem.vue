<script>
export default {
	name: "MenuItem",
	props: ["addToShoppingCart", "image", "inStock", "name", "quantity"],
    data() {
        return {
            qty: this.quantity,
        }
    }
}
</script>

<template>
	<div class="menu-item">
		<img class="menu-item__image" :src="image.source" :alt="image.alt" />
		<div>
			<h3>{{ name }}</h3>
			<p v-if="inStock">En stock</p>
			<p v-else>En rupture de stock</p>
			<div>
				<label for="add-item-quantity">Quantité : {{ qty }}</label>
				<input v-model.number="qty" id="add-item-quantity" type="number" />
				<button @click="addToShoppingCart(qty)">
					Ajouter au panier
				</button>
			</div>
		</div>
	</div>
</template>

<style></style>