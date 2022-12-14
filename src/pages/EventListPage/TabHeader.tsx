import SearchBar from './SearchBar'
import TagBar from '../../components/TagBar'
import Title from './Title'
import DatePicker from './DatePicker'
import TabList from './TabList'
import { useEffect, useReducer, useState } from 'react'

const initialState = {
    tags:[],
    date: null,
    search: '',
  }
  
  type ActionType= "TAGS" | "DATE" | "SEARCH"
  interface StateProps{
    tags: string[],
    date: Date | null,
    search: string,
  }
  export interface ActionProps{
    type: ActionType,
    payload: string | Date | string[],
  }
  
  export interface DispatchProps{
    dispatch: (action: ActionProps) => void,
    callBackSearch?: () => void,
  }
  
  
  const reducer = (state:StateProps, action:ActionProps) => {
    switch (action.type) {
      case 'TAGS':
        return { ...state, tags: action.payload as string[] }
      case 'DATE':
        return { ...state, date: action.payload as Date }
      case 'SEARCH':
        return { ...state, search: action.payload as string }
      default:
        return state
    }
  }

  export default function TabHeader (props): JSX.Element {
    const { callBackSearch } = props
    const [state, dispatch] = useReducer(reducer, initialState)
    
    return (     
         <div className='bg-gradient-to-r from-cyan-100 to-blue-100 w-[100vw]'>
            <Title title='Search your events!' />
            <div className='flex flex-col items-start w-4/5 mx-auto'>
            <div className="flex justify-around w-full p-5 ">
                <SearchBar dispatch={dispatch} callBackSearch={()=>callBackSearch(state)} />
                <DatePicker dispatch={dispatch}/>
            </div>
            <TagBar callback={(value)=>{
                dispatch({type: 'TAGS', payload: value.map((item)=>item.name)})
            }}/>
            </div>
         </div>
    )
  }