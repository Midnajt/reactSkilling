// rozdzielenie kodu

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export const counterActions = counterReducer.actions;
export const authActions = authReducer.actions;

export default store;

///////////////////////////////////////////////////////////////////////////////////

// // alternatywa dla counterReducer, ktora wykorzystuje redux toolkit
// import { createSlice, configureStore } from "@reduxjs/toolkit"; //biblioteka do zarzadzania store gdy jest zbyt duzy

// const initialCounterState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initialCounterState,
//   reducers: {
//     increment(state) {
//       state.counter++; // wykorzystujac toolkit mozemy mutowac state ( *patrz ponizej)
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const initialAuthState = {
//   isAuthenticated: false,
// };

// const authSlice = createSlice({
//   name: "authentication",
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });

// const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer,
//     auth: authSlice.reducer,
//   },
// });

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

// export default store;

// ================== bez toolkit ============

//1. Importujemy createStore z redux
// import { createStore } from "redux";

// const initialState = { counter: 0, showCounter: true };

// //2. Tworzymy counterReducer z kodem obslugujacym nasze zadania dla sklepu/magazynu
// //counter i showCouter to statey, ktore mozesz edytowac w innych komponentach
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     //vvvv !!! *NIE WOLNO TAK MUTOWAC/ZMIENIAC STATE W TYM PRZYPADKU !!! vvvv
//     // state.counter++;
//     // return state;
//     //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter, // nie zmienia sie, bez tego showCounter zaktualizowalby sie na undefined
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   //zwraca zmieniony stan
//   return state;
// };

// //3. Tworzymy sklep/magazyn uzywajac createStore() i podajac counterReducer do edytowania stanu
// const store = createStore(counterReducer);
// //4 eksportujemy store, aby mozna bylo z niego korzystac w innych komponentach
// export default store;
