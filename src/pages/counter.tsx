import { Button } from "@/components/ui/button";
import { decrement, increment, incrementByAmount } from "@/redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by 5
        </Button>
        <span className="mx-5">{count}</span>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;
