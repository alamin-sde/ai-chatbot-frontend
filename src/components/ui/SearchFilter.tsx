import { Search, X } from "lucide-react";
import { useState } from "react";

const SearchFilter = () => {
    const [searchQuery, setSearchQuery] = useState<string>("")
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)

    }
    const handleClearSearchQuery = () => {
        setSearchQuery("")
    }
    return (

        <div className="relative">
            <Search
                size={20}
                className="absolute transform  top-1/2 -translate-y-1/2 left-1"
            />

            <input
                type="text"
                value={searchQuery}
                placeholder="Search chats..."
                onChange={(e) => handleSearch(e)}
                className="input-field pl-10 "
            />
            {searchQuery.length > 0 &&
                <button
                    onClick={handleClearSearchQuery}
                >
                    <X
                        size={20}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 "
                    />
                </button>}
        </div>


    )
}
export default SearchFilter;