const React = require('react');
const Layout = require('./Layout');

function Home({ arr }) {
  return (
    <Layout>
      <div>
        {arr.map((el) => (
          <a key={el.id} href={`localhost:3000/${el.id}`}>
            {el.title}
          </a>
        ))}
      </div>
    </Layout>
  );
}

module.exports = Home;
