# Proyecto React: Consumiendo una API Externa - Galería de Dragon Ball

¡Bienvenido a tu primer proyecto práctico con datos reales! En este ejercicio, daremos un paso gigante: dejaremos de usar datos estáticos y aprenderemos a conectarnos a una API REST externa para obtener información y mostrarla en nuestra aplicación.

Este es uno de los conceptos más importantes en el desarrollo frontend, ya que la mayoría de las aplicaciones modernas se nutren de datos que provienen de un servidor.

### 🎯 Objetivos de Aprendizaje

*   Aprender a realizar peticiones HTTP a una API externa usando la función `fetch`.
*   Utilizar el hook **`useState`** para almacenar en el estado la lista de personajes recibida.
*   Utilizar el hook **`useEffect`** para ejecutar la petición a la API una sola vez, justo cuando el componente se carga por primera vez.
*   Renderizar dinámicamente una lista de componentes a partir de los datos almacenados en el estado.

### 📂 Estructura del Proyecto

La estructura es la misma que la de nuestro proyecto inicial de React. Nos centraremos principalmente en modificar el archivo `src/App.jsx` para añadirle la lógica de conexión y renderizado.

---

## 🚀 Pasos para Ejecutar este Proyecto

Sigue estos pasos para tener la aplicación funcionando en tu máquina.

### Paso 1: Clonar el Repositorio
```bash
git clone https://github.com/profWilliamArte/dragonbal.git
cd dragonbal
Paso 2: Instalar las Dependencias
Una vez dentro de la carpeta del proyecto, instala todas las librerías necesarias con:
npm install
Paso 3: Iniciar el Servidor de Desarrollo
Ejecuta el siguiente comando para iniciar la aplicación. Vite te proporcionará una URL para abrir en tu navegador.
npm run dev

--------------------------------------------------------------------------------
📖 Guía de Implementación: De una App Vacía a una Galería de Personajes
Aquí desglosamos la lógica que encontrarás en src/App.jsx para que entiendas cómo funciona cada pieza.
1. El Estado: ¿Dónde guardamos los personajes?
Antes de poder mostrar los personajes, necesitamos un lugar para almacenarlos una vez que los recibamos de la API. Para esto, usamos el hook useState, inicializándolo con un array vacío.
import { useState } from 'react';

function App() {
  const [personajes, setPersonajes] = useState([]); // El estado empieza como un array vacío
  // ... resto del código
}
2. El Efecto: ¿Cuándo pedimos los datos?
No podemos pedir los datos en cualquier momento. Si lo hiciéramos directamente en el cuerpo del componente, se ejecutaría una y otra vez en un bucle infinito. La forma correcta es usar useEffect.
Con useEffect, le decimos a React que ejecute una función (un "efecto secundario") solo cuando sea necesario. Al pasarle un array de dependencias vacío [], nos aseguramos de que la petición a la API se realice una sola vez, justo después de que el componente se monte por primera vez.
import { useState, useEffect } from 'react';

function App() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    // Función para obtener los datos de la API
    const getPersonajes = async () => {
      try {
        const response = await fetch('https://dragonball-api.com/api/characters');
        const data = await response.json();
        setPersonajes(data.items); // Actualizamos el estado con los datos recibidos
      } catch (error) {
        console.error("Error al obtener los personajes:", error);
      }
    };

    getPersonajes(); // Llamamos a la función
  }, []); // El array vacío asegura que esto se ejecute solo una vez

  // ... resto del código
}
3. El Renderizado: ¿Cómo mostramos los personajes?
Una vez que los datos están en nuestro estado personajes, podemos usar el método .map() dentro de nuestro JSX para recorrer el array y crear un elemento visual para cada personaje.
¡No olvides la key! React la necesita para identificar cada elemento de la lista de forma única.
return (
  <div className="app-container">
    <h1>Galería de Personajes de Dragon Ball</h1>
    <div className="personajes-grid">
      {personajes.map((personaje) => (
        <div key={personaje.id} className="personaje-card">
          <img src={personaje.image} alt={personaje.name} />
          <h2>{personaje.name}</h2>
          <p>Raza: {personaje.race}</p>
        </div>
      ))}
    </div>
  </div>
);
¡Y eso es todo! Con estos tres conceptos (useState, useEffect y .map()), has construido una aplicación dinámica que consume datos del mundo real.
