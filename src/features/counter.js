import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div className="counter">
			<button
				aria-label="Increment Value"
				onClick={() => dispatch(increment())}
			>
				Increment
			</button>
			<span>{count}</span>
			<button
				aria-label="Decrement Value"
				onClick={() => dispatch(decrement())}
			>
				Decrement
			</button>
		</div>
	);
}
