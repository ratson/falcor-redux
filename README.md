# falcor-redux

Redux binding for dispatching Falcor methods.

Heavily inspired by [react-router-redux](https://github.com/reactjs/react-router-redux).

## Installation

```
npm install falcor-redux --save
```

## Usage

```js
import {falcorActions, falcorMiddleware} from 'falcor-redux'
import {Model} from 'falcor'
import rootReducer from '<project-path>/reducers'

const falcor = new Model({...})

const store = createStore(
  rootReducer,
  applyMiddleware(falcorMiddleware(falcor)),
)

store.dispatch(falcorActions.get(['some', 'path']))
```
