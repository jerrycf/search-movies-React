import React from 'react'

// export default (props) => (
//     <h1 class="title">{props.title}</h1>
// )
// Al usar este componente de esta forma se estaria usando: 
// <Title title= 'Search Movies' />
// Para un mejor uso del componente utilizamos la prop especial children 
// para usarlo de la siguiente manera
// <Title> Search Movies </Title>

export const Title = ({children}) => (
    <h1 className="title">{children}</h1>
)

// Exportamos como constante para una importanción más extricta 
// import cualquierNombre from './components/Title'
// import {Title} from './components/Title'
// Recordando igual que class en js está protegida, por lo que 
// al usar react se recomienda utilizar className