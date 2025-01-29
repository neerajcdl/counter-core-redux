import React from "react";
import { decrement, increment, reset } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const handleDecrement = () => {
        dispatch(decrement());
    };
    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleReset = () => {
        dispatch(reset());
    };

    return (
        <div style={{ width: "100wv", height: "100vh" }}>
            <h1 style={{ color: "red" }}>Counter</h1>
            <p style={{ position: "absolute", bottom: "0px", fontWeight: "bold" }}>
                Core Redux with all separate file
            </p>

            <p style={{ fontSize: "20px", fontWeight: "bold" }}>{count}</p>

            <div style={{ display: "flex", gap: "20px" }}>
                <button
                    onClick={handleDecrement}
                    style={{ fontSize: "20px", fontWeight: "bold", background: "#000000", color: "#ffffff", border: "none", padding: "4px 20px", borderRadius: "4px" }}
                >
                    -
                </button>
                <button
                    onClick={handleIncrement}
                    style={{ fontSize: "20px", fontWeight: "bold", background: "#000000", color: "#ffffff", border: "none", padding: "4px 20px", borderRadius: "4px" }}
                >
                    +
                </button>
                <button
                    onClick={handleReset}
                    style={{ fontSize: "20px", fontWeight: "bold", background: "#000000", color: "#ffffff", border: "none", padding: "4px 20px", borderRadius: "4px" }}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Counter;
