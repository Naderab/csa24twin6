import logo from './logo.svg';
import './App.css';

function App() {
  function hoisting(){
    console.log(a)
    var a=10;
    console.log(a)
  }
  //hoisting();
  const num =90;
  console.log(num)
  //num = 77;
  let x =10;
  x=100;
  if(x>5){
    var y =5;
    const z=20;
    console.log(y+z)
    console.log(x+y)
  }
  //console.log(z)
  console.log(y)

  let f = nom=> console.log(nom)
  f("test")

  const t = [1,2,3,4]
  let newt=t.filter(p=>p<2)
  console.log(newt)

  const users = [
    {name:'mohamed',age:15},
    {name:'salma',age:20},
    {name:'kamel',age:16},
    {name:'mariem',age:50}
  ]
  const [{name,age},p2,p3,p4]=users
  const testAdulte = users.map(person => person.age > 18 ? console.log(`${person.name} est un adulte`):console.log(`${person.name} n'est pas un adulte`))
  //console.log(p1)
//const {name,age} = p1
console.log(name,age)
const classe = {
  niveau:"4twin",
  nbEtudiant:15
}
const newClasse = {...classe,email:"4twin@esprit.tn"}
console.log(newClasse)
const newUsers = [...users,{name:'spreadTest',age:50}]
console.log(newUsers)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>4twin6</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
