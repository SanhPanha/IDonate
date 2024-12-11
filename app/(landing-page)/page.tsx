import categories  from "@/data/category.json";
import CategoryCardComponent from "@/components/category/CategoryCardComponent";
import { CategoryType } from "@/difinitions/types/components-type/CategoryType";

export default function Homepage() {

  const typedCategory: CategoryType[] = categories
  

  return (
    <section  className="flex flex-col gap-4 items-center">
      <p>This is Homepage</p>

      <section lang="km" className="flex items-center gap-9">
        <CategoryCardComponent categories={typedCategory} />
        
      </section>

    
    </section>
  );
}
