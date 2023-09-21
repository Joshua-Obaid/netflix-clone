export default function SelectionMap({ series, films }) {

    const Filter = (contentArr, genre) => {
        // let arr = contentArr.filter((item) => item.genre === genre)
        let arr = []
        let titleArr = []
        contentArr.map((item) => {
            if (item.genre === genre) {
                if (!titleArr.includes(item.title)) {
                    arr.push(item)
                    titleArr.push(item.title)
                }
            }
        })
        return arr

    }

    return {
        series: [
            { title: 'Documentaries', data: Filter(series, 'documentaries') },
            { title: 'Comedies', data: Filter(series, 'comedies') },
            { title: 'Children', data: Filter(series, 'children') },
            { title: 'Feel good', data: Filter(series, 'feel-good') },
        ],
        films: [
            { title: 'Drama good', data: Filter(films, 'drama') },
            { title: 'Thriller', data: Filter(films, 'thriller') },
            { title: 'Children', data: Filter(films, 'children') },
            { title: 'Suspense', data: Filter(films, 'suspense') },
            { title: 'Romance', data: Filter(films, 'romance') }
        ],
    }
}