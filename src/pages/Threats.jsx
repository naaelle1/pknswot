import threats from "../data/threats";

function Threats() {
  return (
    <main>
      <h1>THREATS</h1>

      {threats.map((item) => (
        <section key={item.number}>
          <span>{item.number}</span>

          <h2>{item.title}</h2>

          <p>{item.description}</p>

          <div>
            <h3>{item.past.title}</h3>
            <p>{item.past.text}</p>
          </div>

          <div>
            <h3>{item.present.title}</h3>
            <p>{item.present.text}</p>
          </div>

          <a href={item.source}>
            SOURCE ↗
          </a>
        </section>
      ))}
    </main>
  );
}

export default Threats;