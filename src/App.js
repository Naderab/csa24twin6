import logo from './logo.svg';
import './App.css';
import Test from './test';

import { Update } from './cycledeVie/Update';
import { WithoutConst } from './State/WithoutConst';
import { WithConst } from './State/WithConst';
import Methods from './cycledeVie/Methods';
import Unmouting from './cycledeVie/Unmounting';
import Mouting from './cycledeVie/Mounting';
import Products from './Components/Products';
import FunctionalComponent from './cycledeVie/components/FunctionalComponent';
import useWindowWidth from './Hooks/useWindowWidth';
import useIsOnline from './Hooks/IsOnline';

function App() {
  const {width, height}= useWindowWidth();
  const isOnline= useIsOnline();
  console.log(isOnline)
//   function hoisting(){
//     console.log(a)
//     var a=10;
//     console.log(a)
//   }
//   //hoisting();
//   const num =90;
//   console.log(num)
//   //num = 77;
//   let x =10;
//   x=100;
//   if(x>5){
//     var y =5;
//     const z=20;
//     console.log(y+z)
//     console.log(x+y)
//   }
//   //console.log(z)
//   console.log(y)

//   let f = nom=> console.log(nom)
//   f("test")

//   const t = [1,2,3,4]
//   let newt=t.filter(p=>p<2)
//   console.log(newt)

//   const users = [
//     {name:'mohamed',age:15},
//     {name:'salma',age:20},
//     {name:'kamel',age:16},
//     {name:'mariem',age:50}
//   ]
//   const [{name,age},p2,p3,p4]=users
//   const testAdulte = users.map(person => person.age > 18 ? console.log(`${person.name} est un adulte`):console.log(`${person.name} n'est pas un adulte`))
//   //console.log(p1)
// //const {name,age} = p1
// console.log(name,age)
// const classe = {
//   niveau:"4twin",
//   nbEtudiant:15
// }
// const newClasse = {...classe,email:"4twin@esprit.tn"}
// console.log(newClasse)
// const newUsers = [...users,{name:'spreadTest',age:50}]
// console.log(newUsers)
// const calculateMarks = (students) =>
//  students.map((stu) => {
// //  if (stu.marks < 50) {
// //  stu.marks += 15;
// //  }
// stu.marks < 50 && (stu.marks+=15)
//  return stu;
//  }).filter(stu => stu.marks > 50).reduce((acc, curr) => acc + 
// curr.marks, 0);
// const students = [{ name: 'John', id: 123, marks: 98 },
// { name: 'Baba', id: 101, marks: 23 },
// { name: 'John', id: 200, marks: 45 },
// { name: 'Wick', id: 115, marks: 75 },];
// console.log(calculateMarks(students));
// // Output : 233
// let findLongestWord = (tab) => tab.reduce((a, b) => { return a.length < b.length ? {word:b,length:b.length}: {word:a,length:a.length}} );
// console.log(findLongestWord(['test', 'test1', 'test1234','test12']));
// const countArraysElements = (arraysInput) =>
//  arraysInput.flat().reduce((accumulator, currentValue) => {
//   console.log(accumulator)
//   console.log(currentValue)


//  if (accumulator[currentValue]) {
//   //console.log(accumulator)
//   //console.log(currentValue)
//  accumulator[currentValue] += 1;
//  } else {
// //console.log(currentValue)
//  accumulator[currentValue] = 1;
//  }
//  return accumulator;
//  }, {});
// const input = [
//  ["a", ["b", "c"]],
//  ["c", "d", "f"],
//  ["d", "f", "g"],
// ];
// console.log(input.flat(2));
// //console.log(countArraysElements(input));
// const Tab = [
//   { salle: "21", étage: "2" , bloc :"A"},
//   { salle: "23", étage: "2" , bloc :"B"},
//   { salle: "26", étage: "2" , bloc :"C"},
//  ];
//  console.log(Tab)
//  //Tab.push( { salle: "81", étage: "8" , bloc :"B"});
//  Tab.unshift( { salle: "51", étage: "5" , bloc :"K"});
//  console.log(Tab)
//  let ID = 1;
//  const newData = Tab.map((object, index) => ({ ID: ID++,...object}) )
//  console.log(newData)
//  let name2 = "Jane doe";
//  function getEtudiant(n){
//   return n;
//  }
//  function testClick (){
//   alert("Bonjour 4twin6")
//  }
  return (
    // <Fragement>
    <>
    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={testClick}>
        {name2}
        {classe.niveau} {classe.nbEtudiant}
          Edit <code>4twin6</code> and save to reload.
        </p>
        Bonjour {getEtudiant("test")}

        {
          Tab.map((obj)=>{
            return <div><p style={{color:'red'}}>{obj.bloc}</p><p>{obj.salle}</p><p>{obj.étage}</p></div>
          })
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Test variableprop={name2} objprop={classe} />
      </header>
    </div> */}
    {/* <Product test='hello'/> */}
    {/* <Mouting test="hello"/> */}
    {/* <Unmouting/> */}
    {/* <Update test='hello'/> */}
    {/* <Methods/> */}
    {/* <WithConst/> */}
    {/* <WithoutConst/> */}
    {/* <Products/> */}
    <h1>Online: {""+isOnline+""}</h1>
    <FunctionalComponent title="Functional Component"/><br></br>
    {width}<br></br>
    {height}<br></br>
    
    </>
    // </Fragement>
  );
}

export default App;
