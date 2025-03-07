const Pizza = () =>
	React.createElement("ul", {}, [
		React.createElement("li", {}, "Cheese"),
		React.createElement("li", {}, "Pepperoni"),
		React.createElement("li", {}, "Sausage"),
	]);

const App = () => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, "Padre Gino's"),
		React.createElement(Pizza),
	]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
