import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
    // const { count } = useSelector((state: any) => { counter: { count: 0} });
    const { count } = useSelector((state: any) => state.counter);
    const dispatch = useDispatch();
    return (
        <div>
            Counter {count}
            <br />
            <button onClick={() => dispatch({ type: "counter/increment" })}>INCREMENT</button>
            <br />
            <button onClick={() => dispatch({ type: "counter/decrement" })}>DECREMENT</button>
            <br />
            <button onClick={() => dispatch({ type: "counter/increase", payload: 11 })}>DECREMENT</button>
        </div>
    );
};

export default Counter;
