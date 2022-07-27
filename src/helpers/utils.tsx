export const paginate = (followers:any) => {
    const itemPerPage = 10
    const numberOfPages = Math.ceil(followers.length / itemPerPage)

    const newFollowers = Array.from({ length:numberOfPages }, (_,index:number) => {
        const start = index * itemPerPage
        return followers.slice(start, start + itemPerPage)
    })
    return newFollowers
}
export default paginate