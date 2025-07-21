export default function List({items}: {items: string[]}) {
  return (
    <div>
      <h1>List Component</h1>
      <ol style={{fontSize:"1.5rem"}}>
        {(Array.isArray(items) && !!items.length) &&
          items.map((e,i) => (
            <li key={i} >{e}</li>
          ))
        }
      </ol>
    </div>
  );
}