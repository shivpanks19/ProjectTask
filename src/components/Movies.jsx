import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Movies() {
	const [moviesData, setmoviesData] = useState([])
	const [searchItem, setsearchItem] = useState()
	const getMovieData = async() =>{
		const {data} = await axios.get("https://hexanovate-1oc3v5uf6-thephenom1708.vercel.app/api/movies")
		setmoviesData(data)
	}
	const search = ()=>{
		var foundedMovie =  moviesData.filter(function(movie) {
			return movie.title == searchItem;
		  });
		  setmoviesData(foundedMovie)
	}
	useEffect(() => {
	  getMovieData()
	}, [])
  return (
	<div className='container'>
		<div className="row mt-4">
			<div className="col-sm-6 offset-sm-3">
				<div className="d-flex justify-content-around">
				<input type="text" onChange={e=> setsearchItem(e.target.value)} className="form-control mx-4" placeholder='Search Movies' />
				<button className="btn btn-success w-25" onClick={search}>Search</button>
				</div>
				{
					moviesData.map(item => <div className="card mt-2">
						<div className="card-header">{item.title}</div>
					<div className="card-body">
					<img src={item.poster} height={100} width={200} alt="" />
					<h4>Genre : {item.genre}</h4>
					<h5>IMDB Raging : {item.imdbRating}</h5>
					<h6>Released Date : {item.released}</h6>
					</div>
				</div>)
				}
			</div>
		</div>
		
	</div>
  )
}
