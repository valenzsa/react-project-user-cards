function SearchBar({ allUsers, setUsers }) {

    function filterCards(e) {
        console.log(e.target.value);
        const value = e.target.value.toLowerCase();  // Use toLowerCase() in case of uppercase/lowercase mismatches
        console.log(value);

        const filteredUsers = allUsers.filter(
            user => (`${user.first_name} ${user.last_name}`
                .toLowerCase()
                .includes(value)
            )
        );
        console.log(filteredUsers);
        setUsers(filteredUsers);
    }


    return (
        <input className="search-box" placeholder="Search..." onInput={filterCards} />
    )
}

export default SearchBar;