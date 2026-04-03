import { setData, setError, setLoading } from "../store/slice1";

const fetchData = () => {
    return async (dispatch) => {
        dispatch(setLoading());
        try {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            dispatch(setData(data.products));
        }

        catch (error) {
            dispatch(setError(error));
        }
    }
}
export default fetchData