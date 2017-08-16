const usuario = {
	correo_electronico: null,
	identificador: null,
	estado: null
}

const mutations = {
	registrar: (state, usuario) => {
		
	},
	loguear: (state, usuario) => {

	},
}

const actions = {
	registrarAsync: (context, usuario) => {
		console.log(usuario)
	},
	loguearAsync: (context, usuario) => {

	},
}

export default {
	state: usuario,
	mutations,
	actions,
}