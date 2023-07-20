import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
    // const { count } = useSelector((state: any) => { counter: { count: 0} });
    const { count } = useSelector((state: any) => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="">
            <br />
            Counter : {count}
            <hr />
            <div className="py-2">
                <button className="border border-white-500 bg-red-500 " onClick={() => dispatch({ type: "counter/increment" })}>INCREMENT</button>
                <br />
                <button className="border border-white-500 bg-blue-500 " onClick={() => dispatch({ type: "counter/decrement" })}>DECREMENT</button>
                <br />
                <button className="border border-white-500 bg-green-500 " onClick={() => dispatch({ type: "counter/increase", payload: 11 })}>DECREMENT</button>
            </div>
        </div>
    );
};

export default Counter;
