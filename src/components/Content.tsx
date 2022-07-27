import { useEffect, useState } from 'react'
import { useFetch } from '../helpers/useFetch'
import Follower from './Follower'

const Content = () => {
    const { loading, data } = useFetch()
    const [page, setPage] = useState(0)
    const [followers, setFollowers] = useState([])
    useEffect(() => {
        if (loading) return
        setFollowers(data[page])
        console.log(data[page]);
    }, [loading, page])

    const nextPage = () => {
        setPage(oldPage => {
            let nextPage = oldPage + 1
            if (nextPage > data.length - 1) {
                nextPage = 0
            }
            return nextPage
        })
    }
    const prevPage = () => {
        setPage(oldPage => {
            let prevPage = oldPage - 1
            if (prevPage < 0) {
                prevPage = data.length - 1
            }
            return prevPage
        })
    }
    const handlePage = (id: number) => {
        setPage(id)
    }
    return (
        <main>
            <div className="capitalize mt-20">
                <h1 className="text-5xl text-sky-900 font-bold">{loading ? 'loading...' : 'pagination'}</h1>
                <div className="flex justify-center mt-4"><div className="h-1 w-28 bg-sky-600"></div></div>
            </div>
            <section className="followers">
                <div className="flex justify-center">
                    <div className="container p-20 grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 gap-7">
                    {followers.map((follower, index) => {
                        return <Follower key={index} {...follower as any} />
                    })}
                    </div>
                </div>
                {!loading && (
                    <div className="btn-container mb-24">
                        <button className="capitalize mr-4 font-bold tracking-widest" onClick={prevPage}>prev</button>
                        {data.map((item:any, id:number) => {
                            return (
                                <button
                                    key={id}
                                    className={`bg-sky-300 mr-4 hover:bg-sky-400 focus:bg-sky-800 focus:text-white text-sm p-2 rounded-md px-4 ${id === page ? 'bg-sky-800 text-white' : null}`}
                                    onClick={() => handlePage(id)}
                                >
                                    {id + 1}
                                </button>
                            )
                        })}
                        <button className="capitalize ml-4 font-bold tracking-widest" onClick={nextPage}>next</button>
                    </div>
                )}
            </section>
        </main>
    )
}

export default Content