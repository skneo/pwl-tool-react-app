import { useState } from "react"

function App() {
  const [inputValues, setinputValues] = useState({ 'leftValue': 0, 'rightValue': 0, 'flangeWear': 0, 'treadWear': 0 });
  const handleChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    setinputValues(values => ({ ...values, [name]: value }))
  }
  function changeLeft() {
    let toolaction = document.getElementById('leftAction').value
    if (toolaction === 'Lower') {
      document.getElementById('leftTread').innerText = (68 + parseFloat(document.getElementById('leftValue').value)).toFixed(3)
      document.getElementById('leftFlange').innerText = (65.15 + parseFloat(document.getElementById('leftValue').value)).toFixed(3)
      document.getElementById('leftTread').className = 'text-success'
      document.getElementById('leftFlange').className = 'text-success'
      document.getElementById('leftTool').innerText = 'Left (' + document.getElementById('leftValue').value + ' mm lowerd)'
      document.getElementById('leftTool').className = 'text-success'
    }
    if (toolaction === 'Raise') {
      document.getElementById('leftTread').innerText = (68 - parseFloat(document.getElementById('leftValue').value)).toFixed(3)
      document.getElementById('leftFlange').innerText = (65.15 - parseFloat(document.getElementById('leftValue').value)).toFixed(3)
      document.getElementById('leftTread').className = 'text-danger'
      document.getElementById('leftFlange').className = 'text-danger'
      document.getElementById('leftTool').innerText = 'Left (' + document.getElementById('leftValue').value + ' mm raised)'
      document.getElementById('leftTool').className = 'text-danger'
    }
  }
  function changeRight() {
    let toolaction = document.getElementById('rightAction').value
    if (toolaction === 'Lower') {
      document.getElementById('rightTread').innerText = (73.57 + parseFloat(document.getElementById('rightValue').value)).toFixed(3)
      document.getElementById('rightFlange').innerText = (70.7 + parseFloat(document.getElementById('rightValue').value)).toFixed(3)
      document.getElementById('rightTread').className = 'text-success'
      document.getElementById('rightFlange').className = 'text-success'
      document.getElementById('rightTool').innerText = 'Right (' + document.getElementById('rightValue').value + ' mm lowerd)'
      document.getElementById('rightTool').className = 'text-success'
    }
    if (toolaction === 'Raise') {
      document.getElementById('rightTread').innerText = (73.57 - parseFloat(document.getElementById('rightValue').value)).toFixed(3)
      document.getElementById('rightFlange').innerText = (70.7 - parseFloat(document.getElementById('rightValue').value)).toFixed(3)
      document.getElementById('rightTread').className = 'text-danger'
      document.getElementById('rightFlange').className = 'text-danger'
      document.getElementById('rightTool').innerText = 'Right (' + document.getElementById('rightValue').value + ' mm raised)'
      document.getElementById('rightTool').className = 'text-danger'
    }
  }
  function calculateCurrent() {
    document.getElementById('currentFlange').innerText = (29.4 - parseFloat(document.getElementById('flangeWear').value)).toFixed(2)
    document.getElementById('currentTread').innerText = (28.5 + parseFloat(document.getElementById('treadWear').value)).toFixed(2)
  }
  return (
    <div className="container my-3">
      <h5>Original - PWL Tool Setting</h5>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th></th>
            <th>Left</th>
            <th>Right</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tread</td>
            <td>68.000</td>
            <td>73.570</td>
          </tr>
          <tr>
            <td>Flange</td>
            <td>65.150</td>
            <td>70.700</td>
          </tr>
        </tbody>
      </table>
      <h5>Current - PWL Tool Setting</h5>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th></th>
            <th id="leftTool">Left</th>
            <th id="rightTool">Right</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tread</td>
            <td id="leftTread">68.000</td>
            <td id="rightTread">73.570</td>
          </tr>
          <tr>
            <td>Flange</td>
            <td id="leftFlange">65.150</td>
            <td id="rightFlange">70.700</td>
          </tr>
        </tbody>
      </table>
      <h5>Raise/Lower Tool</h5>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Left</th>
            <th>Right</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <select className="form-control" onChange={changeLeft} id="leftAction">
                <option>Select</option>
                <option>Lower</option>
                <option>Raise</option>
              </select>
            </td>
            <td>
              <select className="form-control" onChange={changeRight} id="rightAction">
                <option>Select</option>
                <option>Lower</option>
                <option>Raise</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <input type="number" id="leftValue" onKeyUp={changeLeft} value={inputValues.leftValue} onChange={handleChange} placeholder="mm"
                className="form-control" min="0" max="8" />
            </td>
            <td>
              <input type="number" id="rightValue" onKeyUp={changeRight} value={inputValues.rightValue} onChange={handleChange} placeholder="mm"
                className="form-control" min="0" max="8" />
            </td>
          </tr>
        </tbody>
      </table>
      <h5>Calculate Flange/Tread value after wear</h5>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Ideal</th>
            <th>Wear (mm)</th>
            <th>Current</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flange (29.4 mm)</td>
            <td>
              <input type="number" id="flangeWear" onKeyUp={calculateCurrent} value={inputValues.flangeWear} onChange={handleChange} placeholder="mm"
                className="form-control" min="0" max="8" />
            </td>
            <td id="currentFlange">29.4 mm</td>
          </tr>
          <tr>
            <td>Tread (28.5 mm)</td>
            <td>
              <input type="number" id="treadWear" onKeyUp={calculateCurrent} value={inputValues.treadWear} onChange={handleChange} placeholder="mm"
                className="form-control" min="0" max="8" />
            </td>
            <td id="currentTread">28.5 mm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
