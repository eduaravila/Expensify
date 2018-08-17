import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAEp_sNTEh65KHTlSCNSPzyaWFu2d2l0oY",
  authDomain: "expensify-3b521.firebaseapp.com",
  databaseURL: "https://expensify-3b521.firebaseio.com",
  projectId: "expensify-3b521",
  storageBucket: "expensify-3b521.appspot.com",
  messagingSenderId: "164288822025"
};

firebase.initializeApp(config);

export default firebase.database();
// database.ref().on("value", snapShot => {
//   let expenses = [];

//   if (snapShot.exists) {
//     snapShot.forEach(expense => {
//       expenses = [...expenses, { id: expense.key, ...expense.val() }];
//     });
//   }
//   console.log(expenses);
// });

// database.ref().on("child_changed", snapShot => {
//   console.log("====================================");
//   console.log(
//     `${snapShot.key} cambio la siguiente info: ${JSON.stringify(
//       snapShot.val()
//     )}`
//   );
//   console.log("====================================");
// });
// database.ref().push({
//   nombre: "Eduardo",
//   sueño: "Ir a comprar un pansito",
//   edad: 30
// });
// database.ref("-LJzv4ne3Cze_BdGw5eh").update({
//   edad: 20,
//   sueño: "Ya compre mi pansito"
// });

// database.ref("usuario/").set({
//   nombre: "Eduardo avila",
//   edad: 20,
//   locacion: "Guadalajara",
//   propiedades: {
//     altura: 1.7,
//     ojos: "cafe"
//   }
// });

// database.ref("usuario/edad").on("value", daaSnapshot => {
//   console.log(daaSnapshot);
// });
// database
//   .ref("usuario/edad")
//   .set(50)
//   .then(result => {
//     console.log("Edad establecida");
//   })
//   .catch(err => {
//     console.log("Se genero un error inesperado perra");
//   });
// database.ref("usuario/padres").set({
//   padre: "jesus",
//   madre: "Elena"
// });

// database
//   .ref("usuario/edad")
//   .remove()
//   .then(result => {
//     console.log("Edad removida mi rey");
//   })
//   .catch(err => {});
// database.ref("usuario").remove();
// database
//   .ref()
//   .set({
//     nombre: "Eduardo",
//     edad: 20,
//     empleo: {
//       nombre: "Software Developer",
//       empresa: "Google"
//     },
//     caracteristicas: {
//       tes: "Roja",
//       ojos: "Cafe"
//     }
//   })
//   .then(result => {
//     console.log("Persona creada ");
//   })
//   .catch(err => {
//     console.log("Error al crear persona nueva");
//   });

// database.ref().update({
//   "empleo/empresa": "Amazon",
//   "caracteristicas/tes": "blanca",
//   edad: 21
// });

// const valor = database.ref().on("value", snapShot => {
//   let valores = snapShot.val();
//   console.log(
//     `${valores.nombre} trabaja en ${valores.empleo.nombre} en la compañia ${
//       valores.empleo.empresa
//     } a la edad de ${valores.edad}`
//   );
//   console.log(valores);
// });
