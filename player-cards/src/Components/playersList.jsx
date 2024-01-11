import React from 'react';
import PlayerInfo from './player';
import PlayerCard from './players';

const PlayersList = () => {
    return (
        <div style={{ display: 'flex', mt:'1cm', gap:'10px', alignItems:'center', justifyContent:'center'}}>
            {PlayerInfo.map((PlayerInfo, index) => (
                <PlayerCard key={index} {...PlayerInfo} />
            ))}
        </div>
    );
};

export default PlayersList;