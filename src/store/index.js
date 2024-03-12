//1. Importujemy createStore z redux
import { createStore } from "redux";

//2. Tworzymy counterReducer z kodem obslugujacym nasze zadania dla sklepu/magazynu
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  //zwraca zmieniony stan
  return state;
};

//3. Tworzymy sklep/magazyn uzywajac createStore() i podajac counterReducer do edytowania stanu
const store = createStore(counterReducer);
//4 eksportujemy store, aby mozna bylo z niego korzystac w innych komponentach
export default store;
