import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import cardStats from '../assets/cardStats'

const ClashRoyale = () => {
  const zip = arrs => arrs[0].map((_,c)=>arrs.map(row=>row[c])) //like Python's zip function
  const calculateTable = cardName => {
    const stats = cardStats[cardName]["unit-statistics-table"]
    const headers = <tr> {Object.keys(stats).map(x => (<th style={{textAlign:'center'}}> {x} </th>))} </tr>
    const rows = zip(Object.values(stats)).map(row => <tr> {row.map(val => (<td style={{textAlign:'center'}}> {val} </td>))} </tr>)
    return {cardName, headers, rows}
  }
  const [data, setData] = useState(calculateTable('Archers'))
  return (
    <Layout>
      <SEO title="Clash Royale" />
        <select onChange={x => setData(calculateTable(x.target.value))}>
          {Object.keys(cardStats).sort().map(x => <option value={x}>{x}</option>)}
        </select><br/><br/>
        <h1>{data.cardName.replace('_',' ')}</h1>
        <table style={{width:'50vw', margin:'auto'}}>
          {data.headers}
          {data.rows}
        </table>
    </Layout>
  )
}

export default ClashRoyale