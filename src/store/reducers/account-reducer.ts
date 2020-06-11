import { AccountState } from 'src/app/main/main.type';
import { CURRENT_ACCOUNT_DETAIL } from '../actions/account-action';


export const initialState: AccountState = {
    income: 0,
    expenses: 0,
    surplus: 0
};

export function accountReducer(state = initialState, action) {
    switch (action.type) {
      case CURRENT_ACCOUNT_DETAIL:
        return state;
    }
    return state;
  }