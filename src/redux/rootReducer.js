import counterSlice from "./features/counterSlice";
import employeeSlice from "./features/employeesSlice";
import UsersSlice from "./features/UsersSlice";

const rootReducer = {
  counter: counterSlice,
  employees: employeeSlice,
  users: UsersSlice,
};

export default rootReducer;
