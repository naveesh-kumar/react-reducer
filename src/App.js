import { useReducer } from "react";
import DialogBox from "./Components/DialogBox";

const reducer = (state, action) => {
  if (action.type === "INCREMENT_CART_COUNT") {
    return { ...state, ["cartCount"]: state.cartCount + 1 };
  }

  if (action.type === "SHOW_PROD_MSG") {
    return { ...state, ["showProductEmptyMsg"]: true, ["message"]:"Press update stock button" };
  }

  if (action.type === "REMOVE_PROD_MSG") {
    return { ...state, ["showProductEmptyMsg"]: false };
  }

  if (action.type === "RESET") {
    return { ...initialState, ["cartCount"]: 0, ["showProductEmptyMsg"]: true, ["message"]:"Thank you for purchasing" };
  }

  if (action.type === "UPDATE_STOCK"){
    return {...state, ["stock"]:state.stock+5}
  }
};

const initialState = {
  cartCount: 0,
  showProductEmptyMsg: false,
  stock:5,
  message:""
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = () => {
    if (state.cartCount >= state.stock) {
      dispatch({
        type: "SHOW_PROD_MSG",
      });
    } else {
      dispatch({
        type: "INCREMENT_CART_COUNT",
      });
    }
  };

  const updateStock = () => {
    dispatch({
      type:"UPDATE_STOCK"
    })
  };

  const checkoutFromCart = () => {
    dispatch({
      type: "RESET",
    });
  };

  return (
    <main className="container m-2 w-25">
      <div className="card ">
        <h6>
          Cart <span className="badge bg-secondary">{state.cartCount}</span>
        </h6>
        {state.showProductEmptyMsg && <DialogBox dispatch={dispatch} message={state.message} />}
        <button
          onClick={addToCart}
          className="btn btn-secondary"
          disabled={state.showProductEmptyMsg}
        >
          Add to cart
        </button>
        <button
          className="btn btn-warning"
          onClick={updateStock}
          disabled={state.showProductEmptyMsg}
        >
          Update stock
        </button>
        <button
          className="btn btn-danger"
          onClick={checkoutFromCart}
          disabled={state.showProductEmptyMsg}
        >
          Check out cart
        </button>
      </div>
    </main>
  );
}

export default App;
