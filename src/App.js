import { useState } from "react";
import Input from "./components/Input";
import tryConvert from "./utils/conversion.helpers";
function App() {
  const [temps, setTemps] = useState({
    C: 45,
    F: 99,
  });
  const updateTemp = (e) => {
    switch (e.target.dataset.conversion) {
      case "toCelsius":
        setTemps({
          F: e.target.value,
          C: tryConvert(e.target.value, e.target.dataset.conversion),
        });
        break;
      case "toFahrenheit":
        setTemps({
          C: e.target.value,
          F: tryConvert(e.target.value, e.target.dataset.conversion),
        });
        break;
      default:
        throw new Error("Invalid conversion");
    }

    console.log(tryConvert(e.target.value, e.target.dataset.conversion));
  };

  return (
    <main>
      <Input
        handler={updateTemp}
        id="C"
        conversion="toFahrenheit"
        temp={temps.C}
      />
      <Input
        handler={updateTemp}
        id="F"
        conversion="toCelcius"
        temp={temps.F}
      />
    </main>
  );
}

export default App;
