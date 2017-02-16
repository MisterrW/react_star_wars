import React from 'react';
import Film from './Film';
import Querier from '../models/querier';
import {Link} from 'react-router';

class Films extends React.Component {

  constructor(props) {
    super();
    this.querier = new Querier();
    this.state = {films: {}, filmsArr: []};
    this.stateLike = {films: {}, filmsArr: []};
  }

  buildfilms(baseURL){
    for(var i=1; i<8; i++){
      let thisURL = baseURL + "films/" + i;
      this.makeQuery(thisURL, function(response){
        this.stateLike.films[response.title] = response;
        this.stateLike.filmsArr.push(response);
        this.setState(this.stateLike);
      }.bind(this));
    }
  }

  makeQuery(url, callback){
    var maker = this.querier.make.bind(this);
    maker(url, callback.bind(this));
  }

  componentDidMount() {
    document.querySelector(".subHead").innerText = "//films";
    this.buildfilms("http://www.swapi.co/api/");
  }

  render(){
   var filmsElementArr = []
   for(var afilm in this.state.filmsArr){
     let film = this.state.filmsArr[afilm];
     filmsElementArr.push(<Film key={film.title} film={film}></Film>);
   }

   return(
    <div>
  <div className="links">
        <div className="link"><Link to="/films">Films</Link></div>
        <div className="link"><Link to="/planets">Planets</Link></div>
        <div className="link"><Link to="/people">People</Link></div>
        </div>
    <div>
    {filmsElementArr}
    </div>
    </div>
    )
 }
}

export default Films;