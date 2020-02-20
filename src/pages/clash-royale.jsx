import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import cardStats from '../assets/cardStats'
// import Select from 'react-select'
import Multiselect from '../components/multiselect'

/*
"Minions": {
    "unit-attributes-table": {
      "Cost": "3",
      "Hit Speed": "1 sec",
      "Speed": "Fast (90)",
      "Deploy Time": "1 sec",
      "Range": "Melee: Long",
      "Target": "Air & Ground",
      "Count": "x3",
      "Transport": "Air",
      "Type": "Troop",
      "Rarity": "Common"
    },
    "unit-statistics-table": {
      "Level": ["1","2","3","4","5","6","7","8","9","10","11","12","13"],
      "Hitpoints": ["90","99","108","119","131","144","158","173","190","209","230","252","278"],
      "Damage": ["40","44","48","53","58","64","70","77","84","93","102","112","123"],
      "Damage per second": ["40","44","48","53","58","64","70","77","84","93","102","112","123"]
    }
  },
*/

const zip = arrs => arrs[0].map((_,c)=>arrs.map(row=>row[c])) //like Python's zip function
const rowStyle = {textAlign:'center', border:'lightgray 1px solid', paddingRight:'10px', paddingLeft:'10px'}

const createTableElem = stats => {
  const vals = Object.values(stats)
  const listOfLists = (Array.isArray(vals[0])) ? zip(vals) : [vals] //if single length then make it a list so zip doesn't break
  return (
    <div style={{overflowX:'auto'}}>
      <table style={{width:'50vw', margin:'auto', border:'lightgray 1px solid'}}>
        <thead>
          <tr>{Object.keys(stats).map((x,i) => (<th style={rowStyle} key={x+' '+i}>{x}</th>))}</tr>
        </thead>
        <tbody>
          {listOfLists.map((row, index) => (
          <tr key={row+' '+index}>
            {row.map((val,i) => <td style={rowStyle} key={row+' '+val+' '+i}>{val}</td>)}
          </tr>))}
        </tbody>
      </table>
    </div>
  )
}

const options = Object.keys(cardStats).sort().map(name => ({value:name, label:name.replace('_',' ')}))

const ClashRoyale = () => {
  const updateTables = cardName => {
    const card = cardStats[cardName.replace(' ','_')]
    if (!card) return state
    const statsTable = createTableElem(card["unit-statistics-table"])
    const attrTable = createTableElem(card["unit-attributes-table"])
    return {cardName, statsTable, attrTable}
  }
  
  
  // const [cardNames, setCardNames] = useState(updateTables(['Archers']))
  // const [tables, setTables] = useState(updateTables([]))
  const [state, setState] = useState(updateTables('Archers'))

  const changeTable = x => {
    const val = x && x.length ? x[0].label : ''
    setState(updateTables(val))
  }

  return (
    <Layout>
      <SEO title="Clash Royale" />
      {/* <input type="text" name="selectedcard" list="cardnames"
        onClick={e => e.target.value = ''}
        onChange={e => setState(updateTables(e.target.value))}/>
      <br/><br/>
      <datalist id="cardnames">
        {Object.keys(cardStats).sort().map(x => <option value={x.replace('_',' ')} key={x}/>)}
      </datalist><br/> */}
      {/* <Multiselect options={options} onChange={(x, y) => console.log('changed',x,y)}  /> */}
      <Multiselect options={options} onChange={changeTable}  />
      <br/><br/>  
      <h1 style={{textAlign:'center'}}>{state.cardName}</h1>
      {state.attrTable}<br/><br/><br/>
      {state.statsTable}<br/><br/><br/>
    </Layout>
  )
  // return (
  //   <Layout>
  //     <SEO title="Clash Royale" />
  //     <input type="text" name="selectedcard" list="cardnames"
  //       onClick={e => e.target.value = ''}
  //       onChange={e => setState(updateTables(e.target.value))}/>
  //     <br/><br/>
  //     <datalist id="cardnames">
  //       {Object.keys(cardStats).sort().map(x => <option value={x.replace('_',' ')} key={x}/>)}
  //     </datalist><br/>
  //     <h1 style={{textAlign:'center'}}>{state.cardName}</h1>
  //     {state.attrTable}<br/><br/><br/>
  //     {state.statsTable}<br/><br/><br/>
  //   </Layout>
  // )
}

export default ClashRoyale