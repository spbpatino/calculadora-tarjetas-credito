<template>
	<section>
		<h2>Iniciar sesión</h2>
		<form @submit.prevent="iniciarSesion">
			<input type="text" placeholder="Correo electrónico" v-model="correo_electronico" name="correo_electronico">
			<input type="password" placeholder="Contraseña" v-model="contrasenia" name="contrasenia">
			<button type="submit">Iniciar sesión</button>
		</form>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				correo_electronico : null,
				contrasenia : null,
			}
		},
		methods: {
			iniciarSesion() {
				console.log(self.correo_electronico, self.contrasenia)
			}
		}
	}
</script>

<style>
	
</style>