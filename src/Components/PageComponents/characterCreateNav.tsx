import { setCurrentPage } from "../../Store/Slices/navigationSlice";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { useNavChecks } from "../../Utils/functions";
import {
  chevronLeft,
  chevronRight,
  doubleChevronLeft,
} from "../../Utils/icons";
import Button from "../button";

export default function CharacterCreateNav() {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.navigation.currentPage);

  const { canGoLeft, canGoRight } = useNavChecks(currentPage);

  const forward = () => {
    if (!canGoRight) return;
    dispatch(setCurrentPage(currentPage + 1));
  };

  const back = () => {
    if (!canGoLeft) return;
    dispatch(setCurrentPage(currentPage - 1));
  };

  const startOver = () => {
    dispatch(setCurrentPage(0));
  };

  return (
    <div className="flex justify-around w-full">
      <div className="flex">
        <Button
          type="button"
          color="secondary"
          onClick={startOver}
          className="mr-2"
          disabled={currentPage === 0}
        >
          <div className="flex space-x-2 items-center">
            <div>{doubleChevronLeft}</div>
          </div>
        </Button>
        <Button
          type="button"
          color="secondary"
          onClick={back}
          disabled={!canGoLeft}
        >
          <div className="flex space-x-2 items-center">
            <div>{chevronLeft}</div>
            <div>Back</div>
          </div>
        </Button>
      </div>
      <Button
        type="button"
        color="secondary"
        onClick={forward}
        disabled={!canGoRight}
      >
        <div className="flex space-x-2 items-center">
          <div>Next</div>
          <div>{chevronRight}</div>
        </div>
      </Button>
    </div>
  );
}
