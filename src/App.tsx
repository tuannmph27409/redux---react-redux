import Counter from "./components/Counter";
import List from "./components/List";

const App = () => {
    return (
        <div>
            <h2 className="text-center text-xl">List Component</h2>
            <List />
            <Counter />
        </div>
    );
};

export default App;

// closure
// currying
