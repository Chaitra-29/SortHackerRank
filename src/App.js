import React, {useState} from 'react';
import './App.css';
import LeaderBoard from './Component/LeaderBoard';
import { response } from './response';
import 'h8k-components';

const title = "SPA - LeaderBoard";

function App() {
	const [list, setList] = useState(response.list);

	const sortByRank = () => {
	  let newDataList = [];
      Object.assign(newDataList, list);
      newDataList.sort((a, b) => {
        if (parseInt(a.rank) > parseInt(b.rank)) {
          return 1;
        }
        if (parseInt(a.rank) < parseInt(b.rank)) {
          return -1;
        }
        return 0;
      })

      setList(newDataList);
	}

	const sortByName = () => {
		let newDataList = [];
		Object.assign(newDataList, list);
		newDataList.sort((a, b) => {
		  if (a.name > b.name) {
			return 1;
		  }
		  if (a.name < b.name) {
			return -1;
		  }
		  return 0;
		})
  
		setList(newDataList);
	  }
	
	return (
		<div className="App">
			<h8k-navbar header={title}></h8k-navbar>
			<div className="text-center mt-50">
				<div>
					<button data-testid="route-rank" className='outlined' type="button" onClick={()=>sortByRank()}>Rank</button>
					<button data-testid="route-name" className='outlined' type="button" onClick={()=>sortByName()}>Name</button>
					<button data-testid="route-points" className='outlined' type="button" onClick={()=>sortByRank()}>Points</button>
					<button data-testid="route-age" className='outlined' type="button" onClick={()=>sortByRank()}>Age</button>
				</div>
			</div>
			<LeaderBoard dataSet={list}/>
		</div>
	);
}

export default App;
