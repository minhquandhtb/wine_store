import Footer from "components/Footer";
import Header from "components/Header";
import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Alert } from "reactstrap";
import "./App.scss";

const HomePage = React.lazy(() => import("./features/HomePage"));
const Register = React.lazy(() => import("./features/Register/Register"));
const Login = React.lazy(() => import("./features/Login/Login"));
const Address = React.lazy(() => import("./features/Address/Address"));
const Blog = React.lazy(() => import("./features/Blog/Blog"));
const Cart = React.lazy(() => import("./features/Cart/Cart"));
const Introduction = React.lazy(() =>
  import("./features/Introduction/Introduction")
);
const ProductShow = React.lazy(() =>
  import("./features/ProductShow/ProductShow")
);
const ProductDetail = React.lazy(() =>
  import("./features/ProductDetail/ProductDetail")
);
function App() {
  return (
    <div className="App">
      <Alert id="addSuccessfully" color="success">
        Đã thêm thành công
      </Alert>
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/wine_store" component={HomePage} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/address" component={Address} />
            <Route path="/blog" component={Blog} />
            <Route path="/cart" component={Cart} />
            <Route path="/introduction" component={Introduction} />
            <Route path="/wine_store/product-grid" component={ProductShow} />
            <Route path="/product-list" component={ProductShow} />
            <Route path="/product-detail" component={ProductDetail} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
