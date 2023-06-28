// import fetch from 'node-fetch';

// export function createUser(userData) {
//   return fetch(`http://localhost:8080/users/${userId}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(userData),
//   })
//     .then(response => response.json())
//     .then(data => {
//       // Faça algo com os dados do novo usuário criado
//       return data;
//     })
//     .catch(error => {
//       // Trate qualquer erro que ocorra durante a requisição
//       console.error(error);
//     });
// }

// export function getUserById(userId) {
//   return fetch(`http://localhost:8080/users${userId}`)
//     .then(response => response.json())
//     .then(data => {
//       // Faça algo com os dados do usuário obtido
//       return data;
//     })
//     .catch(error => {
//       // Trate qualquer erro que ocorra durante a requisição
//       console.error(error);
//     });
// }

// export function getUserById() {
//     return fetch(`http://localhost:8080/users`)
//       .then(response => response.json())
//       .then(data => {
//         // Faça algo com os dados do usuário obtido
//         return data;
//       })
//       .catch(error => {
//         // Trate qualquer erro que ocorra durante a requisição
//         console.error(error);
//       });
//   }

// export function updateUser(userId, updatedData) {
//   return fetch(`http://localhost:8080/users/${userId}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(updatedData),
//   })
//     .then(response => response.json())
//     .then(data => {
//       // Faça algo com os dados do usuário atualizado
//       return data;
//     })
//     .catch(error => {
//       // Trate qualquer erro que ocorra durante a requisição
//       console.error(error);
//     });
// }

// export function deleteUser(userId) {
//   return fetch(`http://localhost:8080/users/${userId}`, {
//     method: 'DELETE',
//   })
//     .then(response => response.json())
//     .then(data => {
//       // Faça algo com os dados da resposta da exclusão
//       return data;
//     })
//     .catch(error => {
//       // Trate qualquer erro que ocorra durante a requisição
//       console.error(error);
//     });
// }
