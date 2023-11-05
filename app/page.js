import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

async function getRecipes() {
  const data = await fetch("http://localhost:4000/recipes");
  return data.json();
}

export default async function Home() {
  const recipes = await getRecipes();
  return (
    <main className="grid grid-cols-3 gap-8">
      {recipes.map((recipe) => {
        <Card key={recipe.id}>
          <CardHeader>
            <div>
              <CardTitle>{recipe.title}</CardTitle>
              <CardDescription>{recipe.time} mins to cook. </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p>{recipe.description}</p>
          </CardContent>
          <CardFooter>
            <button>View Recipe</button>
            {recipe.vegan && <p>Vegan</p>}
          </CardFooter>
        </Card>;
      })}
    </main>
  );
}
