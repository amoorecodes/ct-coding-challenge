import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from '../Landing/Landing.jsx'
import Editor from '../Editor/Editor.jsx'
import { PageWrapper } from '../../styles/globalUI.jsx'

const App = () => {
  return (
    <PageWrapper>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/editor" component={Editor} />
        </Switch>
      </BrowserRouter>
    </PageWrapper>
  )
}

export default App
