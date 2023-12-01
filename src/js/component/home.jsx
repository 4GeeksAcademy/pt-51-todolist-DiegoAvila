
import React, { useState} from "react";

//create your first component
const Home = () => {
	
	const [entrada, setEntrada] = useState ("")
	const [contenido, setContenido] = useState(["hola","adios"])

	function capturarEntrada(event) {
		setEntrada(event.target.value)
	}
	function capturarContenido(event) {
		if (event.keyCode===13){
			setContenido(contenido.concat(entrada))
		}
		
		
	}
	// const mostrarCerrar = ""
	// function ocultarCerrar() {
	// 	mostrarCerrar = "hidden"
	// }
	// const handleRemoveTask = (task) => {
	// 	// Elimina la tarea del estado
	// 	setTasks(tasks.filter((t) => t !== task));
	//   };
	const [contenidos, setContenidos] = useState([])
	const eliminarDato = (contenido) => { 
		setContenidos(contenidos.filter((i) => i !== contenido))
	}

{/* <ul>
        {tasks.map((task) => (
          <li key={task}>
            {task}
            <button onClick={() => handleRemoveTask(task)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul> */}


	const listaContenido = contenido.map((elemento, index) =>
 	    <li key={index}>
   	 		{elemento}
			<button type="button" className={`btn-close`} aria-label="Close" onClick={() => eliminarDato(index)}></button>
  	 	</li>
	 );
  
	
	return (

		<div className="w-50 mx-auto mt-5" onKeyDown={capturarContenido} >
			<input type="text" className="form-control" onChange={capturarEntrada} />
			<ul className="list-group list-group-flush">
				{listaContenido}
	  		</ul>
		</div>
		
	);
};

export default Home;
