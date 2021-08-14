import searchQueryParamName from "../searchQueryParamName";
import { Input } from "../styled";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";

const Search = () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <Input
            onChange={onInputChange}
            value={query || ""}
            placeholder="Filtruj zadania"
            search
        />
    );
};

export default Search;