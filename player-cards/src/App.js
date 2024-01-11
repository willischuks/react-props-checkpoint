
import './App.css';
import PlayersList from './Components/playersList';
import TextLinkExample  from './Components/navBar';

function App() {
  return (
    <div className="App">
      < TextLinkExample />
      <h1>Top Black Female Basket-Ballers</h1>
      <p>In the realm of women's basketball, a constellation of extraordinary talent has illuminated the courts, showcasing unparalleled skills, resilience, and passion for the game. 
        These top female basketball players have not only rewritten records but also shattered gender barriers, leaving an indelible mark on the sport. 
        From the graceful ball-handling of Angel Reese to the dominating presence of Arike Ogunbowale, and the sheer athleticism of players like Victoria Macaulay and A'ja Wilson, these elite athletes have not only raised the bar for women's basketball but have become powerful role models, inspiring the next generation of aspiring players. 
        As pioneers and ambassadors for the sport, these top female basketballers continue to redefine what is possible, leaving an enduring legacy that transcends the boundaries of the court.</p>
      < PlayersList />
    </div>
  );
}

export default App;
