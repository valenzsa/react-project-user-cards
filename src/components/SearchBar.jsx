function SearchBar({ allUsers, setUsers, setIsSearchResultEmpty }) {

    function filterCards(e) {
        //console.log(e.target.value);
        const value = e.target.value.toLowerCase();  // Use toLowerCase() in case of uppercase/lowercase mismatches
        //console.log(value);

        const filteredUsers = allUsers.filter(
            user => (`${user.first_name} ${user.last_name}`
                .toLowerCase()
                .includes(value)
            )
        );
        setUsers(filteredUsers);

        // Check if search result is empty or not
        if (filteredUsers.length > 0) {
            setIsSearchResultEmpty(false);
        } else {
            setIsSearchResultEmpty(true);
        }
    }


    return (
        <input className="search-box" placeholder="Search..." onInput={filterCards} />
    )
}

export default SearchBar;