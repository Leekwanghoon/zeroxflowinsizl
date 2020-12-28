import { 
    LOGIN_USER, 
    REGISTER_USER, 
    SEARCH_DATA, 
    CATEGORY_DATA, 
    SEARCHBYCATEGORY_DATA, 
    DEADLINEINFO_DATA,
    MYINFO_DATA,
    DASHBOARD_DATA
} from "../_actions/types";
import { 
    login, 
    SearchData, 
    register, 
    categoryData,
    SearchByCategory,
    deadlineInfo,
    MyInfo,
    DashBoardData
} from "../_actions/user_action";

type CounterAction =   
    | ReturnType<typeof login>
    | ReturnType<typeof register>
    | ReturnType<typeof categoryData>
    | ReturnType<typeof SearchData>
    | ReturnType<typeof SearchByCategory>
    | ReturnType<typeof deadlineInfo>
    | ReturnType<typeof MyInfo>
    | ReturnType<typeof DashBoardData>;
    

const initailState: any = {}

export default function( 
    state: any = initailState, 
    action: CounterAction) {
        switch(action.type) {
            case LOGIN_USER:
                return { ...state, login: action.payload}
            case REGISTER_USER:
                return {...state, data: action.payload}
            case SEARCH_DATA:
                return {...state, data: action.payload}
            case CATEGORY_DATA:
                return {...state, category: action.payload}
            case SEARCHBYCATEGORY_DATA:
                return {...state, searchCategory: action.payload}
            case DEADLINEINFO_DATA:
                return {...state, deadlineInfo: action.payload}
            case MYINFO_DATA:
                return {...state, myInfo: action.payload}
            case DASHBOARD_DATA:
                return {...state, myList: action.payload}
            default:
                return state;
            }
        }
            
            // case DASHBOARD_DATA:
            //     return {...state, data: action.payload}