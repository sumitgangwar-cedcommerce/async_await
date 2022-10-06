import React, { useState } from "react";

const useFetch = (props) => {
  const [data, setData] = useState(props);

  const fetchFun = (url, options, reqType = 1) => {
    if (reqType) {
      fetch(url, options)
        .then((res) => res.json())
        .then((res) => setData([...data, res.data]));
    } 
    else {
      fetch(url, options)
        .then((res) => res.json())
        .then((res) => {
          let temp = {};
          Object.values(res.data).map((item) => {
            Object.values(item).map(
              (pro) =>
                (temp[pro.label] = {
                  label: pro.label,
                  disabled: false,
                  value: pro.label,
                })
            );
          });
          setData(temp)
        });
    }
  };
  return [data, fetchFun];
};

export default useFetch;
