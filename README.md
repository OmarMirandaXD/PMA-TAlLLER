# 🌟 API del Sistema de Adopción

Bienvenido a la API del Sistema de Adopción 🐶🐱. Esta API permite gestionar citas de adopción de mascotas, administrar usuarios y controlar la información de las mascotas disponibles para adopción.

---

## 📌 Características Principales
- Autenticación y gestión de usuarios
- Registro y administración de mascotas
- Creación y manejo de citas de adopción

---

## 🔧 Configuración

Para ejecutar esta API, crea un archivo `.env` en el directorio raíz con las siguientes variables de entorno:

```ini
MONGO_URI=<tu_cadena_de_conexión_mongodb>
PORT=<tu_puerto_del_servidor>
JWT_SECRET=<tu_secreto_jwt>
```

---

## 🚀 Endpoints de la API

### 🔑 Autenticación

#### 📌 Registrar Usuario
- **URL:** `POST /adoptionSystem/v1/auth/register`
- **Cuerpo:**
  ```json
  {
    "name": "string",
    "surname": "string",
    "username": "string",
    "email": "string",
    "phone": "string",
    "password": "string",
    "role": "string",
    "profilePicture": "file"
  }
  ```

#### 📌 Iniciar Sesión
- **URL:** `POST /adoptionSystem/v1/auth/login`
- **Cuerpo:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

#### 📌 Actualizar Foto de Perfil
- **URL:** `PATCH /adoptionSystem/v1/user/updateProfilePicture/:uid`
- **Cuerpo:**
  ```json
  {
    "profilePicture": "file"
  }
  ```

---

### 👤 Usuarios

#### 📌 Obtener Usuario por ID
- **URL:** `GET /adoptionSystem/v1/user/findUser/:uid`

#### 📌 Eliminar Usuario
- **URL:** `DELETE /adoptionSystem/v1/user/deleteUser/:uid`

#### 📌 Listar Usuarios
- **URL:** `GET /adoptionSystem/v1/user/`

#### 📌 Actualizar Contraseña
- **URL:** `PATCH /adoptionSystem/v1/user/updatePassword/:uid`
- **Cuerpo:**
  ```json
  {
    "newPassword": "string"
  }
  ```

#### 📌 Actualizar Información del Usuario
- **URL:** `PUT /adoptionSystem/v1/user/updateUser/:uid`
- **Cuerpo:**
  ```json
  {
    "name": "string",
    "surname": "string"
  }
  ```

---

### 🐾 Mascotas

#### 📌 Registrar Mascota
- **URL:** `POST /adoptionSystem/v1/pet/addPet`
- **Cuerpo:**
  ```json
  {
    "name": "string",
    "description": "string",
    "age": "number",
    "type": "string",
    "email": "string"
  }
  ```

#### 📌 Obtener Mascota por ID
- **URL:** `GET /adoptionSystem/v1/pet/findPet/:pid`

#### 📌 Eliminar Mascota
- **URL:** `DELETE /adoptionSystem/v1/pet/deletePet/:pid`

#### 📌 Listar Mascotas
- **URL:** `GET /adoptionSystem/v1/pet/`

---

### 📅 Citas

#### 📌 Crear Cita
- **URL:** `POST /adoptionSystem/v1/appointment/createAppointment`
- **Cuerpo:**
  ```json
  {
    "date": "2023-10-15T10:00:00Z",
    "pet": "string",
    "user": "string"
  }
  ```

#### 📌 Listar Citas por Usuario
- **URL:** `GET /adoptionSystem/v1/appointment/listAppointments/:userId`

#### 📌 Actualizar Cita
- **URL:** `PUT /adoptionSystem/v1/appointment/updateAppointment/:id`
- **Cuerpo:**
  ```json
  {
    "date": "2025-02-15T10:00:00.000Z",
    "pet": "60d21b4667d0d8992e610c85",
    "status": "confirmed"
  }
  ```

#### 📌 Cancelar Cita
- **URL:** `DELETE /adoptionSystem/v1/appointment/cancelAppointment/:appointmentId`

---

## 📘 Notas Adicionales
- Esta API sigue un esquema RESTful.
- Es necesario un token JWT para acceder a los endpoints protegidos.
- Se recomienda usar Postman o herramientas similares para probar los endpoints.

🔹 **Contribuciones son bienvenidas** 💡🐾. ¡Gracias por apoyar la adopción responsable! 🚀
