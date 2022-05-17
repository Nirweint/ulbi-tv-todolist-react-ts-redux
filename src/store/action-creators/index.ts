import * as UserActionCreators from './user'
import * as TodoActionCreators from './todo'
import * as AppActionCreators from './app'


export default {
    ...TodoActionCreators,
    ...UserActionCreators,
    ...AppActionCreators
}