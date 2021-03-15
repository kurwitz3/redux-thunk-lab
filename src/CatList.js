import React from 'react'


class CatList extends React.Component{

    

    render(){
        const pics = this.props.catPics.map(cat=> {
            return <img key={cat.id} src={cat.url} alt={''}></img>
        })
        return (
            <div>
                {pics}
            </div>
        )
    }
}

export default CatList 