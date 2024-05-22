import CharacterCreateNav from "../Components/PageComponents/characterCreateNav";
import PageControlWrapper from "../Components/PageComponents/pageControlWrapper";
import MainLayout from "../Layouts/mainLayout";
import { usePages } from "../Utils/functions";

export default function createCharacter() {
  const pages = usePages();
  return (
    <MainLayout title="Create">
      <div className="h-[calc(100vh-120px)] w-full overflow-y-scroll overflow-x-hidden flex justify-center relative">
        {pages.map((page, i) => {
          return (
            <PageControlWrapper key={page.name} pageNumber={i}>
              {page.component}
            </PageControlWrapper>
          );
        })}
      </div>
      <CharacterCreateNav />
    </MainLayout>
  );
}
