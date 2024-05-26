import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"

import { store } from "@store/store"
import { TranslateProvider } from "@context/translateContext";
import { Layout } from "@pages/Layout"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <TranslateProvider>
      <Layout />
    </TranslateProvider>
  </Provider>,
)
