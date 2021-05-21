export default function userCard(props)
{
    return(
        <div className= 'userCard'>
        <p className= 'userName'>{props.user.name}</p>
        <p>{props.user.age}</p>
        <p>{props.user.gender}</p>
        <p>{props.user.balance}</p>
        <img className="user-picture" src={props.user.picture} />
        </div>
    )
}