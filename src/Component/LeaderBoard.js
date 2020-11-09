import React, { useEffect } from 'react';

function LeaderBoard({dataSet}) {
	return (
		<div className="text-center mt-50">
			<div className="card mx-auto pb-20 mb-30" style={{ width: '50%' }}>
				<table className="mt-50" data-testid="app-table">
					<thead>
						<tr>
							<th>Rank</th>
							<th>Name</th>
							<th className="numeric">Points</th>
							<th className="numeric">Age</th>
						</tr>
					</thead>
					<tbody data-testid="app-tbody">
					{
						dataSet.map((item,index) =>{	
							const { rank, name, points, age} = item;
							return (
								<tr key={rank}>
								<td data-testid={`rank-${index}`}>{rank}</td>
								<td data-testid={`name-${index}`}>{name}</td>
								<td data-testid={`points-${index}`} className="numeric">{points}</td>
								<td data-testid={`age-${index}`} className="numeric">{age}</td>
							</tr>)
						})
					}
						
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default LeaderBoard;
