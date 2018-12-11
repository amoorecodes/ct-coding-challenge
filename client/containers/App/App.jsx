import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from '../Landing/Landing.jsx'
import { PageWrapper } from '../../styles/globalUI.jsx'

const App = () => {
  return (
    <PageWrapper>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </PageWrapper>
  )
}

export default App
