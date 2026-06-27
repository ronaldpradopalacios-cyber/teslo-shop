import { ProductGrid, Title } from "@/components";
import { notFound } from "next/navigation";
import { initialData } from "@/seed/seed";
import { Category } from "@/interfaces/product.interface";

interface Props {
  params: Promise<{
    id: Category;
  }>;
}

const seedProducts = initialData.products;

export default async function ({ params }: Props) {
  const { id } = await params;
  const categoriesIds: Category[] = ["men", "women", "kid"];

  if (!categoriesIds.includes(id)) {
    notFound();
  }
  // if (id === "kids") {
  //   notFound();
  // }

  const products = seedProducts.filter((product) => product.gender === id);

  const labels: Record<Category, string> = {
    men: "hombres",
    women: "mujeres",
    kid: "niños",
    unisex: "todos",
  };

  const title = `Artículos para ${labels[id]}`;
  const subtitle = `Productos para ${labels[id]}`;

  return (
    <>
      <Title title={title} subtitle={subtitle} className="mb-2" />

      <ProductGrid products={products} />
    </>
  );
}
