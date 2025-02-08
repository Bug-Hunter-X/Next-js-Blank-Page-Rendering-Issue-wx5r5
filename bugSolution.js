```javascript
// pages/index.js
export default function Home() {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    // Simulate an async operation that loads content
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate loading data
      setReady(true);
    };

    loadData();
  }, []);

  return (
    <div>
      {ready ? (
        <>
          <h1>Next.js App</h1>
          <p>This is a simple Next.js app.</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
```