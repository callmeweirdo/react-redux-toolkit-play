import { createSlice } from "@reduxjs/toolkit";
import { employeeService } from "../../services/employeeService";

const initialState = {
  employees: employeeService.getEmployeesData(),
};

const employeeSlice = createSlice({
  name: "employees",
  initialState: initialState,
  reducers: {
    selectedEmployee: (state, action) => {
      let selectEmployee = state.employees.map((employee) => {
        if (employee.id === action.payload) {
          return {
            ...employee,
            isSelected: !employee.isSelected,
          };
        } else {
          return employee;
        }
      });
      state.employees = selectEmployee;
    },
  },
});

export const { selectedEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
