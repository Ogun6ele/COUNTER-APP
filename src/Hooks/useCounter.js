import { useState } from "react";

function useCounter(initialValue){
    const [count, setCount] = useState(0);

    const increment = () => setCount(+count + 1);
    const decrement =() => setCount(count - 1);
    const handleReset = () => setCount(0);
    const setValue = (value) => setCount(value);
    
    return { count, increment, decrement, handleReset, setValue};
}

export default useCounter;
