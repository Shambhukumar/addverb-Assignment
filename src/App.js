import { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";
import Card from "./Components/Card/Card";
import ModelCompoent from "./Components/Model/Model";
import Loader from "./Components/Loader/Loader";
import Header from "./Components/Header/Header";
const App = () => {
  const [data, setData] = useState();
  const [Model, setModel] = useState(true);
  const [modelData, setModelData] = useState();

  const apicall = async () => {
    const res = await axios.get("https://restcountries.com/v3.1/region/asia");
    setData(res.data);
  };

  useEffect(() => {
    apicall();
  }, []);

  data && console.log(data);

  const ModdleToggle = (SelectedContry) => {
    setModelData(SelectedContry);
    setModel(true);
  };
  return (
    <>
      <div className="App">
        <Header/>
        <div className="App-card-container">
          {data ?
            data.map((e, el) => {
              return (
                <Card
                  contry={e}
                  key={e.name.common}
                  ModdleToggle={ModdleToggle}
                />
              );
            }) : <Loader/>}
        </div>
      </div>

      {Model && modelData && (
        <>
        <div className="App-Background-blur" onClick={() => setModel(false)}>
        </div>
         <ModelCompoent closeModel={setModel} modelData={modelData} />
         </>
      )}
    </>
  );
};

export default App;
