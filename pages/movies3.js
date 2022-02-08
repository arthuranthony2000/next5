import useSWR from 'swr'

import { useState } from 'react'

export default function Movies3() {

    const [url1, setUrl1] = useState('')
    const [url2, setUrl2] = useState('')
    const [url3, setUrl3] = useState('')

    const result1 = useSWR(url1, theFetcher)
    const result2 = useSWR(url2, theFetcher)
    const result3 = useSWR(url3, theFetcher)


    const onClickHandler1 = (e) => {

        e.preventDefault()

        if (url1 === '') setUrl1('https://www.omdbapi.com/?apikey=6d17a1f&s=bagdad')

        else setUrl1('')
    }

    const onClickHandler2 = (e) => {

        e.preventDefault()

        if (url2 === '') setUrl2('https://www.omdbapi.com/?apikey=6d17a1f&s=naruto')

        else setUrl2('')
    }

    const onClickHandler3 = (e) => {

        e.preventDefault()

        if (url3 === '') setUrl3('https://www.omdbapi.com/?apikey=6d17a1f&s=matrix')

        else setUrl3('')
    }

    return (

        <div>

            <TheLink url={url1} handler={onClickHandler1} />
            <TheLink url={url2} handler={onClickHandler2} />
            <TheLink url={url3} handler={onClickHandler3} />

            <TheMovies data={result1.error ? { error: 'Erro na pesquisa' } : result1.data ? result1.data : { Search: '' }} show={url1 !== ''} />
            <TheMovies data={result2.error ? { error: 'Erro na pesquisa' } : result2.data ? result2.data : { Search: '' }} show={url2 !== ''} />
            <TheMovies data={result3.error ? { error: 'Erro na pesquisa' } : result3.data ? result3.data : { Search: '' }} show={url3 !== ''} />


        </div>
    )
}


export function TheMovies({ data, show }) {

    //////////////////////////////////////////////


    const [urlMovie, setUrlMovie] = useState('')

    const movie = useSWR(urlMovie, theFetcher)

    const showMovie = (imdbID) => {
        setUrlMovie(`https://www.omdbapi.com/?apikey=6d17a1f&i=${imdbID}`)
    }

    //////////////////////////////////////////////


    if (!show) return (<div></div>)

    if (data.error) return (<div>falha na requisição</div>)

    if (data.Search === '') return (<div>carregando...</div>)

    return (

        <div>

            <div style={{margin: 100}}>{movie.data ? <TheMovie data={movie.data} error={movie.error} /> : ''}</div>

            {data.Search.map((m, i) => 
            <div key={i}><div style={{cursor: 'pointer'}} onClick={() => {window.location.href = "/movieclient?id="+m.imdbID}}>{m.Title} --- {m.Year} ---
            </div>
            <button onClick={() => showMovie(m.imdbID)} style={{marginBottom: 50, cursor: 'pointer'}}>MOSTRAR</button>
            </div>
            )}       

        </div>

    )

}

export function TheMovie({ data, error }) {

    if (error) return <div>falha na requisição...</div>

    if (!data) return <div>carregando...</div>

    return (

        <div>

            <div>{data.Title} --- {data.Year} --- <img style={{height: 200, marginLeft: 10}} src={data.Poster} /></div>

        </div>

    )
}

export function TheLink({ url, handler }) {
    
    return (

        <div>

            <a href="/movies3.js" onClick={handler}> {url === '' ? 'Mostrar' : 'Ocultar'} </a>

        </div>

    )
}

async function theFetcher(url) {

    if (url === null || url === '') return { Search: '' }

    const res = await fetch(url);

    const json = await res.json();

    return json;

}