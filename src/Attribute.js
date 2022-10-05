import { Button, Card, Page, Select, TextField } from "@shopify/polaris";
import React, { useEffect, useState } from "react";

const Attribute = ({ optionArr }) => {
  const [arr, setArr] = useState({});
  const [flag, setFlag] = useState(false);

  const addHeading = (d) => {
    arr[d].disabled = true;
    setArr({ ...arr });
    setFlag(false);
  };
  const changeData = (d) => {
    arr[d].disabled = false;
    setArr({ ...arr });
  };

  useEffect(() => {
    setArr({ ...optionArr });
  }, [optionArr]);

  return (
    <Card sectioned>
      {Object.values(arr).map((item) => {
        if (item.disabled) {
          return (
            <Page><TextField
              label={item.label}
              labelAction={{
                content: "Delete",
                onAction: () => {
                  changeData(item.label);
                },
              }}
            /></Page>
          );
        }
      })}

      {flag === true && (
        <Card sectioned><Select
          placeholder="Select Attribute"
          options={Object.values(arr)}
          onChange={addHeading}
        /></Card>
      )}

      <Page><Button primary onClick={() => setFlag(true)}>
        Add Attribute
      </Button></Page>
    </Card>
  );
};

export default Attribute;
