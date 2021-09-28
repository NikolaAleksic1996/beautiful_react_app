const User = ({user}) =>
{
    return (
        <div>
            {user.map((u) => (
                <div key={u.id}>
                    <h2>{u.name}</h2>
                    <h2>{u.surname}</h2>
                    <h2>{u.email}</h2>
                </div>
            ))}
        </div>
    );
}

export default User