# React Shop 🛒 - React y Typescript

Esta es una aplicación simple de e-commerce creada con React y TypeScript que muestra productos y permite a los usuarios agregar productos a un carrito de compras. La aplicación utiliza los hooks useContext y useReducer de React para gestionar el estado global del carrito y también hace uso de localStorage para almacenar los datos del carrito de manera persistente.

## Demo

Agrega un enlace a una demo en línea o capturas de pantalla de tu proyecto, si es relevante.

## Instalación

A continuación, se presentan los pasos para instalar y ejecutar tu proyecto en un entorno local.

1. **Clonar el Repositorio**:

    ```bash
    git clone https://github.com/renato-av/react-ecommerce.git
    cd react-ecommerce
    ```

2. **Instalar Dependencias**:

    ```bash
    npm install
    # o
    yarn
    ```

3. **Iniciar la Aplicación**:

    ```bash
    npm run dev
    # o
    yarn dev
    ```

La aplicación estará disponible en `http://localhost:3000` en tu navegador.

## Características

Enumera las principales características de tu aplicación de e-commerce, como:

- Mostrar una lista de productos.
- Agregar productos al carrito de compras.
- Ajustar la cantidad de productos en el carrito.
- Eliminar productos del carrito.
- Almacenamiento persistente del carrito en `localStorage`.

## Uso de useContext y useReducer

Esta aplicación utiliza `useContext` y `useReducer` para gestionar el estado del carrito de compras. Los contextos se definen en `src/contexts` y se utiliza para proporcionar acceso al estado del carrito en toda la aplicación. El archivo `src/reducers/cart.tsx` define las acciones y el reducer para gestionar el carrito de compras.

Puedes agregar productos al carrito, aumentar o disminuir la cantidad de productos y eliminar productos del carrito a través de las funciones proporcionadas por el contexto.


## Almacenamiento persistente con localStorage

Para garantizar que los datos del carrito se mantengan incluso después de cerrar y volver a abrir la aplicación, se utiliza `localStorage`. Los datos del carrito se guardan en `localStorage` cada vez que se realizan cambios en el carrito y se recuperan al cargar la aplicación.

## Contribuir

Invita a otros desarrolladores a contribuir a tu proyecto y proporciona pautas para cómo pueden hacerlo. Por ejemplo:

- Cómo abrir problemas (issues).
- Cómo proponer nuevas características.
- Cómo enviar solicitudes de extracción (pull requests).


## Autor

- [Renato Arredondo Vela](https://github.com/renato-av)
