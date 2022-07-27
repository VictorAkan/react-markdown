
const Follower = ({ avatar_url, html_url, login }:{avatar_url:string, html_url:string, login:string}) => {
    return (
        <article className="bg-white drop-shadow-xl pb-8 rounded-lg">
            <div className="flex justify-center">
                <img className="rounded-full w-32 mt-9" src={avatar_url} alt={login} />
            </div>
            <h4 className="capitalize mt-4 mb-4 text-sm tracking-widest font-bold text-slate-500">{login}</h4>
            <a href={html_url} className="text-white bg-sky-500 rounded-xl py-1 px-3 uppercase text-sm tracking-widest">
                view profile
            </a>
        </article>
    )
}

export default Follower