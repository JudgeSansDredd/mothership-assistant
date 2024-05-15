import React from "react";
import { setCurrentPage } from "../../Store/Slices/newCharacterSlice";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import {
  chevronLeft,
  chevronRight,
  doubleChevronLeft,
} from "../../Utils/icons";
import Button from "../button";

export default function CharacterCreateNav() {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.newCharacter.currentPage);

  const forward = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  const back = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };

  const startOver = () => {
    dispatch(setCurrentPage(0));
  };

  return (
    <div className="flex justify-around w-full">
      <div className="flex">
        <Button type="button" onClick={startOver} className="mr-2">
          <div className="flex space-x-2 items-center">
            <div>{doubleChevronLeft}</div>
          </div>
        </Button>
        <Button type="button" onClick={back}>
          <div className="flex space-x-2 items-center">
            <div>{chevronLeft}</div>
            <div>Back</div>
          </div>
        </Button>
      </div>
      <Button type="button" onClick={forward}>
        <div className="flex space-x-2 items-center">
          <div>Next</div>
          <div>{chevronRight}</div>
        </div>
      </Button>
    </div>
  );
}
