// You can use any data fetching library
import fetch from 'node-fetch'

// posts will be populated at build time by getStaticProps()
function Blog({ list }) {
    return (
      <ul>
      {list.rows.map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
    )
  }
  
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries. See the "Technical details" section.
  export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    const res = await fetch('http://127.0.0.1:9999/api/list/1/1')
    let list = await res.json()
    
    console.log('list',list)
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        list: list.list
      },
    }
  }
  
  export default Blog