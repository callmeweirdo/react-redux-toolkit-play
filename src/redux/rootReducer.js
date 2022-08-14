import counterSlice from "./features/counterSlice";
import employeeSlice from "./features/employeesSlice";

const rootReducer = {
  counter: counterSlice,
  employees: employeeSlice,
};

export default rootReducer;
