import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import cardStats from '../assets/cardStats'

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

const ClashRoyale = () => {
  const zip = arrs => arrs[0].map((_,c)=>arrs.map(row=>row[c])) //like Python's zip function
  const tableStyle = {textAlign:'center', border:'black 1px solid', paddingRight:'10px', paddingLeft:'10px'}
  const createTableElem = stats => {
    const headers = <tr> {Object.keys(stats).map(x => (<th style={tableStyle}> {x} </th>))} </tr>
    const vals = Object.values(stats)
    const listOfLists = (Array.isArray(vals[0])) ? zip(vals) : [vals]
    const rows = listOfLists.map(row => <tr> {row.map(val => (<td style={tableStyle}> {val} </td>))} </tr>)
    return <div style={{overflowX:'auto'}}><table style={{width:'50vw', margin:'auto', border:'black 1px solid'}}>{headers}{rows}</table></div>
  }
  const updateTables = cardName => {
    const card = cardStats[cardName.replace(' ','_')]
    if (!card) return state
    const statsTable = createTableElem(card["unit-statistics-table"])
    const attrTable = createTableElem(card["unit-attributes-table"])
    return {cardName, statsTable, attrTable}
  }
  const [state, setState] = useState(updateTables('Archers'))
  return (
    <Layout>
      <SEO title="Clash Royale" />
      <input type="text" name="selectedcard" list="cardnames"
        onClick={e => e.target.value = ''}
        onChange={e => setState(updateTables(e.target.value))}/>
      <br/><br/>
      <datalist id="cardnames">
        {Object.keys(cardStats).sort().map(x => <option value={x.replace('_',' ')}/>)}
      </datalist><br/>
      <h1 style={{textAlign:'center'}}>{state.cardName}</h1>
      {state.attrTable}<br/><br/><br/>
      {state.statsTable}<br/><br/><br/>
    </Layout>
  )
}

export default ClashRoyale