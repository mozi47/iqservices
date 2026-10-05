export default function Cards({items,num}){return <div className="grid">{items.map((x,i)=><div className="card" key={x.title}><h3>{num?`${i+1}. `:""}{x.title}</h3><p>{x.text}</p></div>)}</div>}
