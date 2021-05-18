import React, { useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Event from '../compornents/Event';
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const addEvent = e => {
    //button押下時のページの読み込みチラツキを某寺
    e.preventDefault()
    console.log({title,body})
    //reducerはstateを更新するための関数で、dispatchは、reducerを実行するための呼び出し関数です。 （変数を宣言するときに、stateの更新方法をあらかじめ設定しておくことが出来る。）
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })

    //最後にから文字を追加
    setTitle('')
    setBody('')
  }

  console.log(state)

  return (
    <section className="container-fluid">
      <h2>FORM</h2>
      <form>
        <label htmlFor="formEventTitle">title</label>
        <div className="input-group mb-3">
          <input id="formEventTitle" type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control" placeholder="title" aria-label="title" aria-describedby="basic-addon1"/>
        </div>

        <label htmlFor="formEventBody">body</label>
        <div className="input-group mb-3">
          <textarea id="formEventBody" type="text" value={body}  onChange={e => setBody(e.target.value)} className="form-control" placeholder="body" aria-label="body" aria-describedby="basic-addon1"/>
        </div>

        <button className="btn btn-primary" onClick={addEvent}>イベント作成</button>
        <button className="btn btn-danger">全てのイベントを削除</button>
        <button className="btn btn-danger">全てのログを削除</button>

        <h2>イベント</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">title</th>
              <th scope="col">body</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />))}
          </tbody>
        </table>
      </form>
    </section>

  )
}

export default App
