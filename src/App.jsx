import MovieList from "./compoment/MovieList";
import MovieAdd from "./compoment/MovieAdd";
import MovieCard from "./compoment/MovieCard";
import MovieFilter from "./compoment/MovieFilter" ;
import CustomAppBar from "./compoment/ui/appbar/AppBar";
import "./compoment/css/App.css";
import {useState} from "react";
function App() {

  const [data,setData]=useState([
    {"description":"Will Sharp, un vétéran décoré fait appel à la seule personne indigne de confiance, son frère adoptif Danny pour trouver l’argent afin de couvrir les frais médicaux de sa femme. Ce dernier, un charismatique criminel au long cours, au lieu de lui donner de l’argent, lui propose un coup : le plus grand braquage de banque de l’histoire de Los Angeles : 32 millions de dollars. Will, prêt à tout pour sauver sa femme, accepte. Mais quand leur affaire prend un tour spectaculairement désastreux, les deux frères n’ont pas d’autre choix que de détourner une ambulance avec à son bord un vieux flic mortellement blessé et l’ambulancière Cam Thompson. Pendant la course poursuite infernale qui s’ensuit, Will et Danny vont devoir échapper aux forces de l’ordre surmotivées postées aux 4 coins de la ville, tenter de garder leurs otages en vie et éviter de s’entre tuer tout en exécutant l’évasion la plus spectaculaire que la ville de Los Angeles n’ait jamais vue.","title":"Ambulance","posteUrl":"data:image/jpeg;base64,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","rating":2},
    {"description":"Nathan Drake, voleur astucieux et intrépide, est recruté par le chasseur de trésors chevronné Victor « Sully » Sullivan pour retrouver la fortune de Ferdinand Magellan, disparue il y a 500 ans. Ce qui ressemble d’abord à un simple casse devient finalement une course effrénée autour du globe pour s’emparer du trésor avant l’impitoyable Moncada, qui est persuadé que sa famille est l’héritière légitime de cette fortune. Si Nathan et Sully réussissent à déchiffrer les indices et résoudre l’un des plus anciens mystères du monde, ils pourraient rafler la somme de 5 milliards de dollars et peut-être même retrouver le frère de Nathan, disparu depuis longtemps… mais encore faudrait-il qu’ils apprennent à travailler ensemble.","title":"Uncharted","posteUrl":"https://fr.web.img4.acsta.net/c_310_420/pictures/22/01/18/10/13/5983633.jpg","rating":3},
    {"description":"Loretta Sage, romancière brillante mais solitaire, est connue pour ses livres mêlant romance et aventures dans des décors exotiques. Alan, mannequin, a pour sa part passé la plus grande partie de sa carrière à incarner Dash, le héros à la plastique avantageuse figurant sur les couvertures des livres de Loretta. Alors qu’elle est en pleine promotion de son nouveau roman en compagnie d’Alan, Loretta se retrouve kidnappée par un milliardaire excentrique qui est persuadé qu’elle pourra l’aider à retrouver le trésor d’une cité perdue évoquée dans son dernier ouvrage. Déterminé à prouver qu’il peut être dans la vraie vie à la hauteur du héros qu’il incarne dans les livres, Alan se lance à la rescousse de la romancière. Propulsés dans une grande aventure au cœur d’une jungle hostile, ce duo improbable va devoir faire équipe pour survivre et tenter de mettre la main sur l’ancien trésor avant qu’il ne disparaisse à jamais.","title":"LE secret de la cité perdue","posteUrl":"https://fr.web.img6.acsta.net/c_310_420/pictures/22/02/22/12/00/1445602.jpg","rating":2},
    {"description":"Le professeur Albus Dumbledore (Jude Law) sait que le puissant mage noir Gellert Grindelwald (Mads Mikkelsen) cherche à prendre le contrôle du monde des sorciers. Incapable de l’empêcher d’agir seul, il sollicite le magizoologiste Norbert Dragonneau (Eddie Redmayne) pour qu’il réunisse des sorciers, des sorcières et un boulanger moldu au sein d’une équipe intrépide. Leur mission des plus périlleuses les amènera à affronter des animaux, anciens et nouveaux, et les disciples de plus en plus nombreux de Grindelwald. Pourtant, dès lors que les enjeux sont aussi élevés, Dumbledore pourra-t-il encore rester longtemps dans l’ombre ?","title":"Les secrets de dum","posteUrl":"https://klubcinema.fr/sites/cineklub.fr/files/styles/kinepolis_filter_movie_poster/public/posters/AF3LesSecretsDeDumbledore_FRFO.jpg","rating":5},
    {"description":"varsovie 1983. Le fils d’une militante proche de Solidarność est battu à mort par la police. Mensonges menaces : le régime totalitaire du Général Jaruzelski va tenter par tous les moyens d’empêcher la tenue d’un procès équitable.","title":"Varsove 83, une affaire d' état","posteUrl":"https://klubcinema.fr/sites/cineklub.fr/files/styles/kinepolis_filter_movie_poster/public/posters/Varsovie83_FRFO.jpg","rating":5}
  ])
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  const [posteUrl,setPostUrl]=useState("")
  const [rating,setRating]=useState(0)
  const [filter,setFilter]=useState({})


  const change=(e)=>{

    if(e.target.name=="description"){

      setDescription(e.target.value)

    }else{

      if(e.target.name=="title"){
      
        setTitle(e.target.value)

      }else{
      
        if(e.target.name=="posteUrl"){
        
          setPostUrl(e.target.value)
        }else{

          

          setRating(e.target.value)
        }
      }
    }
       console.log(description,title,posteUrl,rating)
  }

  const add=()=>{

    setData([...data,{"description":description,"title":title,"posteUrl":posteUrl,rating:Number(rating)}])

    console.log(data)
  
  
  }

  const filterFn=()=>{

    setFilter({"title":title,rating:Number(rating)})
    console.log(data)
  
  
  }


 

  
  const parentSend=({description,title,posteUrl,rating,code})=>{

 
    // setData({description,title,posteUrl,rating,code})


  }
  
  return (
    
    <div>

      <div className="AppBar"><CustomAppBar parentSend={parentSend} /></div>
      <div className="AppContent">


      <input type="text" name="description" placeholder="description" onChange={(e)=>{change(e)}}/>

      <input type="text" name="title" placeholder="title" onChange={(e)=>{change(e)}}/>

      <input type="text" name="posteUrl" placeholder="posteUrl" onChange={(e)=>change(e)}/>

      <input type="text" name="rating" placeholder="rating" onChange={(e)=>{change(e)}}/>

      <input type="button" value="ok" onClick={()=>{add()}} />

      <input type="button" value="filter" onClick={()=>{filterFn()}} />
    
        <div className="MovieCard"><MovieCard data={data} /></div>
      
        <div className="MovieList"><MovieList filter={filter} data={data}/></div>
        

  
      </div>

    </div>
  );
}

export default App;
