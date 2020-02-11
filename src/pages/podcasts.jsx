import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import podcastData from '../assets/podcastData'

function getListenedPodcasts() {
  const allEpisodes = document.querySelectorAll('.tracklist-row')
  //viewed includes all episodes that have a progress bar
  const viewed = [...allEpisodes].filter(track => track.querySelector('.progress-bar__fg'))
  const numBetweenParens = str => Math.abs(parseFloat(str.substring(str.indexOf('(') + 1,str.indexOf(')'))))
  return viewed.map(x => {
    return {
      title: x.querySelector('.tracklist-name').textContent,
      length: x.querySelector('.tracklist-duration span').textContent,
      percentWatched: 100 - numBetweenParens(x.querySelector('.progress-bar__fg').style.transform),
    }
  })
}

function timeToDecimal(t) {
  var arr = t.split(':');
  var dec = parseInt((arr[1]/6)*10, 10);
  return parseFloat(parseInt(arr[0], 10) + '.' + (dec<10?'0':'') + dec);
}

const allEpisodes = Object.values(podcastData).flat()
const lengths = allEpisodes.map(episode => episode.length)
const totalTime = lengths.reduce((acc, val) => parseFloat(acc + timeToDecimal(val)))/60

const Podcasts = () => {
  return (
    <Layout>
      <SEO title="Podcasts" />
      <h1>Software related podcasts I've listened to</h1>
      <h4>Total Episodes: {lengths.length} - Total time: {parseInt(totalTime)} hours (As of Feb 11, 2020)</h4>
      <br/>
      {Object.keys(podcastData).map(podcastName => {
        const episodes = podcastData[podcastName]
        return (<>
            <h2 key={podcastName}>{podcastName}</h2>
            {episodes.map(episode => {
              const times = episode.length.split(':')
              const timeStr = `(${times[0]}min ${times[1]}sec)`
              return <p key={episode.title}>{episode.title+'      '+timeStr}</p>
            })}
          </>)
        }
      )}
      <br/>
      <br/>
      <br/>
      <p>
        To get this data I signed into Spotify in my browser and wrote this short script to retrieve data from a podcast page
        which I ran in the developer console. Note that you must scroll down to the bottom of the list or not all episodes will be loaded.
        I collected all episodes that have a progress bar so there may be a few I did not actually listen to but I saw significantly
        more episodes that showed a very low percentage that I did listen to than there were episodes I did not listen to that had progress bars.
      </p>
      <p>
        <pre style={{textAlign: 'initial'}}>
          <code>
            {/* {getListenedPodcasts.toString()} */}
          {`
function getListenedPodcasts() {
  const allEpisodes = document.querySelectorAll('.tracklist-row')
  //viewed includes all episodes that have a progress bar
  const viewed = [...allEpisodes].filter(track => track.querySelector('.progress-bar__fg'))
  const numBetweenParens = str => Math.abs(parseFloat(str.substring(str.indexOf('(') + 1,str.indexOf(')'))))
  return viewed.map(x => {
    return {
      title: x.querySelector('.tracklist-name').textContent,
      length: x.querySelector('.tracklist-duration span').textContent,
      percentWatched: 100 - numBetweenParens(x.querySelector('.progress-bar__fg').style.transform),
    }
  })
}
getListenedPodcasts()
            `}
          </code>
        </pre>
      </p>
    </Layout>
  )
}

export default Podcasts