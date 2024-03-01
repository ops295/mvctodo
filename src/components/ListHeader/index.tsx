import clsx from 'clsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAll } from '../../store/action';
import { RootState } from '../../store/reducers';

const ListHeader = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.present);
  const checked = !(todos.find(t => !t.completed))
  const handleToggle = (event: React.ChangeEvent) => {
    console.log(event)
    dispatch(selectAll(!checked))
  }



  const listItemClassNames = clsx("flex px-2 py-2.5 border-b border-slate-300 items-center justify-between last:border-none hover:bg-gray-50", {
    " text-gray-500 bg-green-100 text-green-500 font-bold hover:bg-green-50": checked
  });

  return (
    <li className={listItemClassNames}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleToggle}
          className='inline-block mr-4 w-5 h-4'
        />
        <span className={"text-base"}>Mark all as {!checked?"complete":"uncompleted"}</span>
      </label>
    </li>
  )
}

export default ListHeader