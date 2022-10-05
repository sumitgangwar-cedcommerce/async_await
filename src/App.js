import { useEffect, useMemo, useState } from "react";
import { Button, Card, Page, Select } from "@shopify/polaris";
import { Payload, url, header } from "./DataFile";
import Attribute from "./Attribute";
import Skeleton from "./Skeleton";

function App() {
  const [data, setData] = useState([]);
  const [has, setHas] = useState("");
  const [selectOptionArr, setSelectOptionArr] = useState([]);
  const [attriOption, setAttriOption] = useState({});
  const [loading, setLoading] = useState(false)

  const requestOptions = (da = []) => {
    let temp = { ...Payload, selected: da };
    return {
      method: "POST",
      headers: header,
      body: JSON.stringify(temp),
    };
  };

  const requestOptions2 = () => {
    let temp = { ...Payload };
    delete temp.selected;
    temp = {
      ...temp,
      data: {
        barcode_exemption: false,
        browser_node_id: has[1],
        sub_category: has[0]["sub-category"],
        category: has[0]["primary-category"],
      },
    };
    return {
      method: "POST",
      headers: header,
      body: JSON.stringify(temp),
    };
  };

  const fetchData = (opt) => {
    setLoading(true)
    fetch(url(), opt)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setLoading(false)
        setData([...data, res.data]);
      });
  };

  const myFun = (d, ind) => {
    selectOptionArr[ind] = JSON.stringify(d);
    setSelectOptionArr([...selectOptionArr]);
    if (d[1]) {
      let t = requestOptions(d[0]);
      fetchData(t);
    }
    else setHas(d[2]);
  };

  useEffect(() => {
    setLoading(true)
    fetch(url(), requestOptions())
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setLoading(false)
        setData([...data, res.data]);
      });
  }, []);

  useEffect(() => {
    if (has !== "") {
      setLoading(true)
      fetch(url("getCategoryAttributes"), requestOptions2())
        .then((res) => res.json())
        .then((res) => {
          let temp = {};
          setLoading(false)
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
          setAttriOption({ ...temp });
        });
    }
  }, [has]);

  return (
    <Page className="App">
      {
        data.map((item, ind) => (
          <Card key={item} sectioned>
            <Select
              placeholder="Select Any"
              onChange={(d) => {
                d !== -1 && myFun(JSON.parse(d), ind, item.hasChildren);
              }}
              options={[
                ...item.map((t) => {
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
        ))
      }
      {loading && <Skeleton />}
      <br />
      <br />

      {has !== "" ? loading ===false ?  <Attribute optionArr={attriOption} />: null : null}
    </Page>
  );
}

export default App;
