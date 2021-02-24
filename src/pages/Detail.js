import React, {Component} from 'react'
import PropTypes from 'prop-types'

const API_KEY = 'df3682fb'

export class Detail extends Component {

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = {
        movie: { }
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
            <div>
                <button onClick={this._goBack}> HOME!</button>
                <h1>{Title}</h1>
                <img src={Poster} alt={Title} />
                <strong>{Director}</strong>
                <h3>{Actors}</h3>
                <h4>{Metascore}</h4>
                <p>{Plot}</p>
            </div>
        )
    }
}