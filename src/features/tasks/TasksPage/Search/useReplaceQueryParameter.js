import { useHistory, useLocation } from "react-router-dom";

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);

    return ({ key, value }) => {
        if (!value) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };
};