import Card from "./Card";

function App() {
  console.log("hi");

  return (
    <div className="container">
      <Card
        imgLink="https://bst.icons8.com/wp-content/uploads/2024/05/illustration_generator.webp"
        name="Icons8"
        description="It is a cool website"
        buttonText="know more"
      />
      <Card description="Hey there" action={() => console.log("Wow")} />
    </div>
  );
}

export default App;
