import { useEffect, useState } from "react";
import { Card, Page, Select } from "@shopify/polaris";
import { url } from "./api/ApiData";
import Attribute from "./Attribute";
import Skeleton from "./Skeleton";
import useFetch from "./custom hook/useFetch";
import { requestForAttribute, requestForSelect } from "./api/RequestOptions";

function App() {
  const [data, setData] = useFetch([]);
  const [attriOption, setAttriOption] = useFetch({});
  const [has, setHas] = useState("");
  const [selectOptionArr, setSelectOptionArr] = useState([]);
  const [loading, setLoading] = useState(false);

  const myFun = (d, ind) => {
    selectOptionArr[ind] = JSON.stringify(d);
    setSelectOptionArr([...selectOptionArr]);
    if (d[1]) {
      setData(url(), requestForSelect(d[0]));
    } else setHas(d[2]);
  };

  useEffect(() => {
    setData(url(), requestForSelect());
  }, []);

  useEffect(() => {
    if (has !== "") {
      setAttriOption(
        url("getCategoryAttributes"),
        requestForAttribute({
          barcode_exemption: false,
          browser_node_id: has[1],
          sub_category: has[0]["sub-category"],
          category: has[0]["primary-category"],
        }),
        0
      );
    }
  }, [has]);

  return (
    <Page className="App">
      {data.map((item, ind) => (
        <Card key={item} sectioned>
          <Select
            placeholder="Select Any"
            onChange={(d) => {
              console.log("----------", d);
              d !== -1 && myFun(JSON.parse(d), ind);
            }}
            options={[
              ...Object.values(item).map((t) => {
                return {
                  label: t.name,
                  value: JSON.stringify([
                    t.parent_id,
                    t.hasChildren,
                    t.hasChildren === false
                      ? [t.category, t.browseNodeId]
                      : null,
                  ]),
                };
              }),
            ]}
            value={selectOptionArr[ind]}
          />
        </Card>
      ))}
      {loading && <Skeleton />}
      <br />
      <br />

      {has !== "" ? (
        loading === false ? (
          <Attribute optionArr={attriOption} />
        ) : null
      ) : null}
    </Page>
  );
}

export default App;
