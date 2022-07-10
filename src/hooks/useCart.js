import React from "react";
import { createAction } from "../util/createAction";
import axios from "axios";
import { BASE_URL } from "../config";
import * as SecureStore from "expo-secure-store";

const initialState = [];

export function useCart() {
  const [state, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case "GET_TO_CART":
        return [...state, action.payload];
      case "ADD_TO_CART":
        return [...state, action.payload];
      case "REMOVE_FROM_CART":
        return state.filter((cartItem) => cartItem.id !== action.payload.id);
      default:
        return state;
    }
  }, initialState);

  const authCart = React.useMemo(() => ({
    get_Item: async (products, token, id) => {
      const { data } = await axios
        .get(
          `${BASE_URL}shopping-carts`,
          {
            data: {
              users_permissions_users: id,
            },
          },
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
          }
        )
        .then(async ({ data }) => {
          await SecureStore.setItemAsync(
            "dataProductCart",
            JSON.stringify(data)
          );
        });
    },
    add_Item: async (products, token, id) => {
      const { data } = await axios
        .post(
          `${BASE_URL}shopping-carts`,
          {
            data: {
              products: products.id,
              users_permissions_users: id,
            },
          },
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
          }
        )
        .then(async (res) => {
          await SecureStore.setItemAsync(
            "dataProductCart",
            JSON.stringify(data)
          );
        });

      dispatch(createAction("ADD_TO_CART", products));
    },
    remove_Item: async (products) => {
      dispatch(createAction("REMOVE_FROM_CART", products));
    },
  }));

  React.useEffect(async () => {
    let result = await SecureStore.getItemAsync("user").then((user) => {
      if (user) {
        dispatch(createAction("SET_USER", JSON.parse(user)));
      }
      dispatch(createAction("SET_LOADING", false));
    });
  }, []);

  return { authCart, state };
}
