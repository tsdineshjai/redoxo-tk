import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, incrementByAmount } from "./counterSlice";

const Counter = () => {
	const count = useSelector((state) => state.counter.value);

	const dispatch = useDispatch();

	return (
		<>
			<p> The count value is {count}</p>

			<div>
				<button
					aria-label="Increment value"
					onClick={() => dispatch(increment())}
				>
					Increment
				</button>
				<button
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</button>
				<button
					aria-label="Decrement value"
					onClick={() => dispatch(incrementByAmount(3))}
				>
					incrementByAmount
				</button>
			</div>
		</>
	);
};

export default Counter;
