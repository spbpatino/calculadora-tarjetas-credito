<template>
	<section>
		<h2>Registrarse</h2>
		<form @submit.prevent="registrarse">
			<input type="text" placeholder="Correo electrónico" v-model="correoElectronico">
			<input type="password" placeholder="Contraseña" v-model="contrasenia">
			<input type="password" placeholder="Repetir contraseña" v-model="contrasenia2">
			<button v-if="validarContrasenias" type="submit" value="registro">Registrarse</button>
		</form>
		<pre>{{$data}}</pre>
	</section>

</template>

<script>
	import {mapState, mapMutations, mapActions} from 'vuex';
	export default{
		data() {
			return {
				correoElectronico: null,
				contrasenia: null,
				contrasenia2: null,
			}
		},
		computed: {
			...mapState(['usuario']),
			validarContrasenias(){
				return (this.contrasenia == this.contrasenia2) && (this.correoElectronico != null)
			}
		},
		methods: {
			registrarse(){
				this.$store.dispatch('registrarAsync',{
						correoElectronico: this.correoElectronico,
						contrasenia: this.contrasenia,
					})
			},
			
		}
	}

</script>

<style>
	
</style>