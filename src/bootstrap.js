import React from "react";
import ReactDom from "react-dom";

import { Provider } from "react-redux";
import store from "./tools/store";

import App from "./components/app";

const entryDiv = document.getElementById("root");

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	entryDiv
);
