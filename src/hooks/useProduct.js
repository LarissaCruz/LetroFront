import React from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import { BASE_URL } from "../config";

export function useProduct(initialValue = []) {
  const ENDPOINT = "product-categories?populate[products][populate]=*";
  const { token } = React.useContext(UserContext);
  const [data, setData] = React.useState(initialValue);

  React.useEffect(() => {
    axios
      .get(`${BASE_URL}${ENDPOINT}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data.data.reduce((r, s) => {
          r.push({
            title: s.attributes.title,
            data: s.attributes.products.data,
          });
          return r;
        }, []);
        setData(data);
      });
  }, [token]);
  return data;
}
