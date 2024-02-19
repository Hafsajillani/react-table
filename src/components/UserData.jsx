const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {id, name, email, phone} = curUser;
                    const {street, city, zipcode} = curUser.address;

                    return (
                        <tr key={id}>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{phone}</td>
                            <td>{street}, {city}, {" "}, {zipcode}</td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default UserData;