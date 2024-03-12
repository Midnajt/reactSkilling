//1. Importujemy createStore z redux
import { createStore } from "redux";

//2. Tworzymy counterReducer z kodem obslugujacym nasze zadania dla sklepu/magazynu
//counter i showCouter to statey, ktore mozesz edytowac w innych komponentach
const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    //vvvv !!! nie wolno tak robić !!! vvvv
    // state.counter++;
    // return state;
    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    return {
      counter: state.counter + 1,
      showCounter: state.showCounter, // nie zmienia sie, bez tego showCounter zaktualizowalby sie na undefined
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }
  //zwraca zmieniony stan
  return state;
};

//3. Tworzymy sklep/magazyn uzywajac createStore() i podajac counterReducer do edytowania stanu
const store = createStore(counterReducer);
//4 eksportujemy store, aby mozna bylo z niego korzystac w innych komponentach
export default store;
