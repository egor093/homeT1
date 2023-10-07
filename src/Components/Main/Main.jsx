import './Main.css'
import img4 from "../../img/green-puf.jpg"
import img5 from "../../img/yellow-puf.jpg"
import img6 from "../../img/blue-puf.jpg"
import img7 from "../../img/grey-puf.jpg"
import img8 from "../../img/teal-puf.jpg"
import img9 from "../../img/red-puf.jpg"

export default function Main() {
  return (
      <main>

<div className="center">

    <div className="box1">
        <img className="puf1" src={img4} alt=""/>
        <h2 className="text1">Зеленый</h2>
        <p className="text1">320p</p>
        <button>Подробнее</button>
    </div>
    <div className="box2">
        <img className="puf1" src={img5} alt=""/>
        <h2 className="text1">Желтый</h2>
        <p className="text1">130p</p>
        <button>Подробнее</button>
    </div>
    <div className="box3">
        <img className="puf1" src={img6} alt=""/>
        <h2 className="text1">Синий</h2>
        <p className="text1">310p</p>
        <button>Подробнее</button>
    </div>

</div>

    <div className="center1">

    <div className="box4">
        <img className="puf1" src={img7} alt=""/>
        <h2 className="text1">Серый</h2>
        <p className="text1">310p</p>
        <button>Подробнее</button>
    </div>
    <div className="box5">
        <img className="puf1" src={img8} alt=""/>
        <h2 className="text1">Вроде зеленый</h2>
        <p className="text1">310p</p>
        <button>Подробнее</button>
    </div>
    <div className="box6">
        <img className="puf1" src={img9} alt=""/>
        <h2 className="text1">Красный</h2>
        <p className="text1">310p</p>
        <button>Подробнее</button>
    </div>

    </div>
    <button className="b1">Больше вариантов</button> 
</main>
  )
}
