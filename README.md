# 🤖 Automation con Cypress y Reporte de Bugs en Trello

Proyecto de automatización de pruebas end-to-end sobre la web [SauceDemo](https://www.saucedemo.com/), con reporte de bugs documentados en Trello.

## 🛠️ Tecnologías utilizadas

- [Cypress](https://www.cypress.io/)
- [Node.js](https://nodejs.org/)

## 📋 Estructura del proyecto

Los tests cubren los siguientes flujos:

- Login con credenciales válidas
- Agregar un producto al carrito
- Agregar varios productos al carrito
- Eliminar un producto del carrito
- Checkout con datos válidos
- Checkout con datos incompletos
- Checkout con `problem_user`

## ✅ Métodos de Cypress utilizados

- **Aserciones** (`should`) para verificar el comportamiento esperado
- **Aliases** (`.as()` y `cy.get('@...')`) para reutilizar selectores
- **Scroll** (`scrollIntoView()`) para asegurar visibilidad de elementos
- **Viewport** (`cy.viewport()`) para definir resolución de pantalla

## 🐛 Bugs reportados

Los bugs fueron documentados en Trello siguiendo el template de reporte de bugs, con título, descripción, precondiciones, pasos para reproducir, resultado esperado, resultado obtenido y evidencia.

| # | Módulo | Título |
|---|--------|--------|
| 1 | Inventario | Productos con misma imagen |
| 2 | Inventario | Error al ordenar por precio |
| 3 | Checkout | Campo Last Name no acepta ingreso de datos |

## 🚀 Cómo ejecutar los tests

1. Clonar el repositorio
2. Instalar las dependencias:
```bash
npm install
```
3. Abrir Cypress:
```bash
npx cypress open
```
