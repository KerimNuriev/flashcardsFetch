const React = require('react');
const Layout = require('./Layout');

function Home({ arr, step }) {
  return (
    <Layout>
      <div>
        {arr.length ? (
          arr.map((el) => (
            <a key={el.id} href={`http://localhost:3000/${el.id}/${step}`}>
              {el.title}
            </a>
          ))
        ) : (
          <h1>No!</h1>
        )}
      </div>
    </Layout>
  );
}

module.exports = Home;
