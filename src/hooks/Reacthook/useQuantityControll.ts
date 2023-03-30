import {useState} from "react";

export default function useQuantityControll() {

    const [result, setResult] = useState(1)
    function increment() {
        setResult(prevState => prevState + 1)
    }
    function decrement() {
        setResult(prevState => prevState - 1)
    }

    return {
        result,
        increment,
        decrement
    }
}
