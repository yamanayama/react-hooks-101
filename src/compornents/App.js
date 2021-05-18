import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <section className="container-fluid">
      <h2>FORM</h2>
      <form>
        <label htmlFor="formEventTitle">title</label>
        <div className="input-group mb-3">
          <input id="formEventTitle" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>

        <label htmlFor="formEventBody">body</label>
        <div className="input-group mb-3">
          <textarea id="formEventBody" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>

        <button className="btn btn-primary">イベント作成</button>
        <button className="btn btn-danger">全てのイベントを削除</button>
        <button className="btn btn-danger">全てのログを削除</button>

        <h2>イベント</h2>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">title</th>
              <th scope="col">body</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </form>
    </section>

  )
}

export default App
