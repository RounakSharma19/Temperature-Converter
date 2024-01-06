import { useState, ChangeEvent } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Input } from "./Input";

type TemperatureProps = {
  celsius: number;
  fahrenheit: number;
};
export const Temperature = (props: TemperatureProps): JSX.Element => {
  const [temp, updateTemp] = useState({
    celsius: props.celsius,
    fahrenheit: props.fahrenheit,
  });

  const updateCelsius = (event: ChangeEvent<HTMLInputElement>) => {
    const celsiusValue = +event.target.value;
    updateTemp({
      celsius: celsiusValue,
      fahrenheit: parseFloat(((celsiusValue * 9) / 5 + 32).toFixed(2)),
    });
  };

  const updateFahrenheit = (event: ChangeEvent<HTMLInputElement>) => {
    const fahrenheitValue = +event.target.value;
    updateTemp({
      celsius: parseFloat((((fahrenheitValue - 32) * 5) / 9).toFixed(2)),
      fahrenheit: fahrenheitValue,
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Temperature Converter</h1>
      <div className="row">
        <div className="col-md-6">
          <label className="form-label fw-bold mb-2">Centigrade</label>
          <Input
            type="number"
            id="centigrade"
            onChange={updateCelsius}
            value={temp?.celsius?.toString()}
            colClassName="form-control"
            placeholder="Enter the Centigrade value"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold mb-2">Fahrenheit</label>
          <Input
            type="number"
            id="fahrenheit"
            onChange={updateFahrenheit}
            value={temp?.fahrenheit?.toString()}
            colClassName="form-control"
            placeholder="Enter the Fahrenheit value"
          />
        </div>
      </div>
    </div>
  );
};
