import React, {Suspense, useState} from 'react';
const Teste = React.lazy(() => import('./components/teste'));

function App() {

  const [text, setText ] = useState('')

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Home Page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="Add IMG Desc" style={{margin: '15px 25%'}} />
        <Teste />
        <label>{ text ? text : null }</label>
      </Suspense>
    </div>
  );
}

export default App;