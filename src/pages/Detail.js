import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { ButtonBackToHome } from '../components/ButtonBackToHome'
// import { useParams }from 'react-router-dom'
const API_KEY = 'df3682fb'

export class Detail extends Component {
    state = { movie: {} }

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    _fetchMovie({id}) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                console.log({movie})
                this.setState({movie})
            })
    }

    componentDidMount() {
        console.log('ComponentDidMount()')
        console.log(this.props)
        const {id} = this.props.match.params
        this._fetchMovie({id})
    }

    _goBack() {
        window.history.back()
    }

    render(){ 
        const { Title, Poster, Director, Actors, Metascore, Plot} = this.state.movie
        return(
            <div className='box'>
                <article className='media'>
                    <div className='media-left'>
                        <figure>
                        <img src={Poster} alt={Title} />
                        </figure>
                    </div>
                    <div className='media-content'>
                        <div className='content is-medium'>
                            <h1>{Title}</h1>
                            <strong>Director: {Director}</strong>
                            <h3>Main actors: {Actors}</h3>
                            <span>MetaScore: {Metascore}</span>
                            <p>Description: {Plot}</p>
                        </div>    
                    </div>
                </article>
                <ButtonBackToHome />
            </div>
        )
    }
}